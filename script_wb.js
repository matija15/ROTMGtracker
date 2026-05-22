// --- COMPLETE WHITE BAG TRACKER ENGINE ---

const data = [
    {
        dungeon: "Pirate Cave",
        bossImg: "rotmg sheet/dung/pirc.png",
        graves: 1,
        items: [
            { id: "corsair-ring", name: "Corsair Ring", img: "rotmg sheet/wh/cori.png", difficulty: "easy", type: "ring" }
        ]
    },
    {
        dungeon: "Forest Maze",
        bossImg: "rotmg sheet/dung/form.png",
        graves: 1,
        items: [
            { id: "bramble-bow", name: "Bramble Bow", img: "rotmg sheet/wh/brbo.png", difficulty: "easy", type: "weapon" },
            { id: "cocoon-quiver", name: "Cocoon Quiver", img: "rotmg sheet/wh/coqu.png", difficulty: "easy", type: "ability" }
        ]
    },
    {
        dungeon: "Spider Den",
        bossImg: "rotmg sheet/dung/spid.png",
        graves: 1.5,
        items: [
            { id: "poison-fang-dagger", name: "Poison Fang Dagger", img: "rotmg sheet/wh/pofd.png", difficulty: "easy", type: "weapon" },
            { id: "spider-shuriken", name: "Spider Shuriken", img: "rotmg sheet/wh/spsh.png", difficulty: "easy", type: "ability" },
            { id: "spiders-eye-ring", name: "Spider's Eye Ring", img: "rotmg sheet/wh/sper.png", difficulty: "easy", type: "ring" }
        ]
    },
    {
        dungeon: "Forbidden Jungle",
        bossImg: "rotmg sheet/dung/forj.png",
        graves: 1.5,
        items: [
            { id: "crystal-serpent-staff", name: "Staff of the Crystal Serpent", img: "rotmg sheet/wh/sotcs.png", difficulty: "easy", type: "weapon" },
            { id: "cracked-crystal-skull", name: "Cracked Crystal Skull", img: "rotmg sheet/wh/crcs.png", difficulty: "easy", type: "ability" },
            { id: "tlatoani-robe", name: "Robe of the Tlatoani", img: "rotmg sheet/wh/rott.png", difficulty: "easy", type: "armor" },
            { id: "crystal-bone-ring", name: "Crystal Bone Ring", img: "rotmg sheet/wh/crbr.png", difficulty: "easy", type: "ring" }
        ]
    },
    {
        dungeon: "The Hive",
        bossImg: "rotmg sheet/dung/hive.png",
        graves: 2,
        items: [
            { id: "orb-of-sweet-demise", name: "Orb of Sweet Demise", img: "rotmg sheet/wh/oosd.png", difficulty: "easy", type: "ability" },
            { id: "honey-scepter", name: "Honey Scepter", img: "rotmg sheet/wh/hosc.png", difficulty: "easy", type: "ability" }
        ]
    },
    {
        dungeon: "Snake Pit",
        bossImg: "rotmg sheet/dung/snake.gif",
        graves: 2.5,
        items: [
            { id: "wand-of-the-bulwark", name: "Wand of the Bulwark", img: "rotmg sheet/wh/wotb.png", difficulty: "medium", type: "weapon" },
            { id: "snake-charmer-pungi", name: "Snake Charmer Pungi", img: "rotmg sheet/wh/sncp.png", difficulty: "medium", type: "ability" },
            { id: "snakeskin-armor", name: "Snakeskin Armor", img: "rotmg sheet/wh/snar.png", difficulty: "easy", type: "armor" },
            { id: "snake-eye-ring", name: "Snake Eye Ring", img: "rotmg sheet/wh/sner.png", difficulty: "easy", type: "ring" }
        ]
    },
    {
        dungeon: "Sprite World",
        bossImg: "rotmg sheet/dung/sprit.gif",
        graves: 2.5,
        items: [
            { id: "sprite-wand", name: "Sprite Wand", img: "rotmg sheet/wh/spwa.png", difficulty: "medium", type: "weapon" },
            { id: "staff-of-extreme-prejudice", name: "Staff of Extreme Prejudice", img: "rotmg sheet/wh/soep.png", difficulty: "medium", type: "weapon" },
            { id: "cloak-of-the-planewalker", name: "Cloak of the Planewalker", img: "rotmg sheet/wh/cotp.png", difficulty: "medium", type: "ability" },
            { id: "mace-of-the-celestial-forest", name: "Mace of the Celestial Forest", img: "rotmg sheet/wh/motcf.png", difficulty: "medium", type: "ability" }
        ]
    },
    {
        dungeon: "Cave of a Thousand Treasures",
        bossImg: "rotmg sheet/dung/coat.png",
        graves: 2.5,
        items: [
            { id: "jewel-eye-katana", name: "Jewel Eye Katana", img: "rotmg sheet/wh/jeek.png", difficulty: "medium", type: "weapon" }
        ]
    },
    {
        dungeon: "Ancient Ruins",
        bossImg: "rotmg sheet/dung/ancr.png",
        graves: 3,
        items: [
            { id: "arcane-rapier", name: "Arcane Rapier", img: "rotmg sheet/wh/arra.png", difficulty: "medium", type: "weapon" },
            { id: "amber-encrusted-helmet", name: "Amber Encrusted Helmet", img: "rotmg sheet/wh/ameh.png", difficulty: "medium", type: "ability" },
            { id: "sandstone-seal", name: "Sandstone Seal", img: "rotmg sheet/wh/sase.png", difficulty: "medium", type: "ability" }
        ]
    },
    {
        dungeon: "Magic Woods",
        bossImg: "rotmg sheet/dung/magw.png",
        graves: 3,
        items: [
            { id: "spirit-staff", name: "Spirit Staff", img: "rotmg sheet/wh/spst.png", difficulty: "medium", type: "weapon" },
            { id: "enchantment-orb", name: "Enchantment Orb", img: "rotmg sheet/wh/enor.png", difficulty: "medium", type: "ability" },
            { id: "shield-of-flowing-clarity", name: "Shield of Flowing Clarity", img: "rotmg sheet/wh/sofc.png", difficulty: "medium", type: "ability" },
            { id: "woodland-robe", name: "Woodland Robe", img: "rotmg sheet/wh/woro.png", difficulty: "medium", type: "armor" },
            { id: "fairy-ring", name: "Fairy Ring", img: "rotmg sheet/wh/fari.png", difficulty: "medium", type: "ring" }
        ]
    },
    {
        dungeon: "Candyland Hunting Grounds",
        bossImg: "rotmg sheet/dung/cahug.png",
        graves: 3.5,
        items: [
            { id: "candy-coated-armor", name: "Candy-Coated Armor", img: "rotmg sheet/wh/caca.png", difficulty: "medium", type: "armor" },
            { id: "bubblegum-bucket", name: "Bubblegum Bucket", img: "rotmg sheet/wh/bubu.png", difficulty: "medium", type: "ability" },
            { id: "candy-ring", name: "Candy Ring", img: "rotmg sheet/wh/canri.png", difficulty: "medium", type: "ring" }
        ]
    },
    {
        dungeon: "Undead Lair",
        bossImg: "rotmg sheet/dung/undl.gif",
        graves: 3.5,
        items: [
            { id: "doom-bow", name: "Doom Bow", img: "rotmg sheet/wh/dobo.png", difficulty: "medium", type: "weapon" },
            { id: "spectral-sword", name: "Spectral Sword", img: "rotmg sheet/wh/spsw.png", difficulty: "medium", type: "weapon" },
            { id: "wandering-souls-spell", name: "Wandering Souls Spell", img: "rotmg sheet/wh/wass.png", difficulty: "medium", type: "ability" },
            { id: "ring-of-skeletal-specters", name: "Ring of Skeletal Specters", img: "rotmg sheet/wh/ross.png", difficulty: "medium", type: "ring" }
        ]
    },
    {
        dungeon: "Puppet Master's Theatre",
        bossImg: "rotmg sheet/dung/pumat.png",
        graves: 4,
        items: [
            { id: "marionette-ravager", name: "Marionette Ravager", img: "rotmg sheet/wh/mara.png", difficulty: "medium", type: "weapon" },
            { id: "prism-of-dancing-swords", name: "Prism of Dancing Swords", img: "rotmg sheet/wh/pods.png", difficulty: "medium", type: "ability" },
            { id: "harlequin-armor", name: "Harlequin Armor", img: "rotmg sheet/wh/haar.png", difficulty: "medium", type: "armor" }
        ]
    },
    {
        dungeon: "Toxic Sewers",
        bossImg: "rotmg sheet/dung/toxs.png",
        graves: 4,
        items: [
            { id: "void-blade", name: "Void Blade", img: "rotmg sheet/wh/vobl.png", difficulty: "medium", type: "weapon" },
            { id: "murky-toxin", name: "Murky Toxin", img: "rotmg sheet/wh/muto.png", difficulty: "medium", type: "ability" }
        ]
    },
    {
        dungeon: "Cursed Library",
        bossImg: "rotmg sheet/dung/curl.gif",
        graves: 4,
        items: [
            { id: "ronins-wakizashi", name: "Ronin's Wakizashi", img: "rotmg sheet/wh/ronin.png", difficulty: "medium", type: "ability" },
            { id: "wand-of-hidden-knowledge", name: "Wand of Hidden Knowledge", img: "rotmg sheet/wh/wohk.png", difficulty: "medium", type: "weapon" },
            { id: "necronomicon", name: "Necronomicon", img: "rotmg sheet/wh/necr.png", difficulty: "medium", type: "ability" },
            { id: "scholars-seal", name: "Scholar's Seal", img: "rotmg sheet/wh/scse.png", difficulty: "medium", type: "ability" },
            { id: "corruption-cutter", name: "Corruption Cutter", img: "rotmg sheet/wh/cocu.png", difficulty: "medium", type: "weapon" }
        ]
    },
    {
        dungeon: "Mad Lab",
        bossImg: "rotmg sheet/dung/mala.gif",
        graves: 4,
        items: [
            { id: "conducting-wand", name: "Conducting Wand", img: "rotmg sheet/wh/cowa.png", difficulty: "medium", type: "weapon" },
            { id: "scepter-of-fulmination", name: "Scepter of Fulmination", img: "rotmg sheet/wh/scof.png", difficulty: "medium", type: "ability" },
            { id: "robe-of-the-mad-scientist", name: "Robe of the Mad Scientist", img: "rotmg sheet/wh/rotms.png", difficulty: "medium", type: "armor" },
            { id: "experimental-ring", name: "Experimental Ring", img: "rotmg sheet/wh/exri.png", difficulty: "medium", type: "ring" }
        ]
    },
    {
        dungeon: "Abyss of Demons",
        bossImg: "rotmg sheet/dung/abyss.png",
        graves: 4,
        items: [
            { id: "demon-blade", name: "Demon Blade", img: "rotmg sheet/wh/debl.png", difficulty: "medium", type: "weapon" },
            { id: "volcanic-sheath", name: "Volcanic Sheath", img: "rotmg sheet/wh/vosh.png", difficulty: "medium", type: "ability" },
            { id: "berserkers-breastplate", name: "Berserker's Breastplate", img: "rotmg sheet/wh/bebr.png", difficulty: "medium", type: "armor" }
        ]
    },
    {
        dungeon: "Manor of the Immortals",
        bossImg: "rotmg sheet/dung/moti.png",
        graves: 4,
        items: [
            { id: "bone-dagger", name: "Bone Dagger", img: "rotmg sheet/wh/boda.png", difficulty: "medium", type: "weapon" },
            { id: "kyuuketsuki-hitogoroshi", name: "Kyuuketsuki Hitogoroshi", img: "rotmg sheet/wh/kyhi.png", difficulty: "medium", type: "weapon" },
            { id: "st-abrahams-wand", name: "St. Abraham's Wand", img: "rotmg sheet/wh/staw.png", difficulty: "medium", type: "weapon" },
            { id: "tome-of-purification", name: "Tome of Purification", img: "rotmg sheet/wh/toop.png", difficulty: "medium", type: "ability" },
            { id: "chasuble-of-holy-light", name: "Chasuble of Holy Light", img: "rotmg sheet/wh/cohl.png", difficulty: "medium", type: "armor" },
            { id: "ring-of-divine-faith", name: "Ring of Divine Faith", img: "rotmg sheet/wh/rodf.png", difficulty: "medium", type: "ring" }
        ]
    },
    {
        dungeon: "Haunted Cemetery",
        bossImg: "rotmg sheet/dung/hace.gif",
        graves: 4.5,
        items: [
            { id: "souls-guidance", name: "Soul's Guidance", img: "rotmg sheet/wh/sogu.png", difficulty: "medium", type: "weapon" },
            { id: "plague-poison", name: "Plague Poison", img: "rotmg sheet/wh/plpo.png", difficulty: "medium", type: "ability" },
            { id: "resurrected-warriors-armor", name: "Resurrected Warrior's Armor", img: "rotmg sheet/wh/rewa.png", difficulty: "medium", type: "armor" },
            { id: "amulet-of-dispersion", name: "Amulet of Dispersion", img: "rotmg sheet/wh/amod.png", difficulty: "medium", type: "ring" }
        ]
    },
    {
        dungeon: "Infernal Abyss of Demons",
        bossImg: "rotmg sheet/dung/iaod.gif",
        graves: 6,
        items: [
            { id: "adamantine-helm", name: "Adamantine Helm", img: "rotmg sheet/wh/adhe.png", difficulty: "hard", type: "ability" },
            { id: "sword-of-illumination", name: "Sword of Illumination", img: "rotmg sheet/wh/swoi.png", difficulty: "hard", type: "weapon" }
        ]
    },
    {
        dungeon: "Heroic Undead Lair",
        bossImg: "rotmg sheet/dung/heul.gif",
        graves: 5,
        items: [
            { id: "spirit-bane", name: "Spirit's Bane", img: "rotmg sheet/wh/spba.png", difficulty: "hard", type: "ability" },
            { id: "bow-of-the-morning-star", name: "Bow of the Morning Star", img: "rotmg sheet/wh/botms.png", difficulty: "hard", type: "weapon" }
        ]
    },
    {
        dungeon: "Davy Jones' Locker",
        bossImg: "rotmg sheet/dung/davy.gif",
        graves: 5,
        items: [
            { id: "spirit-dagger", name: "Spirit Dagger", img: "rotmg sheet/wh/spda.png", difficulty: "medium", type: "weapon" },
            { id: "ghostly-prism", name: "Ghostly Prism", img: "rotmg sheet/wh/ghpr.png", difficulty: "medium", type: "ability" },
            { id: "quartermaster-scabbard", name: "Quartermaster Scabbard", img: "rotmg sheet/wh/qusc.png", difficulty: "medium", type: "ability" },
            { id: "spectral-cloth-armor", name: "Spectral Cloth Armor", img: "rotmg sheet/wh/spca.png", difficulty: "medium", type: "armor" },
            { id: "captains-ring", name: "Captain's Ring", img: "rotmg sheet/wh/cari.png", difficulty: "medium", type: "ring" }
        ]
    },
    {
        dungeon: "Ocean Trench",
        bossImg: "rotmg sheet/dung/ocet.png",
        graves: 5,
        items: [
            { id: "coral-bow", name: "Coral Bow", img: "rotmg sheet/wh/cobo.png", difficulty: "medium", type: "weapon" },
            { id: "coral-venom-trap", name: "Coral Venom Trap", img: "rotmg sheet/wh/covt.png", difficulty: "medium", type: "ability" },
            { id: "coral-silk-armor", name: "Coral Silk Armor", img: "rotmg sheet/wh/cosa.png", difficulty: "medium", type: "armor" },
            { id: "sharktooth-sigil", name: "Sharktooth Sigil", img: "rotmg sheet/wh/shsi.png", difficulty: "medium", type: "ability" },
            { id: "coral-ring", name: "Coral Ring", img: "rotmg sheet/wh/coral.png", difficulty: "medium", type: "ring" }
        ]
    },
    {
        dungeon: "The Crawling Depths",
        bossImg: "rotmg sheet/dung/craw.gif",
        graves: 5.5,
        items: [
            { id: "spider-silk-bow", name: "Spider Silk Bow", img: "rotmg sheet/wh/spsb.png", difficulty: "medium", type: "weapon" },
            { id: "doku-no-ken", name: "Doku No Ken", img: "rotmg sheet/wh/donk.png", difficulty: "medium", type: "weapon" },
            { id: "mace-of-the-depths", name: "Mace of the Depths", img: "rotmg sheet/wh/motd.png", difficulty: "medium", type: "ability" },
            { id: "silken-sigil", name: "Silken Sigil", img: "rotmg sheet/wh/sisi.png", difficulty: "medium", type: "ability" }
        ]
    },
    {
        dungeon: "Woodland Labyrinth",
        bossImg: "rotmg sheet/dung/wood.gif",
        graves: 5.5,
        items: [
            { id: "leaf-bow", name: "Leaf Bow", img: "rotmg sheet/wh/lebo.png", difficulty: "medium", type: "weapon" },
            { id: "elder-heartwood-staff", name: "Elder Heartwood Staff", img: "rotmg sheet/wh/elhs.png", difficulty: "medium", type: "weapon" },
            { id: "wakizashi-of-eastern-winds", name: "Wakizashi of Eastern Winds", img: "rotmg sheet/wh/woew.png", difficulty: "medium", type: "ability" },
            { id: "labyrinth-dwellers-sheath", name: "Labyrinth Dweller's Sheath", img: "rotmg sheet/wh/lads.png", difficulty: "medium", type: "ability" }
        ]
    },
    {
        dungeon: "Deadwater Docks",
        bossImg: "rotmg sheet/dung/dedo.gif",
        graves: 5.5,
        items: [
            { id: "pirate-kings-cutlass", name: "Pirate King's Cutlass", img: "rotmg sheet/wh/pikc.png", difficulty: "medium", type: "weapon" },
            { id: "wavecrest-concertina", name: "Wavecrest Concertina", img: "rotmg sheet/wh/waco.png", difficulty: "medium", type: "ability" }
        ]
    },
    {
        dungeon: "Puppet Master's Encore",
        bossImg: "rotmg sheet/dung/pume.png",
        graves: 5.5,
        items: [
            { id: "thousand-shot", name: "Thousand Shot", img: "rotmg sheet/wh/thsh.png", difficulty: "medium", type: "weapon" },
            { id: "prism-of-dire-instability", name: "Prism of Dire Instability", img: "rotmg sheet/wh/podi.png", difficulty: "medium", type: "ability" }
        ]
    },
    {
        dungeon: "Cnidarian Reef",
        bossImg: "rotmg sheet/dung/cnid.png",
        graves: 5.5,
        items: [
            { id: "bottled-medusozoan", name: "Bottled Medusozoan", img: "rotmg sheet/wh/bome.png", difficulty: "medium", type: "ability" },
            { id: "cnidaria-rod", name: "Cnidaria Rod", img: "rotmg sheet/wh/cnro.png", difficulty: "medium", type: "ability" }
        ]
    },
    {
        dungeon: "Parasite Chambers",
        bossImg: "rotmg sheet/dung/pach.gif",
        graves: 5.5,
        items: [
            { id: "recurring-terror-spell", name: "Recurring Terror Spell", img: "rotmg sheet/wh/rets.png", difficulty: "medium", type: "ability" },
            { id: "scepter-of-devastation", name: "Scepter of Devastation", img: "rotmg sheet/wh/scod.png", difficulty: "medium", type: "ability" },
            { id: "maw-of-malignance", name: "Maw of Malignance", img: "rotmg sheet/wh/maom.png", difficulty: "medium", type: "ability" },
            { id: "tome-of-pain", name: "Tome of Pain", img: "rotmg sheet/wh/toop2.png", difficulty: "medium", type: "ability" }
        ]
    },
    {
        dungeon: "The Tavern",
        bossImg: "rotmg sheet/dung/thta.png",
        graves: 5.5,
        items: [
            { id: "the-right-hook", name: "The Right Hook", img: "rotmg sheet/wh/thrh.png", difficulty: "medium", type: "weapon" },
            { id: "tipsy-topper", name: "Tipsy Topper", img: "rotmg sheet/wh/tito.png", difficulty: "medium", type: "ability" },
            { id: "double-vision-darts", name: "Double Vision Darts", img: "rotmg sheet/wh/dovd.png", difficulty: "medium", type: "ability" },
            { id: "cask-corslet", name: "Cask Corslet", img: "rotmg sheet/wh/caco.png", difficulty: "medium", type: "armor" },
            { id: "brewers-bangle", name: "Brewer's Bangle", img: "rotmg sheet/wh/brba.png", difficulty: "medium", type: "ring" }
        ]
    },
    {
        dungeon: "Sulfurous Wetlands",
        bossImg: "rotmg sheet/dung/suwe.png",
        graves: 6,
        items: [
            { id: "bogwood-crook", name: "Bogwood Crook", img: "rotmg sheet/wh/bocr.png", difficulty: "medium", type: "weapon" },
            { id: "brambletooth-tachi", name: "Brambletooth Tachi", img: "rotmg sheet/wh/brta.png", difficulty: "medium", type: "weapon" },
            { id: "sulfuric-stone", name: "Sulfuric Stone", img: "rotmg sheet/wh/sust.png", difficulty: "medium", type: "ability" },
            { id: "warped-mantle", name: "Warped Mantle", img: "rotmg sheet/wh/wama.png", difficulty: "medium", type: "armor" },
            { id: "thistleleaf-necklace", name: "Thistleleaf Necklace", img: "rotmg sheet/wh/thne.png", difficulty: "medium", type: "ring" }
        ]
    },
    {
        dungeon: "Mountain Temple",
        bossImg: "rotmg sheet/dung/mote.png",
        graves: 6,
        items: [
            { id: "wand-of-the-fallen", name: "Wand of the Fallen", img: "rotmg sheet/wh/wotf.png", difficulty: "medium", type: "weapon" },
            { id: "orb-of-aether", name: "Orb of Aether", img: "rotmg sheet/wh/oroa.png", difficulty: "medium", type: "ability" },
            { id: "jade-storm", name: "Jade Storm", img: "rotmg sheet/wh/jast.png", difficulty: "medium", type: "ability" },
            { id: "kaiken", name: "Kaiken", img: "rotmg sheet/wh/kaik.png", difficulty: "medium", type: "ability" }
        ]
    },
    {
        dungeon: "Lair of Draconis",
        bossImg: "rotmg sheet/dung/laod.png",
        graves: 6,
        items: [
            { id: "leaf-dragon-hide-armor", name: "Leaf Dragon Hide Armor", img: "rotmg sheet/wh/ldha.png", difficulty: "medium", type: "armor" },
            { id: "water-dragon-silk-robe", name: "Water Dragon Silk Robe", img: "rotmg sheet/wh/wdsr.png", difficulty: "medium", type: "armor" },
            { id: "fire-dragon-battle-armor", name: "Fire Dragon Battle Armor", img: "rotmg sheet/wh/fdba.png", difficulty: "medium", type: "armor" },
            { id: "midnight-star", name: "Midnight Star", img: "rotmg sheet/wh/mist.png", difficulty: "medium", type: "ability" },
            { id: "vision-of-draconis", name: "Vision of Draconis", img: "rotmg sheet/wh/viod.png", difficulty: "medium", type: "ability" },
            { id: "draconic-insignia", name: "Draconic Insignia", img: "rotmg sheet/wh/drin.png", difficulty: "medium", type: "ability" },
            { id: "celestial-blade", name: "Celestial Blade", img: "rotmg sheet/wh/cebl.png", difficulty: "medium", type: "weapon" }
        ]
    },
    {
        dungeon: "Tomb of the Ancients",
        bossImg: "rotmg sheet/dung/tota.png",
        graves: 6,
        items: [
            { id: "ring-of-the-pyramid", name: "Ring of the Pyramid", img: "rotmg sheet/wh/rotp.png", difficulty: "medium", type: "ring" },
            { id: "tome-of-holy-protection", name: "Tome of Holy Protection", img: "rotmg sheet/wh/tohp.png", difficulty: "medium", type: "ability" },
            { id: "ring-of-the-sphinx", name: "Ring of the Sphinx", img: "rotmg sheet/wh/rots.png", difficulty: "medium", type: "ring" },
            { id: "pharaohs-requiem", name: "Pharaoh's Requiem", img: "rotmg sheet/wh/phre.png", difficulty: "medium", type: "ability" },
            { id: "ring-of-the-nile", name: "Ring of the Nile", img: "rotmg sheet/wh/rotn.png", difficulty: "medium", type: "ring" }
        ]
    },
    {
        dungeon: "The Third Dimension",
        bossImg: "rotmg sheet/dung/thdi.gif",
        graves: 6,
        items: [
            { id: "cloak-of-cubic-enigma", name: "Cloak of Cubic Enigma", img: "rotmg sheet/wh/coce.png", difficulty: "hard", type: "ability" },
            { id: "shadow-serpent-sidearm", name: "Shadow Serpent Sidearm", img: "rotmg sheet/wh/shss.png", difficulty: "hard", type: "ability" },
            { id: "seal-of-cubic-conundra", name: "Seal of Cubic Conundra", img: "rotmg sheet/wh/socc.png", difficulty: "hard", type: "ability" },
            { id: "ring-of-cubed-wisdom", name: "Ring of Cubed Wisdom", img: "rotmg sheet/wh/rocw.png", difficulty: "hard", type: "ring" },
            { id: "morning-square", name: "Morning Square", img: "rotmg sheet/wh/mosq.png", difficulty: "hard", type: "weapon" },
            { id: "the-triangle", name: "The Triangle", img: "rotmg sheet/wh/thtr.png", difficulty: "hard", type: "ability" }
        ]
    },
    {
        dungeon: "Lair of Shaitan",
        bossImg: "rotmg sheet/dung/laos.png",
        graves: 6,
        items: [
            { id: "skull-of-endless-torment", name: "Skull of Endless Torment", img: "rotmg sheet/wh/soet.png", difficulty: "hard", type: "ability" },
            { id: "wakizashi-of-crossing-fires", name: "Wakizashi of Crossing Fires", img: "rotmg sheet/wh/wocf.png", difficulty: "hard", type: "ability" },
            { id: "igneous-starblossom", name: "Igneous Starblossom", img: "rotmg sheet/wh/igst.png", difficulty: "hard", type: "ability" }
        ]
    },
    {
        dungeon: "Secluded Thicket",
        bossImg: "rotmg sheet/dung/seth.png",
        graves: 6.5,
        items: [
            { id: "tlatoanis-shroud", name: "Tlatoani's Shroud", img: "rotmg sheet/wh/tlsh.png", difficulty: "hard", type: "armor" },
            { id: "tezcacoatls-tail", name: "Tezcacoatl's Tail", img: "rotmg sheet/wh/teta.png", difficulty: "hard", type: "weapon" },
            { id: "sealed-crystal-skull", name: "Sealed Crystal Skull", img: "rotmg sheet/wh/secs.png", difficulty: "hard", type: "ability" },
            { id: "penetrating-blast-spell", name: "Penetrating Blast Spell", img: "rotmg sheet/wh/pebs.png", difficulty: "hard", type: "ability" }
        ]
    },
    {
        dungeon: "High Tech Terror",
        bossImg: "rotmg sheet/dung/hite.png",
        graves: 6.5,
        items: [
            { id: "bow", name: "B.O.W.", img: "rotmg sheet/wh/bow.png", difficulty: "hard", type: "weapon" },
            { id: "staff", name: "S.T.A.F.F.", img: "rotmg sheet/wh/staff.png", difficulty: "hard", type: "weapon" },
            { id: "quiver", name: "Q.U.I.V.E.R.", img: "rotmg sheet/wh/quiver.png", difficulty: "hard", type: "ability" },
            { id: "sheath", name: "S.H.E.A.T.H.", img: "rotmg sheet/wh/sheath.png", difficulty: "hard", type: "ability" },
            { id: "eye", name: "E.Y.E.", img: "rotmg sheet/wh/eye.png", difficulty: "hard", type: "ring" }
        ]
    },
    {
        dungeon: "Ice Citadel",
        bossImg: "rotmg sheet/dung/icci.png",
        graves: 7,
        items: [
            { id: "staff-of-esben", name: "Staff of Esben", img: "rotmg sheet/wh/stoe.png", difficulty: "hard", type: "weapon" },
            { id: "skullish-remains-of-esben", name: "Skullish Remains of Esben", img: "rotmg sheet/wh/sroe.png", difficulty: "hard", type: "ability" },
            { id: "esbens-vows", name: "Esben's Vows", img: "rotmg sheet/wh/esvo.png", difficulty: "hard", type: "ability" },
            { id: "ases-echo", name: "Ase's Echo", img: "rotmg sheet/wh/asec.png", difficulty: "hard", type: "ability" },
            { id: "esbens-twisted-heart", name: "Esben's Twisted Heart", img: "rotmg sheet/wh/esth.png", difficulty: "hard", type: "ability" },
            { id: "esbens-shaman-attire", name: "Esben's Shaman Attire", img: "rotmg sheet/wh/essa.png", difficulty: "hard", type: "armor" },
            { id: "esbens-wedding-ring", name: "Esben's Wedding Ring", img: "rotmg sheet/wh/eswr.png", difficulty: "hard", type: "ring" }
        ]
    },
    {
        dungeon: "The Nest",
        bossImg: "rotmg sheet/dung/thne.png",
        graves: 7,
        items: [
            { id: "queens-stinger", name: "Queen's Stinger", img: "rotmg sheet/wh/qust.png", difficulty: "exalt", type: "weapon" },
            { id: "combcutter-kunai", name: "Combcutter Kunai", img: "rotmg sheet/wh/coku.png", difficulty: "exalt", type: "ability" },
            { id: "swarmlords-sigil", name: "Swarmlord's Sigil", img: "rotmg sheet/wh/swsi.png", difficulty: "exalt", type: "ability" },
            { id: "hivemaster-helm", name: "Hivemaster Helm", img: "rotmg sheet/wh/hihe.png", difficulty: "exalt", type: "ability" },
            { id: "hivemind-mace", name: "Hivemind Mace", img: "rotmg sheet/wh/hima.png", difficulty: "exalt", type: "ability" },
            { id: "beekeepers-flamethrower", name: "Beekeeper's Flamethrower", img: "rotmg sheet/wh/befl.png", difficulty: "exalt", type: "weapon" }
        ]
    },
    {
        dungeon: "Plagued Nest",
        bossImg: "rotmg sheet/dung/plne.png",
        graves: 8.5,
        items: [
            { id: "green-beehemoth-quiver", name: "Green Beehemoth Quiver", img: "rotmg sheet/wh/grbq.png", difficulty: "exalt", type: "ability" }
        ]
    },
    {
        dungeon: "Cultist Hideout",
        bossImg: "rotmg sheet/dung/cuhi.png",
        graves: 7,
        items: [
            { id: "burial-blades", name: "Burial Blades", img: "rotmg sheet/wh/bubl.png", difficulty: "exalt", type: "weapon" },
            { id: "staff-of-unholy-sacrifice", name: "Staff of Unholy Sacrifice", img: "rotmg sheet/wh/sous.png", difficulty: "exalt", type: "weapon" },
            { id: "skull-of-corrupted-souls", name: "Skull of Corrupted Souls", img: "rotmg sheet/wh/socs.png", difficulty: "exalt", type: "ability" },
            { id: "ritual-robe", name: "Ritual Robe", img: "rotmg sheet/wh/riro.png", difficulty: "exalt", type: "armor" },
            { id: "bloodshed-ring", name: "Bloodshed Ring", img: "rotmg sheet/wh/blri.png", difficulty: "exalt", type: "ring" }
        ]
    },
    {
        dungeon: "Fungal Cavern",
        bossImg: "rotmg sheet/dung/fuca.png",
        graves: 7.5,
        items: [
            { id: "crystallized-worm-spellblade", name: "Crystallized Worm Spellblade", img: "rotmg sheet/wh/crws.png", difficulty: "exalt", type: "weapon" },
            { id: "crystal-shield", name: "Crystal Shield", img: "rotmg sheet/wh/crsh.png", difficulty: "exalt", type: "ability" },
            { id: "fungal-breastplate", name: "Fungal Breastplate", img: "rotmg sheet/wh/fubr.png", difficulty: "exalt", type: "armor" },
            { id: "ring-of-decades", name: "Ring of Decades", img: "rotmg sheet/wh/riod.png", difficulty: "exalt", type: "ring" },
            { id: "sporous-spray-spell", name: "Sporous Spray Spell", img: "rotmg sheet/wh/spss.png", difficulty: "exalt", type: "ability" },
            { id: "tome-of-the-mushroom-tribes", name: "Tome of the Mushroom Tribes", img: "rotmg sheet/wh/totmt.png", difficulty: "exalt", type: "ability" },
            { id: "cave-dweller-trap", name: "Cave Dweller Trap", img: "rotmg sheet/wh/cadt.png", difficulty: "exalt", type: "ability" }
        ]
    },
    {
        dungeon: "Crystal Cavern",
        bossImg: "rotmg sheet/dung/crca.png",
        graves: 7.5,
        items: [
            { id: "irradiance-sheath", name: "Irradiance Sheath", img: "rotmg sheet/wh/irsh.png", difficulty: "exalt", type: "ability" },
            { id: "fractal-blades", name: "Fractal Blades", img: "rotmg sheet/wh/frbl.png", difficulty: "exalt", type: "weapon" },
            { id: "cloak-of-refraction", name: "Cloak of Refraction", img: "rotmg sheet/wh/clor.png", difficulty: "exalt", type: "ability" },
            { id: "echoes-prism", name: "Echoes Prism", img: "rotmg sheet/wh/ecpr.png", difficulty: "exalt", type: "ability" },
            { id: "fractured-gemstone-wakizashi", name: "Fractured Gemstone Wakizashi", img: "rotmg sheet/wh/frgw.png", difficulty: "exalt", type: "ability" },
            { id: "star-of-enlightenment", name: "Star of Enlightenment", img: "rotmg sheet/wh/stoe2.png", difficulty: "exalt", type: "ability" },
            { id: "crystallised-mist", name: "Crystallised Mist", img: "rotmg sheet/wh/crmi.png", difficulty: "exalt", type: "ring" },
            { id: "crystalline-sigil", name: "Crystalline Sigil", img: "rotmg sheet/wh/crsi.png", difficulty: "exalt", type: "ability" }
        ]
    },
    {
        dungeon: "Kogbold Steamworks",
        bossImg: "rotmg sheet/dung/kost.gif",
        graves: 8,
        items: [
            { id: "overclocking-amulet", name: "Overclocking Amulet", img: "rotmg sheet/wh/ovam.png", difficulty: "exalt", type: "ring" },
            { id: "steam-pipe", name: "Steam Pipe", img: "rotmg sheet/wh/stpi.png", difficulty: "exalt", type: "ability" },
            { id: "chain-dagger", name: "Chain Dagger", img: "rotmg sheet/wh/chda.png", difficulty: "exalt", type: "weapon" },
            { id: "laser-pointer", name: "Laser Pointer", img: "rotmg sheet/wh/lapo.png", difficulty: "exalt", type: "weapon" },
            { id: "kogbold-cower-shield", name: "Kogbold Cower Shield", img: "rotmg sheet/wh/kocs.png", difficulty: "exalt", type: "ability" },
            { id: "scepter-of-rust", name: "Scepter of Rust", img: "rotmg sheet/wh/scor.png", difficulty: "exalt", type: "ability" },
            { id: "brain-cube", name: "Brain Cube", img: "rotmg sheet/wh/brcu.png", difficulty: "exalt", type: "ability" },
            { id: "kogbold-enhancement-core", name: "Kogbold Enhancement Core", img: "rotmg sheet/wh/koec.png", difficulty: "exalt", type: "ring" }
        ]
    },
    {
        dungeon: "Advanced Kogbold Steamworks",
        bossImg: "rotmg sheet/dung/adks.gif",
        graves: 9,
        items: [
            { id: "kogbold-multitool", name: "Kogbold Multitool", img: "rotmg sheet/wh/komu1.png", difficulty: "exalt", type: "ability" }
        ]
    },
    {
        dungeon: "Lost Halls",
        bossImg: "rotmg sheet/dung/loha.png",
        graves: 8,
        items: [
            { id: "sword-of-the-colossus", name: "Sword of the Colossus", img: "rotmg sheet/wh/sotc.png", difficulty: "exalt", type: "weapon" },
            { id: "marble-seal", name: "Marble Seal", img: "rotmg sheet/wh/mase.png", difficulty: "exalt", type: "ability" },
            { id: "breastplate-of-new-life", name: "Breastplate of New Life", img: "rotmg sheet/wh/bonl.png", difficulty: "exalt", type: "armor" },
            { id: "magical-lodestone", name: "Magical Lodestone", img: "rotmg sheet/wh/malo.png", difficulty: "exalt", type: "ring" }
        ]
    },
    {
        dungeon: "The Void",
        bossImg: "rotmg sheet/dung/thvo.png",
        graves: 8.5,
        items: [
            { id: "bow-of-the-void", name: "Bow of the Void", img: "rotmg sheet/wh/botv.png", difficulty: "exalt", type: "weapon" },
            { id: "quiver-of-shadows", name: "Quiver of Shadows", img: "rotmg sheet/wh/quos.png", difficulty: "exalt", type: "ability" },
            { id: "armor-of-nil", name: "Armor of Nil", img: "rotmg sheet/wh/aron.png", difficulty: "exalt", type: "armor" },
            { id: "sourcestone", name: "Sourcestone", img: "rotmg sheet/wh/sour.png", difficulty: "exalt", type: "ring" },
            { id: "omnipotence-ring", name: "Omnipotence Ring", img: "rotmg sheet/wh/omri.png", difficulty: "exalt", type: "ring" }
        ]
    },
    {
        dungeon: "Malogia",
        bossImg: "rotmg sheet/dung/malo.gif",
        graves: 5,
        items: [
            { id: "suns-judgement", name: "Sun's Judgement", img: "rotmg sheet/wh/suju.png", difficulty: "exalt", type: "weapon" },
            { id: "fire-blade", name: "Fire Blade", img: "rotmg sheet/wh/fibl.png", difficulty: "exalt", type: "weapon" },
            { id: "comet-of-calamity", name: "Comet of Calamity", img: "rotmg sheet/wh/cooc.png", difficulty: "exalt", type: "weapon" }
        ]
    },
    {
        dungeon: "Untaris",
        bossImg: "rotmg sheet/dung/unta.gif",
        graves: 5,
        items: [
            { id: "moonbeam-blade", name: "Moonbeam Blade", img: "rotmg sheet/wh/mobl.png", difficulty: "exalt", type: "weapon" },
            { id: "dueling-daggers", name: "Dueling Daggers", img: "rotmg sheet/wh/duda.png", difficulty: "exalt", type: "weapon" },
            { id: "snowblind-wand", name: "Snowblind Wand", img: "rotmg sheet/wh/snwa.png", difficulty: "exalt", type: "weapon" }
        ]
    },
    {
        dungeon: "Katalund",
        bossImg: "rotmg sheet/dung/kata.gif",
        graves: 5,
        items: [
            { id: "warlord-wand", name: "Warlord Wand", img: "rotmg sheet/wh/wawa.png", difficulty: "exalt", type: "weapon" },
            { id: "gaseous-glaive", name: "Gaseous Glaive", img: "rotmg sheet/wh/gagl.png", difficulty: "exalt", type: "weapon" },
            { id: "blazon-bow", name: "Blazon Bow", img: "rotmg sheet/wh/blbo.png", difficulty: "exalt", type: "weapon" }
        ]
    },
    {
        dungeon: "Forax",
        bossImg: "rotmg sheet/dung/fora.gif",
        graves: 5,
        items: [
            { id: "foramite-staff", name: "Foramite Staff", img: "rotmg sheet/wh/fost.png", difficulty: "exalt", type: "weapon" },
            { id: "acidic-slasher", name: "Acidic Slasher", img: "rotmg sheet/wh/acsl.png", difficulty: "exalt", type: "weapon" },
            { id: "corrosion-cutter", name: "Corrosion Cutter", img: "rotmg sheet/wh/cocu2.png", difficulty: "exalt", type: "weapon" }
        ]
    },
    {
        dungeon: "Rainbow Road",
        bossImg: "rotmg sheet/dung/raro.png",
        graves: 5,
        items: [
            { id: "prismatic-slasher", name: "Prismatic Slasher", img: "rotmg sheet/wh/prsl.png", difficulty: "exalt", type: "weapon" },
            { id: "rainbow-rod", name: "Rainbow Rod", img: "rotmg sheet/wh/raro.png", difficulty: "exalt", type: "weapon" },
            { id: "staff-of-the-saint", name: "Staff of the Saint", img: "rotmg sheet/wh/sots.png", difficulty: "exalt", type: "weapon" },
            { id: "sword-of-the-rainbows-end", name: "Sword of the Rainbow's End", img: "rotmg sheet/wh/sotre.png", difficulty: "exalt", type: "weapon" },
            { id: "clover-bow", name: "Clover Bow", img: "rotmg sheet/wh/clbo.png", difficulty: "exalt", type: "weapon" },
            { id: "katana-of-good-fortune", name: "Katana of Good Fortune", img: "rotmg sheet/wh/kogf.png", difficulty: "exalt", type: "weapon" },
            { id: "painbow", name: "Painbow", img: "rotmg sheet/wh/pain.png", difficulty: "exalt", type: "ability" },
            { id: "clover-star", name: "Clover Star", img: "rotmg sheet/wh/clst.png", difficulty: "exalt", type: "ability" }
        ]
    },
    {
        dungeon: "Ice Tomb",
        bossImg: "rotmg sheet/dung/icto.png",
        graves: 5,
        items: [
            { id: "arctic-bow", name: "Arctic Bow", img: "rotmg sheet/wh/arbo.png", difficulty: "exalt", type: "weapon" },
            { id: "freezing-quiver", name: "Freezing Quiver", img: "rotmg sheet/wh/frqu.png", difficulty: "exalt", type: "ability" },
            { id: "frimarra", name: "Frimarra", img: "rotmg sheet/wh/frim.png", difficulty: "exalt", type: "ring" },
            { id: "enchanted-ice-shard", name: "Enchanted Ice Shard", img: "rotmg sheet/wh/enis.png", difficulty: "exalt", type: "ring" },
            { id: "ring-of-the-northern-light", name: "Ring of the Northern Light", img: "rotmg sheet/wh/rotnl.png", difficulty: "exalt", type: "ring" }
        ]
    },
    {
        dungeon: "Belladonna's Garden",
        bossImg: "rotmg sheet/dung/bega.png",
        graves: 5.5,
        items: [
            { id: "perennial-cranium", name: "Perennial Cranium", img: "rotmg sheet/wh/pecr.png", difficulty: "exalt", type: "ability" },
            { id: "hanagasaku", name: "Hanagasaku", img: "rotmg sheet/wh/hana.png", difficulty: "exalt", type: "ability" }
        ]
    },
    {
        dungeon: "Queen Bunny Chamber",
        bossImg: "rotmg sheet/dung/qubc.png",
        graves: 5.5,
        items: [
            { id: "bunny-ear-tachi", name: "Bunny Ear Tachi", img: "rotmg sheet/wh/buet.png", difficulty: "exalt", type: "weapon" },
            { id: "caramel-spellblade", name: "Caramel Spellblade", img: "rotmg sheet/wh/casp.png", difficulty: "exalt", type: "weapon" },
            { id: "shard-launcher", name: "Shard Launcher", img: "rotmg sheet/wh/shla.png", difficulty: "exalt", type: "weapon" },
            { id: "egg-basher", name: "Egg Basher", img: "rotmg sheet/wh/egba.png", difficulty: "exalt", type: "weapon" },
            { id: "chocolate-ovipositor", name: "Chocolate Ovipositor", img: "rotmg sheet/wh/chov.png", difficulty: "exalt", type: "weapon" },
            { id: "hatchling-blades", name: "Hatchling Blades", img: "rotmg sheet/wh/habl.png", difficulty: "exalt", type: "weapon" }
        ]
    },
    {
        dungeon: "Stromwell's Rift III",
        bossImg: "rotmg sheet/dung/stro.gif",
        graves: 9,
        items: [
            { id: "nightmatter-circlet", name: "Nightmatter Circlet", img: "rotmg sheet/wh/nici.png", difficulty: "exalt", type: "ring" }
        ]
    },
    {
        dungeon: "White Snake Invasion III",
        bossImg: "rotmg sheet/dung/whsi3.png",
        graves: 9,
        items: [
            { id: "edens-embrace", name: "Eden's Embrace", img: "rotmg sheet/wh/edem.png", difficulty: "exalt", type: "ring" }
        ]
    },
    {
        dungeon: "Spectral Penitentiary",
        bossImg: "rotmg sheet/dung/sppe.gif",
        graves: 9,
        items: [
            { id: "tools-of-the-tarnished", name: "Tools of the Tarnished", img: "rotmg sheet/wh/tott.png", difficulty: "exalt", type: "weapon" },
            { id: "wretched-rags", name: "Wretched Rags", img: "rotmg sheet/wh/wrra.png", difficulty: "exalt", type: "armor" },
            { id: "sinister-syringes", name: "Sinister Syringes", img: "rotmg sheet/wh/sisy.png", difficulty: "exalt", type: "ability" },
            { id: "cackling-straitjacket", name: "Cackling Straitjacket", img: "rotmg sheet/wh/cast.png", difficulty: "exalt", type: "armor" },
            { id: "command-cornea", name: "Command Cornea", img: "rotmg sheet/wh/coco.png", difficulty: "exalt", type: "ability" },
            { id: "ocular-entrapment", name: "Ocular Entrapment", img: "rotmg sheet/wh/ocen.png", difficulty: "exalt", type: "ability" },
            { id: "overwhelming-axehead", name: "Overwhelming Axehead", img: "rotmg sheet/wh/ovax.png", difficulty: "exalt", type: "ability" },
            { id: "motivational-megaphone", name: "Motivational Megaphone", img: "rotmg sheet/wh/mome.png", difficulty: "exalt", type: "ability" },
            { id: "damnation", name: "Damnation", img: "rotmg sheet/wh/damn.png", difficulty: "exalt", type: "weapon" },
            { id: "vial-of-soul-extract", name: "Vial of Soul Extract", img: "rotmg sheet/wh/vose.png", difficulty: "exalt", type: "ability" }
        ]
    },
    {
        dungeon: "Moonlight Village",
        bossImg: "rotmg sheet/dung/movi.png",
        graves: 9,
        items: [
            { id: "sages-wakibiki", name: "Sage's Wakibiki", img: "rotmg sheet/wh/sawa.png", difficulty: "exalt", type: "armor" },
            { id: "ethereal-happi", name: "Ethereal Happi", img: "rotmg sheet/wh/etha.png", difficulty: "exalt", type: "armor" },
            { id: "flowering-kimono", name: "Flowering Kimono", img: "rotmg sheet/wh/flki.png", difficulty: "exalt", type: "armor" },
            { id: "rain-maker", name: "Rain Maker", img: "rotmg sheet/wh/rama.png", difficulty: "exalt", type: "ability" },
            { id: "taiko-drums", name: "Taiko Drums", img: "rotmg sheet/wh/tadr.png", difficulty: "exalt", type: "ability" },
            { id: "elegant-parasol", name: "Elegant Parasol", img: "rotmg sheet/wh/elpa.png", difficulty: "exalt", type: "ability" },
            { id: "makakoyumi", name: "Makakoyumi", img: "rotmg sheet/wh/maka.png", difficulty: "exalt", type: "weapon" },
            { id: "tezutsu-hanabi", name: "Tezutsu Hanabi", img: "rotmg sheet/wh/teha.png", difficulty: "exalt", type: "ability" },
            { id: "kagenohikari", name: "Kagenohikari", img: "rotmg sheet/wh/kage.png", difficulty: "exalt", type: "ring" },
            { id: "master-fishing-rod", name: "Master Fishing Rod", img: "rotmg sheet/wh/mafr.png", difficulty: "exalt", type: "ring" },
            { id: "concentrated-soul-fire", name: "Concentrated Soul Fire", img: "rotmg sheet/wh/cosf.png", difficulty: "exalt", type: "ability" }
        ]
    },
    {
        dungeon: "Hidden Interregnum",
        bossImg: "rotmg sheet/dung/hiin.gif",
        graves: 8,
        items: [
            { id: "obsidian-macuahuitl", name: "Obsidian Macuahuitl", img: "rotmg sheet/wh/obma.png", difficulty: "exalt", type: "weapon" },
            { id: "pirates-sidearms", name: "Pirate's Sidearms", img: "rotmg sheet/wh/pisi.png", difficulty: "exalt", type: "weapon" },
            { id: "ritual-khopesh", name: "Ritual Khopesh", img: "rotmg sheet/wh/rikh.png", difficulty: "exalt", type: "weapon" },
            { id: "gilded-chain-scythe", name: "Gilded Chain Scythe", img: "rotmg sheet/wh/gics.png", difficulty: "exalt", type: "weapon" },
            { id: "frangible-longbow", name: "Frangible Longbow", img: "rotmg sheet/wh/frlo.png", difficulty: "exalt", type: "weapon" },
            { id: "royal-sekhem", name: "Royal Sekhem", img: "rotmg sheet/wh/rose.png", difficulty: "exalt", type: "weapon" },
            { id: "rusted-barrel", name: "Rusted Barrel", img: "rotmg sheet/wh/ruba.png", difficulty: "exalt", type: "ability" },
            { id: "corsairs-crown-jewel", name: "Corsair's Crown Jewel", img: "rotmg sheet/wh/cocj.png", difficulty: "exalt", type: "ability" },
            { id: "storm-caller", name: "Storm Caller", img: "rotmg sheet/wh/stca.png", difficulty: "exalt", type: "ability" },
            { id: "sheath-of-thunderous-rites", name: "Sheath of Thunderous Rites", img: "rotmg sheet/wh/sotr.png", difficulty: "exalt", type: "ability" },
            { id: "forbidden-artifact", name: "Forbidden Artifact", img: "rotmg sheet/wh/foar.png", difficulty: "exalt", type: "ability" },
            { id: "storied-blades", name: "Storied Blades", img: "rotmg sheet/wh/stbl.png", difficulty: "exalt", type: "ability" },
            { id: "huntsmans-volley", name: "Huntsman's Volley", img: "rotmg sheet/wh/huvo.png", difficulty: "exalt", type: "ability" },
            { id: "heavy-syndicate-attire", name: "Heavy Syndicate Attire", img: "rotmg sheet/wh/hesa.png", difficulty: "exalt", type: "armor" },
            { id: "mystic-syndicate-attire", name: "Mystic Syndicate Attire", img: "rotmg sheet/wh/mysa.png", difficulty: "exalt", type: "armor" },
            { id: "light-syndicate-attire", name: "Light Syndicate Attire", img: "rotmg sheet/wh/lisa.png", difficulty: "exalt", type: "armor" },
            { id: "fractured-hannya", name: "Fractured Hannya", img: "rotmg sheet/wh/frha.png", difficulty: "exalt", type: "ring" },
            { id: "faded-heart-scarab", name: "Faded Heart Scarab", img: "rotmg sheet/wh/fahs.png", difficulty: "exalt", type: "ring" },
            { id: "sunken-fire-opal-ring", name: "Sunken Fire Opal Ring", img: "rotmg sheet/wh/sfor.png", difficulty: "exalt", type: "ring" }
        ]
    },
    {
        dungeon: "The Machine",
        bossImg: "rotmg sheet/dung/mach.png",
        graves: 6,
        items: [
            { id: "mister-mango", name: "Mister Mango", img: "rotmg sheet/wh/mima.png", difficulty: "exalt", type: "weapon" },
            { id: "butter-bow", name: "Butter Bow", img: "rotmg sheet/wh/bubo.png", difficulty: "exalt", type: "weapon" },
            { id: "kidd-force", name: "K.I.D.D. Force", img: "rotmg sheet/wh/kidd.png", difficulty: "exalt", type: "weapon" },
            { id: "caduceus-of-current-craziness", name: "Caduceus of Current Craziness", img: "rotmg sheet/wh/cocc.png", difficulty: "exalt", type: "weapon" },
            { id: "mmace-mmurderer", name: "MMace MMurderer", img: "rotmg sheet/wh/mmmm.png", difficulty: "exalt", type: "weapon" },
            { id: "blade-of-ages", name: "Blade of Ages", img: "rotmg sheet/wh/bloa.png", difficulty: "exalt", type: "weapon" },
            { id: "groovy-mango", name: "Groovy Mango", img: "rotmg sheet/wh/grma.png", difficulty: "exalt", type: "weapon" },
            { id: "baked-bow", name: "Baked Bow", img: "rotmg sheet/wh/babo.png", difficulty: "exalt", type: "weapon" },
            { id: "caduceus-of-enlightened-chaos", name: "Caduceus Of Enlightened Chaos", img: "rotmg sheet/wh/coec.png", difficulty: "exalt", type: "weapon" },
            { id: "kidd-force-2", name: "K.I.D.D. Force 2.0", img: "rotmg sheet/wh/kidd2.png", difficulty: "exalt", type: "weapon" },
            { id: "ffabulous-fflail", name: "FFabulous FFlail", img: "rotmg sheet/wh/ffff.png", difficulty: "exalt", type: "weapon" },
            { id: "blade-of-blooming", name: "Blade of Blooming", img: "rotmg sheet/wh/blob.png", difficulty: "exalt", type: "weapon" },
            { id: "mirror-cloak", name: "Mirror Cloak", img: "rotmg sheet/wh/micl.png", difficulty: "exalt", type: "ability" },
            { id: "archerang", name: "Archerang", img: "rotmg sheet/wh/arch.png", difficulty: "exalt", type: "ability" },
            { id: "spelling-spell", name: "Spelling Spell", img: "rotmg sheet/wh/spsp.png", difficulty: "exalt", type: "ability" },
            { id: "tome-of-moral-support", name: "Tome of Moral Support", img: "rotmg sheet/wh/toms.png", difficulty: "exalt", type: "ability" },
            { id: "challenger-helm", name: "Challenger Helm", img: "rotmg sheet/wh/chhe.png", difficulty: "exalt", type: "ability" },
            { id: "shield-of-pogmur", name: "Shield of Pogmur", img: "rotmg sheet/wh/shop.png", difficulty: "exalt", type: "ability" },
            { id: "seal-of-eternal-life", name: "Seal of Eternal Life", img: "rotmg sheet/wh/soel.png", difficulty: "exalt", type: "ability" },
            { id: "lightning-in-a-bottle", name: "Lightning in a Bottle", img: "rotmg sheet/wh/liab.png", difficulty: "exalt", type: "ability" },
            { id: "epiphany-skull", name: "Epiphany Skull", img: "rotmg sheet/wh/epsk.png", difficulty: "exalt", type: "ability" },
            { id: "helium-trap", name: "Helium Trap", img: "rotmg sheet/wh/hetr.png", difficulty: "exalt", type: "ability" },
            { id: "karma-orb", name: "Karma Orb", img: "rotmg sheet/wh/kaor.png", difficulty: "exalt", type: "ability" },
            { id: "fools-prism", name: "Fool's Prism", img: "rotmg sheet/wh/fopr.png", difficulty: "exalt", type: "ability" },
            { id: "honey-scepter-supreme", name: "Honey Scepter Supreme", img: "rotmg sheet/wh/hoss.png", difficulty: "exalt", type: "ability" },
            { id: "unshuriken", name: "Unshuriken", img: "rotmg sheet/wh/unsh.png", difficulty: "exalt", type: "ability" },
            { id: "nsfwakizashi", name: "NSFWakizashi", img: "rotmg sheet/wh/nsfw.png", difficulty: "exalt", type: "ability" },
            { id: "lullaby", name: "Lullaby", img: "rotmg sheet/wh/lull.png", difficulty: "exalt", type: "ability" },
            { id: "recursion-mace", name: "Recursion Mace", img: "rotmg sheet/wh/rema.png", difficulty: "exalt", type: "ability" },
            { id: "paper-machete", name: "Paper Machete", img: "rotmg sheet/wh/pama.png", difficulty: "exalt", type: "ability" },
            { id: "sigil-of-the-rubber-duck", name: "Sigil of the Rubber Duck", img: "rotmg sheet/wh/sotrd.png", difficulty: "exalt", type: "ability" },
            { id: "cheater-light-armor", name: "Cheater Light Armor", img: "rotmg sheet/wh/chla.png", difficulty: "exalt", type: "armor" },
            { id: "cheater-robe", name: "Cheater Robe", img: "rotmg sheet/wh/chro.png", difficulty: "exalt", type: "armor" },
            { id: "cheater-heavy-armor", name: "Cheater Heavy Armor", img: "rotmg sheet/wh/chha.png", difficulty: "exalt", type: "armor" },
            { id: "omni-impotence-ring", name: "Omni-Impotence Ring", img: "rotmg sheet/wh/omim.png", difficulty: "exalt", type: "ring" }
        ]
    },
    {
        dungeon: "The Shatters",
        bossImg: "rotmg sheet/dung/shat.png",
        graves: 10,
        items: [
            { id: "royal-guards-cuirass", name: "Royal Guard's Cuirass", img: "rotmg sheet/wh/rogc.png", difficulty: "exalt", type: "armor" },
            { id: "valor", name: "Valor", img: "rotmg sheet/wh/valo.png", difficulty: "exalt", type: "weapon" },
            { id: "vanguards-visage", name: "Vanguard's Visage", img: "rotmg sheet/wh/vavi.png", difficulty: "exalt", type: "ability" },
            { id: "sentinels-sidearm", name: "Sentinel's Sidearm", img: "rotmg sheet/wh/sesi.png", difficulty: "exalt", type: "ability" },
            { id: "bracer-of-the-guardian", name: "Bracer of the Guardian", img: "rotmg sheet/wh/botg.png", difficulty: "exalt", type: "ring" },
            { id: "vest-of-abandoned-shadows", name: "Vest of Abandoned Shadows", img: "rotmg sheet/wh/voas.png", difficulty: "exalt", type: "armor" },
            { id: "dusky-catalyst", name: "Dusky Catalyst", img: "rotmg sheet/wh/duca.png", difficulty: "exalt", type: "weapon" },
            { id: "primal-arcana", name: "Primal Arcana", img: "rotmg sheet/wh/prar.png", difficulty: "exalt", type: "ability" },
            { id: "polarity-poison", name: "Polarity Poison", img: "rotmg sheet/wh/popo.png", difficulty: "exalt", type: "ability" },
            { id: "the-twilight-gemstone", name: "The Twilight Gemstone", img: "rotmg sheet/wh/thtg.png", difficulty: "exalt", type: "ring" },
            { id: "mantle-of-the-monarchy", name: "Mantle of the Monarchy", img: "rotmg sheet/wh/motm.png", difficulty: "exalt", type: "armor" },
            { id: "warmonger", name: "Warmonger", img: "rotmg sheet/wh/warm.png", difficulty: "exalt", type: "weapon" },
            { id: "peacekeeper", name: "Peacekeeper", img: "rotmg sheet/wh/peac.png", difficulty: "exalt", type: "ability" },
            { id: "noble-mandolin", name: "Noble Mandolin", img: "rotmg sheet/wh/noma.png", difficulty: "exalt", type: "ability" },
            { id: "the-forgotten-crown", name: "The Forgotten Crown", img: "rotmg sheet/wh/thfc.png", difficulty: "exalt", type: "ring" },
            { id: "chrysalis-of-eternity", name: "Chrysalis of Eternity", img: "rotmg sheet/wh/choe.png", difficulty: "exalt", type: "ring" },
            { id: "the-forgotten-ring", name: "The Forgotten Ring", img: "rotmg sheet/wh/thfr.png", difficulty: "exalt", type: "ring" }
        ]
    },
    {
        dungeon: "Oryx's Sanctuary",
        bossImg: "rotmg sheet/dung/oryx.gif",
        graves: 9.5,
        items: [
            { id: "ancient-stone-sword", name: "Ancient Stone Sword", img: "rotmg sheet/wh/anss.png", difficulty: "exalt", type: "weapon" },
            { id: "spiteful-scutum", name: "Spiteful Scutum", img: "rotmg sheet/wh/spsc.png", difficulty: "exalt", type: "ability" },
            { id: "cloak-of-the-mad-god", name: "Cloak of the Mad God", img: "rotmg sheet/wh/cotmg.png", difficulty: "exalt", type: "ability" },
            { id: "tome-of-holy-furor", name: "Tome of Holy Furor", img: "rotmg sheet/wh/tohf.png", difficulty: "exalt", type: "ability" },
            { id: "superior", name: "Superior", img: "rotmg sheet/wh/supe.png", difficulty: "exalt", type: "weapon" },
            { id: "genesis-spell", name: "Genesis Spell", img: "rotmg sheet/wh/gesp.png", difficulty: "exalt", type: "ability" },
            { id: "diplomatic-robe", name: "Diplomatic Robe", img: "rotmg sheet/wh/diro.png", difficulty: "exalt", type: "armor" },
            { id: "chancellors-cranium", name: "Chancellor's Cranium", img: "rotmg sheet/wh/chcr.png", difficulty: "exalt", type: "ring" },
            { id: "avarice", name: "Avarice", img: "rotmg sheet/wh/avar.png", difficulty: "exalt", type: "weapon" },
            { id: "gamblers-fate", name: "Gambler's Fate", img: "rotmg sheet/wh/gafa.png", difficulty: "exalt", type: "ability" },
            { id: "turncoat-cape", name: "Turncoat Cape", img: "rotmg sheet/wh/tuca.png", difficulty: "exalt", type: "armor" },
            { id: "collectors-monocle", name: "Collector's Monocle", img: "rotmg sheet/wh/como.png", difficulty: "exalt", type: "ring" },
            { id: "lumiaire", name: "Lumiaire", img: "rotmg sheet/wh/lumi.png", difficulty: "exalt", type: "weapon" },
            { id: "chaotic-scripture", name: "Chaotic Scripture", img: "rotmg sheet/wh/chsc.png", difficulty: "exalt", type: "ability" },
            { id: "vesture-of-duality", name: "Vesture of Duality", img: "rotmg sheet/wh/veod.png", difficulty: "exalt", type: "armor" },
            { id: "divine-coronation", name: "Divine Coronation", img: "rotmg sheet/wh/dico.png", difficulty: "exalt", type: "ring" },
            { id: "enforcer", name: "Enforcer", img: "rotmg sheet/wh/enfo.png", difficulty: "exalt", type: "weapon" },
            { id: "ballistic-star", name: "Ballistic Star", img: "rotmg sheet/wh/bast.png", difficulty: "exalt", type: "ability" },
            { id: "centaurs-shielding", name: "Centaur's Shielding", img: "rotmg sheet/wh/cesh.png", difficulty: "exalt", type: "armor" },
            { id: "battalion-banner", name: "Battalion Banner", img: "rotmg sheet/wh/baba.png", difficulty: "exalt", type: "ring" },
            { id: "divinity", name: "Divinity", img: "rotmg sheet/wh/divi.png", difficulty: "exalt", type: "weapon" },
            { id: "oryxs-escutcheon", name: "Oryx's Escutcheon", img: "rotmg sheet/wh/ores.png", difficulty: "exalt", type: "ability" },
            { id: "gladiator-guard", name: "Gladiator Guard", img: "rotmg sheet/wh/glgu.png", difficulty: "exalt", type: "armor" },
            { id: "exalted-gods-horn", name: "Exalted God's Horn", img: "rotmg sheet/wh/exgh.png", difficulty: "exalt", type: "ring" }
        ]
    }
];

const grid = document.getElementById('tracker-grid');
const tooltip = document.getElementById('tooltip');
const itemElementMap = new Map();

function updateProgress() {
    const allIds = data.flatMap(s => s.items.map(i => i.id));
    const obtained = allIds.filter(id => localStorage.getItem(id) === 'true').length;
    const total = allIds.length;
    const fillEl = document.getElementById('progress-bar-fill');
    const labelEl = document.getElementById('progress-label');
    if (fillEl) fillEl.style.width = total > 0 ? (obtained / total * 100) + '%' : '0%';
    if (labelEl) labelEl.textContent = `${obtained} / ${total} obtained`;
}

data.forEach(section => {
    const sectionDiv = document.createElement('div');
    sectionDiv.classList.add('section-card');
    if (section.items.length > 12) sectionDiv.classList.add('section-card-wide');

    sectionDiv.innerHTML = `
        <div class="section-header">${section.dungeon}</div>
        <div class="card-body" style="display: flex; align-items: center; gap: 15px; flex: 1; align-self: center; width: 100%;">
            <div class="boss-container" style="display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; flex-shrink: 0; cursor: help;">
                <img src="${section.bossImg}" style="width: 80px; height: 80px; image-rendering: pixelated; object-fit: contain;">
            </div>
            <div class="items-list" style="display: flex; flex-wrap: wrap; gap: 10px;"></div>
        </div>
    `;

    const bossContainerEl = sectionDiv.querySelector('.boss-container');
    const itemsList = sectionDiv.querySelector('.items-list');

    section.items.forEach(item => {
        const img = document.createElement('img');
        img.src = item.img;
        img.classList.add('item-sprite');
        img.title = item.name;
        if (localStorage.getItem(item.id) === 'true') img.classList.add('obtained');
        itemElementMap.set(item.id, img);

        img.addEventListener('click', () => {
            const hasIt = img.classList.toggle('obtained');
            localStorage.setItem(item.id, hasIt);
            updateProgress();
            executeGlobalFilters();
        });
        itemsList.appendChild(img);
    });

    if (bossContainerEl && tooltip) {
        bossContainerEl.addEventListener('mouseenter', () => {
            tooltip.style.display = 'block';
            tooltip.innerHTML = `<div style="font-weight: bold; font-size: 14px; margin-bottom: 8px; color: #c8a951; text-align: center; border-bottom: 1px solid #444; padding-bottom: 4px;">${section.dungeon}</div><div class="tooltip-grave-grid" style="display: grid; grid-template-columns: repeat(5, 40px); gap: 6px; justify-content: center; background: rgba(0,0,0,0.4); padding: 8px; border-radius: 4px;"></div>`;
            const graveGridContainer = tooltip.querySelector('.tooltip-grave-grid');
            
            const total = section.graves || 0;
            const fullGraves = Math.floor(total);
            
            // 1. Render all full graves
            for (let i = 0; i < fullGraves; i++) {
                graveGridContainer.insertAdjacentHTML('beforeend', `<div style="width: 40px; height: 40px; background: rgba(200, 169, 81, 0.05); border: 1px solid #c8a951; display: flex; justify-content: center; align-items: center; border-radius: 4px;"><img src="rotmg sheet/grave.png" style="width: 32px; height: 32px; image-rendering: pixelated;"></div>`);
            }
            
            // 2. Render half grave if decimal exists
            if (total % 1 !== 0) {
                graveGridContainer.insertAdjacentHTML('beforeend', `<div style="width: 40px; height: 40px; background: rgba(200, 169, 81, 0.05); border: 1px solid #c8a951; display: flex; justify-content: center; align-items: center; border-radius: 4px;"><img src="rotmg sheet/graveh.png" style="width: 32px; height: 32px; image-rendering: pixelated;"></div>`);
            }
            
            // 3. Scale filler blocks strictly out to a fixed 10-slot field (2 rows of 5)
            const filledCount = fullGraves + (total % 1 !== 0 ? 1 : 0);
            const emptySlotsNeeded = 10 - filledCount;
            
            for (let i = 0; i < emptySlotsNeeded; i++) {
                graveGridContainer.insertAdjacentHTML('beforeend', `<div style="width: 40px; height: 40px; background: rgba(0, 0, 0, 0.5); border: 1px dashed #555; border-radius: 4px;"></div>`);
            }
        });
        bossContainerEl.addEventListener('mousemove', (e) => { tooltip.style.left = (e.clientX + 15) + 'px'; tooltip.style.top = (e.clientY + 15) + 'px'; });
        bossContainerEl.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; });
    }
    grid.appendChild(sectionDiv);
});

function executeGlobalFilters() {
    const search = document.getElementById("search-bar")?.value.toLowerCase().trim() || "";
    const diffVal = document.getElementById("difficulty-filter")?.value || "all";
    const typeVal = document.getElementById("type-filter")?.value || "all";
    const missingOnly = document.getElementById("missing-filter")?.checked || false;

    document.querySelectorAll(".section-card").forEach((card, index) => {
        const section = data[index];
        let visibleCount = 0;
        section.items.forEach(item => {
            const el = itemElementMap.get(item.id);
            const match = (search === "" || section.dungeon.toLowerCase().includes(search) || item.name.toLowerCase().includes(search)) && 
                          (diffVal === "all" || item.difficulty === diffVal) && 
                          (typeVal === "all" || item.type === typeVal) && 
                          (!missingOnly || !el.classList.contains('obtained'));
            el.style.display = match ? "" : "none";
            if (match) visibleCount++;
        });
        card.style.display = visibleCount > 0 ? "" : "none";
    });
}

document.getElementById("search-bar")?.addEventListener("input", executeGlobalFilters);
document.getElementById("difficulty-filter")?.addEventListener("change", executeGlobalFilters);
document.getElementById("type-filter")?.addEventListener("change", executeGlobalFilters);
document.getElementById("missing-filter")?.addEventListener("change", executeGlobalFilters);

document.getElementById('reset-btn')?.addEventListener('click', () => {
    if (confirm("Are you sure? This will wipe all your progress!")) { data.forEach(s => s.items.forEach(i => localStorage.removeItem(i.id))); location.reload(); }
});

document.getElementById("topBtn")?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
window.onscroll = () => { const b = document.getElementById("topBtn"); if(b) b.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? "block" : "none"; };

updateProgress();