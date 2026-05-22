// --- BASE TRACKER DATA ARRAY ---
const data = [
    {
        dungeon: "Pirate Cave",
        bossImg: "rotmg sheet/dung/pirc.png",
        graves: 1, 
        items: [
            { id: "corsair-ring-s", name: "Corsair Ring", img: "rotmg sheet/sh/cori.png", difficulty: "easy", type: "ring" },
        ]
    },
    {
        dungeon: "Forest Maze",
        bossImg: "rotmg sheet/dung/form.png",
        graves: 1, 
        items: [
            { id: "bramble-bow-s", name: "Bramble Bow", img: "rotmg sheet/sh/brbo.png", difficulty: "easy", type: "weapon" },
            { id: "cocoon-quiver-s", name: "Cocoon Quiver", img: "rotmg sheet/sh/coqu.png", difficulty: "easy", type: "ability" },
        ]
    },
    {
        dungeon: "Spider Den",
        bossImg: "rotmg sheet/dung/spid.png",
        graves: 1.5,
        items: [
            { id: "poison-fang-s", name: "Poison Fang Dagger", img: "rotmg sheet/sh/pofd.png", difficulty: "easy", type: "weapon" },
            { id: "spider-shuriken-s", name: "Spider Shuriken", img: "rotmg sheet/sh/spsh.png", difficulty: "easy", type: "ability" },
            { id: "spider-eye-ring-s", name: "Spider's Eye Ring", img: "rotmg sheet/sh/sper.png", difficulty: "easy", type: "ring" },
        ]
    },
    {
        dungeon: "Forbidden Jungle",
        bossImg: "rotmg sheet/dung/forj.png",
        graves: 1.5,
        items: [
            { id: "crystal-serpent-staff-s", name: "Staff of the Crystal Serpent", img: "rotmg sheet/sh/sotcs.png", difficulty: "easy", type: "weapon" },
            { id: "cracked-crystal-skull-s", name: "Cracked Crystal Skull", img: "rotmg sheet/sh/crcs.png", difficulty: "easy", type: "ability" },
            { id: "tlatoani-robe-s", name: "Robe of the Tlatoani", img: "rotmg sheet/sh/rott.png", difficulty: "easy", type: "armor" },
            { id: "crystal-bone-ring-s", name: "Crystal Bone Ring", img: "rotmg sheet/sh/crbr.png", difficulty: "easy", type: "ring" },
        ]
    },
    {
        dungeon: "The Hive",
        bossImg: "rotmg sheet/dung/hive.png",
        graves: 2,
        items: [
            { id: "sweet-demise-orb-s", name: "Orb of Sweet Demise", img: "rotmg sheet/sh/oosd.png", difficulty: "easy", type: "ability" },
            { id: "honey-scepter-s", name: "Honey Scepter", img: "rotmg sheet/sh/hosc.png", difficulty: "easy", type: "ability" },
        ]
    },
    {
        dungeon: "Snake Pit",
        bossImg: "rotmg sheet/dung/snake.gif",
        graves: 2.5,
        items: [
            { id: "bulwark-wand-s", name: "Wand of the Bulwark", img: "rotmg sheet/sh/wotb.png", difficulty: "easy", type: "weapon" },
            { id: "charmer-pungi-s", name: "Snake Charmer Pungi", img: "rotmg sheet/sh/sncp.png", difficulty: "easy", type: "ability" },
            { id: "snakeskin-shield-s", name: "Snakeskin Shield", img: "rotmg sheet/sh/snsh.png", difficulty: "easy", type: "ability" },
            { id: "snakeskin-armor-s", name: "Snakeskin Armor", img: "rotmg sheet/sh/snar.png", difficulty: "easy", type: "armor" },
            { id: "snake-eye-ring-s", name: "Snake Eye Ring", img: "rotmg sheet/sh/sner.png", difficulty: "easy", type: "ring" },
        ]
    },
    {
        dungeon: "Sprite World",
        bossImg: "rotmg sheet/dung/sprit.gif",
        graves: 2.5,
        items: [
            { id: "sprite-wand-s", name: "Sprite Wand", img: "rotmg sheet/sh/spwa.png", difficulty: "easy", type: "weapon" },
            { id: "extreme-prejudice-s", name: "Staff of Extreme Prejudice", img: "rotmg sheet/sh/soep.png", difficulty: "easy", type: "weapon" },
            { id: "planewalker-cloak-s", name: "Cloak of the Planewalker", img: "rotmg sheet/sh/cotp.png", difficulty: "easy", type: "ability" },
            { id: "celestial-mace-s", name: "Mace of the Celestial Forest", img: "rotmg sheet/sh/motcf.png", difficulty: "easy", type: "ability" },
        ]
    },
    {
        dungeon: "Cave of a Thousand Treasures",
        bossImg: "rotmg sheet/dung/coat.png",
        graves: 2.5,
        items: [
            { id: "jewel-eye-katana-s", name: "Jewel Eye Katana", img: "rotmg sheet/sh/jeek.png", difficulty: "easy", type: "weapon" },
        ]
    },
    {
        dungeon: "Ancient Ruins",
        bossImg: "rotmg sheet/dung/ancr.png",
        graves: 3,
        items: [
            { id: "arcane-rapier-s", name: "Arcane Rapier", img: "rotmg sheet/sh/arra.png", difficulty: "easy", type: "weapon" },
            { id: "amber-helmet-s", name: "Amber Encrusted Helmet", img: "rotmg sheet/sh/ameh.png", difficulty: "easy", type: "ability" },
            { id: "sandstone-seal-s", name: "Sandstone Seal", img: "rotmg sheet/sh/sase.png", difficulty: "easy", type: "ability" },
        ]
    },
    {
        dungeon: "Magic Woods",
        bossImg: "rotmg sheet/dung/magw.png",
        graves: 3,
        items: [
            { id: "spirit-staff-s", name: "Spirit Staff", img: "rotmg sheet/sh/spst.png", difficulty: "easy", type: "weapon" },
            { id: "enchantment-orb-s", name: "Enchantment Orb", img: "rotmg sheet/sh/enor.png", difficulty: "easy", type: "ability" },
            { id: "flowing-clarity-shield-s", name: "Shield of Flowing Clarity", img: "rotmg sheet/sh/sofc.png", difficulty: "easy", type: "ability" },
            { id: "woodland-robe-s", name: "Woodland Robe", img: "rotmg sheet/sh/woro.png", difficulty: "easy", type: "armor" },
            { id: "fairy-ring-s", name: "Fairy Ring", img: "rotmg sheet/sh/fari.png", difficulty: "easy", type: "ring" },
        ]
    },
    {
        dungeon: "Candyland Hunting Grounds",
        bossImg: "rotmg sheet/dung/cahug.png",
        graves: 3.5,
        items: [
            { id: "candy-coated-armor-s", name: "Candy-Coated Armor", img: "rotmg sheet/sh/candy.png", difficulty: "medium", type: "armor" },
            { id: "candy-ring-s", name: "Candy Ring", img: "rotmg sheet/sh/canr.png", difficulty: "medium", type: "ring" },
        ]
    },
    {
        dungeon: "Undead Lair",
        bossImg: "rotmg sheet/dung/undl.gif",
        graves: 3.5,
        items: [
            { id: "doom-bow-s", name: "Doom Bow", img: "rotmg sheet/sh/dobo.png", difficulty: "medium", type: "weapon" },
            { id: "spectral-sword-s", name: "Spectral Sword", img: "rotmg sheet/sh/spsw.png", difficulty: "medium", type: "weapon" },
            { id: "wandering-souls-s", name: "Wandering Souls Spell", img: "rotmg sheet/sh/wass.png", difficulty: "medium", type: "ability" },
            { id: "skeletal-specter-ring-s", name: "Ring of Skeletal Specters", img: "rotmg sheet/sh/ross.png", difficulty: "medium", type: "ring" },
        ]
    },
    {
        dungeon: "Puppet Master’s Theatre",
        bossImg: "rotmg sheet/dung/pumat.png",
        graves: 4,
        items: [
            { id: "marionette-ravager-s", name: "Marionette Ravager", img: "rotmg sheet/sh/mara.png", difficulty: "medium", type: "weapon" },
            { id: "dancing-swords-prism-s", name: "Prism of Dancing Swords", img: "rotmg sheet/sh/pods.png", difficulty: "medium", type: "ability" },
            { id: "harlequin-armor-s", name: "Harlequin Armor", img: "rotmg sheet/sh/haar.png", difficulty: "medium", type: "armor" },
        ]
    },
    {
        dungeon: "Toxic Sewers",
        bossImg: "rotmg sheet/dung/toxs.png",
        graves: 4,
        items: [
            { id: "void-blade-s", name: "Void Blade", img: "rotmg sheet/sh/vobl.png", difficulty: "medium", type: "weapon" },
            { id: "murky-toxin-s", name: "Murky Toxin", img: "rotmg sheet/sh/muto.png", difficulty: "medium", type: "ability" },
        ]
    },
    {
        dungeon: "Cursed Library",
        bossImg: "rotmg sheet/dung/curl.gif",
        graves: 4,
        items: [
            { id: "ronin-wakizashi-s", name: "Ronin's Wakizashi", img: "rotmg sheet/sh/rowa.png", difficulty: "medium", type: "ability" },
            { id: "hidden-knowledge-wand-s", name: "Wand of Hidden Knowledge", img: "rotmg sheet/sh/wohk.png", difficulty: "medium", type: "weapon" },
            { id: "necronomicon-s", name: "Necronomicon", img: "rotmg sheet/sh/necr.png", difficulty: "medium", type: "ability" },
            { id: "scholar-seal-s", name: "Scholar's Seal", img: "rotmg sheet/sh/scse.png", difficulty: "medium", type: "ability" },
            { id: "corruption-cutter-s", name: "Corruption Cutter", img: "rotmg sheet/sh/cocu.png", difficulty: "medium", type: "weapon" },
        ]
    },
    {
        dungeon: "Mad Lab",
        bossImg: "rotmg sheet/dung/mala.gif",
        graves: 4,
        items: [
            { id: "conducting-wand-s", name: "Conducting Wand", img: "rotmg sheet/sh/cowa.png", difficulty: "medium", type: "weapon" },
            { id: "fulmination-scepter-s", name: "Scepter of Fulmination", img: "rotmg sheet/sh/scof.png", difficulty: "medium", type: "ability" },
            { id: "mad-scientist-robe-s", name: "Robe of the Mad Scientist", img: "rotmg sheet/sh/rotms.png", difficulty: "medium", type: "armor" },
            { id: "experimental-ring-s", name: "Experimental Ring", img: "rotmg sheet/sh/exri.png", difficulty: "medium", type: "ring" },
        ]
    },
    {
        dungeon: "Abyss of Demons",
        bossImg: "rotmg sheet/dung/abyss.png",
        graves: 4,
        items: [
            { id: "demon-blade-s", name: "Demon Blade", img: "rotmg sheet/sh/debl.png", difficulty: "medium", type: "weapon" },
            { id: "volcanic-sheath-s", name: "Volcanic Sheath", img: "rotmg sheet/sh/vosh.png", difficulty: "medium", type: "ability" },
            { id: "berserker-breastplate-s", name: "Berserker's Breastplate", img: "rotmg sheet/sh/bebr.png", difficulty: "medium", type: "armor" },
        ]
    },
    {
        dungeon: "Manor of the Immortals",
        bossImg: "rotmg sheet/dung/moti.png",
        graves: 4,
        items: [
            { id: "bone-dagger-s", name: "Bone Dagger", img: "rotmg sheet/sh/boda.png", difficulty: "medium", type: "weapon" },
            { id: "kyuuketsuki-s", name: "Kyuuketsuki Hitogoroshi", img: "rotmg sheet/sh/kyuu.png", difficulty: "medium", type: "weapon" },
            { id: "abraham-wand-s", name: "St. Abraham's Wand", img: "rotmg sheet/sh/abwa.png", difficulty: "medium", type: "weapon" },
            { id: "purification-tome-s", name: "Tome of Purification", img: "rotmg sheet/sh/puri.png", difficulty: "medium", type: "ability" },
            { id: "holy-light-chasuble-s", name: "Chasuble of Holy Light", img: "rotmg sheet/sh/cohl.png", difficulty: "medium", type: "armor" },
            { id: "divine-faith-ring-s", name: "Ring of Divine Faith", img: "rotmg sheet/sh/rodf.png", difficulty: "medium", type: "ring" },
        ]
    },
    {
        dungeon: "Haunted Cemetery",
        bossImg: "rotmg sheet/dung/hace.gif",
        graves: 4.5,
        items: [
            { id: "soul-guidance-s", name: "Soul's Guidance", img: "rotmg sheet/sh/sogu.png", difficulty: "medium", type: "weapon" },
            { id: "plague-poison-s", name: "Plague Poison", img: "rotmg sheet/sh/plpo.png", difficulty: "medium", type: "ability" },
            { id: "resurrected-armor-s", name: "Resurrected Warrior's Armor", img: "rotmg sheet/sh/rewa.png", difficulty: "medium", type: "armor" },
            { id: "dispersion-amulet-s", name: "Amulet of Dispersion", img: "rotmg sheet/sh/amod.png", difficulty: "medium", type: "ring" },
        ]
    },
    {
        dungeon: "Davy Jones’ Locker",
        bossImg: "rotmg sheet/dung/davy.gif",
        graves: 5,
        items: [
            { id: "spirit-dagger-s", name: "Spirit Dagger", img: "rotmg sheet/sh/spda.png", difficulty: "medium", type: "weapon" },
            { id: "ghostly-prism-s", name: "Ghostly Prism", img: "rotmg sheet/sh/ghpr.png", difficulty: "medium", type: "ability" },
            { id: "quartermaster-scabbard-s", name: "Quartermaster Scabbard", img: "rotmg sheet/sh/qusc.png", difficulty: "medium", type: "ability" },
            { id: "spectral-cloth-s", name: "Spectral Cloth Armor", img: "rotmg sheet/sh/spca.png", difficulty: "medium", type: "armor" },
            { id: "captain-ring-s", name: "Captain's Ring", img: "rotmg sheet/sh/cari.png", difficulty: "medium", type: "ring" },
        ]
    },
    {
        dungeon: "Ocean Trench",
        bossImg: "rotmg sheet/dung/ocet.png",
        graves: 5,
        items: [
            { id: "coral-bow-s", name: "Coral Bow", img: "rotmg sheet/sh/cobo.png", difficulty: "medium", type: "weapon" },
            { id: "coral-venom-trap-s", name: "Coral Venom Trap", img: "rotmg sheet/sh/covet.png", difficulty: "medium", type: "ability" },
            { id: "coral-silk-armor-s", name: "Coral Silk Armor", img: "rotmg sheet/sh/silkarmor.png", difficulty: "medium", type: "armor" },
            { id: "coral-ring-s", name: "Coral Ring", img: "rotmg sheet/sh/corit.png", difficulty: "medium", type: "ring" },    
        ]
    },
    {
        dungeon: "The Crawling Depths",
        bossImg: "rotmg sheet/dung/craw.gif",
        graves: 5.5,
        items: [
            { id: "spider-silk-bow-s", name: "Spider Silk Bow", img: "rotmg sheet/sh/spsb.png", difficulty: "medium", type: "weapon" },
            { id: "doku-no-ken-s", name: "Doku No Ken", img: "rotmg sheet/sh/doku.png", difficulty: "medium", type: "weapon" },
            { id: "depths-mace-s", name: "Mace of the Depths", img: "rotmg sheet/sh/motd.png", difficulty: "medium", type: "ability" },
        ]
    },
    {
        dungeon: "Woodland Labyrinth",
        bossImg: "rotmg sheet/dung/wood.gif",
        graves: 5.5,
        items: [
            { id: "leaf-bow-s", name: "Leaf Bow", img: "rotmg sheet/sh/lebo.png", difficulty: "medium", type: "weapon" },
            { id: "eastern-winds-wakizashi-s", name: "Wakizashi of Eastern Winds", img: "rotmg sheet/sh/woew.png", difficulty: "medium", type: "ability" },
            { id: "labyrinth-sheath-s", name: "Labyrinth Dweller's Sheath", img: "rotmg sheet/sh/lads.png", difficulty: "medium", type: "ability" },
        ]
    },
    {
        dungeon: "Deadwater Docks",
        bossImg: "rotmg sheet/dung/dedo.gif",
        graves: 5.5,
        items: [
            { id: "pirate-king-cutlass-s", name: "Pirate King's Cutlass", img: "rotmg sheet/sh/pikc.png", difficulty: "medium", type: "weapon" },
            { id: "wavecrest-concertina-s", name: "Wavecrest Concertina", img: "rotmg sheet/sh/waco.png", difficulty: "medium", type: "ability" },
        ]
    },
    {
        dungeon: "Puppet Master’s Encore",
        bossImg: "rotmg sheet/dung/pume.png",
        graves: 5.5,
        items: [
            { id: "thousand-shot-s", name: "Thousand Shot", img: "rotmg sheet/sh/thsh.png", difficulty: "medium", type: "weapon" },
            { id: "dire-instability-prism-s", name: "Prism of Dire Instability", img: "rotmg sheet/sh/podi.png", difficulty: "medium", type: "ability" },
        ]
    },
    {
        dungeon: "Cnidarian Reef",
        bossImg: "rotmg sheet/dung/cnid.png",
        graves: 5.5,
        items: [
            { id: "bottled-medusozoan-s", name: "Bottled Medusozoan", img: "rotmg sheet/sh/bome.png", difficulty: "medium", type: "ability" },
            { id: "cnidaria-rod-s", name: "Cnidaria Rod", img: "rotmg sheet/sh/cnro.png", difficulty: "medium", type: "ability" },
        ]
    },
    {
        dungeon: "Parasite Chambers",
        bossImg: "rotmg sheet/dung/pach.gif",
        graves: 5.5,
        items: [
            { id: "recurring-terror-s", name: "Recurring Terror Spell", img: "rotmg sheet/sh/rets.png", difficulty: "medium", type: "ability" },
            { id: "devastation-scepter-s", name: "Scepter of Devastation", img: "rotmg sheet/sh/scod.png", difficulty: "medium", type: "ability" },
            { id: "malignance-maw-s", name: "Maw of Malignance", img: "rotmg sheet/sh/maom.png", difficulty: "medium", type: "ability" },
            { id: "pain-tome-s", name: "Tome of Pain", img: "rotmg sheet/sh/toop.png", difficulty: "medium", type: "ability" },
        ]
    },
    {
        dungeon: "The Tavern",
        bossImg: "rotmg sheet/dung/thta.png",
        graves: 5.5,
        items: [
            { id: "right-hook-s", name: "The Right Hook", img: "rotmg sheet/sh/thrh.png", difficulty: "medium", type: "weapon" },
            { id: "tipsy-topper-s", name: "Tipsy Topper", img: "rotmg sheet/sh/tito.png", difficulty: "medium", type: "ability" },
            { id: "double-vision-darts-s", name: "Double Vision Darts", img: "rotmg sheet/sh/dovd.png", difficulty: "medium", type: "ability" },
            { id: "cask-corslet-s", name: "Cask Corslet", img: "rotmg sheet/sh/caco.png", difficulty: "medium", type: "armor" },
            { id: "brewer-bangle-s", name: "Brewer's Bangle", img: "rotmg sheet/sh/brba.png", difficulty: "medium", type: "ring" },
        ]
    },
    {
        dungeon: "Sulfurous Wetlands",
        bossImg: "rotmg sheet/dung/suwe.png",
        graves: 6,
        items: [
            { id: "bogwood-crook-s", name: "Bogwood Crook", img: "rotmg sheet/sh/bocr.png", difficulty: "medium", type: "weapon" },
            { id: "brambletooth-tachi-s", name: "Brambletooth Tachi", img: "rotmg sheet/sh/brta.png", difficulty: "medium", type: "weapon" },
            { id: "sulfuric-stone-s", name: "Sulfuric Stone", img: "rotmg sheet/sh/sust.png", difficulty: "medium", type: "ability" },
            { id: "warped-mantle-s", name: "Warped Mantle", img: "rotmg sheet/sh/wama.png", difficulty: "medium", type: "armor" },
            { id: "thistleleaf-necklace-s", name: "Thistleleaf Necklace", img: "rotmg sheet/sh/thne.png", difficulty: "medium", type: "ring" },
        ]
    },
    {
        dungeon: "Mountain Temple",
        bossImg: "rotmg sheet/dung/mote.png",
        graves: 6,
        items: [
            { id: "fallen-wand-s", name: "Wand of the Fallen", img: "rotmg sheet/sh/wotf.png", difficulty: "medium", type: "weapon" },
            { id: "aether-orb-s", name: "Orb of Aether", img: "rotmg sheet/sh/oroa.png", difficulty: "medium", type: "ability" },
            { id: "jade-storm-s", name: "Jade Storm", img: "rotmg sheet/sh/jast.png", difficulty: "medium", type: "ability" },
            { id: "kaiken-s", name: "Kaiken", img: "rotmg sheet/sh/kaik.png", difficulty: "medium", type: "ability" },
        ]
    },
    {
        dungeon: "Lair of Draconis",
        bossImg: "rotmg sheet/dung/laod.png",
        graves: 6,
        items: [
            { id: "celestial-blade-s", name: "Celestial Blade", img: "rotmg sheet/sh/cebl.png", difficulty: "medium", type: "weapon" },
            { id: "leaf-dragon-armor-s", name: "Leaf Dragon Hide Armor", img: "rotmg sheet/sh/ldha.png", difficulty: "medium", type: "armor" },
            { id: "water-dragon-robe-s", name: "Water Dragon Silk Robe", img: "rotmg sheet/sh/wdsr.png", difficulty: "medium", type: "armor" },
            { id: "fire-dragon-armor-s", name: "Fire Dragon Battle Armor", img: "rotmg sheet/sh/fdba.png", difficulty: "medium", type: "armor" },
            { id: "midnight-star-s", name: "Midnight Star", img: "rotmg sheet/sh/mist1.png", difficulty: "medium", type: "ability" },
            { id: "vision-of-draconis-s", name: "Vision of Draconis", img: "rotmg sheet/sh/viod.png", difficulty: "medium", type: "ability" },
        ]
    },
    {
        dungeon: "Tomb of the Ancients",
        bossImg: "rotmg sheet/dung/tota.png",
        graves: 6,
        items: [
            { id: "pyramid-ring-s", name: "Ring of the Pyramid", img: "rotmg sheet/sh/rotp.png", difficulty: "medium", type: "ring" },
            { id: "protection-tome-s", name: "Tome of Holy Protection", img: "rotmg sheet/sh/tohp.png", difficulty: "medium", type: "ability" },
            { id: "sphinx-ring-s", name: "Ring of the Sphinx", img: "rotmg sheet/sh/rots.png", difficulty: "medium", type: "ring" },
            { id: "pharaoh-requiem-s", name: "Pharaoh's Requiem", img: "rotmg sheet/sh/phre.png", difficulty: "medium", type: "ability" },
            { id: "nile-ring-s", name: "Ring of the Nile", img: "rotmg sheet/sh/rotn.png", difficulty: "medium", type: "ring" },
        ]
    },
    {
        dungeon: "The Third Dimension",
        bossImg: "rotmg sheet/dung/thdi.gif",
        graves: 6,
        items: [
            { id: "cubic-enigma-cloak-s", name: "Cloak of Cubic Enigma", img: "rotmg sheet/sh/coce.png", difficulty: "medium", type: "ability" },
            { id: "shadow-serpent-sidearm-s", name: "Shadow Serpent Sidearm", img: "rotmg sheet/sh/shss.png", difficulty: "medium", type: "ability" },
            { id: "cubic-conundra-seal-s", name: "Seal of Cubic Conundra", img: "rotmg sheet/sh/socc.png", difficulty: "medium", type: "ability" },
            { id: "ring-of-cubed-wisdom-s", name: "Ring of Cubed Wisdom", img: "rotmg sheet/sh/rocws.png", difficulty: "medium", type: "ring" },
        ]
    },
    {
        dungeon: "Lair of Shaitan",
        bossImg: "rotmg sheet/dung/laos.png",
        graves: 6,
        items: [
            { id: "endless-torment-skull-s", name: "Skull of Endless Torment", img: "rotmg sheet/sh/soet.png", difficulty: "medium", type: "ability" },
            { id: "crossing-fires-wakizashi-s", name: "Wakizashi of Crossing Fires", img: "rotmg sheet/sh/waki.png", difficulty: "medium", type: "ability" },
            { id: "igneous-starblossom-s", name: "Igneous Starblossom", img: "rotmg sheet/sh/igst.png", difficulty: "medium", type: "ring" },
        ]
    },
    {
        dungeon: "Secluded Thicket",
        bossImg: "rotmg sheet/dung/seth.png",
        graves: 6.5,
        items: [
            { id: "tlatoani-shroud-s", name: "Tlatoani's Shroud", img: "rotmg sheet/sh/tlsh.png", difficulty: "medium", type: "armor" },
            { id: "tezcacoatl-tail-s", name: "Tezcacoatl's Tail", img: "rotmg sheet/sh/teta.png", difficulty: "medium", type: "weapon" },
            { id: "sealed-crystal-skull-s", name: "Sealed Crystal Skull", img: "rotmg sheet/sh/secs.png", difficulty: "medium", type: "ability" },
            { id: "penetrating-blast-s", name: "Penetrating Blast Spell", img: "rotmg sheet/sh/pebs.png", difficulty: "medium", type: "ability" },
        ]
    },
    {
        dungeon: "High Tech Terror",
        bossImg: "rotmg sheet/dung/hite.png",
        graves: 6.5,
        items: [
            { id: "htt-bow-s", name: "B.O.W.", img: "rotmg sheet/sh/bow.png", difficulty: "medium", type: "weapon" },
            { id: "htt-staff-s", name: "S.T.A.F.F.", img: "rotmg sheet/sh/staff.png", difficulty: "medium", type: "weapon" },
            { id: "htt-quiver-s", name: "Q.U.I.V.E.R.", img: "rotmg sheet/sh/quiver.png", difficulty: "medium", type: "ability" },
            { id: "htt-sheath-s", name: "S.H.E.A.T.H.", img: "rotmg sheet/sh/sheat.png", difficulty: "medium", type: "ability" },
            { id: "htt-eye-s", name: "E.Y.E.", img: "rotmg sheet/sh/eye.png", difficulty: "medium", type: "ring" },
        ]
    },
    {
        dungeon: "Ice Citadel",
        bossImg: "rotmg sheet/dung/icci.png",
        graves: 7,
        items: [
            { id: "ase-echo-s", name: "Ase's Echo", img: "rotmg sheet/sh/asec.png", difficulty: "exalt", type: "ability" },
            { id: "esben-heart-s", name: "Esben's Twisted Heart", img: "rotmg sheet/sh/esth.png", difficulty: "exalt", type: "ability" },
            { id: "esben-shaman-s", name: "Esben's Shaman Attire", img: "rotmg sheet/sh/essa.png", difficulty: "exalt", type: "armor" },
        ]
    },
    {
        dungeon: "Moonlight Village",
        bossImg: "rotmg sheet/dung/movi.png",
        graves: 9,
        items: [
            { id: "makakoyumi-s", name: "Makakoyumi", img: "rotmg sheet/sh/maka.png", difficulty: "exalt", type: "weapon" },
            { id: "master-fishing-rod-s", name: "Master Fishing Rod", img: "rotmg sheet/sh/mafr.png", difficulty: "exalt", type: "ring" },
        ]
    },
    {
        dungeon: "The Nest",
        bossImg: "rotmg sheet/dung/thne.png",
        graves: 7,
        items: [
            { id: "queen-stinger-s", name: "Queen's Stinger", img: "rotmg sheet/sh/qust.png", difficulty: "exalt", type: "weapon" },
            { id: "swarmlord-sigil-s", name: "Swarmlord's Sigil", img: "rotmg sheet/sh/swsi.png", difficulty: "exalt", type: "ability" },
            { id: "hivemaster-helm-s", name: "Hivemaster Helm", img: "rotmg sheet/sh/hihe.png", difficulty: "exalt", type: "ability" },
            { id: "beekeeper-flamethrower-s", name: "Beekeeper's Flamethrower", img: "rotmg sheet/sh/befl.png", difficulty: "exalt", type: "weapon" },
        ]
    },
    {
        dungeon: "Plagued Nest",
        bossImg: "rotmg sheet/dung/plne.png",
        graves: 8.5,
        items: [
            { id: "green-beehemoth-quiver-s", name: "Green Beehemoth Quiver", img: "rotmg sheet/sh/grbq1.png", difficulty: "exalt", type: "ability" },
        ]
    },
    {
        dungeon: "Cultist Hideout",
        bossImg: "rotmg sheet/dung/cuhi.png",
        graves: 7,
        items: [
            { id: "burial-blades-s", name: "Burial Blades", img: "rotmg sheet/sh/bubl.png", difficulty: "exalt", type: "weapon" },
            { id: "unholy-sacrifice-staff-s", name: "Staff of Unholy Sacrifice", img: "rotmg sheet/sh/sous.png", difficulty: "exalt", type: "weapon" },
            { id: "corrupted-souls-skull-s", name: "Skull of Corrupted Souls", img: "rotmg sheet/sh/socs.png", difficulty: "exalt", type: "ability" },
            { id: "ritual-robe-s", name: "Ritual Robe", img: "rotmg sheet/sh/riro.png", difficulty: "exalt", type: "armor" },
        ]
    },
    {
        dungeon: "Infernal Abyss of Demons",
        bossImg: "rotmg sheet/dung/iaod.gif",
        graves: 6,
        items: [
            { id: "adamantine-helm-s", name: "Adamantine Helm", img: "rotmg sheet/sh/adhe1.png", difficulty: "medium", type: "ability" },
        ]
    },
    {
        dungeon: "Fungal Cavern",
        bossImg: "rotmg sheet/dung/fuca.png",
        graves: 7.5,
        items: [
            { id: "cave-dweller-trap-s", name: "Cave Dweller Trap", img: "rotmg sheet/sh/cadt.png", difficulty: "exalt", type: "ability" },
            { id: "crystal-shield-s", name: "Crystal Shield", img: "rotmg sheet/sh/crsh.png", difficulty: "exalt", type: "ability" },
            { id: "ring-of-decades-s", name: "Ring of Decades", img: "rotmg sheet/sh/riod.png", difficulty: "exalt", type: "ring" },
            { id: "fungal-breastplate-s", name: "Fungal Breastplate", img: "rotmg sheet/sh/fubr1.png", difficulty: "exalt", type: "armor" },
            { id: "sporous-spray-s", name: "Sporous Spray Spell", img: "rotmg sheet/sh/spss.png", difficulty: "exalt", type: "ability" },
            { id: "mushroom-tribe-tome-s", name: "Tome of the Mushroom Tribes", img: "rotmg sheet/sh/totm.png", difficulty: "exalt", type: "ability" },
        ]
    },
    {
        dungeon: "Crystal Cavern",
        bossImg: "rotmg sheet/dung/crca.png",
        graves: 7.5,
        items: [
            { id: "fractal-blades-s", name: "Fractal Blades", img: "rotmg sheet/sh/frbl.png", difficulty: "exalt", type: "weapon" },
            { id: "refraction-cloak-s", name: "Cloak of Refraction", img: "rotmg sheet/sh/clor.png", difficulty: "exalt", type: "ability" },
            { id: "fractured-gemstone-waki-s", name: "Fractured Gemstone Wakizashi", img: "rotmg sheet/sh/fgw.png", difficulty: "exalt", type: "ability" },
            { id: "enlightenment-star-s", name: "Star of Enlightenment", img: "rotmg sheet/sh/stoe.png", difficulty: "exalt", type: "ability" },
        ]
    },
    {
        dungeon: "Spectral Penitentiary",
        bossImg: "rotmg sheet/dung/sppe.gif",
        graves: 8,
        items: [
            { id: "tarnished-tools-s", name: "Tools of the Tarnished", img: "rotmg sheet/sh/tott.png", difficulty: "exalt", type: "weapon" },
            { id: "wretched-rags-s", name: "Wretched Rags", img: "rotmg sheet/sh/wrra.png", difficulty: "exalt", type: "armor" },
            { id: "cackling-straitjacket-s", name: "Cackling Straitjacket", img: "rotmg sheet/sh/cast.png", difficulty: "exalt", type: "armor" },
            { id: "ocular-entrapment-s", name: "Ocular Entrapment", img: "rotmg sheet/sh/ocen.png", difficulty: "exalt", type: "ability" },
            { id: "motivational-megaphone-s", name: "Motivational Megaphone", img: "rotmg sheet/sh/mome.png", difficulty: "exalt", type: "ability" },
            { id: "damnation-s", name: "Damnation", img: "rotmg sheet/sh/damn.png", difficulty: "exalt", type: "weapon" },
            { id: "soul-extract-vial-s", name: "Vial of Soul Extract", img: "rotmg sheet/sh/vial.png", difficulty: "exalt", },
        ]
    },
    {
        dungeon: "Kogbold Steamworks",
        bossImg: "rotmg sheet/dung/kost.gif",
        graves: 8,
        items: [
            { id: "overclocking-amulet-s", name: "Overclocking Amulet", img: "rotmg sheet/sh/ovam.png", difficulty: "exalt", type: "ring" },
            { id: "steam-pipe-s", name: "Steam Pipe", img: "rotmg sheet/sh/stpi.png", difficulty: "exalt", type: "ability" },
            { id: "chain-dagger-s", name: "Chain Dagger", img: "rotmg sheet/sh/chda.png", difficulty: "exalt", type: "weapon" },
            { id: "laser-pointer-s", name: "Laser Pointer", img: "rotmg sheet/sh/lapo.png", difficulty: "exalt", type: "weapon" },
            { id: "rust-scepter-s", name: "Scepter of Rust", img: "rotmg sheet/sh/scor.png", difficulty: "exalt", type: "ability" },
            { id: "brain-cube-s", name: "Brain Cube", img: "rotmg sheet/sh/brcu.png", difficulty: "exalt", type: "ability" },
        ]
    },
    {
        dungeon: "Advanced Kogbold Steamworks",
        bossImg: "rotmg sheet/dung/adks.gif",
        graves: 9,
        items: [
            { id: "kogbold-multitool-s", name: "Kogbold Multitool", img: "rotmg sheet/sh/komus.png", difficulty: "exalt", type: "ability" },
        ]
    },
    {
        dungeon: "Lost Halls",
        bossImg: "rotmg sheet/dung/loha.png",
        graves: 8,
        items: [
            { id: "colossus-sword-s", name: "Sword of the Colossus", img: "rotmg sheet/sh/sotc.png", difficulty: "exalt", type: "weapon" },
            { id: "colossus-sword-legacy-s", name: "Sword of the Colossus(legacy)", img: "rotmg sheet/sh/sotcl.png", difficulty: "exalt", type: "weapon" },
            { id: "marble-seal-s", name: "Marble Seal", img: "rotmg sheet/sh/mase.png", difficulty: "exalt", type: "ability" },
            { id: "new-life-breastplate-s", name: "Breastplate of New Life", img: "rotmg sheet/sh/bonl.png", difficulty: "exalt", type: "armor" },
        ]
    },
    {
        dungeon: "The Void",
        bossImg: "rotmg sheet/dung/thvo.png",
        graves: 8.5,
        items: [
            { id: "void-bow-s", name: "Bow of the Void", img: "rotmg sheet/sh/botv.png", difficulty: "exalt", type: "weapon" },
            { id: "shadow-quiver-s", name: "Quiver of Shadows", img: "rotmg sheet/sh/quos.png", difficulty: "exalt", type: "ability" },
            { id: "nil-armor-s", name: "Armor of Nil", img: "rotmg sheet/sh/aron.png", difficulty: "exalt", type: "armor" },
            { id: "omnipotence-ring-s", name: "Omnipotence Ring", img: "rotmg sheet/sh/omni.png", difficulty: "exalt", type: "ring" },
        ]
    },
    {
        dungeon: "Malogia",
        bossImg: "rotmg sheet/dung/malo.gif",
        graves: 5,
        items: [
            { id: "fire-blade-s", name: "Fire Blade", img: "rotmg sheet/sh/fibl.png", difficulty: "medium", type: "weapon" },
        ]
    },
    {
        dungeon: "Untaris",
        bossImg: "rotmg sheet/dung/unta.gif",
        graves: 5,
        items: [
            { id: "dueling-daggers-s", name: "Dueling Daggers", img: "rotmg sheet/sh/duda.png", difficulty: "medium", type: "weapon" },
        ]
    },
    {
        dungeon: "Katalund",
        bossImg: "rotmg sheet/dung/kata.gif",
        graves: 5,
        items: [
            { id: "blazon-bow-s", name: "Blazon Bow", img: "rotmg sheet/sh/blbo.png", difficulty: "medium", type: "weapon" },
        ]
    },
    {
        dungeon: "Forax",
        bossImg: "rotmg sheet/dung/fora.gif",
        graves: 5,
        items: [
            { id: "foramite-staff-s", name: "Foramite Staff", img: "rotmg sheet/sh/fost.png", difficulty: "medium", type: "weapon" },
        ]
    },
    {
        dungeon: "Belladonna’s Garden",
        bossImg: "rotmg sheet/dung/bega.png",
        graves: 5.5,
        items: [
            { id: "perennial-cranium-s", name: "Perennial Cranium", img: "rotmg sheet/sh/pecr.png", difficulty: "medium", type: "ability" },
        ]
    },
    {
        dungeon: "Hidden Interregnum",
        bossImg: "rotmg sheet/dung/hiin.gif",
        graves: 7,
        items: [
            { id: "heavy-syndicate-s", name: "Heavy Syndicate Attire", img: "rotmg sheet/sh/hesa.png", difficulty: "hard", type: "armor" },
            { id: "mystic-syndicate-s", name: "Mystic Syndicate Attire", img: "rotmg sheet/sh/mysa.png", difficulty: "hard", type: "armor" },
            { id: "light-syndicate-s", name: "Light Syndicate Attire", img: "rotmg sheet/sh/lisa.png", difficulty: "hard", type: "armor" },
        ]
    },
    {
        dungeon: "The Shatters",
        bossImg: "rotmg sheet/dung/shat.png",
        graves: 10,
        items: [
            { id: "royal-guard-cuirass-s", name: "Royal Guard's Cuirass", img: "rotmg sheet/sh/rogc.png", difficulty: "exalt", type: "armor" },
            { id: "valor-sword-s", name: "Valor", img: "rotmg sheet/sh/valor.png", difficulty: "exalt", type: "weapon" },
            { id: "vanguard-visage-s", name: "Vanguard's Visage", img: "rotmg sheet/sh/vavi.png", difficulty: "exalt", type: "ability" },
            { id: "sentinel-sidearm-s", name: "Sentinel's Sidearm", img: "rotmg sheet/sh/sesi.png", difficulty: "exalt", type: "weapon" },
            { id: "guardian-bracer-s", name: "Bracer of the Guardian", img: "rotmg sheet/sh/botg.png", difficulty: "exalt", type: "ring" },
            { id: "abandoned-shadows-vest-s", name: "Vest of Abandoned Shadows", img: "rotmg sheet/sh/voas.png", difficulty: "exalt", type: "armor" },
            { id: "dusky-catalyst-s", name: "Dusky Catalyst", img: "rotmg sheet/sh/duca.png", difficulty: "exalt", type: "weapon" },
            { id: "primal-arcana-s", name: "Primal Arcana", img: "rotmg sheet/sh/prar.png", difficulty: "exalt", type: "ability" },
            { id: "polarity-poison-s", name: "Polarity Poison", img: "rotmg sheet/sh/popo.png", difficulty: "exalt", type: "ability" },
            { id: "twilight-gemstone-s", name: "The Twilight Gemstone", img: "rotmg sheet/sh/thtg.png", difficulty: "exalt", type: "ability" },
            { id: "warmonger-bow-s", name: "Warmonger", img: "rotmg sheet/sh/warmo.png", difficulty: "exalt", type: "weapon" },
            { id: "peacekeeper-s", name: "Peacekeeper", img: "rotmg sheet/sh/peace.png", difficulty: "exalt", type: "ability" },
            { id: "noble-mandolin-s", name: "Noble Mandolin", img: "rotmg sheet/sh/noma.png", difficulty: "exalt", type: "ability" },
            { id: "forgotten-crown-s", name: "The Forgotten Crown", img: "rotmg sheet/sh/thfc.png", difficulty: "exalt", type: "ring" },
        ]
    },
    {
        dungeon: "Oryx’s Sanctuary",
        bossImg: "rotmg sheet/dung/oryx.gif",
        graves: 9.5,
        items: [
            { id: "ancient-stone-sword-s", name: "Ancient Stone Sword", img: "rotmg sheet/sh/anss.png", difficulty: "exalt", type: "weapon" },
            { id: "spiteful-scutum-s", name: "Spiteful Scutum", img: "rotmg sheet/sh/scut.png", difficulty: "exalt", type: "ability" },
            { id: "mad-god-cloak-s", name: "Cloak of the Mad God", img: "rotmg sheet/sh/cotmg.png", difficulty: "exalt", type: "ability" },
            { id: "superior-staff-s", name: "Superior", img: "rotmg sheet/sh/super.png", difficulty: "exalt", type: "weapon" },
            { id: "genesis-spell-s", name: "Genesis Spell", img: "rotmg sheet/sh/gesp.png", difficulty: "exalt", type: "ability" },
            { id: "diplomatic-robe-s", name: "Diplomatic Robe", img: "rotmg sheet/sh/diro.png", difficulty: "exalt", type: "armor" },
            { id: "chancellor-cranium-s", name: "Chancellor's Cranium", img: "rotmg sheet/sh/chcr.png", difficulty: "exalt", type: "ring" },
            { id: "avarice-dagger-s", name: "Avarice", img: "rotmg sheet/sh/avar.png", difficulty: "exalt", type: "weapon" },
            { id: "gambler-fate-s", name: "Gambler's Fate", img: "rotmg sheet/sh/gafa.png", difficulty: "exalt", type: "ability" },
            { id: "turncoat-cape-s", name: "Turncoat Cape", img: "rotmg sheet/sh/tuca.png", difficulty: "exalt", type: "armor" },
            { id: "collector-monocle-s", name: "Collector's Monocle", img: "rotmg sheet/sh/como.png", difficulty: "exalt", type: "ring" },
            { id: "lumiaire-wand-s", name: "Lumiaire", img: "rotmg sheet/sh/lumi.png", difficulty: "exalt", type: "weapon" },
            { id: "chaotic-scripture-s", name: "Chaotic Scripture", img: "rotmg sheet/sh/chsc.png", difficulty: "exalt", type: "ability" },
            { id: "duality-vesture-s", name: "Vesture of Duality", img: "rotmg sheet/sh/veod.png", difficulty: "exalt", type: "armor" },
            { id: "divine-coronation-s", name: "Divine Coronation", img: "rotmg sheet/sh/dico.png", difficulty: "exalt", type: "ring" },
            { id: "enforcer-katana-s", name: "Enforcer", img: "rotmg sheet/sh/enfo.png", difficulty: "exalt", type: "weapon" },
            { id: "ballistic-star-s", name: "Ballistic Star", img: "rotmg sheet/sh/bast.png", difficulty: "exalt", type: "ability" },
            { id: "centaur-shielding-s", name: "Centaur's Shielding", img: "rotmg sheet/sh/cesh.png", difficulty: "exalt", type: "armor" },
            { id: "battalion-banner-s", name: "Battalion Banner", img: "rotmg sheet/sh/baba.png", difficulty: "exalt", type: "ring" },
            { id: "divinity-sword-s", name: "Divinity", img: "rotmg sheet/sh/divi.png", difficulty: "exalt", type: "weapon" },
            { id: "oryx-escutcheon-s", name: "Oryx's Escutcheon", img: "rotmg sheet/sh/ores.png", difficulty: "exalt", type: "ability" },
            { id: "gladiator-guard-s", name: "Gladiator Guard", img: "rotmg sheet/sh/glgu.png", difficulty: "exalt", type: "armor" },
            { id: "exalted-horn-s", name: "Exalted God's Horn", img: "rotmg sheet/sh/exgh.png", difficulty: "exalt", type: "ring" },
        ]
    }
];

// --- GRID ELEMENT INITIALIZATION ---
const grid = document.getElementById('tracker-grid');
const tooltip = document.getElementById('tooltip');
const itemElementMap = new Map();

// --- PROGRESS COUNT METRICS ---
function updateProgress() {
    const allIds = data.flatMap(s => s.items.map(i => i.id));
    const obtained = allIds.filter(id => localStorage.getItem(id) === 'true').length;
    const total = allIds.length;
    
    const fillEl = document.getElementById('progress-bar-fill');
    const labelEl = document.getElementById('progress-label');
    
    if (fillEl) fillEl.style.width = total > 0 ? (obtained / total * 100) + '%' : '0%';
    if (labelEl) labelEl.textContent = `${obtained} / ${total} obtained`;
}

// --- MAIN GRID CARD GENERATION LOOP ---
if (grid) {
    data.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('section-card');
        if (section.items.length > 12) {
            sectionDiv.classList.add('section-card-wide');
        }

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
            
            if (localStorage.getItem(item.id) === 'true') {
                img.classList.add('obtained');
            }

            itemElementMap.set(item.id, img);

            img.addEventListener('click', () => {
                const hasIt = img.classList.toggle('obtained');
                localStorage.setItem(item.id, hasIt);
                updateProgress(); 
                executeGlobalFilters();
            });

            itemsList.appendChild(img);
        });

        // --- HOVER BOSS CONTAINER: FRACTIONAL DECI-GRAVEYARD ENGINE ---
        if (bossContainerEl && tooltip) {
            bossContainerEl.addEventListener('mouseenter', () => {
                tooltip.style.display = 'block';
                
                // *** WORD 'GRAVES' DELETED FROM TITLE ***
                tooltip.innerHTML = `
                    <div style="font-weight: bold; font-size: 14px; margin-bottom: 8px; color: #c8a951; text-align: center; border-bottom: 1px solid #444; padding-bottom: 4px;">
                        ${section.dungeon}
                    </div>
                    <div class="tooltip-grave-grid" style="display: grid; grid-template-columns: repeat(5, 40px); gap: 6px; justify-content: center; background: rgba(0,0,0,0.4); padding: 8px; border-radius: 4px;"></div>
                `;
                
                const graveGridContainer = tooltip.querySelector('.tooltip-grave-grid');

                const totalGravesValue = section.graves || 0;
                const fullGravesCount = Math.floor(totalGravesValue); // Extracts whole numbers
                const hasHalfGrave = (totalGravesValue % 1) !== 0;     // Detects if a remainder exists

                // 1. Output completely full graves
                for (let i = 0; i < fullGravesCount; i++) {
                    const graveHtml = `
                        <div style="width: 40px; height: 40px; background: rgba(200, 169, 81, 0.05); border: 1px solid #c8a951; display: flex; justify-content: center; align-items: center; border-radius: 4px;">
                            <img src="rotmg sheet/grave.png" style="width: 32px; height: 32px; image-rendering: pixelated; object-fit: contain;">
                        </div>
                    `;
                    graveGridContainer.insertAdjacentHTML('beforeend', graveHtml);
                }

                // 2. Output half-grave if applicable
                if (hasHalfGrave) {
                    const halfGraveHtml = `
                        <div style="width: 40px; height: 40px; background: rgba(200, 169, 81, 0.05); border: 1px solid #c8a951; display: flex; justify-content: center; align-items: center; border-radius: 4px;">
                            <img src="rotmg sheet/graveh.png" style="width: 32px; height: 32px; image-rendering: pixelated; object-fit: contain;">
                        </div>
                    `;
                    graveGridContainer.insertAdjacentHTML('beforeend', halfGraveHtml);
                }

                // 3. Dynamic filler plots mapping to max scale limits (adjusting for high-level dungeons)
                const baseSlotTarget = 10;
                const totalRenderedIcons = fullGravesCount + (hasHalfGrave ? 1 : 0);
                
                // For endgame setups (The Shatters/Oryx), dynamic expansion sets scaling cleanly
                let maxTargetScale = baseSlotTarget;
                if (totalRenderedIcons > baseSlotTarget) {
                    maxTargetScale = Math.ceil(totalRenderedIcons / 5) * 5; 
                }

                const extraPlotsNeeded = maxTargetScale - totalRenderedIcons;
                for (let i = 0; i < extraPlotsNeeded; i++) {
                    const emptySlotHtml = `
                        <div style="width: 40px; height: 40px; background: rgba(0, 0, 0, 0.5); border: 1px dashed #555; border-radius: 4px;"></div>
                    `;
                    graveGridContainer.insertAdjacentHTML('beforeend', emptySlotHtml);
                }
            });

            bossContainerEl.addEventListener('mousemove', (e) => {
                tooltip.style.left = (e.clientX + 15) + 'px';
                tooltip.style.top = (e.clientY + 15) + 'px';
            });

            bossContainerEl.addEventListener('mouseleave', () => {
                tooltip.style.display = 'none';
            });
        }

        grid.appendChild(sectionDiv);
    });
}

// --- CENTRAL SEARCH, TYPE, DIFFICULTY & MISSING FILTER ENGINE ---
function executeGlobalFilters() {
    const search = document.getElementById("search-bar").value.toLowerCase().trim();
    const difficultyVal = document.getElementById("difficulty-filter").value;
    const typeVal = document.getElementById("type-filter").value;
    const missingOnly = document.getElementById("missing-filter").checked;
    const allSections = document.querySelectorAll(".section-card");

    data.forEach((section, index) => {
        const card = allSections[index];
        if (!card) return;

        let visibleItemsInCard = 0;
        const dungeonMatch = section.dungeon.toLowerCase().includes(search);

        section.items.forEach(item => {
            const imgEl = itemElementMap.get(item.id);
            if (!imgEl) return;

            const isObtained = imgEl.classList.contains('obtained');

            const itemTextMatch = search === "" || dungeonMatch || item.name.toLowerCase().includes(search);
            const itemDifficultyMatch = difficultyVal === "all" || (item.difficulty && item.difficulty === difficultyVal);
            const itemTypeMatch = typeVal === "all" || (item.type && item.type === typeVal);
            const itemMissingMatch = !missingOnly || !isObtained;

            if (itemTextMatch && itemDifficultyMatch && itemTypeMatch && itemMissingMatch) {
                imgEl.style.display = "";
                visibleItemsInCard++;
            } else {
                imgEl.style.display = "none";
            }
        });

        if (visibleItemsInCard > 0) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

// Attach filter listeners
const searchBar = document.getElementById("search-bar");
const diffFilter = document.getElementById("difficulty-filter");
const typeFilter = document.getElementById("type-filter");
const missingFilter = document.getElementById("missing-filter");

if (searchBar) searchBar.addEventListener("input", executeGlobalFilters);
if (diffFilter) diffFilter.addEventListener("change", executeGlobalFilters);
if (typeFilter) typeFilter.addEventListener("change", executeGlobalFilters);
if (missingFilter) missingFilter.addEventListener("change", executeGlobalFilters);

// --- RESET BUTTON ---
const resetBtn = document.getElementById('reset-btn');
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        if (confirm("Are you sure? This will wipe all your progress!")) {
            data.forEach(section => {
                section.items.forEach(item => {
                    localStorage.removeItem(item.id);
                });
            });
            location.reload();
        }
    });
}

// --- BACK TO TOP SCROLL ANIMATOR ---
window.onscroll = function() {
    const topBtn = document.getElementById("topBtn");
    if (topBtn) {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }
};

const topBtn = document.getElementById("topBtn");
if (topBtn) {
    topBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
}

updateProgress();