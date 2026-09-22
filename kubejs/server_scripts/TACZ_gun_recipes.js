//tacz official gun recipes
ServerEvents.recipes((event) => {
    const gunIds = [];
    event.forEachRecipe({}, (r) => {
        const id = String(r.getId());
        if (id.startsWith("tacz:gun/")) {
            gunIds.push(id);
        }
    });

    gunIds.forEach((id) => {
        event.remove({ id: id });
        console.info(`Removed gun recipe: ${id}`);
    });

    // ULV Guns
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:plates/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "minecraft:planks",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/long/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:springfield1873",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:plates/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "minecraft:planks",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/long/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:db_long",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:plates/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "minecraft:planks",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:db_short",
        },
    });

    //LV Guns
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/treated_wood",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:ak47",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/treated_wood",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:fn_fal",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/treated_wood",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:hk_g3",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/treated_wood",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:sks_tactical",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/treated_wood",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/long/steel",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:m870",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:rods/long/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:uzi",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 10,
            },
            {
                item: {
                    tag: "forge:plates/polyvinyl_chloride",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/long/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:hk_mp5a5",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 5,
            },
            {
                item: {
                    tag: "minecraft:planks",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/steel",
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:small_springs/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:m1911",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 7,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/steel",
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:small_springs/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:cz75",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 10,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/steel",
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:small_springs/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:b93r",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 7,
            },
            {
                item: {
                    tag: "forge:foils/gold",
                },
                count: 5,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/steel",
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:small_springs/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:deagle_golden",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 21,
            },
            {
                item: {
                    tag: "forge:bolts/stainless_steel",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:rods/stainless_steel",
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:small_springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:deagle",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/steel",
                },
                count: 10,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/treated_wood",
                },
                count: 6,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:rpg7",
        },
    });

    //MV Guns, Black Steel and Vanadium Steel(use Vanadium Steel more later), plus Magnalium
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/vanadium_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/black_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/treated_wood",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:type_81",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/vanadium_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/treated_wood",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:rpk",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/vanadium_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/black_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:m249",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/vanadium_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 5,
            },
            {
                item: {
                    tag: "forge:bolts/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:screws/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/polyvinyl_chloride",
                },
                count: 3,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:m16a1",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/vanadium_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 5,
            },
            {
                item: {
                    tag: "forge:bolts/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:screws/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/polyvinyl_chloride",
                },
                count: 3,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:m16a4",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/vanadium_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 5,
            },
            {
                item: {
                    tag: "forge:bolts/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:screws/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/polyvinyl_chloride",
                },
                count: 3,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:spr15hb",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/vanadium_steel",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 5,
            },
            {
                item: {
                    tag: "forge:bolts/magnalium",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:screws/magnalium",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:mk14",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/vanadium_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/black_steel",
                },
                count: 3,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 3,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 3,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/steel",
                },
                count: 1,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:m700",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/vanadium_steel",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/black_steel",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:bolts/titanium",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/stainless_steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:m95",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/long/vanadium_steel",
                },
                count: 3,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:spas_12",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 7,
            },
            {
                item: {
                    tag: "forge:foils/gold",
                },
                count: 3,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/vanadium_steel",
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:small_springs/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:timeless50",
        },
    });

    //HV Guns
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/stainless_steel",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/stainless_steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:lenses",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:aug",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/stainless_steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 10,
            },
            {
                item: {
                    item: "gtceu:carbon_fiber_plate",
                },
                count: 8,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:g36k",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/vanadium_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 5,
            },
            {
                item: {
                    tag: "forge:bolts/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:screws/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 3,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:m4a1",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:bolts/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:screws/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/stainless_steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 6,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:qbz_95",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:bolts/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:screws/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 6,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:scar_l",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:bolts/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:screws/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:scar_h",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 5,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 16,
            },
            {
                item: {
                    tag: "forge:bolts/magnalium",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:screws/magnalium",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:small_gears/stainless_steel",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 10,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:hk416d",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 5,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 16,
            },
            {
                item: {
                    tag: "forge:bolts/magnalium",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:screws/magnalium",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:small_gears/stainless_steel",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 12,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:qbz_191",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:bolts/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 3,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 1,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:ai_awp",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:bolts/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    item: "gtceu:carbon_fiber_plate",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:fn_evolys",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/stainless_steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 1,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:ump45",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 10,
            },
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:bolts/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 1,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:vector45",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 16,
            },
            {
                item: {
                    tag: "forge:bolts/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 1,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:p90",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 1,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:aa12",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 3,
            },
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:bolts/stainless_steel",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:m1014",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 5,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:bolts/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/stainless_steel",
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:small_springs/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:p320",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 10,
            },
            {
                item: {
                    tag: "forge:plates/rubber",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/steel",
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:small_springs/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:glock_17",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 10,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:bolts/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/stainless_steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/magnalium",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:m320",
        },
    });

    //EV
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/hsla_steel",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:double_plates/maraging_steel_300",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:bolts/titanium",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 3,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:foils/polycaprolactam",
                },
                count: 1,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:m107",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:plates/magnalium",
                },
                count: 16,
            },
            {
                item: {
                    tag: "forge:bolts/titanium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    item: "gtceu:ev_electric_motor",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:gears/titanium",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rotors/titanium",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 12,
            },
        ],
        result: {
            type: "gun",
            id: "tacz:minigun",
        },
    });
    //tacz 1.1.8 weapon recipes
    let ComparableVersion = Java.loadClass(
        "org.apache.maven.artifact.versioning.ComparableVersion",
    );
    let taczVerStr = Platform.getInfo("tacz").getVersion();
    let current = new ComparableVersion(taczVerStr);
    let target = new ComparableVersion("1.1.8");
    let cmp = current.compareTo(target);
    if (cmp >= 0) {
        event.custom({
            type: "tacz:gun_smith_table_crafting",
            materials: [
                {
                    item: {
                        tag: "forge:rods/long/steel",
                    },
                    count: 6,
                },
                {
                    item: {
                        tag: "forge:springs/steel",
                    },
                    count: 1,
                },
                {
                    item: {
                        tag: "forge:double_plates/steel",
                    },
                    count: 6,
                },
                {
                    item: {
                        tag: "forge:bolts/steel",
                    },
                    count: 5,
                },
                {
                    item: {
                        tag: "forge:rounds/iron",
                    },
                    count: 4,
                },
                {
                    item: {
                        tag: "forge:small_gears/steel",
                    },
                    count: 2,
                },
                {
                    item: {
                        tag: "forge:plates/treated_wood",
                    },
                    count: 4,
                },
            ],
            result: {
                type: "gun",
                id: "tacz:kar98",
            },
        });

        event.custom({
            type: "tacz:gun_smith_table_crafting",
            materials: [
                {
                    item: {
                        tag: "forge:double_plates/steel",
                    },
                    count: 9,
                },
                {
                    item: {
                        tag: "forge:plates/treated_wood",
                    },
                    count: 4,
                },
                {
                    item: {
                        tag: "forge:bolts/steel",
                    },
                    count: 3,
                },
                {
                    item: {
                        tag: "forge:rods/steel",
                    },
                    count: 1,
                },
                {
                    item: {
                        tag: "forge:small_gears/steel",
                    },
                    count: 2,
                },
            ],
            result: {
                type: "gun",
                id: "tacz:taurus943",
            },
        });

        event.custom({
            type: "tacz:gun_smith_table_crafting",
            materials: [
                {
                    item: {
                        tag: "forge:rods/long/steel",
                    },
                    count: 2,
                },
                {
                    item: {
                        tag: "forge:springs/steel",
                    },
                    count: 1,
                },
                {
                    item: {
                        tag: "forge:double_plates/steel",
                    },
                    count: 3,
                },
                {
                    item: {
                        tag: "forge:bolts/steel",
                    },
                    count: 4,
                },
                {
                    item: {
                        tag: "forge:rounds/iron",
                    },
                    count: 1,
                },
                {
                    item: {
                        tag: "forge:small_gears/steel",
                    },
                    count: 2,
                },
                {
                    item: {
                        tag: "forge:rods/steel",
                    },
                    count: 1,
                },
            ],
            result: {
                type: "gun",
                id: "tacz:lonetrail",
            },
        });

        event.custom({
            type: "tacz:gun_smith_table_crafting",
            materials: [
                {
                    item: {
                        tag: "forge:double_plates/black_steel",
                    },
                    count: 5,
                },
                {
                    item: {
                        tag: "forge:plates/rubber",
                    },
                    count: 4,
                },
                {
                    item: {
                        tag: "forge:bolts/vanadium_steel",
                    },
                    count: 4,
                },
                {
                    item: {
                        tag: "forge:rods/vanadium_steel",
                    },
                    count: 1,
                },
                {
                    item: {
                        tag: "forge:small_springs/steel",
                    },
                    count: 2,
                },
            ],
            result: {
                type: "gun",
                id: "tacz:hk_mk23",
            },
        });

        event.custom({
            type: "tacz:gun_smith_table_crafting",
            materials: [
                {
                    item: {
                        tag: "forge:double_plates/black_steel",
                    },
                    count: 9,
                },
                {
                    item: {
                        tag: "forge:plates/treated_wood",
                    },
                    count: 2,
                },
                {
                    item: {
                        tag: "forge:bolts/vanadium_steel",
                    },
                    count: 3,
                },
                {
                    item: {
                        tag: "forge:rods/vanadium_steel",
                    },
                    count: 1,
                },
                {
                    item: {
                        tag: "forge:small_gears/steel",
                    },
                    count: 2,
                },
            ],
            result: {
                type: "gun",
                id: "tacz:rhino357",
            },
        });

        event.custom({
            type: "tacz:gun_smith_table_crafting",
            materials: [
                {
                    item: {
                        tag: "forge:double_plates/steel",
                    },
                    count: 10,
                },
                {
                    item: {
                        tag: "forge:plates/rubber",
                    },
                    count: 8,
                },
                {
                    item: {
                        tag: "forge:bolts/steel",
                    },
                    count: 4,
                },
                {
                    item: {
                        tag: "forge:rods/vanadium_steel",
                    },
                    count: 1,
                },
                {
                    item: {
                        tag: "forge:small_springs/steel",
                    },
                    count: 2,
                },
            ],
            result: {
                type: "gun",
                id: "tacz:m9a4",
            },
        });

        event.custom({
            type: "tacz:gun_smith_table_crafting",
            materials: [
                {
                    item: {
                        tag: "forge:double_plates/hssg",
                    },
                    count: 9,
                },
                {
                    item: {
                        tag: "forge:plates/polycaprolactam",
                    },
                    count: 2,
                },
                {
                    item: {
                        tag: "forge:bolts/hssg",
                    },
                    count: 3,
                },
                {
                    item: {
                        tag: "forge:rods/hssg",
                    },
                    count: 1,
                },
                {
                    item: {
                        tag: "forge:small_gears/hssg",
                    },
                    count: 2,
                },
            ],
            result: {
                type: "gun",
                id: "tacz:taurus500",
            },
        });
    }
});

//helldiver2 pack recipes
ServerEvents.recipes((event) => {
    const gunIds = [];
    event.forEachRecipe({}, (r) => {
        const id = String(r.getId());
        if (id.startsWith("helldiver2:gun/")) {
            gunIds.push(id);
        }
    });

    gunIds.forEach((id) => {
        event.remove({ id: id });
        console.info(`Removed gun recipe: ${id}`);
    });

    //helldiver2 pack easteregg
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 21,
            },
            {
                item: {
                    tag: "forge:bolts/titanium",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:rods/stainless_steel",
                },
                count: 1,
            },
            {
                item: {
                    type: "forge:partial_nbt",
                    item: "minecraft:player_head",
                    nbt: {
                        SkullOwner: {
                            Name: "Rhodes_koei",
                        },
                    },
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:small_springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    item: "minecraft:nether_star",
                },
                count: 1,
            },
        ],
        result: {
            type: "gun",
            id: "helldiver2:authorized_gun",
        },
    });

    //HV weapons
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/vanadium_steel",
                },
                count: 7,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:bolts/vanadium_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/vanadium_steel",
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:small_springs/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "helldiver2:p2_peacemaker",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/stainless_steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 1,
            },
        ],
        result: {
            type: "gun",
            id: "helldiver2:smg37_defender",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 10,
            },
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:bolts/magnalium",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "helldiver2:ar23_liberator",
        },
    });

    //EV weapons
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 14,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 3,
            },
            {
                item: {
                    tag: "forge:bolts/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/titanium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/tungsten_steel",
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "helldiver2:p19_redeemer",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/tungsten_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/titanium",
                },
                count: 10,
            },
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:bolts/magnalium",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "helldiver2:ar23c_liberator",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/tungsten_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/hsla_steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/titanium",
                },
                count: 12,
            },
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:bolts/magnalium",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/tungsten_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 6,
            },
        ],
        result: {
            type: "gun",
            id: "helldiver2:ar23p_liberator",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/titanium",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:bolts/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/tungsten_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 8,
            },
        ],
        result: {
            type: "gun",
            id: "helldiver2:r63_diligence",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/tungsten_steel",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:springs/hsla_steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/titanium",
                },
                count: 16,
            },
            {
                item: {
                    tag: "forge:double_plates/watertight_steel",
                },
                count: 12,
            },
            {
                item: {
                    tag: "forge:bolts/titanium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/tungsten_steel",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 8,
            },
        ],
        result: {
            type: "gun",
            id: "helldiver2:r63cs_diligence",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/hsla_steel",
                },
                count: 10,
            },
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:bolts/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/hsla_steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/long/tungsten_steel",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "helldiver2:sg225_breaker",
        },
    });

    //IV Weapons
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/hsla_steel",
                },
                count: 10,
            },
            {
                item: {
                    tag: "forge:double_plates/magnalium",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:bolts/magnalium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/niobium_titanium",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/hsse",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/long/tungsten_steel",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "helldiver2:sg225ie_breaker",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/hsse",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:springs/hsla_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:double_plates/hsse",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:bolts/niobium_titanium",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:rounds/hsss",
                },
                count: 3,
            },
            {
                item: {
                    tag: "forge:small_gears/titanium",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/niobium_titanium",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:foils/polycaprolactam",
                },
                count: 1,
            },
        ],
        result: {
            type: "gun",
            id: "helldiver2:r36_eruptor",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/hsse",
                },
                count: 10,
            },
            {
                item: {
                    tag: "forge:springs/niobium_titanium",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/niobium_titanium",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:bolts/niobium_titanium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/hsss",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/titanium",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:springs/hsla_steel",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "helldiver2:jar5_dominator",
        },
    });
});

//Create Armorer && Immersive Armorer Recipes
ServerEvents.recipes((event) => {
    const gunIds = [];
    event.forEachRecipe({}, (r) => {
        const id = String(r.getId());
        if (
            id.startsWith("create_armorer:gun/") ||
            id.startsWith("immersive_armorer:gun/")
        ) {
            gunIds.push(id);
        }
    });

    gunIds.forEach((id) => {
        event.remove({ id: id });
        console.info(`Removed gun recipe: ${id}`);
    });

    //ULV/LV weapons
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:double_plates/bronze",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/treated_wood",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/bronze",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/long/steel",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "create_armorer:shotgun_pump_bearing",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:plates/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:double_plates/bronze",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:plates/treated_wood",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:rods/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "create_armorer:shotgun_db_stone",
        },
    });

    //MV weapons
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/bronze",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/treated_wood",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/long/vanadium_steel",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "immersive_armorer:pump_shotgun",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/vanadium_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/black_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:double_plates/bronze",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:gears/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/treated_wood",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "create_armorer:rifle_assult_crane",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/vanadium_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:double_plates/bronze",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:gears/bronze",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/treated_wood",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "create_armorer:mg_platemag_flywheel",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 10,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:small_gears/steel",
                },
                count: 3,
            },
            {
                item: {
                    tag: "forge:rotors/steel",
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:rods/long/vanadium_steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/treated_wood",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "create_armorer:smg_auto_crank",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/bronze",
                },
                count: 5,
            },
            {
                item: {
                    tag: "forge:plates/treated_wood",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:plates/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/vanadium_steel",
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:small_springs/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "create_armorer:pistol_auto_stress",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/bronze",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:plates/treated_wood",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/black_bronze",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/vanadium_steel",
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:gears/bronze",
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:small_gears/bronze",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "create_armorer:pistol_revolver_torque",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/steel",
                },
                count: 5,
            },
            {
                item: {
                    tag: "forge:double_plates/black_bronze",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:plates/treated_wood",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:bolts/vanadium_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/vanadium_steel",
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:small_gears/bronze",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "immersive_armorer:revolver",
        },
    });

    //HV Weapons
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/vanadium_steel",
                },
                count: 7,
            },
            {
                item: {
                    tag: "forge:bolts/steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/stainless_steel",
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:small_springs/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "immersive_armorer:pistol_9mm",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:double_plates/cobalt_brass",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:bolts/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rounds/iron",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:small_gears/stainless_steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "immersive_armorer:assult_rifle",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:rods/long/stainless_steel",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:springs/steel",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:double_plates/cobalt_brass",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:bolts/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    item: "gtceu:copper_tiny_fluid_pipe",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:small_gears/bronze",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "create_armorer:sniper_semi_clockwork",
        },
    });

    //EV Weapons
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/stainless_steel",
                },
                count: 14,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 3,
            },
            {
                item: {
                    tag: "forge:bolts/stainless_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:bolts/titanium",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/tungsten_steel",
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:fine_wires/copper",
                },
                count: 4,
            },
            {
                item: {
                    item: "gtceu:inductor",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:small_springs/steel",
                },
                count: 2,
            },
        ],
        result: {
            type: "gun",
            id: "immersive_armorer:standard_rail_pistol_mk1",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    type: "forge:partial_nbt",
                    item: "tacz:modern_kinetic_gun",
                    nbt: {
                        GunId: "immersive_armorer:standard_rail_pistol_mk1",
                    },
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 6,
            },
            {
                item: {
                    tag: "gtceu:capacitors",
                },
                count: 3,
            },
            {
                item: {
                    tag: "forge:double_plates/titanium",
                },
                count: 14,
            },
            {
                item: {
                    tag: "forge:fine_wires/annealed_copper",
                },
                count: 4,
            },
            {
                item: {
                    item: "gtceu:mv_voltage_coil",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:bolts/titanium",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "immersive_armorer:standard_rail_pistol_mk2",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:plates/tungsten_steel",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:double_plates/titanium",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:bolts/titanium",
                },
                count: 4,
            },
            {
                item: {
                    item: "gtceu:tungsten_steel_small_fluid_pipe",
                },
                count: 2,
            },
            {
                item: {
                    item: "gtceu:titanium_small_fluid_pipe",
                },
                count: 2,
            },
            {
                item: {
                    item: "gtceu:ev_electric_pump",
                },
                count: 1,
            },
        ],
        result: {
            type: "gun",
            id: "immersive_armorer:chemical_thrower",
        },
    });

    //IV Weapons
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    type: "forge:partial_nbt",
                    item: "tacz:modern_kinetic_gun",
                    nbt: {
                        GunId: "immersive_armorer:standard_rail_pistol_mk2",
                    },
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 6,
            },
            {
                item: {
                    tag: "gtceu:capacitors",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:double_plates/titanium_carbide",
                },
                count: 14,
            },
            {
                item: {
                    tag: "forge:fine_wires/hssg",
                },
                count: 4,
            },
            {
                item: {
                    item: "gtceu:hv_voltage_coil",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:bolts/titanium",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "immersive_armorer:standard_rail_pistol_mk3",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    type: "forge:partial_nbt",
                    item: "tacz:modern_kinetic_gun",
                    nbt: {
                        GunId: "immersive_armorer:standard_rail_pistol_mk3",
                    },
                },
                count: 1,
            },
            {
                item: {
                    tag: "forge:plates/polybenzimidazole",
                },
                count: 6,
            },
            {
                item: {
                    tag: "gtceu:capacitors",
                },
                count: 9,
            },
            {
                item: {
                    tag: "forge:double_plates/niobium_titanium",
                },
                count: 14,
            },
            {
                item: {
                    tag: "forge:fine_wires/niobium_titanium",
                },
                count: 6,
            },
            {
                item: {
                    item: "gtceu:ev_voltage_coil",
                },
                count: 2,
            },
            {
                item: {
                    tag: "forge:bolts/niobium_titanium",
                },
                count: 4,
            },
        ],
        result: {
            type: "gun",
            id: "immersive_armorer:standard_rail_pistol_mk4",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/titanium",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:plates/polycaprolactam",
                },
                count: 5,
            },
            {
                item: {
                    tag: "forge:fine_wires/ruridit",
                },
                count: 6,
            },
            {
                item: {
                    tag: "gtceu:capacitors",
                },
                count: 9,
            },
            {
                item: {
                    tag: "forge:bolts/titanium",
                },
                count: 4,
            },
            {
                item: {
                    item: "gtceu:ev_voltage_coil",
                },
                count: 4,
            },
            {
                item: {
                    tag: "forge:rods/long/titanium",
                },
                count: 1,
            },
        ],
        result: {
            type: "gun",
            id: "immersive_armorer:standard_rail_smg_mk1",
        },
    });

    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            {
                item: {
                    tag: "forge:double_plates/niobium_titanium",
                },
                count: 8,
            },
            {
                item: {
                    tag: "forge:plates/polybenzimidazole",
                },
                count: 10,
            },
            {
                item: {
                    tag: "forge:fine_wires/ruridit",
                },
                count: 8,
            },
            {
                item: {
                    tag: "gtceu:capacitors",
                },
                count: 9,
            },
            {
                item: {
                    tag: "forge:bolts/niobium_titanium",
                },
                count: 4,
            },
            {
                item: {
                    item: "gtceu:iv_voltage_coil",
                },
                count: 6,
            },
            {
                item: {
                    tag: "forge:rods/long/niobium_titanium",
                },
                count: 6,
            },
        ],
        result: {
            type: "gun",
            id: "immersive_armorer:railgun",
        },
    });
});