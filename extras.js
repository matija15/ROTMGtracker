// =====================================================================
// EXTRAS — shared by all three pages (ST Sets, Shiny, White Bags)
// Loaded after the page's own script, so the cards already exist.
//  - Set counters on every card ("3/4") + gold glow when a set is done
//  - "sets complete" count under the progress bar
//  - Backup: save progress to a file / load it back
//  - Share: copies a short progress line for Discord
//  - Keeps the hover tooltip on screen + hides it on phones when scrolling
//  - Remembers your filters and search between visits
// =====================================================================
(function () {
    const PAGE_NAME = (document.querySelector('.nav-btn.active') || {}).textContent || 'Tracker';
    const PAGE_KEY = 'ui:' + location.pathname.replace(/\.html$/, '').replace(/\/$/, '/index');

    // ---------- 1. SET COUNTERS ----------
    function setupCards() {
        document.querySelectorAll('.section-card').forEach(card => {
            const header = card.querySelector('.section-header');
            if (header && !header.querySelector('.set-count')) {
                const count = document.createElement('span');
                count.className = 'set-count';
                header.appendChild(count);
            }
        });
    }

    function refreshCounts() {
        let completeSets = 0;
        const cards = document.querySelectorAll('.section-card');
        cards.forEach(card => {
            const sprites = card.querySelectorAll('.item-sprite');
            const got = card.querySelectorAll('.item-sprite.obtained').length;
            const done = sprites.length > 0 && got === sprites.length;
            if (done) completeSets++;
            card.classList.toggle('set-complete', done);
            const count = card.querySelector('.set-count');
            if (count) count.textContent = done ? '✓ ' + got + '/' + sprites.length : got + '/' + sprites.length;
        });

        const label = document.getElementById('progress-label');
        if (label) {
            let extra = document.getElementById('sets-complete-label');
            if (!extra) {
                extra = document.createElement('div');
                extra.id = 'sets-complete-label';
                label.insertAdjacentElement('afterend', extra);
            }
            const word = PAGE_NAME.trim() === 'ST Sets' ? 'sets' : 'dungeons';
            extra.textContent = completeSets + ' / ' + cards.length + ' ' + word + ' complete';
        }
    }

    // Item clicks are handled by the page script first, then this runs
    document.addEventListener('click', e => {
        if (e.target.classList && e.target.classList.contains('item-sprite')) refreshCounts();
    });

    // ---------- 2. TOOLBAR BUTTONS ----------
    function addToolbar() {
        const bar = document.querySelector('.top-controls');
        const resetBtn = document.getElementById('reset-btn');
        if (!bar || !resetBtn) return;

        const make = (id, text, title) => {
            const b = document.createElement('button');
            b.id = id; b.className = 'tool-btn'; b.type = 'button';
            b.textContent = text; b.title = title;
            return b;
        };
        const shareBtn = make('share-btn', 'Share', 'Make a picture of your collection for Discord');
        const exportBtn = make('export-btn', 'Save backup', 'Download your progress (all pages) as a file');
        const importBtn = make('import-btn', 'Load backup', 'Load progress from a backup file');
        const fileInput = document.createElement('input');
        fileInput.type = 'file'; fileInput.accept = '.json,application/json'; fileInput.hidden = true;

        resetBtn.insertAdjacentElement('beforebegin', shareBtn);
        resetBtn.insertAdjacentElement('beforebegin', exportBtn);
        resetBtn.insertAdjacentElement('beforebegin', importBtn);
        bar.appendChild(fileInput);

        shareBtn.addEventListener('click', shareProgress);
        exportBtn.addEventListener('click', exportProgress);
        importBtn.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', () => {
            if (fileInput.files[0]) importProgress(fileInput.files[0]);
            fileInput.value = '';
        });
    }

    function toast(msg) {
        let t = document.getElementById('toast');
        if (!t) {
            t = document.createElement('div');
            t.id = 'toast';
            document.body.appendChild(t);
        }
        t.textContent = msg;
        t.classList.add('show');
        clearTimeout(t._timer);
        t._timer = setTimeout(() => t.classList.remove('show'), 2500);
    }

    // ---------- SHARE: picture of everything you've collected ----------
    function collectShareData() {
        const sections = [];
        document.querySelectorAll('.section-card').forEach(card => {
            const got = [...card.querySelectorAll('.item-sprite.obtained')];
            if (!got.length) return;
            const header = card.querySelector('.section-header');
            const title = header ? header.childNodes[0].textContent.trim() : '';
            const boss = card.querySelector('.boss-container img');
            const total = card.querySelectorAll('.item-sprite').length;
            sections.push({ title, boss, items: got, total, done: got.length === total });
        });
        return sections;
    }

    function buildShareImage() {
        const sections = collectShareData();
        if (!sections.length) return null;

        const all = document.querySelectorAll('.item-sprite').length;
        const got = document.querySelectorAll('.item-sprite.obtained').length;
        const pct = all ? Math.round(got / all * 100) : 0;
        const doneCount = sections.filter(s => s.done).length;
        const cardCount = document.querySelectorAll('.section-card').length;
        const page = PAGE_NAME.trim();

        // Layout: cards packed into columns (shortest column first)
        const COLS = sections.length > 8 ? 3 : sections.length > 3 ? 2 : 1;
        const PAD = 24, GAP = 14, COLW = 430;
        const ICON = 40, SPRITE = 34, SGAP = 6, BOSS = 48, HEAD = 30;
        const W = PAD * 2 + COLS * COLW + (COLS - 1) * GAP;
        const TOP = 118;
        const perRow = Math.floor((COLW - 24 - BOSS - 12 + SGAP) / (SPRITE + SGAP));
        const colY = new Array(COLS).fill(TOP);
        const placed = sections.map(sec => {
            const rows = Math.ceil(sec.items.length / perRow);
            const h = HEAD + Math.max(BOSS, rows * (SPRITE + SGAP) - SGAP) + 14;
            const c = colY.indexOf(Math.min(...colY));
            const box = { x: PAD + c * (COLW + GAP), y: colY[c], w: COLW, h, sec };
            colY[c] += h + GAP;
            return box;
        });
        const H = Math.max(...colY) + 40;

        const scale = 2; // crisp on Discord
        const cv = document.createElement('canvas');
        cv.width = W * scale; cv.height = H * scale;
        const g = cv.getContext('2d');
        g.scale(scale, scale);
        g.imageSmoothingEnabled = false;

        // background + title
        g.fillStyle = '#121212'; g.fillRect(0, 0, W, H);
        g.fillStyle = '#c8a951'; g.font = 'bold 26px sans-serif';
        g.fillText('My RotMG ' + page + ' collection', PAD, 46);
        g.fillStyle = '#dddddd'; g.font = '16px sans-serif';
        const word = page === 'ST Sets' ? 'sets' : 'dungeons';
        g.fillText(got + ' / ' + all + ' items (' + pct + '%)   ·   ' + doneCount + ' / ' + cardCount + ' ' + word + ' complete', PAD, 74);
        // progress bar
        g.fillStyle = '#2a2a2a'; roundRect(g, PAD, 88, W - PAD * 2, 10, 5); g.fill();
        g.fillStyle = '#c8a951'; roundRect(g, PAD, 88, Math.max(10, (W - PAD * 2) * got / Math.max(all, 1)), 10, 5); g.fill();

        placed.forEach(({ x, y, w, h, sec }) => {
            g.fillStyle = '#1e1e2e'; roundRect(g, x, y, w, h, 8); g.fill();
            if (sec.done) { g.strokeStyle = '#c8a951'; g.lineWidth = 2; roundRect(g, x + 1, y + 1, w - 2, h - 2, 8); g.stroke(); }
            g.fillStyle = '#ffffff'; g.font = 'bold 13px sans-serif';
            g.fillText(fitText(g, sec.title.toUpperCase(), w - 90), x + 12, y + 20);
            g.fillStyle = sec.done ? '#c8a951' : '#888888'; g.font = (sec.done ? 'bold ' : '') + '12px sans-serif';
            const cnt = (sec.done ? '✓ ' : '') + sec.items.length + '/' + sec.total;
            g.fillText(cnt, x + w - 12 - g.measureText(cnt).width, y + 20);
            const bodyY = y + HEAD;
            if (sec.boss && sec.boss.complete && sec.boss.naturalWidth) drawFit(g, sec.boss, x + 12, bodyY, BOSS);
            sec.items.forEach((img, i) => {
                const ix = x + 12 + BOSS + 12 + (i % perRow) * (SPRITE + SGAP);
                const iy = bodyY + Math.floor(i / perRow) * (SPRITE + SGAP);
                if (img.complete && img.naturalWidth) drawFit(g, img, ix, iy, SPRITE);
            });
        });

        g.fillStyle = '#666666'; g.font = '13px sans-serif';
        const foot = 'rotmgtracker.com';
        g.fillText(foot, W - PAD - g.measureText(foot).width, H - 16);
        return cv;
    }

    function roundRect(g, x, y, w, h, r) {
        g.beginPath();
        g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
        g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
    }

    function drawFit(g, img, x, y, size) {
        const s = size / Math.max(img.naturalWidth, img.naturalHeight);
        const w = img.naturalWidth * s, h = img.naturalHeight * s;
        try { g.drawImage(img, x + (size - w) / 2, y + (size - h) / 2, w, h); } catch (e) { /* skip broken picture */ }
    }

    function fitText(g, text, maxW) {
        if (g.measureText(text).width <= maxW) return text;
        while (text.length > 3 && g.measureText(text + '…').width > maxW) text = text.slice(0, -1);
        return text + '…';
    }

    function shareProgress() {
        const cv = buildShareImage();
        if (!cv) { toast("Tick some items first, then share!"); return; }

        const old = document.getElementById('share-modal');
        if (old) old.remove();
        const modal = document.createElement('div');
        modal.id = 'share-modal';
        modal.innerHTML =
            '<div class="share-box">' +
            '<div class="share-title">Share your collection</div>' +
            '<div class="share-preview"></div>' +
            '<div class="share-actions">' +
            '<button type="button" class="tool-btn" data-act="copy">Copy image</button>' +
            '<button type="button" class="tool-btn" data-act="download">Download</button>' +
            '<button type="button" class="tool-btn" data-act="close">Close</button>' +
            '</div>' +
            '<div class="share-hint">Copy it, then press Ctrl+V in Discord to paste the picture.</div>' +
            '</div>';
        const preview = document.createElement('img');
        preview.src = cv.toDataURL('image/png');
        preview.alt = 'Your collection';
        modal.querySelector('.share-preview').appendChild(preview);
        document.body.appendChild(modal);

        const close = () => modal.remove();
        modal.addEventListener('click', e => {
            if (e.target === modal) return close();
            const act = e.target.getAttribute && e.target.getAttribute('data-act');
            if (act === 'close') close();
            if (act === 'download') {
                const a = document.createElement('a');
                a.href = preview.src;
                a.download = 'rotmg-' + PAGE_SLUG + '-collection.png';
                document.body.appendChild(a); a.click(); a.remove();
                countEvent('share-downloaded', false);
            }
            if (act === 'copy') {
                const blob = new Promise(res => cv.toBlob(res, 'image/png'));
                if (navigator.clipboard && window.ClipboardItem) {
                    navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
                        .then(() => { toast('Copied! Paste it in Discord with Ctrl+V'); countEvent('share-copied', false); },
                              () => toast("Couldn't copy here, use Download instead"));
                } else {
                    toast("Your browser can't copy pictures, use Download instead");
                }
            }
        });
        document.addEventListener('keydown', function esc(e) {
            if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
        });
    }

    // Item IDs are saved as "true"/"false"; "ui:" keys are filter settings
    function isProgressKey(key) {
        return !key.startsWith('ui:');
    }

    function exportProgress() {
        const progress = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (isProgressKey(key) && localStorage.getItem(key) === 'true') progress[key] = true;
        }
        const backup = {
            site: 'rotmgtracker.com',
            version: 1,
            saved: new Date().toISOString(),
            progress: progress
        };
        const blob = new Blob([JSON.stringify(backup, null, 1)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'rotmgtracker-backup-' + new Date().toISOString().slice(0, 10) + '.json';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 1000);
        toast('Backup saved (' + Object.keys(progress).length + ' items)');
    }

    function importProgress(file) {
        const reader = new FileReader();
        reader.onload = () => {
            let backup;
            try { backup = JSON.parse(reader.result); } catch (e) { backup = null; }
            if (!backup || typeof backup.progress !== 'object') {
                alert("That file isn't a RotMG Tracker backup.");
                return;
            }
            const count = Object.keys(backup.progress).length;
            if (!confirm('Load this backup with ' + count + ' items?\nYour current progress on ALL pages will be replaced.')) return;

            const toRemove = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (isProgressKey(key)) toRemove.push(key);
            }
            toRemove.forEach(k => localStorage.removeItem(k));
            Object.keys(backup.progress).forEach(k => {
                if (backup.progress[k] === true) localStorage.setItem(k, 'true');
            });
            location.reload();
        };
        reader.readAsText(file);
    }

    // ---------- 3. TOOLTIP FIXES ----------
    const tooltip = document.getElementById('tooltip');
    if (tooltip) {
        // Runs after the page's own mousemove, so we just nudge it back on screen
        document.addEventListener('mousemove', () => {
            if (tooltip.style.display !== 'block') return;
            const r = tooltip.getBoundingClientRect();
            const left = parseFloat(tooltip.style.left) || 0;
            const top = parseFloat(tooltip.style.top) || 0;
            if (r.right > window.innerWidth - 8) tooltip.style.left = Math.max(8, left - r.width - 30) + 'px';
            if (r.bottom > window.innerHeight - 8) tooltip.style.top = Math.max(8, top - r.height - 30) + 'px';
        });
        // Phones have no "mouse leave", so hide it when scrolling or tapping elsewhere
        const hide = () => { tooltip.style.display = 'none'; };
        window.addEventListener('scroll', hide, { passive: true });
        document.addEventListener('touchstart', e => {
            if (!e.target.closest('.item-sprite, .boss-container')) hide();
        }, { passive: true });
    }

    // ---------- 4. REMEMBER FILTERS ----------
    function rememberFilters() {
        let saved = {};
        try { saved = JSON.parse(localStorage.getItem(PAGE_KEY) || '{}'); } catch (e) { saved = {}; }

        const fields = ['search-bar', 'type-filter', 'difficulty-filter', 'missing-filter']
            .map(id => document.getElementById(id)).filter(Boolean);
        const classTrigger = document.getElementById('class-menu-trigger');

        const save = () => {
            const state = {};
            fields.forEach(f => { state[f.id] = f.type === 'checkbox' ? f.checked : f.value; });
            if (classTrigger) state.cls = classTrigger.getAttribute('data-selected-value') || 'all';
            try { localStorage.setItem(PAGE_KEY, JSON.stringify(state)); } catch (e) { /* storage full or blocked */ }
        };

        let changed = false;
        fields.forEach(f => {
            if (f.id in saved) {
                if (f.type === 'checkbox') f.checked = !!saved[f.id];
                else f.value = saved[f.id];
                changed = true;
            }
            f.addEventListener(f.type === 'text' ? 'input' : 'change', save);
        });

        if (classTrigger) {
            if (saved.cls && saved.cls !== 'all') {
                const option = document.querySelector('.custom-option-item[data-value="' + saved.cls + '"]');
                if (option) option.click(); // reuses the page's own class picker code
            }
            document.querySelectorAll('.custom-option-item').forEach(o => o.addEventListener('click', save));
        }

        if (changed && typeof executeGlobalFilters === 'function') executeGlobalFilters();
    }

    // ---------- 5. VISITOR COUNTER (GoatCounter, no cookies) ----------
    // Your GoatCounter code. If you picked a different one at signup, change it here.
    const GOATCOUNTER_CODE = 'rotmgtracker';
    const PAGE_SLUG = PAGE_NAME.trim().toLowerCase().replace(/\s+/g, '-'); // st-sets / shiny / white-bags

    function loadCounter() {
        // Open rotmgtracker.com/?notrack once on your own devices so you don't count yourself
        // (rotmgtracker.com/?track turns it back on)
        const params = new URLSearchParams(location.search);
        if (params.has('notrack')) { localStorage.setItem('ui:skip-count', 'true'); toast('Your visits are no longer counted on this device'); }
        if (params.has('track')) { localStorage.removeItem('ui:skip-count'); toast('Your visits are counted again'); }
        if (localStorage.getItem('ui:skip-count') === 'true') return;
        if (location.hostname !== 'rotmgtracker.com' && location.hostname !== 'www.rotmgtracker.com') return; // don't count local testing
        const s = document.createElement('script');
        s.async = true;
        s.src = 'https://gc.zgo.at/count.js';
        s.dataset.goatcounter = 'https://' + GOATCOUNTER_CODE + '.goatcounter.com/count';
        document.head.appendChild(s);
    }

    // Sends an "event" so the dashboard shows what people actually do
    const sentThisVisit = {};
    function countEvent(name, oncePerVisit) {
        if (localStorage.getItem('ui:skip-count') === 'true') return;
        if (oncePerVisit && sentThisVisit[name]) return;
        sentThisVisit[name] = true;
        const send = () => {
            if (window.goatcounter && window.goatcounter.count) {
                window.goatcounter.count({ path: name, title: name, event: true });
                return true;
            }
            return false;
        };
        if (!send()) setTimeout(send, 3000); // script may still be loading
    }

    // "Someone ticked at least one item on this page" — once per visit
    document.addEventListener('click', e => {
        if (e.target.classList && e.target.classList.contains('item-sprite') && e.target.classList.contains('obtained')) {
            countEvent('ticked-item-' + PAGE_SLUG, true);
        }
        if (e.target.id === 'share-btn') countEvent('share-clicked', false);
        if (e.target.id === 'export-btn') countEvent('backup-saved', false);
    });

    // Once per day: does this visitor already have progress saved? (= returning user)
    function countReturning() {
        let has = false;
        for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (isProgressKey(k) && localStorage.getItem(k) === 'true') { has = true; break; }
        }
        const today = new Date().toISOString().slice(0, 10);
        if (has && localStorage.getItem('ui:last-active') !== today) {
            try { localStorage.setItem('ui:last-active', today); } catch (e) { /* ignore */ }
            countEvent('active-tracker-user', true);
        }
    }

    // ---------- START ----------
    function start() {
        setupCards();
        refreshCounts();
        addToolbar();
        rememberFilters();
        loadCounter();
        countReturning();
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
    else start();
})();
