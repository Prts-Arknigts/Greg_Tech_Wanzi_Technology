// ==================== 生物掉落表系统 ====================
// 根据生物血量和击杀难度分级：
// 等级1 (20HP以下): 基础万子、微塑料块
// 等级2 (20-40HP): D型组件、压缩型万子
// 等级3 (40-80HP): 一型万子、C型组件
// 等级4 (80-150HP): MV级材料、纯化C型组件
// 等级5 (150HP以上/Boss): 高级材料、特殊合金

ServerEvents.entityLootTables(event => {
    
    // 为所有敌对生物添加特殊掉落
    const hostileMobs = [
        "minecraft:zombie", "minecraft:skeleton", "minecraft:spider", "minecraft:creeper",
        "minecraft:enderman", "minecraft:blaze", "minecraft:witch", "minecraft:vindicator",
        "minecraft:evoker", "minecraft:pillager", "minecraft:ravager", "minecraft:guardian",
        "minecraft:elder_guardian", "minecraft:shulker", "minecraft:wither_skeleton",
        "minecraft:piglin_brute", "minecraft:phantom", "minecraft:drowned", "minecraft:husk",
        "minecraft:stray", "minecraft:cave_spider", "minecraft:zombie_villager", "minecraft:endermite",
        "minecraft:slime","touhou_little_maid:fairy"
    ]
    const bossMobs = [
        "minecraft:wither", "minecraft:ender_dragon", "minecraft:warden","twilightforest:hydra",
        "twilightforest:ur_ghast","twilightforest:snow_queen","twilightforest:naga","twilightforest:lich",
        "twilightforest:alpha_yeti","twilightforest:minoshroom","twilightforest:knight_phantom"
    ]
    
    hostileMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.setUniformRolls(1,5)
                pool.entityProperties("killer", {
                    type: "minecraft:player"
                })
                pool.addTag("prts:type_d_prts", true).weight(90).count([1,3])
                pool.addTag("prts:lv_treasure", true).weight(1).count([1,2])
                pool.addEmpty(9)
            })
        })
    })//普通生物被玩家击杀后掉落

    hostileMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.setUniformRolls(1,5)
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["prts:basic_wanzi_sword"]
                        }
                    }
                })
                pool.addTag("prts:type_d_prts", true).weight(50).count([2,4])
                pool.addTag("prts:lv_treasure", true).weight(5).count([1,3])
                pool.addEmpty(45)
            })
        })
    })//普通生物使用基础万子剑击杀后掉落
    hostileMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.setUniformRolls(5,10)
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["prts:compression_type_wanzi_sword"]
                        }
                    }
                })
                pool.addTag("prts:type_d_prts", true).weight(50).count([2,4])
                pool.addTag("prts:lv_treasure", true).weight(5).count([1,3])
                pool.addTag("prts:type_d_purified_prts",true).weight(25).count([2,4])
                pool.addEmpty(20)
            })
        })
    })//普通生物使用压缩型万子剑击杀后掉落
    hostileMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.setUniformRolls(10,15)
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["prts:type_one_wanzi_sword"]
                        }
                    }
                })
                pool.addTag("prts:type_d_prts", true).weight(30).count([2,4])
                pool.addTag("prts:type_c_prts", true).weight(30).count([2,4])
                pool.addTag("prts:lv_treasure", true).weight(5).count([1,3])
                pool.addTag("prts:type_d_purified_prts",true).weight(15).count([2,4])
                pool.addEmpty(20)
            })
        })
    })//普通生物使用一型万子剑剑击杀后掉落

    hostileMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.setUniformRolls(15,20)
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["prts:data_rending_sword"]
                        }
                    }
                })
                pool.addTag("prts:type_d_prts", true).weight(30).count([3,6])
                pool.addTag("prts:type_c_prts", true).weight(30).count([2,6])
                pool.addTag("prts:lv_treasure", true).weight(5).count([1,3])
                pool.addTag("prts:mv_treasure", true).weight(5).count([1,3])
                pool.addTag("prts:type_d_purified_prts",true).weight(10).count([3,6])
                pool.addTag("prts:type_c_purified_prts",true).weight(10).count([2,6])
                pool.addEmpty(10)
            })
        })
    })//普通生物使用数据撕裂剑击杀后掉落
    hostileMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.setUniformRolls(30,40)
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["prts:data_assembler_sword"]
                        }
                    }
                })
                pool.addTag("prts:type_d_prts", true).weight(30).count([3,6])
                pool.addTag("prts:type_c_prts", true).weight(30).count([2,6])
                pool.addTag("prts:type_b_prts", true).weight(30).count([1,6])
                pool.addTag("prts:lv_treasure", true).weight(5).count([1,3])
                pool.addTag("prts:mv_treasure", true).weight(5).count([1,3])
                pool.addTag("prts:hv_treasure", true).weight(5).count([1,3])
                pool.addTag("prts:type_d_purified_prts",true).weight(10).count([3,6])
                pool.addTag("prts:type_c_purified_prts",true).weight(10).count([2,6])
                pool.addTag("prts:type_b_purified_prts",true).weight(10).count([1,6])
            })
        })
    })//普通生物使用数据组装剑击杀后掉落

    bossMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.setUniformRolls(20,30)
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["prts:data_rending_sword"]
                        }
                    }
                })
                pool.addTag("prts:type_d_prts", false).weight(30).count([9,18])
                pool.addTag("prts:type_c_prts", true).weight(30).count([6,18])
                pool.addTag("prts:lv_treasure", false).weight(10).count([6,9])
                pool.addTag("prts:mv_treasure", true).weight(10).count([6,9])
                pool.addTag("prts:type_d_purified_prts",true).weight(10).count([9,18])
                pool.addTag("prts:type_c_purified_prts",true).weight(10).count([6,18])
            })
        })
    })  // Boss级使用数据撕裂剑特殊掉落
    bossMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.setUniformRolls(30,40)
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["prts:data_assembler_sword"]
                        }
                    }
                })
                pool.addTag("prts:type_d_prts", false).weight(30).count([9,18])
                pool.addTag("prts:type_c_prts", true).weight(30).count([6,18])
                pool.addTag("prts:type_b_prts", true).weight(30).count([6,18])
                pool.addTag("prts:lv_treasure", false).weight(10).count([6,9])
                pool.addTag("prts:mv_treasure", true).weight(10).count([6,9])
                pool.addTag("prts:hv_treasure", true).weight(10).count([6,9])
                pool.addTag("prts:type_d_purified_prts",true).weight(10).count([9,18])
                pool.addTag("prts:type_c_purified_prts",true).weight(10).count([6,18])
                pool.addTag("prts:type_b_purified_prts",true).weight(10).count([6,18])
            })
        })
    })  // Boss级使用数据组装剑特殊掉落

    bossMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.setUniformRolls(10,15)
                pool.entityProperties("killer", {
                    type: "minecraft:player"
                })
                pool.addTag("prts:type_d_prts", true).weight(30).count([2,3])
                pool.addTag("prts:type_c_prts", true).weight(30).count([1,3])
                pool.addTag("prts:lv_treasure", true).weight(5).count([1,3])
                pool.addTag("prts:mv_treasure", true).weight(5).count([1,3])
                pool.addTag("prts:type_d_purified_prts",true).weight(10).count([2,3])
                pool.addTag("prts:type_c_purified_prts",true).weight(10).count([2,3])
            })
        })
    })  //BOSS级不使用万子系列武器掉落

})

ServerEvents.entityLootTables(event => {
    // ==================== 枪械芯片战利品表 ====================
    // 使用枪械（tacz:modern_kinetic_gun + GunId NBT）击杀怪物时，
    // 按枪械等级掉落对应电压电路：ULV枪械 → #gtceu:circuits/ulv，LV → lv … IV → iv。
    // 等级映射依据 Tacz.js 配方区段（ULV/LV/MV/HV/EV/IV）。

    const gunTiers = {
        // ---- tacz 默认枪包 ----
        "tacz:db_long": "ulv", "tacz:db_short": "ulv", "tacz:springfield1873": "ulv",

        "tacz:ak47": "lv", "tacz:b93r": "lv", "tacz:cz75": "lv", "tacz:deagle": "lv",
        "tacz:deagle_golden": "lv", "tacz:fn_fal": "lv", "tacz:hk_g3": "lv",
        "tacz:hk_mp5a5": "lv", "tacz:m1911": "lv", "tacz:m870": "lv", "tacz:rpg7": "lv",
        "tacz:sks_tactical": "lv", "tacz:uzi": "lv",

        "tacz:m16a1": "mv", "tacz:m16a4": "mv", "tacz:m249": "mv", "tacz:m700": "mv",
        "tacz:m95": "mv", "tacz:mk14": "mv", "tacz:rpk": "mv", "tacz:spas_12": "mv",
        "tacz:spr15hb": "mv", "tacz:timeless50": "mv", "tacz:type_81": "mv",

        "tacz:aa12": "hv", "tacz:ai_awp": "hv", "tacz:aug": "hv", "tacz:fn_evolys": "hv",
        "tacz:g36k": "hv", "tacz:glock_17": "hv", "tacz:hk416d": "hv", "tacz:m1014": "hv",
        "tacz:m320": "hv", "tacz:m4a1": "hv", "tacz:p320": "hv", "tacz:p90": "hv",
        "tacz:qbz_191": "hv", "tacz:qbz_95": "hv", "tacz:scar_h": "hv", "tacz:scar_l": "hv",
        "tacz:ump45": "hv", "tacz:vector45": "hv",

        "tacz:m107": "ev", "tacz:minigun": "ev",
        // ---- 机动军械师（Create Armorer） ----
        "create_armorer:shotgun_db_stone": "ulv",

        "create_armorer:shotgun_pump_bearing": "lv",

        "create_armorer:mg_platemag_flywheel": "mv",
        "create_armorer:pistol_auto_stress": "mv",
        "create_armorer:pistol_revolver_torque": "mv",
        "create_armorer:rifle_assult_crane": "mv",
        "create_armorer:smg_auto_crank": "mv",

        "create_armorer:sniper_semi_clockwork": "hv",
        // ---- 地狱潜兵2（HellDiver2） ----
        "helldiver2:ar23_liberator": "hv",
        "helldiver2:p2_peacemaker": "hv",
        "helldiver2:smg37_defender": "hv",

        "helldiver2:ar23c_liberator": "ev",
        "helldiver2:ar23p_liberator": "ev",
        "helldiver2:p19_redeemer": "ev",
        "helldiver2:r63_diligence": "ev",
        "helldiver2:r63cs_diligence": "ev",
        "helldiver2:sg225_breaker": "ev",
        "helldiver2:authorized_gun": "ev",

        "helldiver2:jar5_dominator": "iv",
        "helldiver2:r36_eruptor": "iv",
        "helldiver2:sg225ie_breaker": "iv",
        // ---- 沉浸军械师（Immersive Armorer） ----
        "immersive_armorer:pump_shotgun": "mv",
        "immersive_armorer:revolver": "mv",

        "immersive_armorer:assult_rifle": "hv",
        "immersive_armorer:pistol_9mm": "hv",

        "immersive_armorer:chemical_thrower": "ev",
        "immersive_armorer:standard_rail_pistol_mk1": "ev",
        "immersive_armorer:standard_rail_pistol_mk2": "ev",
        
        "immersive_armorer:railgun": "iv",
        "immersive_armorer:standard_rail_pistol_mk3": "iv",
        "immersive_armorer:standard_rail_pistol_mk4": "iv",
        "immersive_armorer:standard_rail_smg_mk1": "iv"
    }

    // 高等级电路更稀有：权重随等级下降，空条目固定权重50
    const tierWeight = { ulv: 60, lv: 55, mv: 50, hv: 45, ev: 40, iv: 35 }

    // 与上方区块一致的敌对生物 / Boss 列表
    const hostileMobs = [
        "minecraft:zombie", "minecraft:skeleton", "minecraft:spider", "minecraft:creeper",
        "minecraft:enderman", "minecraft:blaze", "minecraft:witch", "minecraft:vindicator",
        "minecraft:evoker", "minecraft:pillager", "minecraft:ravager", "minecraft:guardian",
        "minecraft:elder_guardian", "minecraft:shulker", "minecraft:wither_skeleton",
        "minecraft:piglin_brute", "minecraft:phantom", "minecraft:drowned", "minecraft:husk",
        "minecraft:stray", "minecraft:cave_spider", "minecraft:zombie_villager", "minecraft:endermite",
        "minecraft:slime", "touhou_little_maid:fairy"
    ]
    const bossMobs = [
        "minecraft:wither", "minecraft:ender_dragon", "minecraft:warden", "twilightforest:hydra",
        "twilightforest:ur_ghast", "twilightforest:snow_queen", "twilightforest:naga", "twilightforest:lich",
        "twilightforest:alpha_yeti", "twilightforest:minoshroom", "twilightforest:knight_phantom"
    ]

    // 为每把枪在每种生物上生成一个掉落池：只有手持对应枪械击杀时该池生效（其余池条件不满足，不掷骰）
    function addGunChipPools(loot, minRolls, maxRolls) {
        for (const [gunId, tier] of Object.entries(gunTiers)) {
            loot.addPool(pool => {
                pool.setUniformRolls(minRolls, maxRolls)
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["tacz:modern_kinetic_gun"],
                            nbt: '{GunId:"' + gunId + '"}'
                        }
                    }
                })
                pool.addTag("gtceu:circuits/" + tier, true).weight(tierWeight[tier]).count([1, 3])
                pool.addEmpty(50)
            })
        }
    }

    hostileMobs.forEach(mob => {
        event.modifyEntity(mob, loot => addGunChipPools(loot, 1, 3))
    })//普通生物：使用枪械击杀掉落对应电路（1-3次掷骰）
    bossMobs.forEach(mob => {
        event.modifyEntity(mob, loot => addGunChipPools(loot, 3, 6))
    })//Boss：使用枪械击杀掉落对应电路（3-6次掷骰）
})
