//tacz official ammo recipes
ServerEvents.recipes((event) => {
    //ulv/lv ammo recipes
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/lead",
                },
                count: 9,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 9,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 9,
            },
            {
                item: {
                    tag: "forge:small_dusts/gunpowder",
                },
                count: 36,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:45_70",
            count: 18,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:nuggets/lead",
                },
                count: 9,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 5,
            },
            {
                item: {
                    tag: "forge:small_dusts/gunpowder",
                },
                count: 18,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:12g",
            count: 9,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/lead",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:small_dusts/gunpowder",
                },
                count: 16,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:45acp",
            count: 16,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/lead",
                },
                count: 9,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 9,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 9,
            },
            {
                item: {
                    tag: "forge:small_dusts/gunpowder",
                },
                count: 18,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:9mm",
            count: 18,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/lead",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:gunpowder",
                },
                count: 16,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:357mag",
            count: 16,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 17,
            },
            {
                item: {
                    tag: "forge:foils/lead",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 25,
            },
            {
                item: {
                    tag: "forge:plates/steel",
                },
                count: 17,
            },
            {
                item: {
                    tag: "forge:gunpowder",
                },
                count: 34,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:762x39",
            count: 17,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/lead",
                },
                count: 15,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 15,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 15,
            },
            {
                item: {
                    tag: "forge:gunpowder",
                },
                count: 30,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:308",
            count: 15,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 15,
            },
            {
                item: {
                    item: "gtceu:powderbarrel",
                },
                count: 1,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:rpg_rocket",
            count: 1,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 15,
            },
            {
                item: {
                    item: "minecraft:tnt",
                },
                count: 1,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:rpg_rocket",
            count: 6,
        },
    });

    //MV craftable ammo
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 23,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 23,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 11,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 11,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:556x45",
            count: 23,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/lead",
                },
                count: 12,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 6,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 6,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:30_06",
            count: 12,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/lead",
                },
                count: 9,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 5,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 9,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 18,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:50ae",
            count: 18,
        },
    });

    //better ulv/lv ammo recipes
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 17,
            },
            {
                item: {
                    tag: "forge:foils/lead",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 25,
            },
            {
                item: {
                    tag: "forge:plates/steel",
                },
                count: 17,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 8,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:762x39",
            count: 17,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/lead",
                },
                count: 15,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 15,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 15,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 8,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:308",
            count: 15,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/lead",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 8,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 4,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:357mag",
            count: 16,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/lead",
                },
                count: 9,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 9,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 9,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 2,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:9mm",
            count: 18,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/lead",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 8,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 3,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:45acp",
            count: 16,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:nuggets/lead",
                },
                count: 9,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 5,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 6,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:12g",
            count: 9,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/lead",
                },
                count: 9,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 9,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 9,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 7,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:45_70",
            count: 18,
        },
    });

    //HV craftable ammo
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/vanadium_steel",
                },
                count: 24,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 24,
            },
            {
                item: {
                    tag: "forge:foils/lead",
                },
                count: 24,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 12,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 8,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:57x28",
            count: 24,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 23,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 23,
            },
            {
                item: {
                    tag: "forge:foils/lead",
                },
                count: 23,
            },
            {
                item: {
                    tag: "forge:foils/steel",
                },
                count: 24,
            },
            {
                item: {
                    tag: "forge:plates/steel",
                },
                count: 11,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 11,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:58x42",
            count: 23,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/lead",
                },
                count: 9,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 9,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 5,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 5,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:338",
            count: 9,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 12,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 10,
            },
            {
                item: {
                    tag: "forge:foils/lead",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:foils/steel",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:plates/steel",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 4,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 8,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:50bmg",
            count: 12,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/black_steel",
                },
                count: 6,
            },
            {
                item: {
                    item: "minecraft:tnt",
                },
                count: 1,
            },
        ],
        result: {
            type: "ammo",
            id: "tacz:40mm",
            count: 6,
        },
    });

    //Helldiver2 AMMO recipes
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/vanadium_steel",
                },
                count: 15,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 15,
            },
            {
                item: {
                    tag: "forge:foils/lead",
                },
                count: 15,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 15,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 15,
            },
        ],
        result: {
            type: "ammo",
            id: "helldiver2:pistol_normal",
            count: 30,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/vanadium_steel",
                },
                count: 15,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 8,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 8,
            },
        ],
        result: {
            type: "ammo",
            id: "helldiver2:rifle_normal",
            count: 15,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:nuggets/lead",
                },
                count: 20,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 5,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 8,
            },
        ],
        result: {
            type: "ammo",
            id: "helldiver2:shotgun_normal",
            count: 10,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/tungsten_steel",
                },
                count: 15,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 8,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 8,
            },
        ],
        result: {
            type: "ammo",
            id: "helldiver2:rifle_ap",
            count: 15,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/tungsten_steel",
                },
                count: 15,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 20,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 15,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 30,
            },
        ],
        result: {
            type: "ammo",
            id: "helldiver2:explode_ap",
            count: 15,
        },
    });

    //Create Armorer && Immersive Armorer BULLET recipes
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/lead",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 8,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 4,
            },
        ],
        result: {
            type: "ammo",
            id: "immersive_armorer:454_casul",
            count: 15,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/lead",
                },
                count: 15,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 15,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 15,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 8,
            },
        ],
        result: {
            type: "ammo",
            id: "create_armorer:gas_pistol_ammo",
            count: 30,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/lead",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 8,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 5,
            },
        ],
        result: {
            type: "ammo",
            id: "create_armorer:rbapb",
            count: 16,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 30,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 20,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 15,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 10,
            },
        ],
        result: {
            type: "ammo",
            id: "create_armorer:slap",
            count: 30,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:bolts/vanadium_steel",
                },
                count: 30,
            },
            {
                item: {
                    tag: "forge:foils/lead",
                },
                count: 10,
            },
            {
                item: {
                    tag: "forge:foils/copper",
                },
                count: 10,
            },
            {
                item: {
                    tag: "forge:plates/brass",
                },
                count: 15,
            },
            {
                item: {
                    item: "gtceu:dynamite",
                },
                count: 10,
            },
        ],
        result: {
            type: "ammo",
            id: "immersive_armorer:ap_ammo",
            count: 30,
        },
    });

    //Immersive Armorer special AMMO recipes
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 16,
            },
            {
                item: {
                    item: "gtceu:gelled_toluene",
                },
                count: 16,
            },
            {
                item: {
                    tag: "forge:dusts/blaze",
                },
                count: 32,
            },
            {
                item: {
                    type: "forge:partial_nbt",
                    item: "gtceu:steel_fluid_cell",
                    nbt: {
                        Fluid: {
                            Amount: 8000,
                            FluidName: "gtceu:gasoline",
                        },
                    },
                },
                count: 2,
            },
        ],
        result: {
            type: "ammo",
            id: "immersive_armorer:chemical",
            count: 16,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/steel",
                },
                count: 8,
            },
        ],
        result: {
            type: "ammo",
            id: "immersive_armorer:cut_steel_rod",
            count: 16,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    type: "forge:partial_nbt",
                    item: "gtceu:tantalum_capacitor",
                    nbt: {
                        Charge: 1000,
                    },
                },
                count: 16,
            },
            {
                item: {
                    item: "enderio:basic_capacitor",
                },
                count: 16,
            },
        ],
        result: {
            type: "ammo",
            id: "immersive_armorer:burst_capacitor",
            count: 16,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    item: "gtceu:lv_emitter",
                },
                count: 1,
            },
            {
                item: {
                    type: "forge:partial_nbt",
                    item: "gtceu:tantalum_capacitor",
                    nbt: {
                        Charge: 1000,
                    },
                },
                count: 32,
            },
            {
                item: {
                    item: "enderio:double_layer_capacitor",
                },
                count: 16,
            },
        ],
        result: {
            type: "ammo",
            id: "immersive_armorer:stream_capacitor",
            count: 16,
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    item: "gtceu:mv_emitter",
                },
                count: 1,
            },
            {
                item: {
                    type: "forge:partial_nbt",
                    item: "gtceu:tantalum_capacitor",
                    nbt: {
                        Charge: 1000,
                    },
                },
                count: 64,
            },
            {
                item: {
                    item: "enderio:octadic_capacitor",
                },
                count: 16,
            },
        ],
        result: {
            type: "ammo",
            id: "immersive_armorer:high_power_capacitor",
            count: 8,
        },
    });
});