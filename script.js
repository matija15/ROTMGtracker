const data = [
    {
        dungeon: "Acidified Assassin Set",
        bossImg: "rotmg sheet/st/acidas/acidified assassin.png",
        items: [
            { id: "acidas-tooth", name: "Toxin Tooth", img: "rotmg sheet/st/acidas/tooth.png", location: "Lost Halls", dungeonImg: "rotmg sheet/dung/toxs.png", bossSources: ["rotmg sheet/mini/mara.png", "rotmg sheet/mini/gtsg.png"] },
            { id: "acidas-virulent", name: "Virulent Venom", img: "rotmg sheet/st/acidas/virulent.png", location: "Lost Halls", dungeonImg: "rotmg sheet/dung/toxs.png", bossSources: ["rotmg sheet/mini/mara.png", "rotmg sheet/mini/gtsg.png"] },
            { id: "acidas-armor", name: "Acidic Armor", img: "rotmg sheet/st/acidas/armor.png", location: "Lost Halls", dungeonImg: "rotmg sheet/dung/toxs.png", bossSources: ["rotmg sheet/mini/gora.png", "rotmg sheet/mini/gtsg.png", "rotmg sheet/mini/seal.png"] },
            { id: "acidas-peridot", name: "Pernicious Peridot", img: "rotmg sheet/st/acidas/peridot.png", location: "Lost Halls", dungeonImg: "rotmg sheet/dung/toxs.png", bossSources: ["rotmg sheet/mini/gora.png", "rotmg sheet/mini/gtsg.png", "rotmg sheet/mini/seal.png"] }
        ]
    },
    {
        dungeon: "Vampire Rogue Set",
        bossImg: "rotmg sheet/st/vamrs/vampire rogue.png",
        items: [
            { id: "vamrs-scythe", name: "Soulcursed Scythe", img: "rotmg sheet/st/vamrs/scythe.png", location: "Manor of the Immortals ", dungeonImg: "rotmg sheet/dung/moti.png", bossSources: ["rotmg sheet/mini/loru.png", "rotmg sheet/mini/coff.png"] },
            { id: "vamrs-cape", name: "Vampiric Cape", img: "rotmg sheet/st/vamrs/cape.png", location: "Manor of the Immortals", dungeonImg: "rotmg sheet/dung/moti.png", bossSources: ["rotmg sheet/mini/loru.png","rotmg sheet/mini/coff.png"] },
            { id: "vamrs-hide", name: "Hallowed Hide", img: "rotmg sheet/st/vamrs/hide.png", location: "Manor of the Immortals", dungeonImg: "rotmg sheet/dung/moti.png", bossSources: ["rotmg sheet/mini/lebv.png","rotmg sheet/mini/life.png","rotmg sheet/mini/argu.png","rotmg sheet/mini/hehe.png","rotmg sheet/mini/hell.png","rotmg sheet/mini/nosf.png"] },
            { id: "vamrs-rosary", name: "Ruthven's Rosary", img: "rotmg sheet/st/vamrs/rosary.png", location: "Manor of the Immortals", dungeonImg: "rotmg sheet/dung/moti.png", bossSources: ["rotmg sheet/mini/lebv.png","rotmg sheet/mini/life.png","rotmg sheet/mini/argu.png","rotmg sheet/mini/hehe.png","rotmg sheet/mini/hell.png","rotmg sheet/mini/nosf.png"] }
        ]
    },
    {
        dungeon: "Alchemist Assassin Set",
        bossImg: "rotmg sheet/st/alcass/boss.png",
        items: [
            { id: "alcass-frog", name: "Toxic Toad", img: "rotmg sheet/st/alcass/frog.png", location: "Spectral Penitentiary (Forge)", dungeonImg: "rotmg sheet/mini/aast.png", bossSources: ["rotmg sheet/mini/grgr.gif","rotmg sheet/mini/ovoc.gif"] },
            { id: "alcass-garbs", name: "Alchemist's Disheveled Garbs", img: "rotmg sheet/st/alcass/garbs.png", location: "Spectral Penitentiary (Forge)", dungeonImg: "rotmg sheet/mini/aast.png", bossSources: ["rotmg sheet/mini/grgr.gif","rotmg sheet/mini/ovoc.gif"] },
            { id: "alcass-gloves", name: "Protective Gloves", img: "rotmg sheet/st/alcass/gloves.png", location: "Spectral Penitentiary (Forge)", dungeonImg: "rotmg sheet/mini/aast.png", bossSources: ["rotmg sheet/mini/grgr.gif","rotmg sheet/mini/ovoc.gif"] },
            { id: "alcass-stick", name: "Makeshift Blowpipe", img: "rotmg sheet/st/alcass/stick.png", location: "Spectral Penitentiary (Forge)", dungeonImg: "rotmg sheet/mini/aast.png", bossSources: ["rotmg sheet/mini/grgr.gif","rotmg sheet/mini/ovoc.gif"] }
        ]
    },
    {
        dungeon: "Skuld 2 The ReGhostening Set",
        bossImg: "rotmg sheet/st/skuld/skuld 2.png",
        items: [
            { id: "skuld-dagger", name: "Etherite Dagger", img: "rotmg sheet/st/skuld/dagger.png", location: "Haunted Cemetery", dungeonImg: "rotmg sheet/dung/hace.gif", bossSources: ["rotmg sheet/mini/ghos.png","rotmg sheet/mini/grca.png"] },
            { id: "skuld-drape", name: "Ghastly Drape", img: "rotmg sheet/st/skuld/drape.png", location: "Haunted Cemetery", dungeonImg: "rotmg sheet/dung/hace.gif", bossSources: ["rotmg sheet/mini/ghos.png","rotmg sheet/mini/puki.png"] },
            { id: "skuld-mantle", name: "Mantle of Skuld", img: "rotmg sheet/st/skuld/mantle.png", location: "Haunted Cemetery", dungeonImg: "rotmg sheet/dung/hace.gif", bossSources: ["rotmg sheet/mini/ghos.png","rotmg sheet/mini/ghbr.png"] },
            { id: "skuld-ring", name: "Spectral Ring of Horrors", img: "rotmg sheet/st/skuld/ring.png", location: "Haunted Cemetery", dungeonImg: "rotmg sheet/dung/hace.gif", bossSources: ["rotmg sheet/mini/ghos.png","rotmg sheet/mini/trma.png"] }
        ]
    },
    {
        dungeon: "Phantom Archer Set",
        bossImg: "rotmg sheet/st/phaas/phantom.png",
        items: [
            { id: "phaas-crossbow", name: "Deathless Crossbow", img: "rotmg sheet/st/phaas/crossbow.png", location: "Cursed Library", dungeonImg: "rotmg sheet/dung/curl.gif", bossSources: ["rotmg sheet/mini/coph.png"] },
            { id: "phaas-brigandine", name: "Wraith's Brigandine", img: "rotmg sheet/st/phaas/brigandine.png", location: "Cursed Library", dungeonImg: "rotmg sheet/dung/curl.gif", bossSources: ["rotmg sheet/mini/avta.png","rotmg sheet/mini/coph.png"] },
            { id: "phaas-quiver", name: "Quiver of Shrieking Specters", img: "rotmg sheet/st/phaas/quiver.png", location: "Cursed Library", dungeonImg: "rotmg sheet/dung/curl.gif", bossSources: ["rotmg sheet/mini/avta.png"] },
            { id: "phaas-ring", name: "Revenant Ring", img: "rotmg sheet/st/phaas/ring.png", location: "Cursed Library", dungeonImg: "rotmg sheet/dung/curl.gif", bossSources: ["rotmg sheet/mini/avta.png","rotmg sheet/mini/coph.png"] }
        ]
    },
    {
        dungeon: "Treasure Hunter Archer Set",
        bossImg: "rotmg sheet/st/thas/treasure hunter.png",
        items: [
            { id: "thas-bow", name: "Resplendent Bow", img: "rotmg sheet/st/thas/bow.png", location: "Ancient Ruins.", dungeonImg: "rotmg sheet/dung/ancr.png", bossSources: ["rotmg sheet/mini/sati.png","rotmg sheet/mini/geni.png"] },
            { id: "thas-quiver", name: "Embellished Quiver", img: "rotmg sheet/st/thas/quiver.png", location: "Ancient Ruins.", dungeonImg: "rotmg sheet/dung/ancr.png", bossSources: ["rotmg sheet/mini/sati.png","rotmg sheet/mini/geni.png"] },
            { id: "thas-armor", name: "Ornate Armor", img: "rotmg sheet/st/thas/armor.png", location: "Ancient Ruins.", dungeonImg: "rotmg sheet/dung/ancr.png", bossSources: ["rotmg sheet/mini/anmo.png","rotmg sheet/mini/sael.png"] },
            { id: "thas-amulet", name: "Aquamarine Amulet", img: "rotmg sheet/st/thas/amulet.png", location: "Ancient Ruins.", dungeonImg: "rotmg sheet/dung/ancr.png", bossSources: ["rotmg sheet/mini/anmo.png","rotmg sheet/mini/sael.png"] }
        ]
    },
    {
        dungeon: "Kogbold Turretsmith Archer Set",
        bossImg: "rotmg sheet/st/ktas/kogbold turretsmith.png",
        items: [
            { id: "ktas-cannon", name: "Experimental Cannon", img: "rotmg sheet/st/ktas/cannon.png", location: "Kogbold Steamworks (Forge)", dungeonImg: "rotmg sheet/mini/kiast.png", bossSources: ["rotmg sheet/mini/facc.gif","rotmg sheet/mini/facc2.gif","rotmg sheet/mini/facc3.gif"] },
            { id: "ktas-turret", name: "Sentry Turret", img: "rotmg sheet/st/ktas/turret.png", location: "Kogbold Steamworks (Forge)", dungeonImg: "rotmg sheet/mini/kiast.png", bossSources: ["rotmg sheet/mini/facc.gif","rotmg sheet/mini/facc2.gif","rotmg sheet/mini/facc3.gif"] },
            { id: "ktas-apron", name: "Tinkerers Apron", img: "rotmg sheet/st/ktas/apron.png", location: "Kogbold Steamworks (Forge)", dungeonImg: "rotmg sheet/mini/kiast.png", bossSources: ["rotmg sheet/mini/facc.gif","rotmg sheet/mini/facc2.gif","rotmg sheet/mini/facc3.gif"] },
            { id: "ktas-monocular", name: "Targeting Monocular", img: "rotmg sheet/st/ktas/monocular.png", location: "Kogbold Steamworks (Forge)", dungeonImg: "rotmg sheet/mini/kiast.png", bossSources: ["rotmg sheet/mini/facc.gif","rotmg sheet/mini/facc2.gif","rotmg sheet/mini/facc3.gif"] }
        ]
    },
    {
        dungeon: "Golden Archer Set",
        bossImg: "rotmg sheet/st/golas/golden archer.png",
        items: [
            { id: "golas-bow", name: "Brilliance Bow", img: "rotmg sheet/st/golas/bow.png", location: "The Machine", dungeonImg: "rotmg sheet/dung/mach.png", bossSources: ["rotmg sheet/mini/null.png"] },
            { id: "golas-quiver", name: "Quintessential Quiver", img: "rotmg sheet/st/golas/quiver.png", location: "The Machine", dungeonImg: "rotmg sheet/dung/mach.png", bossSources: ["rotmg sheet/mini/thgl.png"] },
            { id: "golas-leather", name: "Luxurious Leather", img: "rotmg sheet/st/golas/leather.png", location: "The Machine", dungeonImg: "rotmg sheet/dung/mach.png", bossSources: ["rotmg sheet/mini/thse.png"] },
            { id: "golas-ring", name: "Regal Ring", img: "rotmg sheet/st/golas/ring.png", location: "The Machine", dungeonImg: "rotmg sheet/dung/mach.png", bossSources: ["rotmg sheet/mini/thse.png"] }
        ]
    },
    {
        dungeon: "Valentine's Day Archer Set",
        bossImg: "rotmg sheet/st/vdas/boss.png",
        items: [
            { id: "vdas-bow", name: "Heartstruck Bow", img: "rotmg sheet/st/vdas/bow.png", location: "Valentine's Mystery Item (event)", dungeonImg: "rotmg sheet/dung/vami.png", bossSources: ["rotmg sheet/mini/whba.png"]},
            { id: "vdas-quiver", name: "Quiver of Dazing Love", img: "rotmg sheet/st/vdas/quiver.png", location: "Valentine's Mystery Item (event)", dungeonImg: "rotmg sheet/dung/vami.png", bossSources: ["rotmg sheet/mini/whba.png"]},
            { id: "vdas-garment", name: "Cupid's Garments", img: "rotmg sheet/st/vdas/garment.png", location: "Valentine's Mystery Item (event)", dungeonImg: "rotmg sheet/dung/vami.png", bossSources: ["rotmg sheet/mini/whba.png"]},
            { id: "vdas-ring", name: "Ring of Unbound Love", img: "rotmg sheet/st/vdas/ring.png", location: "Valentine's Mystery Item (event)", dungeonImg: "rotmg sheet/dung/vami.png", bossSources: ["rotmg sheet/mini/whba.png"]}
        ]
    },
    {
        dungeon: "Reanimated Archer Set",
        bossImg: "rotmg sheet/st/reaas/boss.png",
        items: [
            { id: "reaas-bow", name: "Bone Bow", img: "rotmg sheet/st/reaas/bow.png", location: "Legacy Heroic Abyss of Demons (event)", dungeonImg: "rotmg sheet/dung/lhaod.png", bossSources: ["rotmg sheet/mini/wisk.png","rotmg sheet/mini/hamc.png"] },
            { id: "reaas-quiver", name: "Spinal Quiver", img: "rotmg sheet/st/reaas/quiver.png", location: "Legacy Heroic Abyss of Demons (event)", dungeonImg: "rotmg sheet/dung/lhaod.png", bossSources: ["rotmg sheet/mini/wisk.png","rotmg sheet/mini/hamc.png"] },
            { id: "reaas-torso", name: "Torso Tunic", img: "rotmg sheet/st/reaas/torso.png", location: "Legacy Heroic Abyss of Demons (event)", dungeonImg: "rotmg sheet/dung/lhaod.png", bossSources: ["rotmg sheet/mini/wisk.png","rotmg sheet/mini/hamc.png"] },
            { id: "reaas-collar", name: "Collarbone Collar", img: "rotmg sheet/st/reaas/collar.png", location: "Legacy Heroic Abyss of Demons (event)", dungeonImg: "rotmg sheet/dung/lhaod.png", bossSources: ["rotmg sheet/mini/wisk.png","rotmg sheet/mini/hamc.png"] }
        ]
    },
    {
        dungeon: "Twilight Archmage Set",
        bossImg: "rotmg sheet/st/twias/boss.png",
        items: [
            { id: "twias-tether", name: "Corruption Tether", img: "rotmg sheet/st/twias/tether.png", location: "Shatters", dungeonImg: "rotmg sheet/dung/shat.png", bossSources: ["rotmg sheet/mini/aotfk.gif","rotmg sheet/mini/pywa.png","rotmg sheet/mini/pywa2.png","rotmg sheet/mini/crwa.png","rotmg sheet/mini/crwa2.png"] },
            { id: "twias-eminence", name: "Ancient Eminence", img: "rotmg sheet/st/twias/eminence.png", location: "Shatters", dungeonImg: "rotmg sheet/dung/shat.png", bossSources: ["rotmg sheet/mini/pywa.png","rotmg sheet/mini/pywa2.png","rotmg sheet/mini/fima.png","rotmg sheet/mini/fima2.png","rotmg sheet/mini/fiad.png","rotmg sheet/mini/fiad2.png","rotmg sheet/mini/arof.png","rotmg sheet/mini/arof2.png"] },
            { id: "twias-shroud", name: "Twilight Shroud", img: "rotmg sheet/st/twias/shroud.png", location: "Shatters", dungeonImg: "rotmg sheet/dung/shat.png", bossSources: ["rotmg sheet/mini/icma.png","rotmg sheet/mini/icma2.png","rotmg sheet/mini/icad.png","rotmg sheet/mini/icad2.png","rotmg sheet/mini/glar.png","rotmg sheet/mini/glar2.png","rotmg sheet/mini/crwa.png","rotmg sheet/mini/crwa2.png"] },
            { id: "twias-ring", name: "Defiled Equilibrium", img: "rotmg sheet/st/twias/ring.png", location: "Shatters", dungeonImg: "rotmg sheet/dung/shat.png", bossSources: ["rotmg sheet/mini/icma.png","rotmg sheet/mini/icma2.png","rotmg sheet/mini/icad.png","rotmg sheet/mini/icad2.png","rotmg sheet/mini/fima.png","rotmg sheet/mini/fima2.png","rotmg sheet/mini/fiad.png","rotmg sheet/mini/fiad2.png"] }
        ]
    },
    {
        dungeon: "Slurp Scion Wizard Set",
        bossImg: "rotmg sheet/st/ssws/boss.png",
        items: [
            { id: "ssws-trident", name: "Tideturner Trident", img: "rotmg sheet/st/ssws/trident.png", location: "Ocean Trench", dungeonImg: "rotmg sheet/dung/ocet.png", bossSources: ["rotmg sheet/mini/ttmg.png","rotmg sheet/mini/cogi.png"] },
            { id: "ssws-scroll", name: "Slurpian Sea Scroll", img: "rotmg sheet/st/ssws/sea scroll.png", location: "Ocean Trench", dungeonImg: "rotmg sheet/dung/ocet.png", bossSources: ["rotmg sheet/mini/ttmg.png","rotmg sheet/mini/cogi.png"] },
            { id: "ssws-apparel", name: "Oceanic Apparel", img: "rotmg sheet/st/ssws/apparel.png", location: "Ocean Trench", dungeonImg: "rotmg sheet/dung/ocet.png", bossSources: ["rotmg sheet/mini/fiwa.png","rotmg sheet/mini/gisq.png","rotmg sheet/mini/sema.png","rotmg sheet/mini/sesh.png"] },
            { id: "ssws-keepsake", name: "Imperial Keepsake", img: "rotmg sheet/st/ssws/keepsake.png", location: "Ocean Trench", dungeonImg: "rotmg sheet/dung/ocet.png", bossSources: ["rotmg sheet/mini/fiwa.png","rotmg sheet/mini/gisq.png","rotmg sheet/mini/sema.png","rotmg sheet/mini/sesh.png"] }
        ]
    },
    {
        dungeon: "Kogbold Pyrotechnician Wizard Set",
        bossImg: "rotmg sheet/st/kpws/boss.png",
        items: [
            { id: "kpws-launcher", name: "Rocket Launcher", img: "rotmg sheet/st/kpws/launcher.png", location: "Kogbold Steamworks (Forge)", dungeonImg: "rotmg sheet/mini/kpwss.png", bossSources: ["rotmg sheet/mini/kofm.gif","rotmg sheet/mini/stec.png"] },
            { id: "kpws-firework", name: "Unstable Firework", img: "rotmg sheet/st/kpws/firework.png", location: "Kogbold Steamworks (Forge)", dungeonImg: "rotmg sheet/mini/kpwss.png", bossSources: ["rotmg sheet/mini/kofm.gif","rotmg sheet/mini/stec.png"] },
            { id: "kpws-robe", name: "Blast Proof Robes", img: "rotmg sheet/st/kpws/rob.png", location: "Kogbold Steamworks (Forge)", dungeonImg: "rotmg sheet/mini/kpwss.png", bossSources: ["rotmg sheet/mini/kofm.gif","rotmg sheet/mini/stec.png"] },
            { id: "kpws-nade", name: "Lucky Grenade", img: "rotmg sheet/st/kpws/nade.png", location: "Kogbold Steamworks (Forge)", dungeonImg: "rotmg sheet/mini/kpwss.png", bossSources: ["rotmg sheet/mini/kofm.gif","rotmg sheet/mini/stec.png"] }
        ]
    },
    {
        dungeon: "Paranormal Wizard Set",
        bossImg: "rotmg sheet/st/parws/boss.png",
        items: [
            { id: "parws-staff", name: "Supernatural Staff", img: "rotmg sheet/st/parws/staff.png", location: "The Shatters", dungeonImg: "rotmg sheet/dung/shat.png", bossSources: ["rotmg sheet/mini/tfhk.png","rotmg sheet/mini/tfhk2.png"] },
            { id: "parws-spell", name: "Spectral Spell", img: "rotmg sheet/st/parws/spell.png", location: "The Shatters", dungeonImg: "rotmg sheet/dung/shat.png", bossSources: ["rotmg sheet/mini/twar.png"] },
            { id: "parws-mantle", name: "Immortal Mantle", img: "rotmg sheet/st/parws/mantle.png", location: "The Shatters", dungeonImg: "rotmg sheet/dung/shat.png", bossSources: ["rotmg sheet/mini/twar.png"] },
            { id: "parws-ring", name: "Phantom Pendant", img: "rotmg sheet/st/parws/ring.png", location: "The Shatters", dungeonImg: "rotmg sheet/dung/shat.png", bossSources: ["rotmg sheet/mini/icad.png","rotmg sheet/mini/icad2.png"] }
        ]
    },
    {
        dungeon: "Undersea Phantom Wizard Set",
        bossImg: "rotmg sheet/st/upws/boss.png",
        items: [
            { id: "upws-harpoon", name: "Cursed Harpoon", img: "rotmg sheet/st/upws/harpoon.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/smos.png",] },
            { id: "upws-charge", name: "Depth Charge", img: "rotmg sheet/st/upws/charge.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/smos.png",] },
            { id: "upws-rags", name: "Phosphorescent Rags", img: "rotmg sheet/st/upws/rags.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/smos.png",] },
            { id: "upws-weights", name: "Diving Weights", img: "rotmg sheet/st/upws/weights.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/smos.png",] }
        ]
    },
    {
        dungeon: "Legacy Twilight Archmage Set",
        bossImg: "rotmg sheet/st/ltas/boss.png",
        items: [
            { id: "ltas-staff", name: "Legacy Sentient Staff", img: "rotmg sheet/st/ltas/staff.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png"},
            { id: "ltas-spell", name: "Legacy Ancient Spell: Pierce", img: "rotmg sheet/st/ltas/spell.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png"},
            { id: "ltas-robe", name: "Legacy Robe of Twilight", img: "rotmg sheet/st/ltas/robe.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png"},
            { id: "ltas-ring", name: "Legacy Forgotten Ring", img: "rotmg sheet/st/ltas/ring.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png"}
        ]
    },
    {
        dungeon: "Priest of Geb Set",
        bossImg: "rotmg sheet/st/pogs/boss.png",
        items: [
            { id: "pogs-wand", name: "Wand of Geb", img: "rotmg sheet/st/pogs/wand.png", location: "Tomb of the Ancients", dungeonImg: "rotmg sheet/dung/tota.png", bossSources: ["rotmg sheet/mini/geb.png","rotmg sheet/mini/geb2.png","rotmg sheet/mini/sarc.png","rotmg sheet/mini/trsa.png"] },
            { id: "pogs-book", name: "Book of Geb", img: "rotmg sheet/st/pogs/book.png", location: "Tomb of the Ancients", dungeonImg: "rotmg sheet/dung/tota.png", bossSources: ["rotmg sheet/mini/nut.png","rotmg sheet/mini/nut2.png","rotmg sheet/mini/sarc.png","rotmg sheet/mini/trsa.png"] },
            { id: "pogs-shendyt", name: "Shendyt of Geb", img: "rotmg sheet/st/pogs/shendyt.png", location: "Tomb of the Ancients", dungeonImg: "rotmg sheet/dung/tota.png", bossSources: ["rotmg sheet/mini/bes.png","rotmg sheet/mini/bes2.png","rotmg sheet/mini/sarc.png","rotmg sheet/mini/trsa.png"] },
            { id: "pogs-ring", name: "Geb's Ring of Wisdom", img: "rotmg sheet/st/pogs/ring.png", location: "Tomb of the Ancients", dungeonImg: "rotmg sheet/dung/tota.png", bossSources: ["rotmg sheet/mini/wopr.png","rotmg sheet/mini/wopr2.png"] }
        ]
    },
    {
        dungeon: "Mad God's Messenger Set",
        bossImg: "rotmg sheet/st/mgms/boss.png",
        items: [
            { id: "mgms-wand", name: "Theurgy Wand", img: "rotmg sheet/st/mgms/wand.png", location: "Oryx’s Castle", dungeonImg: "rotmg sheet/dung/oryxch.png", bossSources: ["rotmg sheet/mini/jatd.png","rotmg sheet/mini/otmg.png","rotmg sheet/mini/gioc.png"] },
            { id: "mgms-merlot", name: "Ceremonial Merlot", img: "rotmg sheet/st/mgms/merlot.png", location: "Oryx’s Castle", dungeonImg: "rotmg sheet/dung/oryxch.png", bossSources: ["rotmg sheet/mini/jatd.png","rotmg sheet/mini/otmg.png","rotmg sheet/mini/gioc.png"] },
            { id: "mgms-robe", name: "Anointed Robe", img: "rotmg sheet/st/mgms/robe.png", location: "Oryx’s Castle", dungeonImg: "rotmg sheet/dung/oryxch.png", bossSources: ["rotmg sheet/mini/stgu.png","rotmg sheet/mini/stgu2.png","rotmg sheet/mini/suoa.png"] },
            { id: "mgms-ring", name: "Ring of Pagan Favor", img: "rotmg sheet/st/mgms/ring.png", location: "Oryx’s Castle", dungeonImg: "rotmg sheet/dung/oryxch.png", bossSources: ["rotmg sheet/mini/broo.png","rotmg sheet/mini/cooo.png"] }
        ]
    },
    {
        dungeon: "Plague Doctor Priest Set",
        bossImg: "rotmg sheet/st/pdps/boss.png",
        items: [
            { id: "pdps-cane", name: "Cane of Caduceus", img: "rotmg sheet/st/pdps/cane.png", location: "Spectral Penitentiary (Forge)", dungeonImg: "rotmg sheet/mini/pdpss.png", bossSources: ["rotmg sheet/mini/dolo.gif","rotmg sheet/mini/grzo.png"] },
            { id: "pdps-leeches", name: "Bloodletting Leeches", img: "rotmg sheet/st/pdps/leeches.png", location: "Spectral Penitentiary (Forge)", dungeonImg: "rotmg sheet/mini/pdpss.png", bossSources: ["rotmg sheet/mini/dolo.gif","rotmg sheet/mini/grzo.png"] },
            { id: "pdps-coat", name: "Doctor's Overcoat", img: "rotmg sheet/st/pdps/coat.png", location: "Spectral Penitentiary (Forge)", dungeonImg: "rotmg sheet/mini/pdpss.png", bossSources: ["rotmg sheet/mini/dolo.gif","rotmg sheet/mini/grzo.png"] },
            { id: "pdps-mask", name: "Plague Mask", img: "rotmg sheet/st/pdps/mask.png", location: "Spectral Penitentiary (Forge)", dungeonImg: "rotmg sheet/mini/pdpss.png", bossSources: ["rotmg sheet/mini/dolo.gif","rotmg sheet/mini/grzo.png"] }
        ]
    },
    {
        dungeon: "Archexorcist Priest Set",
        bossImg: "rotmg sheet/st/arcps/boss.png",
        items: [
            { id: "arcps-artifact", name: "Holy Artifact", img: "rotmg sheet/st/arcps/artifact.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png"},
            { id: "arcps-tome", name: "Tome of Exorcism", img: "rotmg sheet/st/arcps/tome.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png"},
            { id: "arcps-garb", name: "Garb of the Ordained", img: "rotmg sheet/st/arcps/garb.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png"},
            { id: "arcps-ring", name: "Pontifex Ring", img: "rotmg sheet/st/arcps/ring.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png"}
        ]
    },
    {
        dungeon: "Dragon Tamer Set",
        bossImg: "rotmg sheet/st/drats/boss.png",
        items: [
            { id: "drats-indomptable", name: "Indomptable", img: "rotmg sheet/st/drats/indomptable.png", location: "Lair of Draconis", dungeonImg: "rotmg sheet/dung/laod.png", bossSources: ["rotmg sheet/mini/ptcd.png"] },
            { id: "drats-helm", name: "Helm of Draconic Dominance", img: "rotmg sheet/st/drats/helm.png", location: "Lair of Draconis", dungeonImg: "rotmg sheet/dung/laod.png", bossSources: ["rotmg sheet/mini/ptcd.png"] },
            { id: "drats-heart", name: "Zaarvox's Heart", img: "rotmg sheet/st/drats/heart.png", location: "Lair of Draconis", dungeonImg: "rotmg sheet/dung/laod.png", bossSources: ["rotmg sheet/mini/ptcd.png"] },
            { id: "drats-amulet", name: "Amulet of Drakefyre", img: "rotmg sheet/st/drats/amulet.png", location: "Lair of Draconis", dungeonImg: "rotmg sheet/dung/laod.png", bossSources: ["rotmg sheet/mini/ptcd.png"] }
        ]
    },
    {
        dungeon: "Pirate King Warrior Set",
        bossImg: "rotmg sheet/st/pkws/boss.png",
        items: [
            { id: "pkws-sickle", name: "Swashbuckler's Sickle", img: "rotmg sheet/st/pkws/sickle.png", location: "Deadwater Docks", dungeonImg: "rotmg sheet/dung/dedo.gif", bossSources: ["rotmg sheet/mini/jbtpk.png","rotmg sheet/mini/cacr.png","rotmg sheet/mini/cocr.png"] },
            { id: "pkws-naval", name: "Naval Uniform", img: "rotmg sheet/st/pkws/naval.png", location: "Deadwater Docks", dungeonImg: "rotmg sheet/dung/dedo.gif", bossSources: ["rotmg sheet/mini/bibo.png","rotmg sheet/mini/bibo1.png","rotmg sheet/mini/bibo2.png"] },
            { id: "pkws-tricorne", name: "Tricorne of the High Seas", img: "rotmg sheet/st/pkws/tricorne.png", location: "Deadwater Docks", dungeonImg: "rotmg sheet/dung/dedo.gif", bossSources: ["rotmg sheet/mini/jbtpk.png"] },
            { id: "pkws-hook", name: "First Mate's Hook", img: "rotmg sheet/st/pkws/hook.png", location: "Deadwater Docks", dungeonImg: "rotmg sheet/dung/dedo.gif", bossSources: ["rotmg sheet/mini/dead.png","rotmg sheet/mini/deca.png","rotmg sheet/mini/deli.png","rotmg sheet/mini/bibo.png"] }
        ]
    },
    {
        dungeon: "Killbilly Warrior Set",
        bossImg: "rotmg sheet/st/kilws/boss.png",
        items: [
            { id: "kilws-hatchet", name: "Jagged Hatchet", img: "rotmg sheet/st/kilws/hatchet.png", location: "The Nest (Forge)", dungeonImg: "rotmg sheet/mini/kwss.png", bossSources: ["rotmg sheet/mini/kibq.png",] },
            { id: "kilws-cowl", name: "Burlap Cowl", img: "rotmg sheet/st/kilws/cowl.png", location: "The Nest (Forge)", dungeonImg: "rotmg sheet/mini/kwss.png", bossSources: ["rotmg sheet/mini/kibq.png"] },
            { id: "kilws-armor", name: "Overalls of Endurance", img: "rotmg sheet/st/kilws/armor.png", location: "The Nest (Forge)", dungeonImg: "rotmg sheet/mini/kwss.png", bossSources: ["rotmg sheet/mini/kibq.png"] },
            { id: "kilws-teddy", name: "Headless Ted", img: "rotmg sheet/st/kilws/teddy no head.png", location: "The Nest (Forge)", dungeonImg: "rotmg sheet/mini/kwss.png", bossSources: ["rotmg sheet/mini/kibq.png"] }
        ]
    },
    {
        dungeon: "Lycan Warrior Set",
        bossImg: "rotmg sheet/st/lycws/woof.png",
        items: [
            { id: "lycws-claws", name: "Savage Claws", img: "rotmg sheet/st/lycws/calws.png", location: "Blood and Spirit Campaign (Event)", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/siur.png","rotmg sheet/mini/hamc.png"] },
            { id: "lycws-woofhead", name: "Beastly Mane", img: "rotmg sheet/st/lycws/woofhead.png", location: "Blood and Spirit Campaign (Event)", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/siur.png","rotmg sheet/mini/hamc.png"] },
            { id: "lycws-armor", name: "Ragetorn Armor", img: "rotmg sheet/st/lycws/armor.png", location: "Blood and Spirit Campaign (Event)", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/siur.png","rotmg sheet/mini/hamc.png"] },
            { id: "lycws-ring", name: "Moonstone Ring", img: "rotmg sheet/st/lycws/ring.png", location: "Blood and Spirit Campaign (Event)", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/siur.png","rotmg sheet/mini/hamc.png"] }
        ]
    },
    {
        dungeon: "Oryx's Battle Attires Set",
        bossImg: "rotmg sheet/st/obas/boss.png",
        items: [
            { id: "obas-sword", name: "Oryx's Greatsword", img: "rotmg sheet/st/obas/sword.png", location: "Oryx the Mad God 2", dungeonImg: "rotmg sheet/dung/wice.png", bossSources: ["rotmg sheet/mini/otmg.png"] },
            { id: "obas-bastion", name: "Champion's Bastion", img: "rotmg sheet/st/obas/bastion.png", location: "Oryx the Mad God 2", dungeonImg: "rotmg sheet/dung/wice.png", bossSources: ["rotmg sheet/mini/otmg.png"] },
            { id: "obas-bane", name: "Mercy's Bane", img: "rotmg sheet/st/obas/bane.png", location: "Oryx the Mad God 2", dungeonImg: "rotmg sheet/dung/wice.png", bossSources: ["rotmg sheet/mini/otmg.png"] },
            { id: "obas-ring", name: "Bloodstone Ring", img: "rotmg sheet/st/obas/ring.png", location: "Oryx the Mad God 2", dungeonImg: "rotmg sheet/dung/wice.png", bossSources: ["rotmg sheet/mini/otmg.png"] }
        ]
    },
    {
        dungeon: "Nordic Knight Set",
        bossImg: "rotmg sheet/st/norks/boss.png",
        items: [
            { id: "norks-axe", name: "Dalvar's Battle Axe", img: "rotmg sheet/st/norks/axe.png", location: "Ice Citadel", dungeonImg: "rotmg sheet/dung/icci.png", bossSources: ["rotmg sheet/mini/estn.png","rotmg sheet/mini/estn1.png","rotmg sheet/mini/estn2.png"] },
            { id: "norks-buckler", name: "Sunken Buckler", img: "rotmg sheet/st/norks/buckler.png", location: "Ice Citadel", dungeonImg: "rotmg sheet/dung/icci.png", bossSources: ["rotmg sheet/mini/estn.png","rotmg sheet/mini/estn1.png","rotmg sheet/mini/estn2.png"] },
            { id: "norks-armor", name: "Chainmail Body Armor", img: "rotmg sheet/st/norks/armor.png", location: "Ice Citadel", dungeonImg: "rotmg sheet/dung/icci.png", bossSources: ["rotmg sheet/mini/icei.png","rotmg sheet/mini/lizi.png","rotmg sheet/mini/snba.png","rotmg sheet/mini/yeti.png"] },
            { id: "norks-horn", name: "Gjallarhorn", img: "rotmg sheet/st/norks/buuuuuuuu.png", location: "Ice Citadel", dungeonImg: "rotmg sheet/dung/icci.png", bossSources: ["rotmg sheet/mini/icei.png","rotmg sheet/mini/lizi.png","rotmg sheet/mini/snba.png","rotmg sheet/mini/yeti.png"] }
        ]
    },
    {
        dungeon: "Mad Minotaur Set",
        bossImg: "rotmg sheet/st/madms/boss.png",
        items: [
            { id: "madms-flail", name: "Fury Flail", img: "rotmg sheet/st/madms/flail.png", location: "Oryx’s Sanctuary (Forge)", dungeonImg: "rotmg sheet/mini/mmss.png", bossSources: ["rotmg sheet/mini/chbe.png","rotmg sheet/mini/chda.png"] },
            { id: "madms-shield", name: "Shockwave Shield", img: "rotmg sheet/st/madms/shield.png", location: "Oryx’s Sanctuary (Forge)", dungeonImg: "rotmg sheet/mini/mmss.png", bossSources: ["rotmg sheet/mini/chbe.png","rotmg sheet/mini/chda.png"] },
            { id: "madms-chestplate", name: "Cyclone Chestplate", img: "rotmg sheet/st/madms/chestplate.png", location: "Oryx’s Sanctuary (Forge)", dungeonImg: "rotmg sheet/mini/mmss.png", bossSources: ["rotmg sheet/mini/chbe.png","rotmg sheet/mini/chda.png"] },
            { id: "madms-brass", name: "Brass Knuckles", img: "rotmg sheet/st/madms/brass.png", location: "Oryx’s Sanctuary (Forge)", dungeonImg: "rotmg sheet/mini/mmss.png", bossSources: ["rotmg sheet/mini/chbe.png","rotmg sheet/mini/chda.png"] }
        ]
    },
    {
        dungeon: "Easter Knight Set",
        bossImg: "rotmg sheet/st/easks/boss.png",
        items: [
            { id: "easks-sword", name: "Eternal Graved Great Sword", img: "rotmg sheet/st/easks/sword.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/whba.png"] },
            { id: "easks-shield", name: "Spriteful Shield", img: "rotmg sheet/st/easks/shield.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/whba.png"] },
            { id: "easks-eggre", name: "Eggre Battle Armor", img: "rotmg sheet/st/easks/eggre.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/whba.png"] },
            { id: "easks-tiara", name: "Tiara of Eggscellent Sturdiness", img: "rotmg sheet/st/easks/tiara.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/whba.png"] }
        ]
    },
    {
        dungeon: "Oryx Awesome Set",
        bossImg: "rotmg sheet/st/oryas/boss.png",
        items: [
            { id: "oryas-sword", name: "Sword of the Mad God", img: "rotmg sheet/st/oryas/sword.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "oryas-shield", name: "Onyx Shield of the Mad God", img: "rotmg sheet/st/oryas/shield.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "oryas-armor", name: "Almandine Armor of Anger", img: "rotmg sheet/st/oryas/armor.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "oryas-ring", name: "Almandine Ring of Wrath", img: "rotmg sheet/st/oryas/ring.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" }
        ]
    },
    {
        dungeon: "Swoll Paladin Set",
        bossImg: "rotmg sheet/st/swops/boss.png",
        items: [
            { id: "swops-sword", name: "Pixie-Enchanted Sword", img: "rotmg sheet/st/swops/sword.png", location: "Candyland Hunting Grounds", dungeonImg: "rotmg sheet/dung/cahug.png", bossSources: ["rotmg sheet/mini/giga.png","rotmg sheet/mini/cupc.png"] },
            { id: "swops-seal", name: "Seal of the Enchanted Forest", img: "rotmg sheet/st/swops/seal.png", location: "Candyland Hunting Grounds", dungeonImg: "rotmg sheet/dung/cahug.png", bossSources: ["rotmg sheet/mini/detr.png","rotmg sheet/mini/spcr.png","rotmg sheet/mini/cupc.png"] },
            { id: "swops-plate", name: "Fairy Plate", img: "rotmg sheet/st/swops/plate.png", location: "Candyland Hunting Grounds", dungeonImg: "rotmg sheet/dung/cahug.png", bossSources: ["rotmg sheet/mini/mega.png","rotmg sheet/mini/swfa.png","rotmg sheet/mini/cupc.png"] },
            { id: "swops-ring", name: "Ring of Pure Wishes", img: "rotmg sheet/st/swops/ring.png", location: "Candyland Hunting Grounds", dungeonImg: "rotmg sheet/dung/cahug.png", bossSources: ["rotmg sheet/mini/giga.png","rotmg sheet/mini/detr.png","rotmg sheet/mini/spcr.png","rotmg sheet/mini/mega.png","rotmg sheet/mini/swfa.png","rotmg sheet/mini/cupc.png"] }
        ]
    },
    {
        dungeon: "Corrupted Paladin Set",
        bossImg: "rotmg sheet/st/corps/boss.png",
        items: [
            { id: "corps-blade", name: "Fallen One's Blade", img: "rotmg sheet/st/corps/blade.png", location: "The Shatters", dungeonImg: "rotmg sheet/dung/shat.png", bossSources: ["rotmg sheet/mini/stga.png","rotmg sheet/mini/stga1.png","rotmg sheet/mini/stid.png"] },
            { id: "corps-insignia", name: "Abyssal Insignia", img: "rotmg sheet/st/corps/insignia.png", location: "The Shatters", dungeonImg: "rotmg sheet/dung/shat.png", bossSources: ["rotmg sheet/mini/stmo.png","rotmg sheet/mini/stid.png"] },
            { id: "corps-armor", name: "Vortex Plating", img: "rotmg sheet/st/corps/armor.png", location: "The Shatters", dungeonImg: "rotmg sheet/dung/shat.png", bossSources: ["rotmg sheet/mini/stkn.png","rotmg sheet/mini/stkn1.png","rotmg sheet/mini/stpa.png","rotmg sheet/mini/stpa1.png","rotmg sheet/mini/stwa.png","rotmg sheet/mini/stwa.png","rotmg sheet/mini/stid.png"] },
            { id: "corps-eye", name: "Eye of the Void", img: "rotmg sheet/st/corps/eye.png", location: "The Shatters", dungeonImg: "rotmg sheet/dung/shat.png", bossSources: ["rotmg sheet/mini/stma.png","rotmg sheet/mini/stma1.png","rotmg sheet/mini/stra.png","rotmg sheet/mini/stra1.png","rotmg sheet/mini/stid.png"] }
        ]
    },
    {
        dungeon: "Frost Harbinger Set",
        bossImg: "rotmg sheet/st/frohs/boss.png",
        items: [
            { id: "frohs-sword", name: "Heartsteel Claymore", img: "rotmg sheet/st/frohs/bigahhsword.png", location: "Ice Citadel (Forge)", dungeonImg: "rotmg sheet/mini/fhss.png", bossSources: ["rotmg sheet/mini/estn.png","rotmg sheet/mini/estn1.png","rotmg sheet/mini/estn2.png"] },
            { id: "frohs-symbol", name: "Symbol of the Lost", img: "rotmg sheet/st/frohs/symbol.png", location: "Ice Citadel (Forge)", dungeonImg: "rotmg sheet/mini/fhss.png", bossSources: ["rotmg sheet/mini/estn.png","rotmg sheet/mini/estn1.png","rotmg sheet/mini/estn2.png"] },
            { id: "frohs-tundra", name: "Hull of the Tundra", img: "rotmg sheet/st/frohs/tundra.png", location: "Ice Citadel (Forge)", dungeonImg: "rotmg sheet/mini/fhss.png", bossSources: ["rotmg sheet/mini/estn.png","rotmg sheet/mini/estn1.png","rotmg sheet/mini/estn2.png"] },
            { id: "frohs-heart", name: "Frozen Heart", img: "rotmg sheet/st/frohs/heart.png", location: "Ice Citadel (Forge)", dungeonImg: "rotmg sheet/mini/fhss.png", bossSources: ["rotmg sheet/mini/estn.png","rotmg sheet/mini/estn1.png","rotmg sheet/mini/estn2.png"] }
        ]
    },
    {
        dungeon: "Unholy Paladin Set",
        bossImg: "rotmg sheet/st/unhps/boss.png",
        items: [
            { id: "unhps-hellfire", name: "Hellfire Broadsword", img: "rotmg sheet/st/unhps/hellfire.png", location: "Heroic Undead Lair (event)", dungeonImg: "rotmg sheet/dung/heul.gif", bossSources: ["rotmg sheet/mini/depu.png","rotmg sheet/mini/hamc.png"] },
            { id: "unhps-seal", name: "Sacrilege Seal", img: "rotmg sheet/st/unhps/seal.png", location: "Heroic Undead Lair (event)", dungeonImg: "rotmg sheet/dung/heul.gif", bossSources: ["rotmg sheet/mini/depu.png","rotmg sheet/mini/hamc.png"] },
            { id: "unhps-chainmail", name: "Tormentor's Chainmail", img: "rotmg sheet/st/unhps/chainmail.png", location: "Heroic Undead Lair (event)", dungeonImg: "rotmg sheet/dung/heul.gif", bossSources: ["rotmg sheet/mini/depu.png","rotmg sheet/mini/hamc.png"] },
            { id: "unhps-ring", name: "Horned Ring", img: "rotmg sheet/st/unhps/ring.png", location: "Heroic Undead Lair (event)", dungeonImg: "rotmg sheet/dung/heul.gif", bossSources: ["rotmg sheet/mini/depu.png","rotmg sheet/mini/hamc.png"] }
        ]
    },
    {
        dungeon: "Legacy Swoll Paladin Set",
        bossImg: "rotmg sheet/st/lsps/boss.png",
        items: [
            { id: "lsps-sword", name: "Legacy Pixie-Enchanted Sword", img: "rotmg sheet/st/lsps/cute.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png"},
            { id: "lsps-seal", name: "Legacy Seal of the Enchanted Forest", img: "rotmg sheet/st/lsps/seal.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png"},
            { id: "lsps-plate", name: "Legacy Fairy Plate", img: "rotmg sheet/st/lsps/plate.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "lsps-ring", name: "Legacy Ring of Pure Wishes", img: "rotmg sheet/st/lsps/ring.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" }
        ]
    },
    {
        dungeon: "Flesh Collector Set",
        bossImg: "rotmg sheet/st/flecs/boss.png",
        items: [
            { id: "flecs-ripper", name: "Symbiotic Ripper", img: "rotmg sheet/st/flecs/ripper.png", location: "Parasite Chambers", dungeonImg: "rotmg sheet/dung/pach.gif", bossSources: ["rotmg sheet/mini/nico.png"] },
            { id: "flecs-beer", name: "Parasitic Concoction", img: "rotmg sheet/st/flecs/beer.png", location: "Parasite Chambers", dungeonImg: "rotmg sheet/dung/pach.gif", bossSources: ["rotmg sheet/mini/inch.png"] },
            { id: "flecs-rags", name: "Rags of the Host", img: "rotmg sheet/st/flecs/rags.png", location: "Parasite Chambers", dungeonImg: "rotmg sheet/dung/pach.gif", bossSources: ["rotmg sheet/mini/nico.png","rotmg sheet/mini/inch.png"] },
            { id: "flecs-ring", name: "Hivemind Circlet", img: "rotmg sheet/st/flecs/ring.png", location: "Parasite Chambers", dungeonImg: "rotmg sheet/dung/pach.gif", bossSources: ["rotmg sheet/mini/blco.png","rotmg sheet/mini/swco.png","rotmg sheet/mini/ptco.png"] }
        ]
    },
    {
        dungeon: "Hollow King Necromancer Set",
        bossImg: "rotmg sheet/st/hkns/boss.png",
        items: [
            { id: "hkns-leviosa", name: "Edictum Praetoris", img: "rotmg sheet/st/hkns/leviosa.png", location: "Undead Lair", dungeonImg: "rotmg sheet/dung/undl.gif", bossSources: ["rotmg sheet/mini/stgg.png","rotmg sheet/mini/lass.png","rotmg sheet/mini/smotu.png"] },
            { id: "hkns-memento", name: "Memento Mori", img: "rotmg sheet/st/hkns/memento.png", location: "Undead Lair, Haunted Hallows(realm)", dungeonImg: "rotmg sheet/dung/undl.gif", bossSources: ["rotmg sheet/mini/ghki.png","rotmg sheet/mini/flgo.png"] },
            { id: "hkns-picta", name: "Toga Picta", img: "rotmg sheet/st/hkns/picta.png", location: "Undead Lair", dungeonImg: "rotmg sheet/dung/undl.gif", bossSources: ["rotmg sheet/mini/stgg.png","rotmg sheet/mini/lass.png","rotmg sheet/mini/smotu.png"] },
            { id: "hkns-ring", name: "Interregnum", img: "rotmg sheet/st/hkns/expectopatronum.png", location: "Undead Lair, Haunted Hallows(realm)", dungeonImg: "rotmg sheet/dung/undl.gif", bossSources: ["rotmg sheet/mini/ghki.png","rotmg sheet/mini/sisc.png"] }
        ]
    },
    {
        dungeon: "Cuboid Necromancer Set",
        bossImg: "rotmg sheet/st/cubns/boss.png",
        items: [
            { id: "cubns-staff", name: "Squaroid Staff", img: "rotmg sheet/st/cubns/staff.png", location: "The Third Dimension", dungeonImg: "rotmg sheet/dung/thdi.gif", bossSources: ["rotmg sheet/mini/tego.png","rotmg sheet/mini/shcb.png","rotmg sheet/mini/pecg.png"] },
            { id: "cubns-frame", name: "Cubic Frame", img: "rotmg sheet/st/cubns/frame.png", location: "The Third Dimension", dungeonImg: "rotmg sheet/dung/thdi.gif", bossSources: ["rotmg sheet/mini/tego.png","rotmg sheet/mini/shcb.png","rotmg sheet/mini/pecg.png"] },
            { id: "cubns-garbs", name: "Polygonal Garbs", img: "rotmg sheet/st/cubns/garbs.png", location: "The Third Dimension", dungeonImg: "rotmg sheet/dung/thdi.gif", bossSources: ["rotmg sheet/mini/cuma.png","rotmg sheet/mini/hycu.png","rotmg sheet/mini/hycu1.png","rotmg sheet/mini/lecg.png","rotmg sheet/mini/pecg.png","rotmg sheet/mini/ma.png","rotmg sheet/mini/ma1.png","rotmg sheet/mini/ma2.png","rotmg sheet/mini/ma3.png","rotmg sheet/mini/ma4.png","rotmg sheet/mini/ma5.png","rotmg sheet/mini/ma6.png"] },
            { id: "cubns-cuband", name: "Cuband", img: "rotmg sheet/st/cubns/cuband.png", location: "The Third Dimension", dungeonImg: "rotmg sheet/dung/thdi.gif", bossSources: ["rotmg sheet/mini/cuma.png","rotmg sheet/mini/hycu.png","rotmg sheet/mini/hycu1.png","rotmg sheet/mini/lecg.png","rotmg sheet/mini/pecg.png","rotmg sheet/mini/ma.png","rotmg sheet/mini/ma1.png","rotmg sheet/mini/ma2.png","rotmg sheet/mini/ma3.png","rotmg sheet/mini/ma4.png","rotmg sheet/mini/ma5.png","rotmg sheet/mini/ma6.png"] }
        ]
    },
    {
        dungeon: "Shaman Necromancer Set",
        bossImg: "rotmg sheet/st/shans/boss.png",
        items: [
            { id: "shans-staff", name: "Shaman's Staff", img: "rotmg sheet/st/shans/shaman.png", location: "Oryx’s Sanctuary (Forge)", dungeonImg: "rotmg sheet/mini/snss.png", bossSources: ["rotmg sheet/mini/trge.png","rotmg sheet/mini/arle.png","rotmg sheet/mini/arle1.png"] },
            { id: "shans-skull", name: "Ritual Skull", img: "rotmg sheet/st/shans/skull.png", location: "Oryx’s Sanctuary (Forge)", dungeonImg: "rotmg sheet/mini/snss.png", bossSources: ["rotmg sheet/mini/trge.png","rotmg sheet/mini/arle.png","rotmg sheet/mini/arle1.png"] },
            { id: "shans-robes", name: "Ragged Robes", img: "rotmg sheet/st/shans/robes.png", location: "Oryx’s Sanctuary (Forge)", dungeonImg: "rotmg sheet/mini/snss.png", bossSources: ["rotmg sheet/mini/trge.png","rotmg sheet/mini/arle.png","rotmg sheet/mini/arle1.png"] },
            { id: "shans-necklace", name: "Fang Necklace", img: "rotmg sheet/st/shans/necklace.png", location: "Oryx’s Sanctuary (Forge)", dungeonImg: "rotmg sheet/mini/snss.png", bossSources: ["rotmg sheet/mini/trge.png","rotmg sheet/mini/arle.png","rotmg sheet/mini/arle1.png"] },
            { id: "shans-soul", name: "Soul Gem Amulet", img: "rotmg sheet/st/shans/soul.png", location: "Oryx’s Sanctuary (Forge)", dungeonImg: "rotmg sheet/mini/snss.png", bossSources: ["rotmg sheet/mini/trge.png","rotmg sheet/mini/arle.png","rotmg sheet/mini/arle1.png"] }
        ]
    },
    {
        dungeon: "Reaper Necromancer Set",
        bossImg: "rotmg sheet/st/reans/boss.png",
        items: [
            { id: "reans-gravekeeper", name: "Gravekeeper's Scythe", img: "rotmg sheet/st/reans/gravekeeper.png", location: "Wine Cellar Event Chest", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/hamc.png","rotmg sheet/mini/hato.png"] },
            { id: "reans-skull", name: "Hooded Skull", img: "rotmg sheet/st/reans/skull.png", location: "Wine Cellar Event Chest", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/hamc.png","rotmg sheet/mini/hato.png"] },
            { id: "reans-garb", name: "Executioner's Garb", img: "rotmg sheet/st/reans/garb.png", location: "Wine Cellar Event Chest", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/hamc.png","rotmg sheet/mini/hato.png"] },
            { id: "reans-grim", name: "Grim Goblet", img: "rotmg sheet/st/reans/grim.png", location: "Wine Cellar Event Chest", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/hamc.png","rotmg sheet/mini/hato.png"] }
        ]
    },
    {
        dungeon: "Swarming Huntress Set",
        bossImg: "rotmg sheet/st/swahs/boss.png",
        items: [
            { id: "swahs-bow", name: "Nectar Crossfire", img: "rotmg sheet/st/swahs/bow.png", location: "The Nest", dungeonImg: "rotmg sheet/dung/thne.png", bossSources: ["rotmg sheet/mini/blsb.png","rotmg sheet/mini/resb.png","rotmg sheet/mini/yesb.png"] },
            { id: "swahs-snare", name: "Honeytomb Snare", img: "rotmg sheet/st/swahs/snare.png", location: "The Nest", dungeonImg: "rotmg sheet/dung/thne.png", bossSources: ["rotmg sheet/mini/mkbn.png"] },
            { id: "swahs-armor", name: "Apiary Armor", img: "rotmg sheet/st/swahs/armor.png", location: "The Nest", dungeonImg: "rotmg sheet/dung/thne.png", bossSources: ["rotmg sheet/mini/blsb.png","rotmg sheet/mini/resb.png","rotmg sheet/mini/yesb.png","rotmg sheet/mini/grsb.png","rotmg sheet/mini/mkbn.png"] },
            { id: "swahs-circlet", name: "Honey Circlet", img: "rotmg sheet/st/swahs/circlet.png", location: "The Nest", dungeonImg: "rotmg sheet/dung/thne.png", bossSources: ["rotmg sheet/mini/blsb.png","rotmg sheet/mini/resb.png","rotmg sheet/mini/yesb.png","rotmg sheet/mini/grsb.png","rotmg sheet/mini/mkbn.png"] }
        ]
    },
    {
        dungeon: "Horticultural Huntress Set",
        bossImg: "rotmg sheet/st/horhs/boss.png",
        items: [
            { id: "horhs-bow", name: "Bergenia Bow", img: "rotmg sheet/st/horhs/bow.png", location: "Magic Woods", dungeonImg: "rotmg sheet/dung/magw.png", bossSources: ["rotmg sheet/mini/fosp.png"] },
            { id: "horhs-lotus", name: "Lifebringing Lotus", img: "rotmg sheet/st/horhs/lotus.png", location: "Magic Woods", dungeonImg: "rotmg sheet/dung/magw.png", bossSources: ["rotmg sheet/mini/fosp.png"] },
            { id: "horhs-armor", name: "Hollyhock Hide", img: "rotmg sheet/st/horhs/armor.png", location: "Magic Woods", dungeonImg: "rotmg sheet/dung/magw.png", bossSources: ["rotmg sheet/mini/grfa.png","rotmg sheet/mini/grfa1.png","rotmg sheet/mini/grfa2.png","rotmg sheet/mini/grfa3.png","rotmg sheet/mini/grfa4.png","rotmg sheet/mini/grfa5.png","rotmg sheet/mini/grfa6.png","rotmg sheet/mini/grfa7.png","rotmg sheet/mini/grfa8.png","rotmg sheet/mini/grfa9.png","rotmg sheet/mini/grfa10.png","rotmg sheet/mini/grfa11.png","rotmg sheet/mini/grfa12.png"] },
            { id: "horhs-ring", name: "Chrysanthemum Corsage", img: "rotmg sheet/st/horhs/ring.png", location: "Magic Woods", dungeonImg: "rotmg sheet/dung/magw.png", bossSources: ["rotmg sheet/mini/grfa.png","rotmg sheet/mini/grfa1.png","rotmg sheet/mini/grfa2.png","rotmg sheet/mini/grfa3.png","rotmg sheet/mini/grfa4.png","rotmg sheet/mini/grfa5.png","rotmg sheet/mini/grfa6.png","rotmg sheet/mini/grfa7.png","rotmg sheet/mini/grfa8.png","rotmg sheet/mini/grfa9.png","rotmg sheet/mini/grfa10.png","rotmg sheet/mini/grfa11.png","rotmg sheet/mini/grfa12.png"] }
        ]
    },
    {
        dungeon: "Resurrected Huntress Set",
        bossImg: "rotmg sheet/st/reshs/boss.png",
        items: [
            { id: "reshs-bolt", name: "Bolt Thrower", img: "rotmg sheet/st/reshs/bolt.png", location: "The Nest (Forge)", dungeonImg: "rotmg sheet/mini/rhss.png", bossSources: ["rotmg sheet/mini/thbe.png"] },
            { id: "reshs-rod", name: "Lightning Rod", img: "rotmg sheet/st/reshs/rod.png", location: "The Nest (Forge)", dungeonImg: "rotmg sheet/mini/rhss.png", bossSources: ["rotmg sheet/mini/thbe.png"] },
            { id: "reshs-dress", name: "Wedding Dress", img: "rotmg sheet/st/reshs/dress.png", location: "The Nest (Forge)", dungeonImg: "rotmg sheet/mini/rhss.png", bossSources: ["rotmg sheet/mini/thbe.png"] },
            { id: "reshs-gothic", name: "Gothic Bouffant", img: "rotmg sheet/st/reshs/gothic.png", location: "The Nest (Forge)", dungeonImg: "rotmg sheet/mini/rhss.png", bossSources: ["rotmg sheet/mini/thbe.png"] }
        ]
    },
    {
        dungeon: "Cursed Cursebreaker Huntress Set",
        bossImg: "rotmg sheet/st/cchs/boss.png",
        items: [
            { id: "cchs-silver", name: "Silver Revolvers", img: "rotmg sheet/st/cchs/silver.png", location: "Blood and Spirit Campaign", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/cugr.png","rotmg sheet/mini/hamc.png"] },
            { id: "cchs-trap", name: "Consecrated Trap", img: "rotmg sheet/st/cchs/trap.png", location: "Blood and Spirit Campaign", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/cugr.png","rotmg sheet/mini/hamc.png"] },
            { id: "cchs-corset", name: "Metal-plated Corset", img: "rotmg sheet/st/cchs/corset.png", location: "Blood and Spirit Campaign", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/cugr.png","rotmg sheet/mini/hamc.png"] },
            { id: "cchs-vial", name: "Vial of Sustenance", img: "rotmg sheet/st/cchs/vial.png", location: "Blood and Spirit Campaign", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/cugr.png","rotmg sheet/mini/hamc.png"] }
        ]
    },
    {
        dungeon: "Phylactery Mystic Set",
        bossImg: "rotmg sheet/st/phyms/boss.png",
        items: [
            { id: "phyms-phylactery", name: "The Phylactery", img: "rotmg sheet/st/phyms/phylactery.png", location: "Mid Plains, Dead Church", dungeonImg: "rotmg sheet/dung/realm.png", bossSources: ["rotmg sheet/mini/phbe.png","rotmg sheet/mini/shcl.png"] },
            { id: "phyms-bearer", name: "Soul of the Bearer", img: "rotmg sheet/st/phyms/bearer.png", location: "Mid Plains, Dead Church", dungeonImg: "rotmg sheet/dung/realm.png", bossSources: ["rotmg sheet/mini/phbe.png","rotmg sheet/mini/laho.png"] },
            { id: "phyms-robe", name: "Soulless Robe", img: "rotmg sheet/st/phyms/robe.png", location: "Mid Plains, Dead Church", dungeonImg: "rotmg sheet/dung/realm.png", bossSources: ["rotmg sheet/mini/hasp.png","rotmg sheet/mini/dekn.png"] },
            { id: "phyms-ring", name: "Ring of the Covetous Heart", img: "rotmg sheet/st/phyms/ring.png", location: "Mid Plains, Dead Church", dungeonImg: "rotmg sheet/dung/realm.png", bossSources: ["rotmg sheet/mini/hasp.png","rotmg sheet/mini/reve.png"] }
        ]
    },
    {
        dungeon: "Magmatic Mystic Set",
        bossImg: "rotmg sheet/st/magms/boss.png",
        items: [
            { id: "magms-staff", name: "Staff of Eruption", img: "rotmg sheet/st/magms/staff.png", location: "Abyss of Demons", dungeonImg: "rotmg sheet/dung/abyss.gif", bossSources: ["rotmg sheet/mini/arma.png","rotmg sheet/mini/magf.png"] },
            { id: "magms-stone", name: "Scorchium Stone", img: "rotmg sheet/st/magms/stone.png", location: "Abyss of Demons", dungeonImg: "rotmg sheet/dung/abyss.gif", bossSources: ["rotmg sheet/mini/arma.png","rotmg sheet/mini/magf.png"] },
            { id: "magms-mantle", name: "Molten Mantle", img: "rotmg sheet/st/magms/mantle.png", location: "Abyss of Demons", dungeonImg: "rotmg sheet/dung/abyss.gif", bossSources: ["rotmg sheet/mini/abid.png","rotmg sheet/mini/wdota.png","rotmg sheet/mini/bota.png"] },
            { id: "magms-ring", name: "Ring of the Inferno", img: "rotmg sheet/st/magms/ring.png", location: "Abyss of Demons", dungeonImg: "rotmg sheet/dung/abyss.gif", bossSources: ["rotmg sheet/mini/abid.png","rotmg sheet/mini/wdota.png","rotmg sheet/mini/rede.png"] }
        ]
    },
    {
        dungeon: "Totalia Mystic Set",
        bossImg: "rotmg sheet/st/totms/boss.png",
        items: [
            { id: "totms-torch", name: "Stygian Torch", img: "rotmg sheet/st/totms/torch.png", location: "Haunted Hallows (during Halloween)", dungeonImg: "rotmg sheet/dung/realm.png", bossSources: ["rotmg sheet/mini/totm.png","rotmg sheet/mini/wisk.png","rotmg sheet/mini/hamc.png"] },
            { id: "totms-orb", name: "Orb of the Sabbath", img: "rotmg sheet/st/totms/orb.png", location: "Haunted Hallows (during Halloween)", dungeonImg: "rotmg sheet/dung/realm.png", bossSources: ["rotmg sheet/mini/totm.png","rotmg sheet/mini/wisk.png","rotmg sheet/mini/hamc.png"] },
            { id: "totms-robe", name: "Robe of the Enchantress", img: "rotmg sheet/st/totms/robe.png", location: "Haunted Hallows (during Halloween)", dungeonImg: "rotmg sheet/dung/realm.png", bossSources: ["rotmg sheet/mini/totm.png","rotmg sheet/mini/wisk.png","rotmg sheet/mini/hamc.png"] },
            { id: "totms-witch", name: "Witch's Brooch", img: "rotmg sheet/st/totms/witch.png", location: "Haunted Hallows (during Halloween)", dungeonImg: "rotmg sheet/dung/realm.png", bossSources: ["rotmg sheet/mini/totm.png","rotmg sheet/mini/wisk.png","rotmg sheet/mini/hamc.png"] }
        ]
    },
    {
        dungeon: "Astral Arcanist Set",
        bossImg: "rotmg sheet/st/aas/boss.png",
        items: [
            { id: "aas-rod", name: "Nebular Rod", img: "rotmg sheet/st/aas/rod.png", location: "Oryx the Mad God 3 (Forge)", dungeonImg: "rotmg sheet/mini/aast1.png", bossSources: ["rotmg sheet/mini/otmg3.png","rotmg sheet/mini/otmg3.1.png"] },
            { id: "aas-cosmic", name: "Cosmic Astrolabe", img: "rotmg sheet/st/aas/cosmic.png", location: "Oryx the Mad God 3 (Forge)", dungeonImg: "rotmg sheet/mini/aast1.png", bossSources: ["rotmg sheet/mini/otmg3.png","rotmg sheet/mini/otmg3.1.png"] },
            { id: "aas-gown", name: "Astronomer's Gown", img: "rotmg sheet/st/aas/gown.png", location: "Oryx the Mad God 3 (Forge)", dungeonImg: "rotmg sheet/mini/aast1.png", bossSources: ["rotmg sheet/mini/otmg3.png","rotmg sheet/mini/otmg3.1.png"] },
            { id: "aas-eye", name: "Eye of Divination", img: "rotmg sheet/st/aas/eye.png", location: "Oryx the Mad God 3 (Forge)", dungeonImg: "rotmg sheet/mini/aast1.png", bossSources: ["rotmg sheet/mini/otmg3.png","rotmg sheet/mini/otmg3.1.png"] }
        ]
    },
    {
        dungeon: "Lost Golem Set",
        bossImg: "rotmg sheet/st/losgs/boss.png",
        items: [
            { id: "losgs-remains", name: "Carved Golem Remains", img: "rotmg sheet/st/losgs/remains.png", location: "Lost Halls", dungeonImg: "rotmg sheet/dung/loha.png", bossSources: ["rotmg sheet/mini/agti.png"] },
            { id: "losgs-brain", name: "Brain of the Golem", img: "rotmg sheet/st/losgs/brain.png", location: "Lost Halls", dungeonImg: "rotmg sheet/dung/loha.png", bossSources: ["rotmg sheet/mini/made.png"] },
            { id: "losgs-armor", name: "Golem Armor", img: "rotmg sheet/st/losgs/armor.png", location: "Lost Halls", dungeonImg: "rotmg sheet/dung/loha.png", bossSources: ["rotmg sheet/mini/togo.png"] },
            { id: "losgs-cuffs", name: "Rusty Cuffs", img: "rotmg sheet/st/losgs/cuffs.png", location: "", dungeonImg: "rotmg sheet/dung/loha.png", bossSources: ["rotmg sheet/mini/gooa.png","rotmg sheet/mini/goof.png","rotmg sheet/mini/goos.png"] }
        ]
    },
    {
        dungeon: "Daeva Trickster Set",
        bossImg: "rotmg sheet/st/daets/boss.png",
        items: [
            { id: "daets-arch", name: "Archangel's Judgement", img: "rotmg sheet/st/daets/arch.png", location: "The Shatters", dungeonImg: "rotmg sheet/dung/shat.png", bossSources: ["rotmg sheet/mini/tabl.png",] },
            { id: "daets-prog", name: "Daevite Progenitor", img: "rotmg sheet/st/daets/prog.png", location: "The Shatters", dungeonImg: "rotmg sheet/dung/shat.png", bossSources: ["rotmg sheet/mini/tabl.png",] },
            { id: "daets-guard", name: "Seraphim's Guard", img: "rotmg sheet/st/daets/guard.png", location: "The Shatters", dungeonImg: "rotmg sheet/dung/shat.png", bossSources: ["rotmg sheet/mini/tabl.png",] },
            { id: "daets-flames", name: "Flames of Genesis", img: "rotmg sheet/st/daets/flames.png", location: "The Shatters", dungeonImg: "rotmg sheet/dung/shat.png", bossSources: ["rotmg sheet/mini/tabl.png",] }
        ]
    },
    {
        dungeon: "Spellbound Soulthief Set",
        bossImg: "rotmg sheet/st/spess/boss.png",
        items: [
            { id: "spess-blades", name: "Blade of Fates", img: "rotmg sheet/st/spess/blades.png", location: "Spectral Penitentiary (Forge)", dungeonImg: "rotmg sheet/mini/ssss.png", bossSources: ["rotmg sheet/mini/somu.gif"] },
            { id: "spess-memory", name: "Accursed Memory", img: "rotmg sheet/st/spess/memory.png", location: "Spectral Penitentiary (Forge)", dungeonImg: "rotmg sheet/mini/ssss.png", bossSources: ["rotmg sheet/mini/somu.gif"] },
            { id: "spess-vest", name: "Gravetender's Vest", img: "rotmg sheet/st/spess/vest.png", location: "Spectral Penitentiary (Forge)", dungeonImg: "rotmg sheet/mini/ssss.png", bossSources: ["rotmg sheet/mini/somu.gif"] },
            { id: "spess-ring", name: "Jewel of Vengeance", img: "rotmg sheet/st/spess/ring.png", location: "Spectral Penitentiary (Forge)", dungeonImg: "rotmg sheet/mini/ssss.png", bossSources: ["rotmg sheet/mini/somu.gif"] }
        ]
    },
    {
        dungeon: "Scarecrow Trickster Set",
        bossImg: "rotmg sheet/st/scats/boss.png",
        items: [
            { id: "scats-maize", name: "Maize Machete", img: "rotmg sheet/st/scats/maize.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/depu.png","rotmg sheet/mini/hamc.png"] },
            { id: "scats-prism", name: "Pumpkin Prism", img: "rotmg sheet/st/scats/prism.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/depu.png","rotmg sheet/mini/hamc.png"] },
            { id: "scats-poncho", name: "Withered Poncho", img: "rotmg sheet/st/scats/poncho.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/depu.png","rotmg sheet/mini/hamc.png"] },
            { id: "scats-hat", name: "Burlap Hat", img: "rotmg sheet/st/scats/hat.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/depu.png","rotmg sheet/mini/hamc.png"] }
        ]
    },
    {
        dungeon: "Horrific Sorcerer Set",
        bossImg: "rotmg sheet/st/horss/boss.png",
        items: [
            { id: "horss-wrath", name: "Abomination's Wrath", img: "rotmg sheet/st/horss/wrath.png", location: "Mad Lab", dungeonImg: "rotmg sheet/dung/mala.gif", bossSources: ["rotmg sheet/mini/hocr.png"] },
            { id: "horss-scepter", name: "Grotesque Scepter", img: "rotmg sheet/st/horss/scepter.png", location: "Mad Lab", dungeonImg: "rotmg sheet/dung/mala.gif", bossSources: ["rotmg sheet/mini/drte.png"] },
            { id: "horss-garment", name: "Garment of the Beast", img: "rotmg sheet/st/horss/garment.png", location: "Mad Lab", dungeonImg: "rotmg sheet/dung/mala.gif", bossSources: ["rotmg sheet/mini/crab.png","rotmg sheet/mini/esex.png"] },
            { id: "horss-claws", name: "Horrific Claws", img: "rotmg sheet/st/horss/calws.png", location: "Mad Lab", dungeonImg: "rotmg sheet/dung/mala.gif", bossSources: ["rotmg sheet/mini/crab.png","rotmg sheet/mini/esex.png"] }
        ]
    },
    {
        dungeon: "Court Magician Sorcerer Set",
        bossImg: "rotmg sheet/st/cmss/boss.png",
        items: [
            { id: "cmss-wand", name: "Magic Wand", img: "rotmg sheet/st/cmss/wand.png", location: "Puppet Master’s Theatre, Puppet Master’s Encore", dungeonImg: "rotmg sheet/dung/pumat.png", dungeonImg: "rotmg sheet/dung/pume.png", bossSources: ["rotmg sheet/mini/thpm.png","rotmg sheet/mini/thpme.png"] },
            { id: "cmss-scepter", name: "Lightshow Scepter", img: "rotmg sheet/st/cmss/scepter.png", location: "Puppet Master’s Theatre, Puppet Master’s Encore", dungeonImg: "rotmg sheet/dung/pumat.png",dungeonImg: "rotmg sheet/dung/pume.png", bossSources: ["rotmg sheet/mini/thpm.png","rotmg sheet/mini/thpme.png"] },
            { id: "cmss-robe", name: "Magician's Robe", img: "rotmg sheet/st/cmss/robe.png", location: "Puppet Master’s Theatre, Puppet Master’s Encore", dungeonImg: "rotmg sheet/dung/pumat.png",dungeonImg: "rotmg sheet/dung/pume.png", bossSources: ["rotmg sheet/mini/thpm.png","rotmg sheet/mini/thpme.png"] },
            { id: "cmss-hat", name: "Performer's Hat", img: "rotmg sheet/st/cmss/hat.png", location: "Puppet Master’s Theatre, Puppet Master’s Encore", dungeonImg: "rotmg sheet/dung/pumat.png", dungeonImg: "rotmg sheet/dung/pume.png", bossSources: ["rotmg sheet/mini/orpu.png","rotmg sheet/mini/thpme.png","rotmg sheet/mini/hupu.png","rotmg sheet/mini/pucl.png","rotmg sheet/mini/puoc.png","rotmg sheet/mini/puop.png","rotmg sheet/mini/trpu.png","rotmg sheet/mini/ropu.png","rotmg sheet/mini/arpu.png","rotmg sheet/mini/wipu.png","rotmg sheet/mini/prpu.png","rotmg sheet/mini/wapu.png","rotmg sheet/mini/knpu.png","rotmg sheet/mini/papu.png","rotmg sheet/mini/aspu.png","rotmg sheet/mini/nepu.png","rotmg sheet/mini/hupu1.png","rotmg sheet/mini/mypu.png","rotmg sheet/mini/trpu1.png","rotmg sheet/mini/trpd.png","rotmg sheet/mini/sopu.png","rotmg sheet/mini/nipu.png","rotmg sheet/mini/sapu.png","rotmg sheet/mini/bapu.png","rotmg sheet/mini/supu.png","rotmg sheet/mini/kepu.png","rotmg sheet/mini/drpu.png"] }
        ]
    },
    {
        dungeon: "Storm Shaman Set",
        bossImg: "rotmg sheet/st/stoss/boss.png",
        items: [
            { id: "stoss-wand", name: "Lightning Wand", img: "rotmg sheet/st/stoss/wand.png", location: "Lost Halls (Forge)", dungeonImg: "rotmg sheet/mini/ssss1.png", bossSources: ["rotmg sheet/mini/malu.png"] },
            { id: "stoss-totem", name: "Totem Scepter", img: "rotmg sheet/st/stoss/totem.png", location: "Lost Halls (Forge)", dungeonImg: "rotmg sheet/mini/ssss1.png", bossSources: ["rotmg sheet/mini/malu.png"] },
            { id: "stoss-tunic", name: "Thunderstorm Tunic", img: "rotmg sheet/st/stoss/tunic.png", location: "Lost Halls (Forge)", dungeonImg: "rotmg sheet/mini/ssss1.png", bossSources: ["rotmg sheet/mini/malu.png"] },
            { id: "stoss-bolt", name: "Bolt in a Bottle", img: "rotmg sheet/st/stoss/bolt.png", location: "Lost Halls (Forge)", dungeonImg: "rotmg sheet/mini/ssss1.png", bossSources: ["rotmg sheet/mini/malu.png"] }
        ]
    },
    {
        dungeon: "Incubus Sorcerer Set",
        bossImg: "rotmg sheet/st/incss/boss.png",
        items: [
            { id: "incss-wand", name: "Heartbreaker Wand", img: "rotmg sheet/st/incss/wand.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/eemb.png"] },
            { id: "incss-scepter", name: "Lovesick Scepter", img: "rotmg sheet/st/incss/scepter.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/eemb.png"] },
            { id: "incss-robe", name: "Devilish Robes", img: "rotmg sheet/st/incss/robe.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/eemb.png"] },
            { id: "incss-horn", name: "Devil Horn Headband", img: "rotmg sheet/st/incss/horn.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/eemb.png"] }
        ]
    },
    {
        dungeon: "Raijin Disciple Set",
        bossImg: "rotmg sheet/st/raids/boss.png",
        items: [
            { id: "raids-kata", name: "Reikoku", img: "rotmg sheet/st/raids/kata.png", location: "Secluded Thicket", dungeonImg: "rotmg sheet/dung/seth.png", bossSources: ["rotmg sheet/mini/ttgb.png"] },
            { id: "raids-chakram", name: "Daybreak Chakram", img: "rotmg sheet/st/raids/chakram.png", location: "Secluded Thicket", dungeonImg: "rotmg sheet/dung/seth.png", bossSources: ["rotmg sheet/mini/eldo.png"] },
            { id: "raids-tenne", name: "Hirejou Tenne", img: "rotmg sheet/st/raids/tenne.png", location: "Secluded Thicket", dungeonImg: "rotmg sheet/dung/seth.png", bossSources: ["rotmg sheet/mini/xtlg.png"] },
            { id: "raids-magatama", name: "Heavenly Magatama", img: "rotmg sheet/st/raids/magatama.png", location: "Secluded Thicket", dungeonImg: "rotmg sheet/dung/seth.png", bossSources: ["rotmg sheet/mini/bitr.png","rotmg sheet/mini/detr1.png","rotmg sheet/mini/intr.png"] }
        ]
    },
    {
        dungeon: "Crystal Kunoichi Set",
        bossImg: "rotmg sheet/st/crks/boss.png",
        items: [
            { id: "crks-cutter", name: "Quartz Cutter", img: "rotmg sheet/st/crks/cutter.png", location: "Fungal Cavern", dungeonImg: "rotmg sheet/dung/fuca.png", bossSources: ["rotmg sheet/mini/crwc.png","rotmg sheet/mini/cagl.png","rotmg sheet/mini/cale.png","rotmg sheet/mini/cama.png"] },
            { id: "crks-kunai", name: "Crystalline Kunai", img: "rotmg sheet/st/crks/kunai.png", location: "Fungal Cavern", dungeonImg: "rotmg sheet/dung/fuca.png", bossSources: ["rotmg sheet/mini/crwc.png","rotmg sheet/mini/cagl.png","rotmg sheet/mini/cale.png","rotmg sheet/mini/cama.png"] },
            { id: "crks-armor", name: "Luminous Armor", img: "rotmg sheet/st/crks/armor.png", location: "Fungal Cavern", dungeonImg: "rotmg sheet/dung/fuca.png", bossSources: ["rotmg sheet/mini/crbo.png","rotmg sheet/mini/crcr.png","rotmg sheet/mini/crsh.png","rotmg sheet/mini/crch.png","rotmg sheet/mini/crwa1.png"] },
            { id: "crks-heart", name: "Radiant Heart", img: "rotmg sheet/st/crks/heart.png", location: "Fungal Cavern", dungeonImg: "rotmg sheet/dung/fuca.png", bossSources: ["rotmg sheet/mini/crbo.png","rotmg sheet/mini/crcr.png","rotmg sheet/mini/crsh.png","rotmg sheet/mini/crch.png","rotmg sheet/mini/crwa1.png","rotmg sheet/mini/cacr1.png"] }
        ]
    },
    {
        dungeon: "Onmyoji Ninja Set",
        bossImg: "rotmg sheet/st/onmns/boss.png",
        items: [
            { id: "onmns-shakujo", name: "Shakujo", img: "rotmg sheet/st/onmns/shakujo.png", location: "Moonlight Village (Forge)", dungeonImg: "rotmg sheet/mini/onss.png", bossSources: ["rotmg sheet/mini/sage.gif","rotmg sheet/mini/drka.gif","rotmg sheet/mini/dami.gif"] },
            { id: "onmns-scroll", name: "Invocation Scroll", img: "rotmg sheet/st/onmns/scroll.png", location: "Moonlight Village (Forge)", dungeonImg: "rotmg sheet/mini/onss.png", bossSources: ["rotmg sheet/mini/sage.gif","rotmg sheet/mini/drka.gif","rotmg sheet/mini/dami.gif"] },
            { id: "onmns-cloak", name: "Divination Cloak", img: "rotmg sheet/st/onmns/cloak.png", location: "Moonlight Village (Forge)", dungeonImg: "rotmg sheet/mini/onss.png", bossSources: ["rotmg sheet/mini/sage.gif","rotmg sheet/mini/drka.gif","rotmg sheet/mini/dami.gif"] },
            { id: "onmns-omamori", name: "Omamori", img: "rotmg sheet/st/onmns/omamori.png", location: "Moonlight Village (Forge)", dungeonImg: "rotmg sheet/mini/onss.png", bossSources: ["rotmg sheet/mini/sage.gif","rotmg sheet/mini/drka.gif","rotmg sheet/mini/dami.gif"] }
        ]
    },
    {
        dungeon: "Lei Gong Set",
        bossImg: "rotmg sheet/st/leigs/boss.png",
        items: [
            { id: "leigs-mallet", name: "Thunder Mallet", img: "rotmg sheet/st/leigs/mallet.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/eemb.png"] },
            { id: "leigs-chisel", name: "Enchanted Chisel", img: "rotmg sheet/st/leigs/chisel.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/eemb.png"] },
            { id: "leigs-daopao", name: "Daopao", img: "rotmg sheet/st/leigs/daopao.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/eemb.png"] },
            { id: "leigs-mala", name: "Mala Beads", img: "rotmg sheet/st/leigs/mala.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/eemb.png"] }
        ]
    },
    {
        dungeon: "Valentine's Day Ninja Set",
        bossImg: "rotmg sheet/st/valns/boss.png",
        items: [
            { id: "valns-katana", name: "Heartseeker Katana", img: "rotmg sheet/st/valns/katana.png", location: "Valentine’s Day Event 2025", dungeonImg: "rotmg sheet/dung/bella.png", bossSources: ["rotmg sheet/mini/whba.png"] },
            { id: "valns-star", name: "Eternal Star", img: "rotmg sheet/st/valns/star.png", location: "Valentine’s Day Event 2025", dungeonImg: "rotmg sheet/dung/bella.png", bossSources: ["rotmg sheet/mini/whba.png"] },
            { id: "valns-armor", name: "Chocolate Armor", img: "rotmg sheet/st/valns/armor.png", location: "Valentine’s Day Event 2025", dungeonImg: "rotmg sheet/dung/bella.png", bossSources: ["rotmg sheet/mini/whba.png"] },
            { id: "valns-ring", name: "Sweetener Ring", img: "rotmg sheet/st/valns/ring.png", location: "Valentine’s Day Event 2025", dungeonImg: "rotmg sheet/dung/bella.png", bossSources: ["rotmg sheet/mini/whba.png"] }
        ]
    },
    {
        dungeon: "Akuma Slayer Set",
        bossImg: "rotmg sheet/st/akss/boss.png",
        items: [
            { id: "akss-kazekiri", name: "Kazekiri", img: "rotmg sheet/st/akss/kazekiri.png", location: "Mountain Temple", dungeonImg: "rotmg sheet/dung/mote.png", bossSources: ["rotmg sheet/mini/datf.png"] },
            { id: "akss-blade", name: "Ryu's Blade", img: "rotmg sheet/st/akss/blade.png", location: "Mountain Temple", dungeonImg: "rotmg sheet/dung/mote.png", bossSources: ["rotmg sheet/mini/olch.png"] },
            { id: "akss-kamishimo", name: "Kamishimo", img: "rotmg sheet/st/akss/kamishimo.png", location: "Mountain Temple", dungeonImg: "rotmg sheet/dung/mote.png", bossSources: ["rotmg sheet/mini/datf.png","rotmg sheet/mini/olch.png"] },
            { id: "akss-tear", name: "Akuma's Tear", img: "rotmg sheet/st/akss/tear.png", location: "Mountain Temple", dungeonImg: "rotmg sheet/dung/mote.png", bossSources: ["rotmg sheet/mini/datf.png","rotmg sheet/mini/olch.png"] }
        ]
    },
    {
        dungeon: "Daring Discoverer Samurai Set",
        bossImg: "rotmg sheet/st/ddss/boss.png",
        items: [
            { id: "ddss-sword", name: "Kiritsukeru", img: "rotmg sheet/st/ddss/sword.png", location: "The Realm ", dungeonImg: "rotmg sheet/dung/realm.png", bossSources: ["rotmg sheet/mini/cygo.png","rotmg sheet/mini/sits.png"] },
            { id: "ddss-watari", name: "Watarimono", img: "rotmg sheet/st/ddss/watari.png", location: "The Realm ", dungeonImg: "rotmg sheet/dung/realm.png", bossSources: ["rotmg sheet/mini/oagi.png","rotmg sheet/mini/drtr.png"] },
            { id: "ddss-armor", name: "Reinforced Root Armor", img: "rotmg sheet/st/ddss/armor.png", location: "The Realm ", dungeonImg: "rotmg sheet/dung/realm.png", bossSources: ["rotmg sheet/mini/phre.png","rotmg sheet/mini/inrc.png"] },
            { id: "ddss-trinket", name: "Traveler's Trinket", img: "rotmg sheet/st/ddss/trinket.png", location: "The Realm ", dungeonImg: "rotmg sheet/dung/realm.png", bossSources: ["rotmg sheet/mini/deat.png","rotmg sheet/mini/medu.png"] }
        ]
    },
    {
        dungeon: "Frost Advisor Set",
        bossImg: "rotmg sheet/st/froas/boss.png",
        items: [
            { id: "froas-arsenal", name: "Iceborn Arsenal", img: "rotmg sheet/st/froas/arsenal.png", location: "Ice Citadel (Forge)", dungeonImg: "rotmg sheet/mini/fast.png", bossSources: ["rotmg sheet/mini/estn.png","rotmg sheet/mini/estn1.png","rotmg sheet/mini/estn2.png"] },
            { id: "froas-sidearm", name: "Sublimation Sidearm", img: "rotmg sheet/st/froas/sidearm.png", location: "Ice Citadel (Forge)", dungeonImg: "rotmg sheet/mini/fast.png", bossSources: ["rotmg sheet/mini/estn.png","rotmg sheet/mini/estn1.png","rotmg sheet/mini/estn2.png"] },
            { id: "froas-suit", name: "Retainer's Battlesuit", img: "rotmg sheet/st/froas/suit.png", location: "Ice Citadel (Forge)", dungeonImg: "rotmg sheet/mini/fast.png", bossSources: ["rotmg sheet/mini/estn.png","rotmg sheet/mini/estn1.png","rotmg sheet/mini/estn2.png"] },
            { id: "froas-penda", name: "Legacy's Pendant", img: "rotmg sheet/st/froas/penda.png", location: "Ice Citadel (Forge)", dungeonImg: "rotmg sheet/mini/fast.png", bossSources: ["rotmg sheet/mini/estn.png","rotmg sheet/mini/estn1.png","rotmg sheet/mini/estn2.png"] }
        ]
    },
    {
        dungeon: "Valentine's Day Samurai Set",
        bossImg: "rotmg sheet/st/vdss/boss.png",
        items: [
            { id: "vdss-katana", name: "Heartseeker Katana", img: "rotmg sheet/st/vdss/katana.png", location: "Valentine’s Day Event 2025", dungeonImg: "rotmg sheet/dung/bella.png", bossSources: ["rotmg sheet/mini/bega.png","rotmg sheet/mini/whba.png"] },
            { id: "vdss-wakizashi", name: "Sweetcut Wakizashi", img: "rotmg sheet/st/vdss/wakizashi.png", location: "Valentine’s Day Event 2025", dungeonImg: "rotmg sheet/dung/bella.png", bossSources: ["rotmg sheet/mini/bega.png","rotmg sheet/mini/whba.png"] },
            { id: "vdss-armor", name: "Lovebite Armor", img: "rotmg sheet/st/vdss/armor.png", location: "Valentine’s Day Event 2025", dungeonImg: "rotmg sheet/dung/bella.png", bossSources: ["rotmg sheet/mini/bega.png","rotmg sheet/mini/whba.png"] },
            { id: "vdss-ring", name: "Sweetener Ring", img: "rotmg sheet/st/vdss/ring.png", location: "Valentine’s Day Event 2025", dungeonImg: "rotmg sheet/dung/bella.png", bossSources: ["rotmg sheet/mini/bega.png","rotmg sheet/mini/whba.png"] }
        ]
    },
    {
        dungeon: "Angelic Bard Set",
        bossImg: "rotmg sheet/st/angbs/boss.png",
        items: [
            { id: "angbs-harp", name: "Harmonious Harp", img: "rotmg sheet/st/angbs/harp.png", location: "Oryx’s Sanctuary", dungeonImg: "rotmg sheet/dung/oryx.gif", bossSources: ["rotmg sheet/mini/oram.png","rotmg sheet/mini/oram.gif","rotmg sheet/mini/ormi.png","rotmg sheet/mini/ormi.gif","rotmg sheet/mini/orju.png","rotmg sheet/mini/orju.gif","rotmg sheet/mini/lepr.png"] },
            { id: "angbs-fanfare", name: "Angel's Fanfare", img: "rotmg sheet/st/angbs/fanfare.png", location: "Oryx’s Sanctuary", dungeonImg: "rotmg sheet/dung/oryx.gif", bossSources: ["rotmg sheet/mini/orof.png","rotmg sheet/mini/orse.png","rotmg sheet/mini/orma.png","rotmg sheet/mini/leco.png","rotmg sheet/mini/leco1.png"] },
            { id: "angbs-wings", name: "Wings of Sanctity", img: "rotmg sheet/st/angbs/wings.png", location: "Oryx’s Sanctuary", dungeonImg: "rotmg sheet/dung/oryx.gif", bossSources: ["rotmg sheet/mini/orde.png","rotmg sheet/mini/orcl.png","rotmg sheet/mini/orca.png","rotmg sheet/mini/lemi.png"] },
            { id: "angbs-halo", name: "Heavenly Halo", img: "rotmg sheet/st/angbs/halo.png", location: "Oryx’s Sanctuary", dungeonImg: "rotmg sheet/dung/oryx.gif", bossSources: ["rotmg sheet/mini/orno.png","rotmg sheet/mini/orar.png","rotmg sheet/mini/orpa.png","rotmg sheet/mini/leco2.png"] }
        ]
    },
    {
        dungeon: "Storm Caller Bard Set",
        bossImg: "rotmg sheet/st/scbs/boss.png",
        items: [
            { id: "scbs-bow", name: "Hailstorm", img: "rotmg sheet/st/scbs/bow.png", location: "Lair of Draconis", dungeonImg: "rotmg sheet/dung/laod.png", bossSources: ["rotmg sheet/mini/ftod.png"] },
            { id: "scbs-chorus", name: "Thundering Chorus", img: "rotmg sheet/st/scbs/chorus.png", location: "Lair of Draconis", dungeonImg: "rotmg sheet/dung/laod.png", bossSources: ["rotmg sheet/mini/ftod.png"] },
            { id: "scbs-robe", name: "Wind Dancer Robe", img: "rotmg sheet/st/scbs/robe.png", location: "Lair of Draconis", dungeonImg: "rotmg sheet/dung/laod.png", bossSources: ["rotmg sheet/mini/ftod.png"] },
            { id: "scbs-tempest", name: "Augur of the Tempest", img: "rotmg sheet/st/scbs/tempest.png", location: "Lair of Draconis", dungeonImg: "rotmg sheet/dung/laod.png", bossSources: ["rotmg sheet/mini/ftod.png"] }
        ]
    },
    {
        dungeon: "Scientific Summoner Set",
        bossImg: "rotmg sheet/st/sciss/boss.png",
        items: [
            { id: "sciss-claw", name: "C.L.A.W.", img: "rotmg sheet/st/sciss/claw.png", location: "High Tech Terror", dungeonImg: "rotmg sheet/dung/hite.png", bossSources: ["rotmg sheet/mini/fera.png"] },
            { id: "sciss-boom", name: "B.O.O.M.", img: "rotmg sheet/st/sciss/boom.png", location: "High Tech Terror", dungeonImg: "rotmg sheet/dung/hite.png", bossSources: ["rotmg sheet/mini/fera.png"] },
            { id: "sciss-armor", name: "A.R.M.O.R.", img: "rotmg sheet/st/sciss/armor.png", location: "High Tech Terror", dungeonImg: "rotmg sheet/dung/hite.png", bossSources: ["rotmg sheet/mini/aegi.png"] },
            { id: "sciss-con", name: "C.O.N.T.R.O.L.L.E.R.", img: "rotmg sheet/st/sciss/con.png", location: "High Tech Terror", dungeonImg: "rotmg sheet/dung/hite.png", bossSources: ["rotmg sheet/mini/aegi.png"] }
        ]
    },
    {
        dungeon: "Earthen Bulwark Summoner Set",
        bossImg: "rotmg sheet/st/ebss/boss.png",
        items: [
            { id: "ebss-ward", name: "Earthen Ward", img: "rotmg sheet/st/ebss/ward.png", location: "Lair of Draconis", dungeonImg: "rotmg sheet/dung/laod.png", bossSources: ["rotmg sheet/mini/ltvd.png"] },
            { id: "ebss-mace", name: "Stonemould Mace", img: "rotmg sheet/st/ebss/mace.png", location: "Lair of Draconis", dungeonImg: "rotmg sheet/dung/laod.png", bossSources: ["rotmg sheet/mini/ltvd.png"] },
            { id: "ebss-robe", name: "Rocky Robe", img: "rotmg sheet/st/ebss/robe.png", location: "Lair of Draconis", dungeonImg: "rotmg sheet/dung/laod.png", bossSources: ["rotmg sheet/mini/ltvd.png"] },
            { id: "ebss-glyph", name: "Steadfast Glyph", img: "rotmg sheet/st/ebss/glyph.png", location: "Lair of Draconis", dungeonImg: "rotmg sheet/dung/laod.png", bossSources: ["rotmg sheet/mini/ltvd.png"] }
        ]
    },
    {
        dungeon: "Ghostly Banshee Summoner Set",
        bossImg: "rotmg sheet/st/gbss/boss.png",
        items: [
            { id: "gbss-shriek", name: "Tormented Shriek", img: "rotmg sheet/st/gbss/shriek.png", location: "Blood and Spirit Campaign", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/siur.png"] },
            { id: "gbss-mace", name: "Ghastly Mace", img: "rotmg sheet/st/gbss/mace.png", location: "Blood and Spirit Campaign", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/siur.png"] },
            { id: "gbss-gown", name: "Lacerated Gown", img: "rotmg sheet/st/gbss/gown.png", location: "Blood and Spirit Campaign", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/siur.png"] },
            { id: "gbss-grudge", name: "Unresolved Grudge", img: "rotmg sheet/st/gbss/gude.png", location: "Blood and Spirit Campaign", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/siur.png"] }
        ]
    },
    {
        dungeon: "Tidal Wave Kensei Set",
        bossImg: "rotmg sheet/st/twks/boss.png",
        items: [
            { id: "twks-saif", name: "Saif of the Deep", img: "rotmg sheet/st/twks/saif.png", location: "Lair of Draconis", dungeonImg: "rotmg sheet/dung/laod.png", bossSources: ["rotmg sheet/mini/ntad.png"] },
            { id: "twks-loch", name: "Loch Sheath", img: "rotmg sheet/st/twks/loch.png", location: "Lair of Draconis", dungeonImg: "rotmg sheet/dung/laod.png", bossSources: ["rotmg sheet/mini/ntad.png"] },
            { id: "twks-reef", name: "Barrier Reef", img: "rotmg sheet/st/twks/reefg.png", location: "Lair of Draconis", dungeonImg: "rotmg sheet/dung/laod.png", bossSources: ["rotmg sheet/mini/ntad.png"] },
            { id: "twks-band", name: "Alexander's Band", img: "rotmg sheet/st/twks/band.png", location: "Lair of Draconis", dungeonImg: "rotmg sheet/dung/laod.png", bossSources: ["rotmg sheet/mini/ntad.png"] }
        ]
    },
    {
        dungeon: "Fiery Kensei Set",
        bossImg: "rotmg sheet/st/fieks/boss.png",
        items: [
            { id: "fieks-katana", name: "Fiery Katana", img: "rotmg sheet/st/fieks/katana.png", location: "Lair of Shaitan", dungeonImg: "rotmg sheet/dung/laos.png", bossSources: ["rotmg sheet/mini/shta.png","rotmg sheet/mini/shta1.png"] },
            { id: "fieks-sheath", name: "Pyro Sheath", img: "rotmg sheet/st/fieks/sheat.png", location: "Lair of Shaitan", dungeonImg: "rotmg sheet/dung/laos.png", bossSources: ["rotmg sheet/mini/shta.png","rotmg sheet/mini/shta1.png"] },
            { id: "fieks-guard", name: "Flame Guard", img: "rotmg sheet/st/fieks/guard.png", location: "Lair of Shaitan", dungeonImg: "rotmg sheet/dung/laos.png", bossSources: ["rotmg sheet/mini/shta.png","rotmg sheet/mini/shta1.png"] },
            { id: "fieks-necklace", name: "Firelight Necklace", img: "rotmg sheet/st/fieks/necklace.png", location: "Lair of Shaitan", dungeonImg: "rotmg sheet/dung/laos.png", bossSources: ["rotmg sheet/mini/shta.png","rotmg sheet/mini/shta1.png"] }
        ]
    },
    {
        dungeon: "Chocolate Bunny Summoner Set",
        bossImg: "rotmg sheet/st/cbss/boss.png",
        items: [
            { id: "cbss-wand", name: "Sweet Desire Wand", img: "rotmg sheet/st/cbss/wand.png", location: "Easter Summoner ST Chest (event)", dungeonImg: "rotmg sheet/dung/each.png", bossSources: ["rotmg sheet/mini/easc.png","rotmg sheet/mini/stfu.png","rotmg sheet/mini/pipe.png","rotmg sheet/mini/crgr.png"] },
            { id: "cbss-mace", name: "Chocolate Egg Mace", img: "rotmg sheet/st/cbss/mace.png", location: "Easter Summoner ST Chest (event)", dungeonImg: "rotmg sheet/dung/each.png", bossSources: ["rotmg sheet/mini/easc.png","rotmg sheet/mini/stfu.png","rotmg sheet/mini/pipe.png","rotmg sheet/mini/crgr.png"] },
            { id: "cbss-robe", name: "Chocolate Glazed Robe", img: "rotmg sheet/st/cbss/robe.png", location: "Easter Summoner ST Chest (event)", dungeonImg: "rotmg sheet/dung/each.png", bossSources: ["rotmg sheet/mini/easc.png","rotmg sheet/mini/stfu.png","rotmg sheet/mini/pipe.png","rotmg sheet/mini/crgr.png"] },
            { id: "cbss-ears", name: "Chocolate Bunny Ears", img: "rotmg sheet/st/cbss/ears.png", location: "Easter Summoner ST Chest (event)", dungeonImg: "rotmg sheet/dung/each.png", bossSources: ["rotmg sheet/mini/easc.png","rotmg sheet/mini/stfu.png","rotmg sheet/mini/pipe.png","rotmg sheet/mini/crgr.png"] }
        ]
    },
    {
        dungeon: "Fresh Carrot Paladin Set",
        bossImg: "rotmg sheet/st/fcps/boss.png",
        items: [
            { id: "fcps-blade", name: "Nutrient Rich Carrot Blade", img: "rotmg sheet/st/fcps/blade.png", location: "Easter Paladin ST Chest (event)", dungeonImg: "rotmg sheet/dung/each1.png", bossSources: ["rotmg sheet/mini/easc.png","rotmg sheet/mini/stfu.png","rotmg sheet/mini/pipe.png","rotmg sheet/mini/crgr.png"] },
            { id: "fcps-cake", name: "Carrot Cake Crest", img: "rotmg sheet/st/fcps/cake.png", location: "Easter Paladin ST Chest (event)", dungeonImg: "rotmg sheet/dung/each1.png", bossSources: ["rotmg sheet/mini/easc.png","rotmg sheet/mini/stfu.png","rotmg sheet/mini/pipe.png","rotmg sheet/mini/crgr.png"] },
            { id: "fcps-armor", name: "Hardened Carrot Armor", img: "rotmg sheet/st/fcps/armor.png", location: "Easter Paladin ST Chest (event)", dungeonImg: "rotmg sheet/dung/each1.png", bossSources: ["rotmg sheet/mini/easc.png","rotmg sheet/mini/stfu.png","rotmg sheet/mini/pipe.png","rotmg sheet/mini/crgr.png"] },
            { id: "fcps-hat", name: "Sun Bathed Straw Hat", img: "rotmg sheet/st/fcps/hat.png", location: "Easter Paladin ST Chest (event)", dungeonImg: "rotmg sheet/dung/each1.png", bossSources: ["rotmg sheet/mini/espc.png","rotmg sheet/mini/stfu.png","rotmg sheet/mini/pipe.png","rotmg sheet/mini/crgr.png"] }
        ]
    },
    {
        dungeon: "Painted Egg Archer Set",
        bossImg: "rotmg sheet/st/peas/boss.png",
        items: [
            { id: "peas-bow", name: "Spring Wonder Bow", img: "rotmg sheet/st/peas/bow.png", location: "Easter Archer ST Chest (event)", dungeonImg: "rotmg sheet/dung/each2.png", bossSources: ["rotmg sheet/mini/eaac.png","rotmg sheet/mini/stfu.png","rotmg sheet/mini/pipe.png","rotmg sheet/mini/crgr.png"] },
            { id: "peas-quiver", name: "Fresh Breeze Quiver", img: "rotmg sheet/st/peas/quiver.png", location: "Easter Archer ST Chest (event)", dungeonImg: "rotmg sheet/dung/each2.png", bossSources: ["rotmg sheet/mini/eaac.png","rotmg sheet/mini/stfu.png","rotmg sheet/mini/pipe.png","rotmg sheet/mini/crgr.png"] },
            { id: "peas-armor", name: "Painted Eggshell Armor", img: "rotmg sheet/st/peas/armor.png", location: "Easter Archer ST Chest (event)", dungeonImg: "rotmg sheet/dung/each2.png", bossSources: ["rotmg sheet/mini/eaac.png","rotmg sheet/mini/stfu.png","rotmg sheet/mini/pipe.png","rotmg sheet/mini/crgr.png"] },
            { id: "peas-amulet", name: "Painted Egg Amulet", img: "rotmg sheet/st/peas/amulet.png", location: "Easter Archer ST Chest (event)", dungeonImg: "rotmg sheet/dung/each2.png", bossSources: ["rotmg sheet/mini/eaac.png","rotmg sheet/mini/stfu.png","rotmg sheet/mini/pipe.png","rotmg sheet/mini/crgr.png"] }
        ]
    },
    {
        dungeon: "Void Doctor Priest Set",
        bossImg: "rotmg sheet/st/vdps/boss.png",
        items: [
            { id: "vdps-cane", name: "Cane of the Void", img: "rotmg sheet/st/vdps/cane.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/evch.png"] },
            { id: "vdps-leech", name: "Void Leeches", img: "rotmg sheet/st/vdps/leech.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/evch.png"] },
            { id: "vdps-coat", name: "Darkness Overcoat", img: "rotmg sheet/st/vdps/coat.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/evch.png"] },
            { id: "vdps-mask", name: "Void Mask", img: "rotmg sheet/st/vdps/mask.png", location: "Event", dungeonImg: "rotmg sheet/dung/event.png", bossSources: ["rotmg sheet/mini/evch.png"] }
        ]
    },
    {
        dungeon: "Blood Viking Knight Set",
        bossImg: "rotmg sheet/st/bvks/boss.png",
        items: [
            { id: "bvks-axe", name: "Blood Axe", img: "rotmg sheet/st/bvks/axe.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png"},
            { id: "bvks-buckler", name: "Sun Star Buckler", img: "rotmg sheet/st/bvks/buckler.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "bvks-coat", name: "Fur Coat", img: "rotmg sheet/st/bvks/coat.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "bvks-boots", name: "Winter Boots", img: "rotmg sheet/st/bvks/boots.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" }
        ]
    },
    {
        dungeon: "Globular Necromancer Set",
        bossImg: "rotmg sheet/st/glons/boss.png",
        items: [
            { id: "glons-staff", name: "Bloody Pitch Fork Staff", img: "rotmg sheet/st/glons/staff.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "glons-esse", name: "Blood Essence", img: "rotmg sheet/st/glons/esse.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "glons-robe", name: "Curse Binding Robes", img: "rotmg sheet/st/glons/robe.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "glons-headband", name: "Spike Headband", img: "rotmg sheet/st/glons/headband.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" }
        ]
    },
    {
        dungeon: "Frost Wander Archer Set",
        bossImg: "rotmg sheet/st/fwas/boss.png",
        items: [
            { id: "fwas-mittens", name: "Frostbite Mittens", img: "rotmg sheet/st/fwas/mittens.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "fwas-critters", name: "Snow critters", img: "rotmg sheet/st/fwas/critters.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "fwas-jacket", name: "Blizzard Jacket", img: "rotmg sheet/st/fwas/jacket.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "fwas-scarf", name: "Magical Winter Scarf", img: "rotmg sheet/st/fwas/scarf.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png"}
        ]
    },
    {
        dungeon: "Spectral Sentry Rogue Set",
        bossImg: "rotmg sheet/st/ssrs/boss.png",
        items: [
            { id: "ssrs-sickle", name: "Phantom Sickle", img: "rotmg sheet/st/ssrs/sickle.png", location: "Forge", dungeonImg: "rotmg sheet/dung/forge.gif", bossSources: ["rotmg sheet/mini/srst.png","rotmg sheet/mini/loba.png"] },
            { id: "ssrs-cloak", name: "Spectre Cloak", img: "rotmg sheet/st/ssrs/cloak.png", location: "Forge", dungeonImg: "rotmg sheet/dung/forge.gif", bossSources: ["rotmg sheet/mini/srst.png","rotmg sheet/mini/loba.png"] },
            { id: "ssrs-armor", name: "Reaper's Shroud", img: "rotmg sheet/st/ssrs/armor.png", location: "Forge", dungeonImg: "rotmg sheet/dung/forge.gif", bossSources: ["rotmg sheet/mini/srst.png","rotmg sheet/mini/loba.png"] },
            { id: "ssrs-necklace", name: "Soul Necklace", img: "rotmg sheet/st/ssrs/necklace.png", location: "Forge", dungeonImg: "rotmg sheet/dung/forge.gif", bossSources: ["rotmg sheet/mini/srst.png","rotmg sheet/mini/loba.png"] }
        ]
    },
    {
        dungeon: "Ancestral Shaman Set",
        bossImg: "rotmg sheet/st/ancss/boss.png",
        items: [
            { id: "ancss-firestart", name: "Firestarter", img: "rotmg sheet/st/ancss/firestart.png", location: "Forge", dungeonImg: "rotmg sheet/dung/forge.gif", bossSources: ["rotmg sheet/mini/asbst.png","rotmg sheet/mini/loba.png"] },
            { id: "ancss-lute", name: "Sacred Lute", img: "rotmg sheet/st/ancss/lute.png", location: "Forge", dungeonImg: "rotmg sheet/dung/forge.gif", bossSources: ["rotmg sheet/mini/asbst.png","rotmg sheet/mini/loba.png"] },
            { id: "ancss-pau", name: "Ritualistic Pa'u", img: "rotmg sheet/st/ancss/pau.png", location: "Forge", dungeonImg: "rotmg sheet/dung/forge.gif", bossSources: ["rotmg sheet/mini/asbst.png","rotmg sheet/mini/loba.png"] },
            { id: "ancss-tiki", name: "Tiki Pendant", img: "rotmg sheet/st/ancss/tiki.png", location: "Forge", dungeonImg: "rotmg sheet/dung/forge.gif", bossSources: ["rotmg sheet/mini/asbst.png","rotmg sheet/mini/loba.png"] }
        ]
    },
    {
        dungeon: "Love Witch Necromancer Set",
        bossImg: "rotmg sheet/st/lwns/boss.png",
        items: [
            { id: "lwns-gloves", name: "Gloves of Love", img: "rotmg sheet/st/lwns/gloves.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "lwns-mask", name: "Mask of Passion", img: "rotmg sheet/st/lwns/mask.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "lwns-robe", name: "Boudoir Robe", img: "rotmg sheet/st/lwns/robe.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "lwns-anheart", name: "Essence of Love", img: "rotmg sheet/st/lwns/anheart.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "lwns-heart", name: "Essence of Enlightened Love", img: "rotmg sheet/st/lwns/heart.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" }
        ]
    },
    {
        dungeon: "Rose Keeper Necromancer Set",
        bossImg: "rotmg sheet/st/rkns/boss.png",
        items: [
            { id: "rkns-rose", name: "Spring Rose", img: "rotmg sheet/st/rkns/rose.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "rkns-skull", name: "Ever Green Skull", img: "rotmg sheet/st/rkns/skull.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "rkns-corset", name: "Floral Corset", img: "rotmg sheet/st/rkns/corset.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "rkns-brooch", name: "Rose Brooch", img: "rotmg sheet/st/rkns/brooch.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" }
        ]
    },
    {
        dungeon: "Mechanical Raptor Druid Set",
        bossImg: "rotmg sheet/st/mrds/boss.png",
        items: [
            { id: "mrds-gear", name: "Gearhawk Morning Star", img: "rotmg sheet/st/mrds/gear.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "mrds-sigil", name: "Mechraptor Sigil", img: "rotmg sheet/st/mrds/sigil.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "mrds-jerkin", name: "Mechpilot's Jerkin", img: "rotmg sheet/st/mrds/jerkin.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "mrds-band", name: "Pressure Gauge Band", img: "rotmg sheet/st/mrds/band.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" }
        ]
    },
    {
        dungeon: "Demon Guitarist Set",
        bossImg: "rotmg sheet/st/demgs/boss.png",
        items: [
            { id: "demgs-guitar", name: "Electric Guitar", img: "rotmg sheet/st/demgs/guitar.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "demgs-pick", name: "Inferno Pick", img: "rotmg sheet/st/demgs/pick.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "demgs-fallen", name: "Wings of the Fallen", img: "rotmg sheet/st/demgs/fallen.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" },
            { id: "demgs-ponytail", name: "Pointy Tail", img: "rotmg sheet/st/demgs/ponytail.png", location: "Money", dungeonImg: "rotmg sheet/dung/money.png" }
        ]
    }
];

const grid = document.getElementById('tracker-grid');
const tooltip = document.getElementById('tooltip');

function updateProgress() {
    const allItems = data.flatMap(s => s.items);
    const total = allItems.length;
    const obtained = allItems.filter(item => localStorage.getItem(item.id) === 'true').length;
    
    const fill = document.getElementById('progress-bar-fill');
    if (fill) fill.style.width = total > 0 ? (obtained / total * 100) + '%' : '0%';
    
    const label = document.getElementById('progress-label');
    if (label) label.textContent = `${obtained} / ${total} obtained`;
}

if (grid) {
    data.forEach(section => {
        const card = document.createElement('div');
        card.className = 'section-card';
        
        card.innerHTML = `
            <div class="section-header">${section.dungeon}</div>
            <div class="card-body">
                <div class="boss-container" style="width: 80px; height: 80px; flex-shrink: 0; display: flex; justify-content: center; align-items: center;">
                    <img src="${section.bossImg}" style="width: 80px; height: 80px; image-rendering: pixelated; object-fit: contain;">
                </div>
                <div class="items-list"></div>
            </div>
        `;

        const itemsList = card.querySelector('.items-list');

        section.items.forEach(item => {
            const img = document.createElement('img');
            img.src = item.img;
            img.classList.add('item-sprite');
            
            if (localStorage.getItem(item.id) === 'true') img.classList.add('obtained');

            img.addEventListener('click', () => {
                const hasIt = img.classList.toggle('obtained');
                localStorage.setItem(item.id, hasIt);
                updateProgress(); 
            });

            img.addEventListener('mouseenter', (e) => {
                tooltip.style.display = 'block';
                
                // Fallback Logic
                const finalLocation = item.location || section.dungeon;
                const finalDungeonImg = item.dungeonImg || section.bossImg;
                
                // Change this part in your script.js
                    const bossIcons = (item.bossSources && item.bossSources.length > 0) 
                    ? item.bossSources.map(src => `<img src="${src}" style="width:30px; height:30px; image-rendering:pixelated; margin-right:5px;">`).join('')
                    : ""; // This now returns an empty string if you haven't put images in yet

                 tooltip.innerHTML = `
                    <div style="font-weight: bold; font-size: 15px; margin-bottom: 8px; border-bottom: 1px solid #c8a951; padding-bottom: 4px;">
                        ${item.name}
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                        <img src="${finalDungeonImg}" style="width:20px; height:20px; image-rendering:pixelated; margin-right:8px;">
                        <span style="color: #00ffcc; font-size: 13px; font-weight: bold;">${finalLocation}</span>
                    </div>
                    <div style="display: flex; gap: 5px; flex-wrap: wrap;">
                        ${bossIcons}
                    </div>
                `;
                
            });

            img.addEventListener('mousemove', (e) => {
                tooltip.style.left = (e.clientX + 15) + 'px';
                tooltip.style.top = (e.clientY + 15) + 'px';
            });

            img.addEventListener('mouseleave', () => {
                tooltip.style.display = 'none';
            });

            itemsList.appendChild(img);
        });

        grid.appendChild(card);
    });
}

// Search
document.getElementById('search-bar').addEventListener('input', (e) => {
    const search = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.section-card');
    data.forEach((section, index) => {
        const match = section.dungeon.toLowerCase().includes(search) || 
                      section.items.some(i => i.name.toLowerCase().includes(search));
        if (cards[index]) cards[index].style.display = match ? "" : "none";
    });
});

// Reset
document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm("Reset all progress?")) {
        localStorage.clear();
        location.reload();
    }
});

updateProgress();