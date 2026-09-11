ServerEvents.recipes(event => {
     // minecraft原版锭对应的材料（不统一，保持 minecraft:xxx_ingot）
     const MC_INGOT_MATERIALS = ['iron', 'gold', 'copper', 'netherite'];
     //粉尘物品ID->GTCEu锭映射
     const dustToIngot = {};
 
     Ingredient.of('#forge:dusts').getStacks().forEach(stack => {
         const dustId = String(stack.id);// 提取材料名：<mod>:<material>_dust
         const m = dustId.match(/^([a-z0-9_]+):([a-z0-9_]+)_dust$/);
         if (!m) return;
         const material = m[2];
         if (MC_INGOT_MATERIALS.includes(material)) return; //minecraft锭除外
         const ingotId = 'gtceu:' + material + '_ingot';
         if (!Item.exists(ingotId)) return; //GTCEu 无此锭（宝石/非金属粉尘等→跳过
         dustToIngot[dustId] = ingotId;
     });
 
     //把该粉尘→任意锭的熔炉/高炉配方输出替换为GTCEu锭
     for (const recipeType of ['minecraft:smelting', 'minecraft:blasting']) {
         for (const dustId in dustToIngot) {
             event.replaceOutput(
                 { type: recipeType, input: dustId, output: '#forge:ingots' },
                 '#forge:ingots',
                 dustToIngot[dustId]
             );
         }
     }
 
    /* console.log('[粉尘统一] ' + Object.keys(dustToIngot).length + ' 种粉尘的熔炼/高炉输出统一为 GTCEu 锭');*/
    
    event.recipes.gtceu.chemical_reactor('ae2:sky_dust')           
    .itemInputs('ae2:sky_dust','gtceu:stone_dust')
    .inputFluids(Fluid.of('gtceu:steel', 144))
    .itemOutputs('3x ae2:sky_dust')
    .duration(60)
    .EUt(24)
    //陨石粉新合成配方↑

    event.recipes.gtceu.chemical_reactor('ae2:certus_quartz_crystal')           
    .itemInputs('#forge:dusts/certus_quartz','minecraft:glowstone_dust')
    .inputFluids(Fluid.of('gtceu:redstone', 144))
    .itemOutputs('2x ae2:certus_quartz_crystal')
    .duration(60)
    .EUt(24)
    //赛特斯石英新合成配方↑

    event.recipes.gtceu.chemical_reactor('ae2:fluix_crystal')
    .itemInputs('ae2:sky_dust','ae2:charged_certus_quartz_crystal')
    .inputFluids(Fluid.of('gtceu:redstone', 144))
    .itemOutputs('4x ae2:fluix_crystal')
    .duration(60)
    .EUt(24)
    //福鲁斯水晶新合成配方↑

    event.recipes.gtceu.chemical_reactor('ae2:xinshihecheng')
    .itemInputs('9x #forge:storage_blocks/silicon')
    .inputFluids(Fluid.of('gtceu:redstone', 144))
    .itemOutputs('90x ae2:printed_silicon')
    .duration(120)
    .EUt(18)

    event.recipes.gtceu.sifter('ae2:fluix_dust')
    .itemInputs("2x gtceu:stone_dust")
    .chancedOutput(Item.of('ae2:fluix_dust',1),100,20)
    .chancedOutput(Item.of('ae2:sky_dust',1),100,20)
    .chancedOutput(Item.of('ae2:certus_quartz_dust',1),100,20)
    .duration(60)
    .EUt(24)
    //石头粉新用途
    
    event.recipes.gtceu.circuit_assembler('ae2:engineering_processor')
    .itemInputs('ae2:printed_engineering_processor','2x ae2:printed_silicon')
    .inputFluids(Fluid.of('gtceu:redstone', 144))
    .itemOutputs('2x ae2:engineering_processor')
    .duration(150)
    .EUt(128)
    //工程处理器高效合成配方↑

    event.recipes.gtceu.circuit_assembler('ae2:logic_processor')
    .itemInputs('ae2:printed_logic_processor','2x ae2:printed_silicon')
    .inputFluids(Fluid.of('gtceu:redstone', 144))
    .itemOutputs('2x ae2:logic_processor')
    .duration(150)
    .EUt(128)
    //逻辑处理器高效合成配方↑

    event.recipes.gtceu.circuit_assembler('ae2:calculation_processor')
    .itemInputs('ae2:printed_calculation_processor','2x ae2:printed_silicon')
    .inputFluids(Fluid.of('gtceu:redstone', 144))
    .itemOutputs('2x ae2:calculation_processor')
    .duration(150)
    .EUt(128)
    //运算处理器高效合成配方↑

    event.recipes.gtceu.assembler('ae2:controller')
    .itemInputs('ae2:calculation_processor','ae2:logic_processor','ae2:engineering_processor','2x ae2:sky_dust','2x ae2:fluix_crystal','#gtceu:circuits/mv')
    .itemOutputs('2x ae2:controller')
    .duration(150)
    .EUt(128)
    //ME控制器高效合成配方1↑

    event.recipes.gtceu.circuit_assembler('ae2:controller')
    .itemInputs('ae2:calculation_processor','ae2:logic_processor','ae2:engineering_processor','#gtceu:circuits/mv','3x ae2:fluix_crystal','2x gtceu:stainless_steel_dust')
    .itemOutputs('3x ae2:controller')
    .duration(75)
    .EUt(256)
    //ME控制器高效合成配方2↑

    event.recipes.gtceu.chemical_bath('gtceu:black_bronze_ingot')
    .itemInputs('gtceu:hot_black_bronze_ingot')
    .itemOutputs('gtceu:black_bronze_ingot')
    .inputFluids(Fluid.of('minecraft:water',288))
    .duration(200)
    .EUt(64)
    //黑青铜锭制作

    event.remove({output:'gtceu:crushed_aluminium_ore'})
    event.remove({output:'gtceu:crushed_beryllium_ore'})
    event.remove({output:'gtceu:crushed_cobalt_ore'})
    event.remove({output:'gtceu:crushed_copper_ore'})
    event.remove({output:'gtceu:crushed_gold_ore'})
    event.remove({output:'gtceu:crushed_iron_ore'})
    event.remove({output:'gtceu:crushed_lead_ore'})
    event.remove({output:'gtceu:crushed_plutonium_ore'})
    event.remove({output:'gtceu:crushed_platinum_ore'})
    event.remove({output:'gtceu:crushed_palladium_ore'})
    event.remove({output:'gtceu:crushed_nickel_ore'})
    event.remove({output:'gtceu:crushed_neodymium_ore'})
    event.remove({output:'gtceu:crushed_molybdenum_ore'})
    event.remove({output:'gtceu:crushed_lithium_ore'})
    event.remove({output:'gtceu:crushed_silver_ore'})
    event.remove({output:'gtceu:crushed_sulfur_ore'})
    event.remove({output:'gtceu:crushed_thorium_ore'})
    event.remove({output:'gtceu:crushed_tin_ore'})
    event.remove({output:'gtceu:crushed_naquadah_ore'})
    event.remove({output:'gtceu:crushed_almandine_ore'})
    event.remove({output:'gtceu:crushed_asbestos_ore'})
    event.remove({output:'gtceu:crushed_chalcopyrite_ore'})
    event.remove({output:'gtceu:crushed_cassiterite_sand_ore'})
    event.remove({output:'gtceu:crushed_cassiterite_ore'})
    event.remove({output:'gtceu:crushed_calcite_ore'})
    event.remove({output:'gtceu:crushed_goethite_ore'})
    event.remove({output:'gtceu:crushed_blue_topaz_ore'})
    event.remove({output:'gtceu:crushed_hematite_ore'})
    event.remove({output:'gtceu:crushed_chromite_ore'})
    event.remove({output:'gtceu:crushed_cinnabar_ore'})
    event.remove({output:'gtceu:crushed_coal_ore'})
    event.remove({output:'gtceu:crushed_cobaltite_ore'})
    event.remove({output:'gtceu:crushed_cooperite_ore'})
    event.remove({output:'gtceu:crushed_diamond_ore'})
    event.remove({output:'gtceu:crushed_emerald_ore'})
    event.remove({output:'gtceu:crushed_lazurite_ore'})
    event.remove({output:'gtceu:crushed_bauxite_ore'})
    event.remove({output:'gtceu:crushed_ilmenite_ore'})
    event.remove({output:'gtceu:crushed_grossular_ore'})
    event.remove({output:'gtceu:crushed_green_sapphire_ore'})
    event.remove({output:'gtceu:crushed_garnierite_ore'})
    event.remove({output:'gtceu:crushed_galena_ore'})
    event.remove({output:'gtceu:crushed_magnesite_ore'})
    event.remove({output:'gtceu:crushed_molybdenite_ore'})
    event.remove({output:'gtceu:crushed_powellite_ore'})
    event.remove({output:'gtceu:crushed_pyrite_ore'})
    event.remove({output:'gtceu:crushed_pyrolusite_ore'})
    event.remove({output:'gtceu:crushed_pyrope_ore'})
    event.remove({output:'gtceu:crushed_rock_salt_ore'})
    event.remove({output:'gtceu:crushed_ruby_ore'})
    event.remove({output:'gtceu:crushed_salt_ore'})
    event.remove({output:'gtceu:crushed_saltpeter_ore'})
    event.remove({output:'gtceu:crushed_sapphire_ore'})
    event.remove({output:'gtceu:crushed_scheelite_ore'})
    event.remove({output:'gtceu:crushed_sodalite_ore'})
    event.remove({output:'gtceu:crushed_tungstate_ore'})
    event.remove({output:'gtceu:crushed_topaz_ore'})
    event.remove({output:'gtceu:crushed_tetrahedrite_ore'})
    event.remove({output:'gtceu:crushed_stibnite_ore'})
    event.remove({output:'gtceu:crushed_sphalerite_ore'})
    event.remove({output:'gtceu:crushed_spessartine_ore'})
    event.remove({output:'gtceu:crushed_tantalite_ore'})
    event.remove({output:'gtceu:crushed_uraninite_ore'})
    event.remove({output:'gtceu:crushed_wulfenite_ore'})
    event.remove({output:'gtceu:crushed_yellow_limonite_ore'})
    event.remove({output:'gtceu:crushed_nether_quartz_ore'})
    event.remove({output:'gtceu:crushed_certus_quartz_ore'})
    event.remove({output:'gtceu:crushed_quartzite_ore'})
    event.remove({output:'gtceu:crushed_graphite_ore'})
    event.remove({output:'gtceu:crushed_lepidolite_ore'})
    event.remove({output:'gtceu:crushed_spodumene_ore'})
    event.remove({output:'gtceu:crushed_pentlandite_ore'})
    event.remove({output:'gtceu:crushed_bastnasite_ore'})
    event.remove({output:'gtceu:crushed_realgar_ore'})
    event.remove({output:'gtceu:crushed_chalcocite_ore'})
    event.remove({output:'gtceu:crushed_bornite_ore'})
    event.remove({output:'gtceu:crushed_glauconite_sand_ore'})
    event.remove({output:'gtceu:crushed_malachite_ore'})
    event.remove({output:'gtceu:crushed_mica_ore'})
    event.remove({output:'gtceu:crushed_barite_ore'})
    event.remove({output:'gtceu:crushed_alunite_ore'})
    event.remove({output:'gtceu:crushed_talc_ore'})
    event.remove({output:'gtceu:crushed_soapstone_ore'})
    event.remove({output:'gtceu:crushed_lapis_ore'})
    event.remove({output:'gtceu:crushed_amethyst_ore'})
    event.remove({output:'gtceu:crushed_opal_ore'})
    event.remove({output:'gtceu:crushed_olivine_ore'})
    event.remove({output:'gtceu:crushed_oilsands_ore'})
    event.remove({output:'gtceu:crushed_pyrochlore_ore'})
    event.remove({output:'gtceu:crushed_kyanite_ore'})
    event.remove({output:'gtceu:crushed_apatite_ore'})
    event.remove({output:'gtceu:crushed_tricalcium_phosphate_ore'})
    event.remove({output:'gtceu:crushed_red_garnet_ore'})
    event.remove({output:'gtceu:crushed_yellow_garnet_ore'})
    event.remove({output:'gtceu:crushed_vanadium_magnetite_ore'})
    event.remove({output:'gtceu:crushed_pollucite_ore'})
    event.remove({output:'gtceu:crushed_fullers_earth_ore'})
    event.remove({output:'gtceu:crushed_diatomite_ore'})
    event.remove({output:'gtceu:crushed_electrotine_ore'})
    event.remove({output:'gtceu:crushed_redstone_ore'})
    event.remove({output:'gtceu:crushed_zeolite_ore'})
    event.remove({output:'gtceu:crushed_gypsum_ore'})
    event.remove({output:'gtceu:crushed_trona_ore'})
    event.remove({output:'gtceu:crushed_monazite_ore'})
    event.remove({output:'gtceu:crushed_granitic_mineral_sand_ore'})
    event.remove({output:'gtceu:crushed_garnet_sand_ore'})
    event.remove({output:'gtceu:crushed_basaltic_mineral_sand_ore'})
    event.remove({output:'gtceu:crushed_magnetite_ore'})
    event.remove({output:'gtceu:crushed_bentonite_ore'})
    //87~194为移除所有原版粉碎矿石的后续配方↑
    //如果想要恢复则需要查阅矿辞典（不建议恢复，因为会增加格雷科技难度）

    event.recipes.gtceu.macerator('gtceu:crushed_aluminium_ore1')
    .itemInputs('#forge:ores/aluminium')
    .itemOutputs('6x gtceu:crushed_aluminium_ore')
    .chancedOutput(Item.of('gtceu:bauxite_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_aluminium_ore2')
    .itemInputs('gtceu:raw_aluminium')
    .itemOutputs('4x gtceu:crushed_aluminium_ore')
    .chancedOutput(Item.of('gtceu:bauxite_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗铝、铝矿的粉碎机增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_beryllium_ore1')
    .itemInputs('#forge:ores/beryllium')
    .itemOutputs('6x gtceu:crushed_beryllium_ore')
    .chancedOutput(Item.of('minecraft:emerald'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_beryllium_ore2')
    .itemInputs('gtceu:raw_beryllium')
    .itemOutputs('4x gtceu:crushed_beryllium_ore')
    .chancedOutput(Item.of('minecraft:emerald'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗铍、铍矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_cobalt_ore1')
    .itemInputs('#forge:ores/cobalt')
    .itemOutputs('6x gtceu:crushed_cobalt_ore')
    .chancedOutput(Item.of('gtceu:cobalt_oxide_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_cobalt_ore2')
    .itemInputs('gtceu:raw_cobalt')
    .itemOutputs('4x gtceu:crushed_cobalt_ore')
    .chancedOutput(Item.of('gtceu:cobalt_oxide_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗钴、钴矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_copper_ore1')
    .itemInputs('#forge:ores/copper')
    .itemOutputs('6x gtceu:crushed_copper_ore')
    .chancedOutput(Item.of('gtceu:cobalt_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_copper_ore2')
    .itemInputs('minecraft:raw_copper')
    .itemOutputs('4x gtceu:crushed_copper_ore')
    .chancedOutput(Item.of('gtceu:cobalt_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗铜、铜矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_gold_ore1')
    .itemInputs('#forge:ores/gold')
    .itemOutputs('6x gtceu:crushed_gold_ore')
    .chancedOutput(Item.of('gtceu:copper_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_gold_ore2')
    .itemInputs('minecraft:raw_gold')
    .itemOutputs('4x gtceu:crushed_gold_ore')
    .chancedOutput(Item.of('gtceu:copper_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗金、金矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_iron_ore1')
    .itemInputs('#forge:ores/iron')
    .itemOutputs('6x gtceu:crushed_iron_ore')
    .chancedOutput(Item.of('gtceu:nickel_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_iron_ore2')
    .itemInputs('minecraft:raw_iron')
    .itemOutputs('4x gtceu:crushed_iron_ore')
    .chancedOutput(Item.of('gtceu:nickel_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗铁、铁矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_lead_ore1')
    .itemInputs('#forge:ores/lead')
    .itemOutputs('6x gtceu:crushed_lead_ore')
    .chancedOutput(Item.of('gtceu:silver_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_lead_ore2')
    .itemInputs('gtceu:raw_lead')
    .itemOutputs('4x gtceu:crushed_lead_ore')
    .chancedOutput(Item.of('gtceu:silver_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗铅、铅矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_plutonium_ore1')
    .itemInputs('#forge:ores/plutonium')
    .itemOutputs('6x gtceu:crushed_plutonium_ore')
    .chancedOutput(Item.of('gtceu:uraninite_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_plutonium_ore2')
    .itemInputs('gtceu:raw_plutonium')
    .itemOutputs('4x gtceu:crushed_plutonium_ore')
    .chancedOutput(Item.of('gtceu:uraninite_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗钚、钚矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_platinum_ore1')
    .itemInputs('#forge:ores/platinum')
    .itemOutputs('6x gtceu:crushed_platinum_ore')
    .chancedOutput(Item.of('gtceu:nickel_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_platinum_ore2')
    .itemInputs('gtceu:raw_platinum')
    .itemOutputs('4x gtceu:crushed_platinum_ore')
    .chancedOutput(Item.of('gtceu:palladium_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗铂、铂矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_palladium_ore1')
    .itemInputs('#forge:ores/palladium')
    .itemOutputs('6x gtceu:crushed_palladium_ore')
    .chancedOutput(Item.of('gtceu:nickel_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_palladium_ore2')
    .itemInputs('gtceu:raw_palladium')
    .itemOutputs('4x gtceu:crushed_palladium_ore')
    .chancedOutput(Item.of('gtceu:nickel_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗钯、钯矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_nickel_ore1')
    .itemInputs('#forge:ores/nickel')
    .itemOutputs('6x gtceu:crushed_nickel_ore')
    .chancedOutput(Item.of('gtceu:cobalt_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_nickel_ore2')
    .itemInputs('gtceu:raw_nickel')
    .itemOutputs('4x gtceu:crushed_nickel_ore')
    .chancedOutput(Item.of('gtceu:cobalt_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗镍、镍矿石增幅后产出
    
    event.recipes.gtceu.macerator('gtceu:crushed_neodymium_ore1')
    .itemInputs('#forge:ores/neodymium')
    .itemOutputs('6x gtceu:crushed_neodymium_ore')
    .chancedOutput(Item.of('gtceu:rare_earth_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_neodymium_ore2')
    .itemInputs('gtceu:raw_neodymium')
    .itemOutputs('4x gtceu:crushed_neodymium_ore')
    .chancedOutput(Item.of('gtceu:rare_earth_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗钕、钕矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_molybdenum_ore1')
    .itemInputs('#forge:ores/molybdenum')
    .itemOutputs('6x gtceu:crushed_molybdenum_ore')
    .chancedOutput(Item.of('gtceu:molybdenum_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_molybdenum_ore2')
    .itemInputs('gtceu:raw_molybdenum')
    .itemOutputs('4x gtceu:crushed_molybdenum_ore')
    .chancedOutput(Item.of('gtceu:molybdenum_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗钼、钼矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_lithium_ore1')
    .itemInputs('#forge:ores/lithium')
    .itemOutputs('6x gtceu:crushed_lithium_ore')
    .chancedOutput(Item.of('gtceu:lithium_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_lithium_ore2')
    .itemInputs('gtceu:raw_lithium')
    .itemOutputs('4x gtceu:crushed_lithium_ore')
    .chancedOutput(Item.of('gtceu:lithium_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗锂、锂矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_silver_ore1')
    .itemInputs('#forge:ores/silver')
    .itemOutputs('6x gtceu:crushed_silver_ore')
    .chancedOutput(Item.of('gtceu:lead_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_silver_ore2')
    .itemInputs('gtceu:raw_silver')
    .itemOutputs('4x gtceu:crushed_silver_ore')
    .chancedOutput(Item.of('gtceu:lead_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗银、银矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_sulfur_ore1')
    .itemInputs('#forge:ores/sulfur')
    .itemOutputs('6x gtceu:crushed_sulfur_ore')
    .chancedOutput(Item.of('gtceu:sulfur_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_sulfur_ore2')
    .itemInputs('gtceu:raw_sulfur')
    .itemOutputs('4x gtceu:crushed_sulfur_ore')
    .chancedOutput(Item.of('gtceu:sulfur_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗硫、硫矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_thorium_ore1')
    .itemInputs('#forge:ores/thorium')
    .itemOutputs('6x gtceu:crushed_thorium_ore')
    .chancedOutput(Item.of('gtceu:uraninite_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_thorium_ore2')
    .itemInputs('gtceu:raw_thorium')
    .itemOutputs('4x gtceu:crushed_thorium_ore')
    .chancedOutput(Item.of('gtceu:uraninite_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗钍、钍矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_tin_ore1')
    .itemInputs('#forge:ores/tin')
    .itemOutputs('6x gtceu:crushed_tin_ore')
    .chancedOutput(Item.of('gtceu:iron_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_tin_ore2')
    .itemInputs('gtceu:raw_tin')
    .itemOutputs('4x gtceu:crushed_tin_ore')
    .chancedOutput(Item.of('gtceu:iron_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗锡、锡矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_naquadah_ore1')
    .itemInputs('#forge:ores/naquadah')
    .itemOutputs('6x gtceu:crushed_naquadah_ore')
    .chancedOutput(Item.of('gtceu:sulfur_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_naquadah_ore2')
    .itemInputs('gtceu:raw_naquadah')
    .itemOutputs('4x gtceu:crushed_naquadah_ore')
    .chancedOutput(Item.of('gtceu:sulfur_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗硅岩、硅岩矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_almandine_ore1')
    .itemInputs('#forge:ores/almandine')
    .itemOutputs('16x gtceu:crushed_almandine_ore')
    .chancedOutput(Item.of('gtceu:red_garnet_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_almandine_ore2')
    .itemInputs('gtceu:raw_almandine')
    .itemOutputs('12x gtceu:crushed_almandine_ore')
    .chancedOutput(Item.of('gtceu:red_garnet_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗铁铝榴石、铁铝榴石矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_asbestos_ore1')
    .itemInputs('#forge:ores/asbestos')
    .itemOutputs('16x gtceu:crushed_asbestos_ore')
    .chancedOutput(Item.of('gtceu:diatomite_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_asbestos_ore2')
    .itemInputs('gtceu:raw_asbestos_ore')
    .itemOutputs('12x gtceu:crushed_asbestos_ore')
    .chancedOutput(Item.of('gtceu:diatomite_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗石棉、石棉矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_chalcopyrite_ore1')
    .itemInputs('#forge:ores/chalcopyrite')
    .itemOutputs('6x gtceu:crushed_chalcopyrite_ore')
    .chancedOutput(Item.of('gtceu:pyrite_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_chalcopyrite_ore2')
    .itemInputs('gtceu:raw_chalcopyrite')
    .itemOutputs('4x gtceu:crushed_chalcopyrite_ore')
    .chancedOutput(Item.of('gtceu:pyrite_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗黄铜、黄铜矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_cassiterite_sand_ore1')
    .itemInputs('#forge:ores/cassiterite_sand')
    .itemOutputs('6x gtceu:crushed_cassiterite_sand_ore')
    .chancedOutput(Item.of('gtceu:tin_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_cassiterite_sand_ore2')
    .itemInputs('gtceu:raw_cassiterite_sand')
    .itemOutputs('4x gtceu:crushed_cassiterite_sand_ore')
    .chancedOutput(Item.of('gtceu:tin_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗锡石矿砂、锡石矿砂矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_cassiterite_ore1')
    .itemInputs('#forge:ores/cassiterite')
    .itemOutputs('6x gtceu:crushed_cassiterite_ore')
    .chancedOutput(Item.of('gtceu:tin_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_cassiterite_ore2')
    .itemInputs('gtceu:raw_cassiterite')
    .itemOutputs('4x gtceu:crushed_cassiterite_ore')
    .chancedOutput(Item.of('gtceu:tin_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗锡石、锡石矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_calcite_ore1')
    .itemInputs('#forge:ores/calcite')
    .itemOutputs('6x gtceu:crushed_calcite_ore')
    .chancedOutput(Item.of('gtceu:calcium_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_calcite_ore2')
    .itemInputs('gtceu:raw_calcite')
    .itemOutputs('4x gtceu:crushed_calcite_ore')
    .chancedOutput(Item.of('gtceu:calcium_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗方解石、方解石矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_goethite_ore1')
    .itemInputs('#forge:ores/goethite')
    .itemOutputs('6x gtceu:crushed_goethite_ore')
    .chancedOutput(Item.of('gtceu:malachite_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_goethite_ore2')
    .itemInputs('gtceu:raw_goethite')
    .itemOutputs('4x gtceu:crushed_goethite_ore')
    .chancedOutput(Item.of('gtceu:malachite_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗针铁矿、针铁矿矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_blue_topaz_ore1')
    .itemInputs('#forge:ores/blue_topaz')
    .itemOutputs('10x gtceu:crushed_blue_topaz_ore')
    .chancedOutput(Item.of('gtceu:topaz_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_blue_topaz_ore2')
    .itemInputs('gtceu:raw_blue_topaz')
    .itemOutputs('8x gtceu:crushed_blue_topaz_ore')
    .chancedOutput(Item.of('gtceu:topaz_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗蓝黄玉、蓝黄玉矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_hematite_ore1')
    .itemInputs('#forge:ores/hematite')
    .itemOutputs('6x gtceu:crushed_hematite_ore')
    .chancedOutput(Item.of('gtceu:magnetite_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_hematite_ore2')
    .itemInputs('gtceu:raw_hematite')
    .itemOutputs('4x gtceu:crushed_hematite_ore')
    .chancedOutput(Item.of('gtceu:magnetite_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗赤铁矿、赤铁矿矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_chromite_ore1')
    .itemInputs('#forge:ores/chromite')
    .itemOutputs('6x gtceu:crushed_chromite_ore')
    .chancedOutput(Item.of('gtceu:iron_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_chromite_ore2')
    .itemInputs('gtceu:raw_chromite')
    .itemOutputs('4x gtceu:crushed_chromite_ore')
    .chancedOutput(Item.of('gtceu:iron_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗铬铁矿、铬铁矿矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_cinnabar_ore1')
    .itemInputs('#forge:ores/cinnabar')
    .itemOutputs('6x gtceu:crushed_cinnabar_ore')
    .chancedOutput(Item.of('minecraft:redstone'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_cinnabar_ore2')
    .itemInputs('gtceu:raw_cinnabar')
    .itemOutputs('4x gtceu:crushed_cinnabar_ore')
    .chancedOutput(Item.of('minecraft:redstone'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗朱砂、朱砂矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_coal_ore1')
    .itemInputs('#forge:ores/coal')
    .itemOutputs('6x gtceu:crushed_coal_ore')
    .chancedOutput(Item.of('minecraft:coal'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_coal_ore2')
    .itemInputs('gtceu:raw_coal')
    .itemOutputs('4x gtceu:crushed_coal_ore')
    .chancedOutput(Item.of('minecraft:coal'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗煤炭、煤炭矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_cobaltite_ore1')
    .itemInputs('#forge:ores/cobaltite')
    .itemOutputs('6x gtceu:crushed_cobaltite_ore')
    .chancedOutput(Item.of('gtceu:sulfur_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_cobaltite_ore2')
    .itemInputs('gtceu:raw_cobaltite')
    .itemOutputs('4x gtceu:crushed_cobaltite_ore')
    .chancedOutput(Item.of('gtceu:sulfur_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗辉钴矿、辉钴矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_cooperite_ore1')
    .itemInputs('#forge:ores/cooperite')
    .itemOutputs('6x gtceu:crushed_cobaltite_ore')
    .chancedOutput(Item.of('gtceu:nickel_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_cooperite_ore2')
    .itemInputs('gtceu:raw_cooperite')
    .itemOutputs('4x gtceu:crushed_cooperite_ore')
    .chancedOutput(Item.of('gtceu:nickel_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗谢尔顿、谢尔顿矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_diamond_ore1')
    .itemInputs('#forge:ores/diamond')
    .itemOutputs('6x gtceu:crushed_diamond_ore')
    .chancedOutput(Item.of('gtceu:graphite_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_diamond_ore2')
    .itemInputs('gtceu:raw_diamond')
    .itemOutputs('4x gtceu:crushed_diamond_ore')
    .chancedOutput(Item.of('gtceu:graphite_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗钻石、钻石矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_emerald_ore1')
    .itemInputs('#forge:ores/emerald')
    .itemOutputs('10x gtceu:crushed_emerald_ore')
    .chancedOutput(Item.of('gtceu:beryllium_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_emerald_ore2')
    .itemInputs('gtceu:raw_emerald')
    .itemOutputs('8x gtceu:crushed_emerald_ore')
    .chancedOutput(Item.of('gtceu:beryllium_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗绿宝石、绿宝石矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_lazurite_ore1')
    .itemInputs('#forge:ores/lazurite')
    .itemOutputs('32x gtceu:crushed_lazuriteore')
    .chancedOutput(Item.of('gtceu:sodalite_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_lazurite_ore2')
    .itemInputs('gtceu:raw_lazurite')
    .itemOutputs('24x gtceu:crushed_lazurite_ore')
    .chancedOutput(Item.of('gtceu:sodalite_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗蓝金石、蓝金石矿石增幅后产出
    
    event.recipes.gtceu.macerator('gtceu:crushed_bauxite_ore1')
    .itemInputs('#forge:ores/bauxite')
    .itemOutputs('6x gtceu:crushed_bauxite_ore')
    .chancedOutput(Item.of('gtceu:grossular_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_bauxite_ore2')
    .itemInputs('gtceu:raw_bauxite')
    .itemOutputs('4x gtceu:crushed_bauxite_ore')
    .chancedOutput(Item.of('gtceu:grossular_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗铝土矿、铝土矿矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_ilmenite_ore1')
    .itemInputs('#forge:ores/ilmenite')
    .itemOutputs('6x gtceu:crushed_ilmenite')
    .chancedOutput(Item.of('gtceu:iron_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_ilmenite_ore2')
    .itemInputs('gtceu:raw_ilmenite')
    .itemOutputs('4x gtceu:crushed_ilmenite_ore')
    .chancedOutput(Item.of('gtceu:iron_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗钛铁矿、钛铁矿矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_grossular_ore1')
    .itemInputs('#forge:ores/grossular')
    .itemOutputs('14x gtceu:crushed_grossular')
    .chancedOutput(Item.of('gtceu:yellow_garnet_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_grossular_ore2')
    .itemInputs('gtceu:raw_grossular')
    .itemOutputs('12x gtceu:crushed_grossular_ore')
    .chancedOutput(Item.of('gtceu:yellow_garnet_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗钙铝榴石、钙铝榴石矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_green_sapphire_ore1')
    .itemInputs('#forge:ores/green_sapphire')
    .itemOutputs('6x gtceu:crushed_green_sapphire_ore')
    .chancedOutput(Item.of('gtceu:aluminium_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_green_sapphire_ore2')
    .itemInputs('gtceu:raw_green_sapphire')
    .itemOutputs('4x gtceu:crushed_green_sapphire_ore')
    .chancedOutput(Item.of('gtceu:aluminium_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗蓝色绿宝石、蓝色绿宝石矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_garnierite_ore1')
    .itemInputs('#forge:ores/garnierite')
    .itemOutputs('6x gtceu:crushed_garnierite_ore')
    .chancedOutput(Item.of('gtceu:iron_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_garnierite_ore2')
    .itemInputs('gtceu:raw_garnierite')
    .itemOutputs('4x gtceu:crushed_garnierite_ore')
    .chancedOutput(Item.of('gtceu:iron_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗硅镁镍、硅镁镍矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_galena_ore1')
    .itemInputs('#forge:ores/galena')
    .itemOutputs('6x gtceu:crushed_galena_ore')
    .chancedOutput(Item.of('gtceu:sulfur_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_galena_ore2')
    .itemInputs('gtceu:raw_galena')
    .itemOutputs('4x gtceu:crushed_galena_ore')
    .chancedOutput(Item.of('gtceu:sulfur_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗方铅矿、方铅矿矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_magnesite_ore1')
    .itemInputs('#forge:ores/magnesite')
    .itemOutputs('6x gtceu:crushed_magnesite_ore')
    .chancedOutput(Item.of('gtceu:magnesium_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_magnesite_ore2')
    .itemInputs('gtceu:raw_magnesite')
    .itemOutputs('4x gtceu:crushed_magnesite_ore')
    .chancedOutput(Item.of('gtceu:magnesium_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗菱镁矿、菱镁矿矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_magnetite_ore1')
    .itemInputs('#forge:ores/magnetite')
    .itemOutputs('6x gtceu:crushed_magnetite_ore')
    .chancedOutput(Item.of('gtceu:iron_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_magnetite_ore2')
    .itemInputs('gtceu:raw_magnetite')
    .itemOutputs('4x gtceu:crushed_magnetite_ore')
    .chancedOutput(Item.of('gtceu:iron_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗磁铁矿、磁铁矿矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_molybdenite_ore1')
    .itemInputs('#forge:ores/molybdenite')
    .itemOutputs('6x gtceu:crushed_molybdenite_ore')
    .chancedOutput(Item.of('gtceu:molybdenum_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_molybdenite_ore2')
    .itemInputs('gtceu:raw_molybdenite')
    .itemOutputs('4x gtceu:crushed_molybdenite_ore')
    .chancedOutput(Item.of('gtceu:molybdenum_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗辉钼矿、辉钼矿矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_powellite_ore1')
    .itemInputs('#forge:ores/powellite')
    .itemOutputs('6x gtceu:crushed_powellite_ore')
    .chancedOutput(Item.of('gtceu:iron_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_powellite_ore2')
    .itemInputs('gtceu:raw_powellite')
    .itemOutputs('4x gtceu:crushed_powellite_ore')
    .chancedOutput(Item.of('gtceu:iron_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗钼钙矿、钼钙矿矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_pyrite_ore1')
    .itemInputs('#forge:ores/pyrite')
    .itemOutputs('6x gtceu:crushed_pyrite_ore')
    .chancedOutput(Item.of('gtceu:sulfur_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_pyrite_ore2')
    .itemInputs('gtceu:raw_pyrite')
    .itemOutputs('4x gtceu:crushed_pyrite_ore')
    .chancedOutput(Item.of('gtceu:sulfur_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗黄铁矿、黄铁矿矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_pyrolusite_ore1')
    .itemInputs('#forge:ores/pyrolusite')
    .itemOutputs('6x gtceu:crushed_pyrolusite_ore')
    .chancedOutput(Item.of('gtceu:manganese_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_pyrolusite_ore2')
    .itemInputs('gtceu:raw_pyrolusite')
    .itemOutputs('4x gtceu:crushed_pyrolusite_ore')
    .chancedOutput(Item.of('gtceu:manganese_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗软锰矿、软锰矿矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_pyrope_ore1')
    .itemInputs('#forge:ores/pyrope')
    .itemOutputs('6x gtceu:crushed_pyrope_ore')
    .chancedOutput(Item.of('gtceu:red_garnet_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_pyrope_ore2')
    .itemInputs('gtceu:raw_pyrope')
    .itemOutputs('4x gtceu:crushed_pyrope_ore')
    .chancedOutput(Item.of('gtceu:red_garnet_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗镁铝榴石、镁铝榴石矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_rock_salt_ore1')
    .itemInputs('#forge:ores/rock_salt')
    .itemOutputs('10x gtceu:crushed_rock_salt_ore')
    .chancedOutput(Item.of('gtceu:salt_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_rock_salt_ore2')
    .itemInputs('gtceu:raw_rock_salt')
    .itemOutputs('8x gtceu:crushed_rock_salt_ore')
    .chancedOutput(Item.of('gtceu:salt_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗岩盐、岩盐矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_ruby_ore1')
    .itemInputs('#forge:ores/ruby')
    .itemOutputs('6x gtceu:crushed_ruby_ore')
    .chancedOutput(Item.of('gtceu:chromium_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_ruby_ore2')
    .itemInputs('gtceu:raw_ruby')
    .itemOutputs('4x gtceu:crushed_ruby_ore')
    .chancedOutput(Item.of('gtceu:chromium_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗红宝石、红宝石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_salt_ore1')
    .itemInputs('#forge:ores/salt')
    .itemOutputs('10x gtceu:crushed_salt_ore')
    .chancedOutput(Item.of('gtceu:salt_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_salt_ore2')
    .itemInputs('gtceu:raw_salt')
    .itemOutputs('8x gtceu:crushed_salt_ore')
    .chancedOutput(Item.of('gtceu:salt_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗盐、盐矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_saltpeter_ore1')
    .itemInputs('#forge:ores/saltpeter')
    .itemOutputs('10x gtceu:crushed_saltpeter_ore')
    .chancedOutput(Item.of('gtceu:saltpeter_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_saltpeter_ore2')
    .itemInputs('gtceu:raw_saltpeter')
    .itemOutputs('8x gtceu:crushed_saltpeter_ore')
    .chancedOutput(Item.of('gtceu:saltpeter_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗硝石、硝石矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_sapphire_ore1')
    .itemInputs('#forge:ores/sapphire')
    .itemOutputs('6x gtceu:crushed_sapphire_ore')
    .chancedOutput(Item.of('gtceu:aluminium_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_sapphire_ore2')
    .itemInputs('gtceu:raw_sapphire')
    .itemOutputs('4x gtceu:crushed_sapphire_ore')
    .chancedOutput(Item.of('gtceu:aluminium_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗蓝宝石、蓝宝石矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_scheelite_ore1')
    .itemInputs('#forge:ores/scheelite')
    .itemOutputs('6x gtceu:crushed_scheelite_ore')
    .chancedOutput(Item.of('gtceu:manganese_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_scheelite_ore2')
    .itemInputs('gtceu:raw_scheelite')
    .itemOutputs('4x gtceu:crushed_scheelite_ore')
    .chancedOutput(Item.of('gtceu:manganese_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗白钨矿、白钨矿矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_sodalite_ore1')
    .itemInputs('#forge:ores/sodalite')
    .itemOutputs('32x gtceu:crushed_sodalite_ore')
    .chancedOutput(Item.of('gtceu:lazurite_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_sodalite_ore2')
    .itemInputs('gtceu:raw_sodalite')
    .itemOutputs('24x gtceu:crushed_sodalite_ore')
    .chancedOutput(Item.of('gtceu:lazurite_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗方纳石、方纳石矿石增幅后产出

    event.recipes.gtceu.macerator('gtceu:crushed_tungstate_ore1')
    .itemInputs('#forge:ores/tungstate')
    .itemOutputs('6x gtceu:crushed_tungstate_ore')
    .chancedOutput(Item.of('gtceu:manganese_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_tungstate_ore2')
    .itemInputs('gtceu:raw_tungstate')
    .itemOutputs('4x gtceu:crushed_tungstate_ore')
    .chancedOutput(Item.of('gtceu:manganese_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗钨酸锂矿、钨酸锂矿矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_topaz_ore1')
    .itemInputs('#forge:ores/topaz')
    .itemOutputs('6x gtceu:crushed_topaz_ore')
    .chancedOutput(Item.of('gtceu:blue_topaz_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_topaz_ore2')
    .itemInputs('gtceu:raw_topaz')
    .itemOutputs('4x gtceu:crushed_topaz_ore')
    .chancedOutput(Item.of('gtceu:blue_topaz_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗黄玉、黄玉矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_tetrahedrite_ore1')
    .itemInputs('#forge:ores/tetrahedrite')
    .itemOutputs('6x gtceu:crushed_tetrahedrite_ore')
    .chancedOutput(Item.of('gtceu:antimony_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_tetrahedrite_ore2')
    .itemInputs('gtceu:raw_tetrahedrite')
    .itemOutputs('4x gtceu:crushed_tetrahedrite_ore')
    .chancedOutput(Item.of('gtceu:antimony_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗黝铜矿、黝铜矿矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_stibnite_ore1')
    .itemInputs('#forge:ores/stibnite')
    .itemOutputs('6x gtceu:crushed_stibnite_ore')
    .chancedOutput(Item.of('gtceu:antimony_trioxide_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_stibnite_ore2')
    .itemInputs('gtceu:raw_stibnite')
    .itemOutputs('4x gtceu:crushed_stibnite_ore')
    .chancedOutput(Item.of('gtceu:antimony_trioxide_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗辉锑矿、辉锑矿矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_sphalerite_ore1')
    .itemInputs('#forge:ores/sphalerite')
    .itemOutputs('6x gtceu:crushed_sphalerite_ore')
    .chancedOutput(Item.of('gtceu:yellow_garnet_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_sphalerite_ore2')
    .itemInputs('gtceu:raw_sphalerite')
    .itemOutputs('4x gtceu:crushed_sphalerite_ore')
    .chancedOutput(Item.of('gtceu:yellow_garnet_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗闪锌矿、闪锌矿矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_spessartine_ore1')
    .itemInputs('#forge:ores/spessartine')
    .itemOutputs('14x gtceu:crushed_spessartine_ore')
    .chancedOutput(Item.of('gtceu:red_garnet_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_spessartine_ore2')
    .itemInputs('gtceu:raw_spessartine')
    .itemOutputs('12x gtceu:crushed_spessartine_ore')
    .chancedOutput(Item.of('gtceu:red_garnet_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗锰铝榴石、锰铝榴石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_tantalite_ore1')
    .itemInputs('#forge:ores/tantalite')
    .itemOutputs('6x gtceu:crushed_tantalite_ore')
    .chancedOutput(Item.of('gtceu:manganese_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_tantalite_ore2')
    .itemInputs('gtceu:raw_tantalite')
    .itemOutputs('4x gtceu:crushed_tantalite_ore')
    .chancedOutput(Item.of('gtceu:manganese_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗钽铁矿、钽铁矿矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_uraninite_ore1')
    .itemInputs('#forge:ores/uraninite')
    .itemOutputs('6x gtceu:crushed_uraninite_ore')
    .chancedOutput(Item.of('gtceu:uraninite_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_uraninite_ore2')
    .itemInputs('gtceu:raw_uraninite')
    .itemOutputs('4x gtceu:crushed_uraninite_ore')
    .chancedOutput(Item.of('gtceu:uraninite_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗晶质铀矿、晶质铀矿矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_wulfenite_ore1')
    .itemInputs('#forge:ores/wulfenite')
    .itemOutputs('6x gtceu:crushed_wulfenite_ore')
    .chancedOutput(Item.of('gtceu:iron_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_wulfenite_ore2')
    .itemInputs('gtceu:raw_wulfenite')
    .itemOutputs('4x gtceu:crushed_wulfenite_ore')
    .chancedOutput(Item.of('gtceu:iron_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗钼铅矿、钼铅矿矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_yellow_limonite_ore1')
    .itemInputs('#forge:ores/yellow_limonite')
    .itemOutputs('6x gtceu:crushed_yellow_limonite_ore')
    .chancedOutput(Item.of('gtceu:nickel_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_yellow_limonite_ore2')
    .itemInputs('gtceu:raw_yellow_limonite')
    .itemOutputs('4x gtceu:crushed_yellow_limonite_ore')
    .chancedOutput(Item.of('gtceu:nickel_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗黄褐铁矿、黄褐铁矿矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_nether_quartz_ore1')
    .itemInputs('#forge:ores/nether_quartz')
    .itemOutputs('10x gtceu:crushed_nether_quartz_ore')
    .chancedOutput(Item.of('gtceu:quartzite_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_nether_quartz_ore2')
    .itemInputs('gtceu:raw_nether_quartz')
    .itemOutputs('8x gtceu:crushed_nether_quartz_ore')
    .chancedOutput(Item.of('gtceu:quartzite_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗下界石英岩、下界石英岩矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_certus_quartz_ore1')
    .itemInputs('#forge:ores/certus_quartz')
    .itemOutputs('10x gtceu:crushed_certus_quartz_ore')
    .chancedOutput(Item.of('minecraft:quartz'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_certus_quartz_ore2')
    .itemInputs('gtceu:raw_certus_quartz')
    .itemOutputs('8x gtceu:crushed_certus_quartz_ore')
    .chancedOutput(Item.of('minecraft:quartz'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗赛特斯石英岩矿石、赛特斯石英岩矿石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_quartzite_ore1')
    .itemInputs('#forge:ores/quartzite')
    .itemOutputs('10x gtceu:crushed_quartzite_ore')
    .chancedOutput(Item.of('gtceu:certus_quartz_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_quartzite_ore2')
    .itemInputs('gtceu:raw_quartzite')
    .itemOutputs('8x gtceu:crushed_quartzite_ore')
    .chancedOutput(Item.of('gtceu:certus_quartz_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗石英岩矿石、石英岩矿石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_graphite_ore1')
    .itemInputs('#forge:ores/graphite')
    .itemOutputs('6x gtceu:crushed_graphite_ore')
    .chancedOutput(Item.of('gtceu:carbon_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_graphite_ore2')
    .itemInputs('gtceu:raw_graphite')
    .itemOutputs('4x gtceu:crushed_graphite_ore')
    .chancedOutput(Item.of('gtceu:carbon_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗石墨、石墨矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_lepidolite_ore1')
    .itemInputs('#forge:ores/lepidolite')
    .itemOutputs('10x gtceu:crushed_lepidolite_ore')
    .chancedOutput(Item.of('gtceu:lithium_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_lepidolite_ore2')
    .itemInputs('gtceu:raw_lepidolite')
    .itemOutputs('8x gtceu:crushed_lepidolite_ore')
    .chancedOutput(Item.of('gtceu:lithium_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗锂云母、锂云母矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_spodumene_ore1')
    .itemInputs('#forge:ores/spodumene')
    .itemOutputs('10x gtceu:crushed_spodumene_ore')
    .chancedOutput(Item.of('gtceu:aluminium_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_spodumene_ore2')
    .itemInputs('gtceu:raw_spodumene')
    .itemOutputs('8x gtceu:crushed_spodumene_ore')
    .chancedOutput(Item.of('gtceu:aluminium_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗锂辉矿、锂辉矿矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_pentlandite_ore1')
    .itemInputs('#forge:ores/pentlandite')
    .itemOutputs('6x gtceu:crushed_pentlandite_ore')
    .chancedOutput(Item.of('gtceu:iron_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_pentlandite_ore2')
    .itemInputs('gtceu:raw_pentlandite')
    .itemOutputs('4x gtceu:crushed_pentlandite_ore')
    .chancedOutput(Item.of('gtceu:iron_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗镍黄铁矿、镍黄铁矿矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_bastnasite_ore1')
    .itemInputs('#forge:ores/bastnasite')
    .itemOutputs('10x gtceu:crushed_bastnasite_ore')
    .chancedOutput(Item.of('gtceu:neodymium_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_bastnasite_ore2')
    .itemInputs('gtceu:raw_bastnasite')
    .itemOutputs('8x gtceu:crushed_bastnasite_ore')
    .chancedOutput(Item.of('gtceu:neodymium_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗氟碳镧铈矿、氟碳镧铈矿矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_realgar_ore1')
    .itemInputs('#forge:ores/realgar')
    .itemOutputs('6x gtceu:crushed_realgar_ore')
    .chancedOutput(Item.of('gtceu:sulfur_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_realgar_ore2')
    .itemInputs('gtceu:raw_realgar')
    .itemOutputs('4x gtceu:crushed_realgar_ore')
    .chancedOutput(Item.of('gtceu:sulfur_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗雄黄矿、粗雄黄矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_chalcocite_ore1')
    .itemInputs('#forge:ores/chalcocite')
    .itemOutputs('6x gtceu:crushed_chalcocite_ore')
    .chancedOutput(Item.of('gtceu:sulfur_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_chalcocite_ore2')
    .itemInputs('gtceu:raw_chalcocite')
    .itemOutputs('4x gtceu:crushed_chalcocite_ore')
    .chancedOutput(Item.of('gtceu:sulfur_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗辉铜矿、辉铜矿矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_bornite_ore1')
    .itemInputs('#forge:ores/bornite')
    .itemOutputs('6x gtceu:crushed_bornite_ore')
    .chancedOutput(Item.of('gtceu:pyrite_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_bornite_ore2')
    .itemInputs('gtceu:raw_bornite')
    .itemOutputs('4x gtceu:crushed_bornite_ore')
    .chancedOutput(Item.of('gtceu:pyrite_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗斑铜矿、斑铜矿矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_glauconite_sand_ore1')
    .itemInputs('#forge:ores/glauconite_sand')
    .itemOutputs('6x gtceu:crushed_glauconite_sand_ore')
    .chancedOutput(Item.of('gtceu:sodium_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_glauconite_sand_ore2')
    .itemInputs('gtceu:raw_glauconite_sand')
    .itemOutputs('4x gtceu:crushed_glauconite_sand_ore')
    .chancedOutput(Item.of('gtceu:sodium_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗海绿石砂、海绿石砂矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_malachite_ore1')
    .itemInputs('#forge:ores/malachite')
    .itemOutputs('6x gtceu:crushed_malachite_ore')
    .chancedOutput(Item.of('gtceu:goethite_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_malachite_ore2')
    .itemInputs('gtceu:raw_malachite')
    .itemOutputs('4x gtceu:crushed_malachite_ore')
    .chancedOutput(Item.of('gtceu:goethite_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗孔雀石、孔雀石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_mica_ore1')
    .itemInputs('#forge:ores/mica')
    .itemOutputs('6x gtceu:crushed_mica_ore')
    .chancedOutput(Item.of('gtceu:potassium_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_mica_ore2')
    .itemInputs('gtceu:raw_mica')
    .itemOutputs('4x gtceu:crushed_mica_ore')
    .chancedOutput(Item.of('gtceu:potassium_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗云母、云母矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_barite_ore1')
    .itemInputs('#forge:ores/barite')
    .itemOutputs('6x gtceu:crushed_barite_ore')
    .chancedOutput(Item.of('gtceu:barite_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_barite_ore2')
    .itemInputs('gtceu:raw_barite')
    .itemOutputs('4x gtceu:crushed_barite_ore')
    .chancedOutput(Item.of('gtceu:barite_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗重晶石、重晶石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_alunite_ore1')
    .itemInputs('#forge:ores/alunite')
    .itemOutputs('6x gtceu:crushed_alunite_ore')
    .chancedOutput(Item.of('gtceu:alunite_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_alunite_ore2')
    .itemInputs('gtceu:raw_alunite')
    .itemOutputs('4x gtceu:crushed_alunite_ore')
    .chancedOutput(Item.of('gtceu:alunite_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗明矾石、明矾石矿石增产后产出
    
    event.recipes.gtceu.macerator('gtceu:crushed_talc_ore1')
    .itemInputs('#forge:ores/talc')
    .itemOutputs('10x gtceu:crushed_talc_ore')
    .chancedOutput(Item.of('gtceu:clay_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_talc_ore2')
    .itemInputs('gtceu:raw_talc')
    .itemOutputs('8x gtceu:crushed_talc_ore')
    .chancedOutput(Item.of('gtceu:clay_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗滑石、滑石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_soapstone_ore1')
    .itemInputs('#forge:ores/soapstone')
    .itemOutputs('14x gtceu:crushed_soapstone_ore')
    .chancedOutput(Item.of('gtceu:silicon_dioxide_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_soapstone_ore2')
    .itemInputs('gtceu:raw_soapstone')
    .itemOutputs('12x gtceu:crushed_soapstone_ore')
    .chancedOutput(Item.of('gtceu:silicon_dioxide_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗皂石、皂石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_lapis_ore1')
    .itemInputs('#forge:ores/lapis')
    .itemOutputs('32x gtceu:crushed_lapis_ore')
    .chancedOutput(Item.of('gtceu:lazurite_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_lapis_ore2')
    .itemInputs('gtceu:raw_lapis')
    .itemOutputs('24x gtceu:crushed_lapis_ore')
    .chancedOutput(Item.of('gtceu:lazurite_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗青金石、青金石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_amethyst_ore1')
    .itemInputs('#forge:ores/amethyst')
    .itemOutputs('6x gtceu:crushed_amethyst_ore')
    .chancedOutput(Item.of('minecraft:amethyst_shard'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_amethyst_ore2')
    .itemInputs('gtceu:raw_amethyst')
    .itemOutputs('4x gtceu:crushed_amethyst_ore')
    .chancedOutput(Item.of('minecraft:amethyst_shard'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗紫水晶、紫水晶矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_opal_ore1')
    .itemInputs('#forge:ores/opal')
    .itemOutputs('6x gtceu:crushed_opal_ore')
    .chancedOutput(Item.of('gtceu:opal_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_opal_ore2')
    .itemInputs('gtceu:raw_opal')
    .itemOutputs('4x gtceu:crushed_opal_ore')
    .chancedOutput(Item.of('gtceu:opal_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗猫眼石、猫眼石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_olivine_ore1')
    .itemInputs('#forge:ores/olivine')
    .itemOutputs('10x gtceu:crushed_olivine_ore')
    .chancedOutput(Item.of('gtceu:pyrope_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_olivine_ore2')
    .itemInputs('gtceu:raw_olivine')
    .itemOutputs('8x gtceu:crushed_olivine_ore')
    .chancedOutput(Item.of('gtceu:pyrope_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗橄榄石、橄榄石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_oilsands_ore1')
    .itemInputs('#forge:ores/oilsands')
    .itemOutputs('6x gtceu:crushed_oilsands_ore')
    .chancedOutput(Item.of('gtceu:oilsands_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_oilsands_ore2')
    .itemInputs('gtceu:raw_oilsands')
    .itemOutputs('4x gtceu:crushed_oilsands_ore')
    .chancedOutput(Item.of('gtceu:oilsands_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗油砂、油砂矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_pyrochlore_ore1')
    .itemInputs('#forge:ores/pyrochlore')
    .itemOutputs('6x gtceu:crushed_pyrochlore_ore')
    .chancedOutput(Item.of('gtceu:apatite_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_pyrochlore_ore2')
    .itemInputs('gtceu:raw_pyrochlore')
    .itemOutputs('4x gtceu:crushed_pyrochlore_ore')
    .chancedOutput(Item.of('gtceu:apatite_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗烧绿石、烧绿石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_kyanite_ore1')
    .itemInputs('#forge:ores/kyanite')
    .itemOutputs('6x gtceu:crushed_kyanite_ore')
    .chancedOutput(Item.of('gtceu:talc_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_kyanite_ore2')
    .itemInputs('gtceu:raw_kyanite')
    .itemOutputs('4x gtceu:crushed_kyanite_ore')
    .chancedOutput(Item.of('gtceu:talc_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗蓝晶石、蓝晶石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_apatite_ore1')
    .itemInputs('#forge:ores/apatite')
    .itemOutputs('20x gtceu:crushed_apatite_ore')
    .chancedOutput(Item.of('gtceu:talc_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_apatite_ore2')
    .itemInputs('gtceu:raw_apatite')
    .itemOutputs('16x gtceu:crushed_apatite_ore')
    .chancedOutput(Item.of('gtceu:talc_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗磷灰石、磷灰石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_tricalcium_phosphate_ore1')
    .itemInputs('#forge:ores/tricalcium_phosphate')
    .itemOutputs('14x gtceu:crushed_tricalcium_phosphate_ore')
    .chancedOutput(Item.of('gtceu:apatite_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_tricalcium_phosphate_ore2')
    .itemInputs('gtceu:raw_tricalcium_phosphate')
    .itemOutputs('12x gtceu:crushed_tricalcium_phosphate_ore')
    .chancedOutput(Item.of('gtceu:apatite_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗磷酸三钙、磷酸三钙矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_red_garnet_ore1')
    .itemInputs('#forge:ores/red_garnet')
    .itemOutputs('20x gtceu:crushed_red_garnet_ore')
    .chancedOutput(Item.of('gtceu:spessartine_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_red_garnet_ore2')
    .itemInputs('gtceu:raw_red_garnet')
    .itemOutputs('16x gtceu:crushed_red_garnet_ore')
    .chancedOutput(Item.of('gtceu:spessartine_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗红石榴石、红石榴石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_yellow_garnet_ore1')
    .itemInputs('#forge:ores/yellow_garnet')
    .itemOutputs('20x gtceu:crushed_yellow_garnet_ore')
    .chancedOutput(Item.of('gtceu:andradite_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_yellow_garnet_ore2')
    .itemInputs('gtceu:raw_yellow_garnet')
    .itemOutputs('16x gtceu:crushed_yellow_garnet_ore')
    .chancedOutput(Item.of('gtceu:andradite_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗黄石榴石、黄石榴石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_vanadium_magnetite_ore1')
    .itemInputs('#forge:ores/vanadium_magnetite')
    .itemOutputs('6x gtceu:crushed_vanadium_magnetite_ore')
    .chancedOutput(Item.of('gtceu:magnetite_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_vanadium_magnetite_ore2')
    .itemInputs('gtceu:raw_vanadium_magnetite')
    .itemOutputs('4x gtceu:crushed_vanadium_magnetite_ore')
    .chancedOutput(Item.of('gtceu:magnetite_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗钒磁铁矿、钒磁铁矿矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_pollucite_ore1')
    .itemInputs('#forge:ores/pollucite')
    .itemOutputs('6x gtceu:crushed_pollucite_ore')
    .chancedOutput(Item.of('gtceu:caesium_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_pollucite_ore2')
    .itemInputs('gtceu:raw_pollucite')
    .itemOutputs('4x gtceu:crushed_pollucite_ore')
    .chancedOutput(Item.of('gtceu:caesium_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗铯榴石矿、铯榴石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_fullers_earth_ore1')
    .itemInputs('#forge:ores/fullers_earth')
    .itemOutputs('10x gtceu:crushed_fullers_earth_ore')
    .chancedOutput(Item.of('gtceu:aluminium_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_fullers_earth_ore2')
    .itemInputs('gtceu:raw_fullers_earth')
    .itemOutputs('8x gtceu:crushed_fullers_earth_ore')
    .chancedOutput(Item.of('gtceu:aluminium_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗漂白石、漂白石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_diatomite_ore1')
    .itemInputs('#forge:ores/diatomite')
    .itemOutputs('6x gtceu:crushed_diatomite_ore')
    .chancedOutput(Item.of('gtceu:hematite_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_diatomite_ore2')
    .itemInputs('gtceu:raw_diatomite')
    .itemOutputs('4x gtceu:crushed_diatomite_ore')
    .chancedOutput(Item.of('gtceu:hematite_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗硅藻土、硅藻土矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_electrotine_ore1')
    .itemInputs('#forge:ores/electrotine')
    .itemOutputs('24x gtceu:crushed_electrotine_ore')
    .chancedOutput(Item.of('minecraft:redstone'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_electrotine_ore2')
    .itemInputs('gtceu:raw_electrotine')
    .itemOutputs('20x gtceu:crushed_electrotine_ore')
    .chancedOutput(Item.of('minecraft:redstone'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗蓝石、蓝石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_redstone_ore1')
    .itemInputs('#forge:ores/redstone')
    .itemOutputs('24x gtceu:crushed_redstone_ore')
    .chancedOutput(Item.of('gtceu:cinnabar_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_redstone_ore2')
    .itemInputs('gtceu:raw_redstone')
    .itemOutputs('20x gtceu:crushed_redstone_ore')
    .chancedOutput(Item.of('gtceu:cinnabar_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗红石、红石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_zeolite_ore1')
    .itemInputs('#forge:ores/zeolite')
    .itemOutputs('14x gtceu:crushed_zeolite_ore')
    .chancedOutput(Item.of('gtceu:calcium_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_zeolite_ore2')
    .itemInputs('gtceu:raw_zeolite')
    .itemOutputs('12x gtceu:crushed_zeolite_ore')
    .chancedOutput(Item.of('gtceu:calcium_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗沸石、沸石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_gypsum_ore1')
    .itemInputs('#forge:ores/gypsum')
    .itemOutputs('6x gtceu:crushed_gypsum_ore')
    .chancedOutput(Item.of('gtceu:sulfur_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_gypsum_ore2')
    .itemInputs('gtceu:raw_gypsum')
    .itemOutputs('4x gtceu:crushed_gypsum_ore')
    .chancedOutput(Item.of('gtceu:sulfur_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗石膏、石膏矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_trona_ore1')
    .itemInputs('#forge:ores/trona')
    .itemOutputs('14x gtceu:crushed_trona_ore')
    .chancedOutput(Item.of('gtceu:sodium_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_trona_ore2')
    .itemInputs('gtceu:raw_trona')
    .itemOutputs('12x gtceu:crushed_trona_ore')
    .chancedOutput(Item.of('gtceu:sodium_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗天然碱、天然碱矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_monazite_ore1')
    .itemInputs('#forge:ores/monazite')
    .itemOutputs('6x gtceu:crushed_monazite_ore')
    .chancedOutput(Item.of('gtceu:thorium_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_monazite_ore2')
    .itemInputs('gtceu:raw_monazite')
    .itemOutputs('4x gtceu:crushed_monazite_ore')
    .chancedOutput(Item.of('gtceu:thorium_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗独居石、独居石矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_granitic_mineral_sand_ore1')
    .itemInputs('#forge:ores/granitic_mineral_sand')
    .itemOutputs('6x gtceu:crushed_granitic_mineral_sand_ore')
    .chancedOutput(Item.of('gtceu:deepslate_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_granitic_mineral_sand_ore2')
    .itemInputs('gtceu:raw_granitic_mineral_sand')
    .itemOutputs('4x gtceu:crushed_granitic_mineral_sand_ore')
    .chancedOutput(Item.of('gtceu:deepslate_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗花岗岩矿砂、花岗岩矿砂矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_garnet_sand_ore1')
    .itemInputs('#forge:ores/garnet_sand')
    .itemOutputs('6x gtceu:crushed_garnet_sand_ore')
    .chancedOutput(Item.of('gtceu:red_garnet_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_garnet_sand_ore2')
    .itemInputs('gtceu:raw_garnet_sand')
    .itemOutputs('4x gtceu:crushed_garnet_sand_ore')
    .chancedOutput(Item.of('gtceu:red_garnet_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗石榴石砂、石榴石砂矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_basaltic_mineral_sand_ore1')
    .itemInputs('#forge:ores/basaltic_mineral_sand')
    .itemOutputs('6x gtceu:crushed_basaltic_mineral_sand_ore')
    .chancedOutput(Item.of('gtceu:red_garnet_gem'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_basaltic_mineral_sand_ore2')
    .itemInputs('gtceu:raw_basaltic_mineral_sand')
    .itemOutputs('4x gtceu:crushed_basaltic_mineral_sand_ore')
    .chancedOutput(Item.of('gtceu:red_garnet_gem'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗玄武岩矿砂、玄武岩矿砂矿石增产后产出

    event.recipes.gtceu.macerator('gtceu:crushed_bentonite_ore1')
    .itemInputs('#forge:ores/bentonite')
    .itemOutputs('14x gtceu:crushed_bentonite_ore')
    .chancedOutput(Item.of('gtceu:aluminium_dust'),5000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),6000,1000)
    .duration(100)
    .EUt(16)
    event.recipes.gtceu.macerator('gtceu:crushed_bentonite_ore2')
    .itemInputs('gtceu:raw_bentonite')
    .itemOutputs('12x gtceu:crushed_bentonite_ore')
    .chancedOutput(Item.of('gtceu:aluminium_dust'),3000,1000)
    .chancedOutput(Item.of('gtceu:stone_dust'),2000,1000)
    .duration(100)
    .EUt(16)
    //粗膨润土、膨润土矿石增产后产出
    
    event.shaped('prts:type_one_wanzi_special_alloy',[
        ['gtceu:iron_dust','prts:basic_wanzi','gtceu:iron_dust'],
        ['prts:basic_wanzi','gtceu:red_alloy_ingot','prts:basic_wanzi'],
        ['gtceu:iron_dust','prts:basic_wanzi','gtceu:iron_dust']
    ])//万子特殊合金Ⅰ型制作

    event.shaped('prts:type_two_wanzi_special_alloy',[
        ['prts:type_one_wanzi_special_alloy','prts:basic_wanzi','prts:type_one_wanzi_special_alloy'],
        ['prts:basic_wanzi','prts:type_one_wanzi_special_alloy','prts:basic_wanzi'],
        ['prts:type_one_wanzi_special_alloy','prts:basic_wanzi','prts:type_one_wanzi_special_alloy']
    ])//万子特殊合金Ⅱ型制作

    event.shaped('prts:type_three_wanzi_special_alloy',[
        ['prts:type_one_wanzi_special_alloy','prts:basic_wanzi','prts:type_one_wanzi_special_alloy'],
        ['prts:basic_wanzi','prts:type_two_wanzi_special_alloy','prts:basic_wanzi'],
        ['prts:type_one_wanzi_special_alloy','prts:basic_wanzi','prts:type_one_wanzi_special_alloy']
    ])//万子特殊合金Ⅲ型制作

    event.shaped('prts:type_four_wanzi_special_alloy',[
        ['prts:type_two_wanzi_special_alloy','prts:basic_wanzi','prts:type_two_wanzi_special_alloy'],
        ['prts:basic_wanzi','prts:type_three_wanzi_special_alloy','prts:basic_wanzi'],
        ['prts:type_two_wanzi_special_alloy','prts:basic_wanzi','prts:type_two_wanzi_special_alloy']
    ])//万子特殊合金Ⅳ型制作

    event.shaped(Item.of('prts:blueprint',8),[
        ['#forge:dyes/blue','prts:dedicated_blueprint_pen','#forge:dyes/blue'],
        ['#forge:dyes/blue','prts:compressed_cardboard','#forge:dyes/blue'],
        ['#forge:dyes/blue','#forge:dyes/blue','#forge:dyes/blue']
    ])//蓝图制作

    event.shaped(Item.of('prts:compressed_cardboard',1),[
        ['minecraft:paper','minecraft:paper','minecraft:paper'],
        ['minecraft:paper','minecraft:paper','minecraft:paper'],
        ['minecraft:paper','minecraft:paper','minecraft:paper']
    ])//压缩纸板制作

    event.shaped(Item.of('prts:dedicated_blueprint_pen',1),[
        ['','#forge:dyes/blue','minecraft:paper'],
        ['#forge:dyes/blue','minecraft:paper','#forge:dyes/blue'],
        ['#forge:dyes/white','#forge:dyes/blue','']
    ])//蓝图专用笔制作

    event.shaped(Item.of('prts:blueprint_rod',1),[
        ['','prts:dedicated_blueprint_pen',''],
        ['','#forge:rods',''],
        ['','prts:blueprint','']
    ])//杆材蓝图制作

    event.shaped(Item.of('prts:blueprint_plate',1),[
        ['','prts:dedicated_blueprint_pen',''],
        ['','#forge:plates',''],
        ['','prts:blueprint','']
    ])//板材蓝图制作

    event.shaped(Item.of('prts:blueprint_gear',1),[
        ['','prts:dedicated_blueprint_pen',''],
        ['','#forge:gears',''],
        ['','prts:blueprint','']
    ])//齿轮蓝图制作

    event.shaped(Item.of('prts:blueprint_small_gear',1),[
        ['','prts:dedicated_blueprint_pen',''],
        ['','#forge:small_gears',''],
        ['','prts:blueprint','']
    ])//小型齿轮蓝图制作

    event.shaped(Item.of('prts:blueprint_ring',1),[
        ['','prts:dedicated_blueprint_pen',''],
        ['','#forge:rings',''],
        ['','prts:blueprint','']
    ])//环蓝图制作

    event.shaped(Item.of('prts:blueprint_rotor',1),[
        ['','prts:dedicated_blueprint_pen',''],
        ['','#forge:rotors',''],
        ['','prts:blueprint','']
    ])//转子蓝图制作

    event.shaped(Item.of('prts:blueprint_ball',1),[
        ['','prts:dedicated_blueprint_pen',''],
        ['','#forge:rounds',''],
        ['','prts:blueprint','']
    ])//杆材蓝图制作

    event.shaped(Item.of('prts:blueprint_single_wire',1),[
        ['','prts:dedicated_blueprint_pen',''],
        ['','#prts:single_wire',''],
        ['','prts:blueprint','']
    ])//线缆蓝图制作

/*    event.shaped(Item.of('prts:blueprint_fine_wire',1),[
        ['','prts:dedicated_blueprint_pen',''],
        ['','#forge:fine_wire',''],
        ['','prts:blueprint','']
    ])*///杆材蓝图制作

    event.recipes.gtceu.assembler('gtceu:wanzi_coated_plate_1')
    .notConsumable('prts:basic_wanzi_film_coating_sprayer')
    .itemInputs('4x gtceu:steel_plate','prts:basic_wanzi')
    .inputFluids(Fluid.of('gtceu:polyethylene', 144))
    .itemOutputs('4x gtceu:polyethylene_plate') 
    .duration(80)
    .EUt(48)//覆膜喷涂获取聚乙烯板
    
    event.recipes.gtceu.assembler('gtceu:wanzi_coated_plate_2')
    .notConsumable('prts:basic_wanzi_film_coating_sprayer')
    .itemInputs('4x gtceu:steel_plate','prts:basic_wanzi')
    .inputFluids(Fluid.of('gtceu:rubber', 288))
    .itemOutputs('4x gtceu:rubber_plate')
    .duration(100)
    .EUt(32)//覆膜喷涂获取橡胶板

    event.shaped('prts:low_voltage_wanzi_circuit',[
        ['prts:type_d_resistor','prts:type_d_conductive_circuit','prts:type_d_resistor'],
        ['prts:type_d_high_voltage_transformation_component','prts:type_d_packaging_unit','prts:type_d_high_voltage_transformation_component'],
        ['prts:type_d_conductive_circuit','prts:type_d_resistor','prts:type_d_conductive_circuit']
    ])//低压万子电路手动制作

    event.recipes.gtceu.arc_furnace('prts:crude_etched_iron_block')
    .itemInputs('prts:crude_etched_iron_block')
    .itemOutputs('7x minecraft:iron_ingot')
    .inputFluids(Fluid.of('gtceu:oxygen',256))
    .duration(100)
    .EUt(20)
    //非关键材料还原——（粗制蚀刻铁块）

    event.recipes.gtceu.arc_furnace('prts:refined_etched_iron_block')
    .itemInputs('prts:refined_etched_iron_block')
    .itemOutputs('5x minecraft:iron_ingot')
    .inputFluids(Fluid.of('gtceu:oxygen',216))
    .duration(100)
    .EUt(20)
    //非关键材料还原——（精制蚀刻铁块）

    event.recipes.gtceu.arc_furnace('prts:crude_etched_copper_block')
    .itemInputs('prts:crude_etched_copper_block')
    .itemOutputs('7x minecraft:copper_ingot')
    .inputFluids(Fluid.of('gtceu:oxygen',256))
    .duration(100)
    .EUt(20)
    //非关键材料还原——（粗制蚀刻铜块）

    event.recipes.gtceu.arc_furnace('prts:refined_etched_copper_block')
    .itemInputs('prts:refined_etched_copper_block')
    .itemOutputs('5x minecraft:copper_ingot')
    .inputFluids(Fluid.of('gtceu:oxygen',216))
    .duration(100)
    .EUt(20)
    //非关键材料还原——（精制蚀刻铜块）

    event.recipes.gtceu.arc_furnace('prts:crude_etched_gold_block')
    .itemInputs('prts:crude_etched_gold_block')
    .itemOutputs('7x minecraft:gold_ingot')
    .inputFluids(Fluid.of('gtceu:oxygen',256))
    .duration(100)
    .EUt(20)
    //非关键材料还原——（粗制蚀刻金块）

    event.recipes.gtceu.arc_furnace('prts:refined_etched_gold_block')
    .itemInputs('prts:refined_etched_gold_block')
    .itemOutputs('5x minecraft:gold_ingot')
    .inputFluids(Fluid.of('gtceu:oxygen',216))
    .duration(100)
    .EUt(20)
    //非关键材料还原——（精制蚀刻金块）

    event.recipes.gtceu.basic_model_wanzi_power_supply_machine_1('prts:wanzigongdian_1')
    .circuit(1)
    .itemInputs('prts:basic_wanzi')
    .itemOutputs('gtceu:tiny_ash_dust')
    .duration(100)
    .EUt(-128)//万子发电
    event.recipes.gtceu.basic_model_wanzi_power_supply_machine_1('prts:wanzigongdian_2')
    .circuit(1)
    .itemInputs('prts:type_one_wanzi')
    .itemOutputs('gtceu:tiny_ash_dust')
    .duration(100)
    .EUt(-512)//万子发电
    event.recipes.gtceu.basic_model_wanzi_power_supply_machine_1('prts:wanzigongdian_3')
    .circuit(1)
    .itemInputs('prts:type_two_wanzi')
    .itemOutputs('gtceu:tiny_ash_dust')
    .duration(100)
    .EUt(-2048)//万子发电

    event.recipes.gtceu.basic_model_wanzi_electrolyzer_1('prts:wanzidianjie_1')
    .circuit(1)
    .itemInputs('minecraft:cobblestone','prts:basic_wanzi')
    .itemOutputs('8x gtceu:stone_dust')
    .chancedOutput('2x gtceu:stone_dust',1000,500)
    .chancedOutput('gtceu:iron_dust',1000,500)
    .chancedOutput('gtceu:copper_dust',1000,500)
    .duration(40)
    .EUt(32)
    event.recipes.gtceu.basic_model_wanzi_electrolyzer_1('prts:wanzidianjie_2')
    .circuit(1)
    .itemInputs('minecraft:stone','prts:basic_wanzi')
    .itemOutputs('8x gtceu:stone_dust')
    .chancedOutput('2x gtceu:stone_dust',1000,500)
    .chancedOutput('gtceu:iron_dust',1000,500)
    .chancedOutput('gtceu:copper_dust',1000,500)
    .duration(40)
    .EUt(32)

    event.recipes.gtceu.basic_model_wanzi_electrolyzer_1('prts:wanzidianjie_3')
    .circuit(1)
    .itemInputs('gtceu:rubber_log','prts:basic_wanzi')
    .itemOutputs('2x minecraft:charcoal')
    .chancedOutput('2x gtceu:charcoal_dust',1000,500)
    .chancedOutput('gtceu:sticky_resin',100,50)
    .chancedFluidOutput(Fluid.of('gtceu:methane',600),1000,2000)
    .duration(40)
    .EUt(32)

    event.recipes.gtceu.basic_model_wanzi_electrolyzer_1('prts:wanzidianjie_4')
    .circuit(1)
    .itemInputs('minecraft:cobbled_deepslate','prts:basic_wanzi')
    .itemOutputs('6x gtceu:deepslate_dust')
    .chancedOutput('2x gtceu:deepslate_dust',1000,500)
    .chancedOutput('gtceu:iron_dust',2000,1000)
    .chancedOutput('gtceu:copper_dust',2500,1500)
    .chancedOutput('gtceu:gold_dust',1000,500)
    .duration(40)
    .EUt(32)
    event.recipes.gtceu.basic_model_wanzi_electrolyzer_1('prts:wanzidianjie_5')
    .circuit(1)
    .itemInputs('minecraft:deepslate','prts:basic_wanzi')
    .itemOutputs('6x gtceu:deepslate_dust')
    .chancedOutput('2x gtceu:deepslate_dust',1000,500)
    .chancedOutput('gtceu:iron_dust',2000,1000)
    .chancedOutput('gtceu:copper_dust',2500,1500)
    .chancedOutput('gtceu:gold_dust',1000,500)
    .duration(40)
    .EUt(32)

    event.recipes.gtceu.basic_model_wanzi_electrolyzer_1('prts:qiangxiaodianjie_1')
    .circuit(1)
    .itemInputs('prts:basic_wanzi','16x gtceu:lapis_dust')
    .itemOutputs('12x gtceu:lazurite_dust','2x gtceu:sodalite_dust','gtceu:pyrite_dust','gtceu:calcite_dust')
    .duration(100)
    .EUt(64)//青金石电解

    event.recipes.gtceu.basic_model_wanzi_electrolyzer_1('prts:qiangxiaodianjie_2')
    .circuit(1)
    .itemInputs('prts:basic_wanzi','14x gtceu:lazurite_dust')
    .itemOutputs('3x gtceu:aluminium_dust','3x gtceu:silicon_dust','4x gtceu:calcium_dust','4x gtceu:sodium_dust')
    .duration(100)
    .EUt(64)//蓝金石电解

    event.recipes.gtceu.basic_model_wanzi_electrolyzer_1('prts:qiangxiaodianjie_3')
    .circuit(1)
    .itemInputs('prts:basic_wanzi','11x gtceu:sodalite_dust')
    .itemOutputs('3x gtceu:aluminium_dust','3x gtceu:silicon_dust','4x gtceu:sodium_dust')
    .outputFluids(Fluid.of('gtceu:chlorine',1000))
    .duration(100)
    .EUt(64)//方纳石电解

    event.recipes.gtceu.basic_model_wanzi_electrolyzer_1('prts:qiangxiaodianjie_4')
    .circuit(1)
    .itemInputs('prts:basic_wanzi','9x gtceu:apatite_dust')
    .itemOutputs('5x gtceu:calcium_dust','3x gtceu:phosphorus_dust')
    .outputFluids(Fluid.of('gtceu:chlorine',1000))
    .duration(100)
    .EUt(64)//磷灰石电解

    event.recipes.gtceu.centrifuge('prts:zhimilixin_1')
    .itemInputs('prts:densified_diamond_dust')
    .itemOutputs('9x gtceu:diamond_dust')
    .chancedOutput('gtceu:diamond_dust',1000,500)
    .chancedOutput('2x gtceu:diamond_dust',500,250)
    .chancedOutput('4x gtceu:diamond_dust',10,125)
    .duration(200)
    .EUt(22)

    event.recipes.gtceu.centrifuge('prts:zhimilixin_2')
    .itemInputs('prts:densified_tin_dust')
    .itemOutputs('9x gtceu:tin_dust')
    .chancedOutput('gtceu:tin_dust',2000,1000)
    .chancedOutput('2x gtceu:tin_dust',1000,500)
    .chancedOutput('4x gtceu:tin_dust',500,250)
    .duration(150)
    .EUt(12)

    event.recipes.gtceu.centrifuge('prts:zhimilixin_3')
    .itemInputs('prts:densified_gold_dustdust')
    .itemOutputs('9x gtceu:gold_dust')
    .chancedOutput('gtceu:gold_dust',1500,750)
    .chancedOutput('2x gtceu:gold_dust',750,375)
    .chancedOutput('4x gtceu:gold_dust',250,200)
    .duration(175)
    .EUt(18)

    event.recipes.gtceu.centrifuge('prts:zhimilixin_4')
    .itemInputs('prts:densified_copper_dust_dust')
    .itemOutputs('9x gtceu:copper_dust')
    .chancedOutput('gtceu:copper_dust',2500,1250)
    .chancedOutput('2x gtceu:copper_dust',1500,1000)
    .chancedOutput('4x gtceu:copper_dust',750,500)
    .duration(200)
    .EUt(12)

    event.recipes.gtceu.centrifuge('prts:zhimilixin_5')
    .itemInputs('prts:densified_iron_dust')
    .itemOutputs('9x gtceu:iron_dust')
    .chancedOutput('gtceu:iron_dust',2000,1000)
    .chancedOutput('2x gtceu:iron_dust',1000,500)
    .chancedOutput('4x gtceu:iron_dust',500,250)
    .duration(200)
    .EUt(12)

    event.recipes.gtceu.centrifuge('prts:zhimilixin_6')
    .itemInputs('prts:densified_steel_dust')
    .itemOutputs('9x gtceu:steel_dust')
    .chancedOutput('gtceu:steel_dust',2000,1000)
    .chancedOutput('2x gtceu:steel_dust',750,250)
    .chancedOutput('4x gtceu:steel_dust',500,125)
    .duration(200)
    .EUt(12)

    event.recipes.gtceu.centrifuge('prts:zhimilixin_7')
    .itemInputs('prts:densified_carbon_dust')
    .itemOutputs('9x gtceu:carbon_dust')
    .chancedOutput('gtceu:carbon_dust',3000,1500)
    .chancedOutput('2x gtceu:carbon_dust',2500,1250)
    .chancedOutput('4x gtceu:carbon_dust',2000,1250)
    .duration(200)
    .EUt(12)

    event.recipes.gtceu.centrifuge('prts:zhimilixin_8')
    .itemInputs('prts:densified_lead_dust')
    .itemOutputs('9x gtceu:lead_dust')
    .chancedOutput('gtceu:lead_dust',2000,1000)
    .chancedOutput('2x gtceu:lead_dust',1000,500)
    .chancedOutput('4x gtceu:lead_dust',500,250)
    .duration(200)
    .EUt(12)

    event.recipes.gtceu.thermal_centrifuge('prts:jichuwanjinglixin_1')
    .circuit(1)
    .itemInputs('prts:basic_wanjing')
    .itemOutputs('3x gtceu:iron_dust')
    .itemOutputs('3x gtceu:copper_dust')
    .chancedOutput('2x gtceu:tin_dust',2000,1000)
    .duration(200)
    .EUt(30)

    event.recipes.gtceu.thermal_centrifuge('prts:jichuwanjinglixin_2')
    .circuit(2)
    .itemInputs('prts:basic_wanjing')
    .itemOutputs('2x gtceu:gold_dust')
    .itemOutputs('2x gtceu:silver_dust')
    .chancedOutput('gtceu:diamond_dust',1000,500)
    .duration(200)
    .EUt(60)

    event.recipes.gtceu.thermal_centrifuge('prts:jichuwanjinglixin_3')
    .circuit(3)
    .itemInputs('prts:basic_wanjing')
    .itemOutputs('gtceu:arsenic_dust')
    .itemOutputs('gtceu:gallium_dust')
    .chancedOutput('gtceu:gallium_arsenide_dust',500,250)
    .duration(200)
    .EUt(240)

    event.recipes.gtceu.thermal_centrifuge('prts:jichuwanjinglixin_4')
    .circuit(1)
    .itemInputs('prts:purified_basic_wanjing')
    .itemOutputs('5x gtceu:iron_dust')
    .itemOutputs('5x gtceu:copper_dust')
    .chancedOutput('2x gtceu:tin_dust',2000,1000)
    .duration(200)
    .EUt(30)

    event.recipes.gtceu.thermal_centrifuge('prts:jichuwanjinglixin_5')
    .circuit(2)
    .itemInputs('prts:purified_basic_wanjing')
    .itemOutputs('3x gtceu:gold_dust')
    .itemOutputs('3x gtceu:silver_dust')
    .chancedOutput('2x gtceu:diamond_dust',1000,500)
    .duration(200)
    .EUt(60)

    event.recipes.gtceu.thermal_centrifuge('prts:jichuwanjinglixin_6')
    .circuit(3)
    .itemInputs('prts:purified_basic_wanjing')
    .itemOutputs('2x gtceu:arsenic_dust')
    .itemOutputs('2x gtceu:gallium_dust')
    .chancedOutput('2x gtceu:gallium_arsenide_dust',500,250)
    .duration(200)
    .EUt(240)//2261至此行均为万晶/纯化万晶在非万子科技树的用途

    event.recipes.gtceu.electrolyzer('prts:feiliaohuishou')
    .itemInputs('prts:waste_material')
    .itemOutputs('gtceu:iron_dust')
    .itemOutputs('gtceu:copper_dust')
    .duration(240)
    .EUt(18)//废料回收

    event.shaped(Item.of('gtceu:basic_electronic_circuit',1),[
        "   ",
        "ABA",
        "   "
    ],{
        A:'mekanism:advanced_control_circuit',
        B:'prts:low_voltage_wanzi_circuit'
    })

    event.shaped(Item.of('gtceu:basic_model_wanzi_electrolyzer',1),[
        "BAB",
        "CSC",
        "ADA"
    ],{
        A:'mekanism:block_steel',
        B:'prts:type_d_high_voltage_transformation_component',
        C:'gtceu:basic_electronic_circuit',
        D:'cyclic:compressed_cobblestone',
        S:'gtceu:lv_machine_hull'
    })//基础型万子电解机配方

    event.recipes.gtceu.extractor('prts:duyetiqu')
    .itemInputs('prts:jianduduye_bucket')
    .outputFluids(Fluid.of('prts:jianduduye',144))
    .duration(30)
    .EUt(8)//箭毒毒液获取1

    event.recipes.gtceu.extractor('prts:duyetiqu_1')
    .itemInputs('aether:skyroot_poison_bucket')
    .outputFluids(Fluid.of('prts:jianduduye',144))
    .duration(30)
    .EUt(8)//箭毒毒液获取2

    event.recipes.gtceu.extractor('prts:duyetiqu_2')
    .itemInputs('8x aether:poison_dart')
    .outputFluids(Fluid.of('prts:jianduduye',144))
    .duration(30)
    .EUt(8)//箭毒毒液获取3

    event.recipes.gtceu.electrolyzer('prts:duyehuishouliyong')
    .inputFluids(Fluid.of('prts:jianduduye',144))
    .outputFluids(Fluid.of('gtceu:hydrogen',512))
    .outputFluids(Fluid.of('gtceu:oxygen',144))
    .itemOutputs('2x gtceu:carbon_dust')
    .chancedOutput('2x gtceu:biphenyl_dust',1000,500)
    .duration(50)
    .EUt(15)//箭毒毒液电解

    event.recipes.gtceu.forge_hammer('prts:teshuhejinkuai')
    .itemInputs('prts:teshuhejinkuai')
    .itemOutputs('6x prts:type_one_wanzi_special_alloy')
    .duration(300)
    .EUt(32)//特殊合金块Ⅰ型反向制作

    event.recipes.gtceu.compressor('prts:teshuhejinjuhe')
    .itemInputs('6x prts:type_one_wanzi_special_alloy')
    .itemOutputs('prts:teshuhejinkuai')
    .duration(200)
    .EUt(32)//特殊合金块Ⅰ型制作2

    event.shapeless(Item.of('aether:skyroot_poison_bucket',1),[
        'prts:jianduduye_bucket'
    ])//箭毒毒液桶转化1

    event.shapeless(Item.of('prts:jianduduye_bucket',1),[
        'aether:skyroot_poison_bucket'
    ])//箭毒毒液桶转化2

    event.shapeless(Item.of('prts:jianduduye_bucket',1),[
        'minecraft:water_bucket','aether:aechor_petal'
    ])//箭毒毒液桶制作

    event.shaped(Item.of('aether:poison_dart',8),[
        "SSS",
        "SAS",
        "SSS"
    ],{
        S:'aether:golden_dart',
        A:'prts:jianduduye_bucket'
    })//箭毒吹镖制作

    event.shaped(Item.of('gtceu:mv_electric_motor',2),[
        "ABC",
        "BDB",
        "CBA"
    ],{
        A:'gtceu:copper_single_cable',
        B:'gtceu:waw_double_wire',
        C:'gtceu:aluminium_rod',
        D:'gtceu:magnetic_steel_rod'
    })//手搓加倍
    event.recipes.gtceu.assembler('gtceu:waw_assembler_reload_1')
    .itemInputs('2x gtceu:copper_single_cable','4x gtceu:waw_double_wire','2x gtceu:aluminium_rod','gtceu:magnetic_steel_rod')
    .itemOutputs('2x gtceu:mv_electric_motor')
    .duration(100)
    .EUt(30)//瓦拉帕斯加倍制作MV电动马达

    event.shaped(Item.of('gtceu:mv_electric_piston',2),[
        "AAA",
        "BCC",
        "BDE"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:copper_single_cable',
        C:'gtceu:waw_rod',
        D:'gtceu:mv_electric_motor',
        E:'gtceu:small_waw_gear'
    })//手搓加倍
    event.recipes.gtceu.assembler('gtceu:waw_assembler_reload_2')
    .itemInputs('3x gtceu:aluminium_plate','2x gtceu:copper_single_cable','2x gtceu:waw_rod','gtceu:mv_electric_motor','gtceu:small_waw_gear')
    .itemOutputs('2x gtceu:mv_electric_piston')
    .duration(100)
    .EUt(30)//瓦拉帕斯加倍制作MV电力活塞

    event.shaped(Item.of('gtceu:mv_robot_arm',2),[
        "AAA",
        "BCB",
        "EDC"
    ],{
        A:'gtceu:waw_double_wire',
        B:'gtceu:mv_electric_motor',
        C:'gtceu:waw_rod',
        D:'#gtceu:circuits/mv',
        E:'gtceu:mv_electric_piston'
    })//手搓加倍
    event.recipes.gtceu.assembler('gtceu:waw_assembler_reload_3')
    .itemInputs('3x gtceu:waw_double_wire','2x gtceu:mv_electric_motor','2x gtceu:waw_rod','#gtceu:circuits/mv','gtceu:mv_electric_piston')
    .itemOutputs('2x gtceu:mv_robot_arm')
    .duration(100)
    .EUt(30)//瓦拉帕斯加倍制作MV机械臂

    event.shaped(Item.of('gtceu:mv_conveyor_module',2),[
        "AAA",
        "BCB",
        "AAA"
    ],{
        A:'gtceu:rubber_plate',
        B:'gtceu:mv_electric_motor',
        C:'gtceu:waw_double_wire',
    })
    event.shaped(Item.of('gtceu:mv_conveyor_module',2),[
        "AAA",
        "BCB",
        "AAA"
    ],{
        A:'gtceu:styrene_butadiene_rubber_plate',
        B:'gtceu:mv_electric_motor',
        C:'gtceu:waw_double_wire',
    })
    event.shaped(Item.of('gtceu:mv_conveyor_module',2),[
        "AAA",
        "BCB",
        "AAA"
    ],{
        A:'gtceu:silicone_rubber_plate',
        B:'gtceu:mv_electric_motor',
        C:'gtceu:waw_double_wire',
    })//手搓加倍
    event.recipes.gtceu.assembler('gtceu:waw_assembler_reload_4')
    .itemInputs('2x gtceu:mv_electric_motor','gtceu:waw_double_wire','4x gtceu:waw_foil')
    .inputFluids(Fluid.of('gtceu:rubber',576))
    .itemOutputs('2x gtceu:mv_conveyor_module')
    .duration(100)
    .EUt(30)
    event.recipes.gtceu.assembler('gtceu:waw_assembler_reload_5')
    .itemInputs('2x gtceu:mv_electric_motor','gtceu:waw_double_wire','4x gtceu:waw_foil')
    .inputFluids(Fluid.of('gtceu:styrene_butadiene_rubber',144))
    .itemOutputs('2x gtceu:mv_conveyor_module')
    .duration(100)
    .EUt(30)
    event.recipes.gtceu.assembler('gtceu:waw_assembler_reload_6')
    .itemInputs('2x gtceu:mv_electric_motor','gtceu:waw_double_wire','4x gtceu:waw_foil')
    .inputFluids(Fluid.of('gtceu:silicone_rubber',288))
    .itemOutputs('2x gtceu:mv_conveyor_module')
    .duration(100)
    .EUt(30)//瓦拉帕斯加倍制作MV传送带

    event.shapeless(Item.of('prts:type_c_conductive_circuit',2),[
        'gtceu:waw_ingot',
        'minecraft:copper_ingot'
    ])//手搓C型导电线路1
    event.shapeless(Item.of('prts:type_c_conductive_circuit',4),[
        'gtceu:waw_ingot',
        'gtceu:cupronickel_ingot'
    ])//手搓C型导电线路2
    event.shapeless(Item.of('prts:type_c_conductive_circuit',4),[
        'gtceu:waw_ingot',
        'gtceu:annealed_copper_ingot'
    ])//手搓C型导电线路3
    event.shapeless(Item.of('prts:type_c_conductive_circuit',4),[
        'gtceu:fine_annealed_copper_wire','gtceu:fine_annealed_copper_wire','gtceu:fine_annealed_copper_wire',
        'gtceu:fine_annealed_copper_wire','gtceu:waw_ingot','gtceu:fine_annealed_copper_wire',
        'gtceu:fine_annealed_copper_wire','gtceu:fine_annealed_copper_wire','gtceu:fine_annealed_copper_wire'
    ])//手搓C型导电线路4
    event.shapeless(Item.of('prts:type_c_conductive_circuit',4),[
        'gtceu:waw_ingot','gtceu:annealed_copper_double_wire'
    ])//手搓C型导电线路5
    event.shapeless(Item.of('prts:type_c_conductive_circuit',4),[
        'gtceu:annealed_copper_single_wire','gtceu:waw_ingot','gtceu:annealed_copper_single_wire'
    ])//手搓C型导电线路6
    event.shapeless(Item.of('prts:type_c_conductive_circuit',2),[
        'gtceu:fine_copper_wire','gtceu:fine_copper_wire','gtceu:fine_copper_wire',
        'gtceu:fine_copper_wire','gtceu:waw_ingot','gtceu:fine_copper_wire',
        'gtceu:fine_copper_wire','gtceu:fine_copper_wire','gtceu:fine_copper_wire'
    ])//手搓C型导电线路7
    event.shapeless(Item.of('prts:type_c_conductive_circuit',2),[
        'gtceu:waw_ingot','gtceu:copper_double_wire'
    ])//手搓C型导电线路8
    event.shapeless(Item.of('prts:type_c_conductive_circuit',2),[
        'gtceu:copper_single_wire','gtceu:waw_ingot','gtceu:copper_single_wire'
    ])//手搓C型导电线路9
    event.shapeless(Item.of('prts:type_c_conductive_circuit',4),[
        'gtceu:fine_cupronickel_wire','gtceu:fine_cupronickel_wire','gtceu:fine_cupronickel_wire',
        'gtceu:fine_cupronickel_wire','gtceu:waw_ingot','gtceu:fine_cupronickel_wire',
        'gtceu:fine_cupronickel_wire','gtceu:fine_cupronickel_wire','gtceu:fine_cupronickel_wire'
    ])//手搓C型导电线路10
    event.shapeless(Item.of('prts:type_c_conductive_circuit',4),[
        'gtceu:waw_ingot','gtceu:cupronickel_double_wire'
    ])//手搓C型导电线路11
    event.shapeless(Item.of('prts:type_c_conductive_circuit',4),[
        'gtceu:cupronickel_single_wire','gtceu:waw_ingot','gtceu:cupronickel_single_wire'
    ])//手搓C型导电线路12
    
    event.shaped(Item.of('prts:type_c_packaging_unit',1),[
        ['','gtceu:waw_ingot',''],
        ['prts:deformable_plastic_block','prts:type_one_wanzi','prts:deformable_plastic_block'],
        ['','minecraft:iron_ingot','']
    ])//手搓C型封装单元1
    event.shaped(Item.of('prts:type_c_packaging_unit',1),[
        ['','gtceu:waw_ingot',''],
        ['','prts:type_d_purified_packaging_unit',''],
        ['','minecraft:iron_ingot','']
    ])//手搓C型封装单元2
    event.shaped(Item.of('prts:type_b_packaging_unit',1),[
        ['','gtceu:flt_ingot',''],
        ['prts:adhesive_plastic','prts:type_two_wanzi','prts:adhesive_plastic'],
        ['','gtceu:stainless_steel_ingot','']
    ])//手搓B型封装单元1
    event.shaped(Item.of('prts:type_b_packaging_unit',1),[
        ['','gtceu:flt_ingot',''],
        ['','prts:type_c_purified_packaging_unit',''],
        ['','gtceu:stainless_steel_ingot','']
    ])//手搓B型封装单元2（C型提纯封装单元升级）

    event.shapeless(Item.of('prts:type_b_conductive_circuit',2),[
        'gtceu:gold_single_wire','gtceu:gold_single_wire','gtceu:flt_ingot'
    ])//手搓B型导电线路1
    event.shapeless(Item.of('prts:type_b_conductive_circuit',2),[
        'gtceu:gold_double_wire','gtceu:flt_ingot'
    ])//手搓B型导电线路2
    event.shapeless(Item.of('prts:type_b_conductive_circuit',2),[
        'minecraft:gold_ingot','gtceu:flt_ingot'
    ])//手搓B型导电线路3
    event.shapeless(Item.of('prts:type_b_conductive_circuit',2),[
        'gtceu:fine_gold_wire','gtceu:fine_gold_wire','gtceu:fine_gold_wire',
        'gtceu:fine_gold_wire','gtceu:flt_ingot','gtceu:fine_gold_wire',
        'gtceu:fine_gold_wire','gtceu:fine_gold_wire','gtceu:fine_gold_wire'
    ])//手搓B型导电线路4


    event.recipes.gtceu.laser_engraver('gtceu:zizhi_ram_1')
    .itemInputs('prts:type_one_wanjing_etched_substrate')
    .itemOutputs('gtceu:ram_wafer')
    .notConsumable('#forge:lenses/green')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板再造1
    event.recipes.gtceu.laser_engraver('gtceu:zizhi_ram_2')
    .itemInputs('prts:type_one_wanjing_etched_substrate')
    .itemOutputs('gtceu:ilc_wafer')
    .notConsumable('#forge:lenses/red')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板再造2
    event.recipes.gtceu.laser_engraver('gtceu:zizhi_ram_3')
    .itemInputs('prts:type_one_wanjing_etched_substrate')
    .itemOutputs('gtceu:cpu_wafer')
    .notConsumable('#forge:lenses/light_blue')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板再造3
    event.recipes.gtceu.laser_engraver('gtceu:zizhi_ram_4')
    .itemInputs('prts:type_one_wanjing_etched_substrate')
    .itemOutputs('gtceu:ulpic_wafer')
    .notConsumable('#forge:lenses/blue')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板再造4
    event.recipes.gtceu.laser_engraver('gtceu:zizhi_ram_5')
    .itemInputs('prts:type_one_wanjing_etched_substrate')
    .itemOutputs('gtceu:lpic_wafer')
    .notConsumable('gtceu:orange_glass_lens')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板再造5
    event.recipes.gtceu.laser_engraver('gtceu:zizhi_ram_6')
    .itemInputs('prts:type_one_wanjing_etched_substrate')
    .itemOutputs('gtceu:simple_soc_wafer')
    .notConsumable('gtceu:cyan_glass_lens')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板再造6
    
    event.recipes.gtceu.extractor('prts:wanziyisan_1')
    .itemInputs('prts:basic_wanzi')
    .outputFluids(Fluid.of('prts:yisanwanzi',144))
    .duration(200)
    .EUt(20)
    event.recipes.gtceu.extractor('prts:wanziyisan_2')
    .itemInputs('prts:type_one_wanzi')
    .outputFluids(Fluid.of('prts:yisanwanzi',288))
    .duration(200)
    .EUt(36)
    event.recipes.gtceu.extractor('prts:wanziyisan_3')
    .itemInputs('prts:purified_basic_wanzi')
    .outputFluids(Fluid.of('prts:yisanwanzi',144))
    .duration(200)
    .EUt(20)
    event.recipes.gtceu.extractor('prts:wanziyisan_4')
    .itemInputs('prts:purified_type_one_wanzi')
    .outputFluids(Fluid.of('prts:yisanwanzi',288))
    .duration(200)
    .EUt(36)
    //逸散万子制作

    event.recipes.gtceu.cutter('gtceu:pork_1')
    .inputFluids(Fluid.of('minecraft:water',100))
    .itemInputs('minecraft:porkchop')
    .itemOutputs('8x farmersdelight:bacon')
    .duration(40)
    .EUt(16)//生培根制作
    event.recipes.gtceu.cutter('gtceu:beef_1')
    .inputFluids(Fluid.of('minecraft:water',100))
    .itemInputs('minecraft:beef')
    .itemOutputs('8x farmersdelight:minced_beef')
    .duration(40)
    .EUt(16)//生牛肉饼制作
    event.recipes.gtceu.cutter('gtceu:mutton_1')
    .inputFluids(Fluid.of('minecraft:water',100))
    .itemInputs('minecraft:mutton')
    .itemOutputs('8x farmersdelight:mutton_chops')
    .duration(40)
    .EUt(16)//生羊肉排制作
    event.recipes.gtceu.cutter('gtceu:chicken_1')
    .inputFluids(Fluid.of('minecraft:water',100))
    .itemInputs('minecraft:chicken')
    .itemOutputs('8x farmersdelight:chicken_cuts')
    .duration(40)
    .EUt(16)//生鸡肉丁制作

    event.shaped('gtceu:mv_electric_furnace',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_electric_furnace'
    })//电炉升级至MV

    event.shaped('gtceu:mv_alloy_smelter',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_alloy_smelter'
    })//合金炉升级至MV

    event.shaped('gtceu:mv_arc_furnace',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_arc_furnace'
    })//电弧炉升级至MV

    event.shaped('gtceu:mv_assembler',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_assembler'
    })//组装机升级至MV

    event.shaped('gtceu:mv_autoclave',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_autoclave'
    })//高压釜升级至MV

    event.shaped('gtceu:mv_bender',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_bender'
    })//卷板机升级至MV

    event.shaped('gtceu:mv_brewery',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_brewery'
    })//酿造室升级至MV

    event.shaped('gtceu:mv_canner',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_canner'
    })//装罐机升级至MV

    event.shaped('gtceu:mv_centrifuge',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_centrifuge'
    })//离心机升级至MV

    event.shaped('gtceu:mv_chemical_bath',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_chemical_bath'
    })//化学浸洗机升级至MV

    event.shaped('gtceu:mv_chemical_reactor',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_chemical_reactor'
    })//化学反应釜升级至MV

    event.shaped('gtceu:mv_compressor',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_compressor'
    })//压缩机升级至MV

    event.shaped('gtceu:mv_cutter',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_cutter'
    })//切割机升级至MV

    event.shaped('gtceu:mv_distillery',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_distillery'
    })//蒸馏室升级至MV

    event.shaped('gtceu:mv_electrolyzer',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_electrolyzer'
    })//电解机升级至MV

    event.shaped('gtceu:mv_electromagnetic_separator',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_electromagnetic_separator'
    })//电磁选矿机升级至MV

    event.shaped('gtceu:mv_extractor',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_extractor'
    })//提取机升级至MV

    event.shaped('gtceu:mv_extruder',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_extruder'
    })//压模器升级至MV

    event.shaped('gtceu:mv_fermenter',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_fermenter'
    })//发酵槽升级至MV

    event.shaped('gtceu:mv_fluid_heater',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_fluid_heater'
    })//流体加热器升级至MV

    event.shaped('gtceu:mv_fluid_solidifier',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_fluid_solidifier'
    })//流体固化器升级至MV

    event.shaped('gtceu:mv_forge_hammer',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_forge_hammer'
    })//锻造锤升级至MV

    event.shaped('gtceu:mv_bender',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_bender'
    })//卷板机升级至MV

    event.shaped('gtceu:mv_forming_press',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_forming_press'
    })//冲压机床升级至MV

    event.shaped('gtceu:mv_lathe',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_lathe'
    })//车床升级至MV

    event.shaped('gtceu:mv_scanner',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_scanner'
    })//扫描仪升级至MV

    event.shaped('gtceu:mv_mixer',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_mixer'
    })//搅拌机升级至MV

    event.shaped('gtceu:mv_ore_washer',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_ore_washer'
    })//洗矿厂升级至MV

    event.shaped('gtceu:mv_packer',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_packer'
    })//打包机升级至MV

    event.shaped('gtceu:mv_polarizer',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_polarizer'
    })//磁化机升级至MV

    event.shaped('gtceu:mv_laser_engraver',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_laser_engraver'
    })//激光蚀刻机升级至MV

    event.shaped('gtceu:mv_sifter',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_sifter'
    })//筛选机升级至MV

    event.shaped('gtceu:mv_thermal_centrifuge',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_thermal_centrifuge'
    })//热力离心机升级至MV

    event.shaped('gtceu:mv_wiremill',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_wiremill'
    })//线材轧机升级至MV

    event.shaped('gtceu:mv_macerator',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_macerator'
    })//研磨机升级至MV

    event.shaped('gtceu:mv_gas_collector',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_gas_collector'
    })//集气室升级至MV

    event.shaped('gtceu:mv_rock_crusher',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_rock_crusher'
    })//碎岩机升级至MV

    event.shaped('gtceu:mv_pump',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_pump'
    })//泵升级至MV

    event.shaped('gtceu:mv_fisher',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_fisher'
    })//钓鱼机升级至MV

    event.shaped('gtceu:mv_block_breaker',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_block_breaker'
    })//方块破坏器升级至MV

    event.shaped('gtceu:mv_miner',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_miner'
    })//采矿机升级至MV

    event.shaped('gtceu:mv_item_collector',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_ultimet_plate',
        B:'gtceu:aluminium_plate',
        C:'#gtceu:circuits/mv',
        S:'gtceu:lv_item_collector'
    })//物品收集器升级至MV

    event.shaped(Item.of('gtceu:mv_electric_furnace',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_electric_furnace'
    })//电炉升级至MV_2

    event.shaped(Item.of('gtceu:mv_alloy_smelter',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_alloy_smelter'
    })//合金炉升级至MV_2

    event.shaped(Item.of('gtceu:mv_arc_furnace',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_arc_furnace'
    })//电弧炉升级至MV_2

    event.shaped(Item.of('gtceu:mv_assembler',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_assembler'
    })//组装机升级至MV_2

    event.shaped(Item.of('gtceu:mv_autoclave',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_autoclave'
    })//高压釜升级至MV_2

    event.shaped(Item.of('gtceu:mv_bender',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_bender'
    })//卷板机升级至MV_2

    event.shaped(Item.of('gtceu:mv_brewery',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_brewery'
    })//酿造室升级至MV_2

    event.shaped(Item.of('gtceu:mv_canner',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_canner'
    })//装罐机升级至MV_2

    event.shaped(Item.of('gtceu:mv_centrifuge',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_centrifuge'
    })//离心机升级至MV_2

    event.shaped(Item.of('gtceu:mv_chemical_bath',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_chemical_bath'
    })//化学浸洗机升级至MV_2

    event.shaped(Item.of('gtceu:mv_chemical_reactor',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_chemical_reactor'
    })//化学反应釜升级至MV_2

    event.shaped(Item.of('gtceu:mv_compressor',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_compressor'
    })//压缩机升级至MV_2

    event.shaped(Item.of('gtceu:mv_cutter',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_cutter'
    })//切割机升级至MV_2

    event.shaped(Item.of('gtceu:mv_distillery',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_distillery'
    })//蒸馏室升级至MV_2

    event.shaped(Item.of('gtceu:mv_electrolyzer',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_electrolyzer'
    })//电解机升级至MV_2

    event.shaped(Item.of('gtceu:mv_electromagnetic_separator',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_electromagnetic_separator'
    })//电磁选矿机升级至MV_2

    event.shaped(Item.of('gtceu:mv_extractor',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_extractor'
    })//提取机升级至MV_2

    event.shaped(Item.of('gtceu:mv_extruder',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_extruder'
    })//压模器升级至MV_2

    event.shaped(Item.of('gtceu:mv_fermenter',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_fermenter'
    })//发酵槽升级至MV_2

    event.shaped(Item.of('gtceu:mv_fluid_heater',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_fluid_heater'
    })//流体加热器升级至MV_2

    event.shaped(Item.of('gtceu:mv_fluid_solidifier',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_fluid_solidifier'
    })//流体固化器升级至MV_2

    event.shaped(Item.of('gtceu:mv_forge_hammer',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_forge_hammer'
    })//锻造锤升级至MV_2

    event.shaped(Item.of('gtceu:mv_bender',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_bender'
    })//卷板机升级至MV_2

    event.shaped(Item.of('gtceu:mv_forming_press',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_forming_press'
    })//冲压机床升级至MV_2

    event.shaped(Item.of('gtceu:mv_lathe',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_lathe'
    })//车床升级至MV_2

    event.shaped(Item.of('gtceu:mv_scanner',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_scanner'
    })//扫描仪升级至MV_2

    event.shaped(Item.of('gtceu:mv_mixer',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_mixer'
    })//搅拌机升级至MV_2

    event.shaped(Item.of('gtceu:mv_ore_washer',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_ore_washer'
    })//洗矿厂升级至MV_2

    event.shaped(Item.of('gtceu:mv_packer',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_packer'
    })//打包机升级至MV_2

    event.shaped(Item.of('gtceu:mv_polarizer',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_polarizer'
    })//磁化机升级至MV_2

    event.shaped(Item.of('gtceu:mv_laser_engraver',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_laser_engraver'
    })//激光蚀刻机升级至MV_2

    event.shaped(Item.of('gtceu:mv_sifter',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_sifter'
    })//筛选机升级至MV_2

    event.shaped(Item.of('gtceu:mv_thermal_centrifuge',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_thermal_centrifuge'
    })//热力离心机升级至MV_2

    event.shaped(Item.of('gtceu:mv_wiremill',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_wiremill'
    })//线材轧机升级至MV_2

    event.shaped(Item.of('gtceu:mv_macerator',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_macerator'
    })//研磨机升级至MV_2

    event.shaped(Item.of('gtceu:mv_gas_collector',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_gas_collector'
    })//集气室升级至MV_2

    event.shaped(Item.of('gtceu:mv_rock_crusher',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_rock_crusher'
    })//碎岩机升级至MV_2

    event.shaped(Item.of('gtceu:mv_pump',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_pump'
    })//泵升级至MV_2

    event.shaped(Item.of('gtceu:mv_fisher',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_fisher'
    })//钓鱼机升级至MV_2

    event.shaped(Item.of('gtceu:mv_block_breaker',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_block_breaker'
    })//方块破坏器升级至MV_2

    event.shaped(Item.of('gtceu:mv_miner',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_miner'
    })//采矿机升级至MV_2

    event.shaped(Item.of('gtceu:mv_item_collector',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:aluminium_plate',
        B:'gtceu:double_ultimet_plate',
        C:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:lv_item_collector'
    })//物品收集器升级至MV_2

    event.shaped('gtceu:hv_electric_furnace',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:hv_electric_furnace'
    })//电炉升级至HV

    event.shaped('gtceu:hv_alloy_smelter',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:hv_alloy_smelter'
    })//合金炉升级至HV

    event.shaped('gtceu:hv_arc_furnace',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_arc_furnace'
    })//电弧炉升级至HV

    event.shaped('gtceu:hv_assembler',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_assembler'
    })//组装机升级至HV

    event.shaped('gtceu:hv_autoclave',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_autoclave'
    })//高压釜升级至HV

    event.shaped('gtceu:hv_bender',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_bender'
    })//卷板机升级至HV

    event.shaped('gtceu:hv_brewery',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_brewery'
    })//酿造室升级至HV

    event.shaped('gtceu:hv_canner',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_canner'
    })//装罐机升级至HV

    event.shaped('gtceu:hv_centrifuge',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_centrifuge'
    })//离心机升级至HV

    event.shaped('gtceu:hv_chemical_bath',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_chemical_bath'
    })//化学浸洗机升级至HV

    event.shaped('gtceu:hv_chemical_reactor',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_chemical_reactor'
    })//化学反应釜升级至HV

    event.shaped('gtceu:hv_compressor',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_compressor'
    })//压缩机升级至HV

    event.shaped('gtceu:hv_cutter',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_cutter'
    })//切割机升级至HV

    event.shaped('gtceu:hv_distillery',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_distillery'
    })//蒸馏室升级至HV

    event.shaped('gtceu:hv_electrolyzer',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_electrolyzer'
    })//电解机升级至HV

    event.shaped('gtceu:hv_electromagnetic_separator',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_electromagnetic_separator'
    })//电磁选矿机升级至HV

    event.shaped('gtceu:hv_extractor',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_extractor'
    })//提取机升级至HV

    event.shaped('gtceu:hv_extruder',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_extruder'
    })//压模器升级至HV

    event.shaped('gtceu:hv_fermenter',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_fermenter'
    })//发酵槽升级至HV

    event.shaped('gtceu:hv_fluid_heater',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_fluid_heater'
    })//流体加热器升级至HV

    event.shaped('gtceu:hv_fluid_solidifier',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_fluid_solidifier'
    })//流体固化器升级至HV

    event.shaped('gtceu:hv_forge_hammer',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_forge_hammer'
    })//锻造锤升级至HV

    event.shaped('gtceu:hv_bender',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_bender'
    })//卷板机升级至HV

    event.shaped('gtceu:hv_forming_press',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_forming_press'
    })//冲压机床升级至HV

    event.shaped('gtceu:hv_lathe',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_lathe'
    })//车床升级至HV

    event.shaped('gtceu:hv_scanner',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_scanner'
    })//扫描仪升级至HV

    event.shaped('gtceu:hv_mixer',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_mixer'
    })//搅拌机升级至HV

    event.shaped('gtceu:hv_ore_washer',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_ore_washer'
    })//洗矿厂升级至HV

    event.shaped('gtceu:hv_packer',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_packer'
    })//打包机升级至HV

    event.shaped('gtceu:hv_polarizer',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_polarizer'
    })//磁化机升级至HV

    event.shaped('gtceu:hv_laser_engraver',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_laser_engraver'
    })//激光蚀刻机升级至HV

    event.shaped('gtceu:hv_sifter',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_sifter'
    })//筛选机升级至HV

    event.shaped('gtceu:hv_thermal_centrifuge',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_thermal_centrifuge'
    })//热力离心机升级至HV

    event.shaped('gtceu:hv_wiremill',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_wiremill'
    })//线材轧机升级至HV

    event.shaped('gtceu:hv_macerator',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_macerator'
    })//研磨机升级至HV

    event.shaped('gtceu:hv_gas_collector',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_gas_collector'
    })//集气室升级至HV

    event.shaped('gtceu:hv_rock_crusher',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_rock_crusher'
    })//碎岩机升级至HV

    event.shaped('gtceu:hv_pump',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_pump'
    })//泵升级至HV

    event.shaped('gtceu:hv_fisher',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_fisher'
    })//钓鱼机升级至HV

    event.shaped('gtceu:hv_block_breaker',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_block_breaker'
    })//方块破坏器升级至HV

    event.shaped('gtceu:hv_miner',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_miner'
    })//采矿机升级至HV

    event.shaped('gtceu:hv_item_collector',[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_nichrome_plate',
        B:'gtceu:double_stainless_steel_plate',
        C:'#gtceu:circuits/hv',
        S:'gtceu:mv_item_collector'
    })//物品收集器升级至HV

    event.shaped(Item.of('gtceu:hv_electric_furnace',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate', 
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_electric_furnace'
    })//电炉升级至HV_2

    event.shaped(Item.of('gtceu:hv_alloy_smelter',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_alloy_smelter'
    })//合金炉升级至HV_2

    event.shaped(Item.of('gtceu:hv_arc_furnace',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_arc_furnace'
    })//电弧炉升级至HV_2

    event.shaped(Item.of('gtceu:hv_assembler',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_assembler'
    })//组装机升级至HV_2

    event.shaped(Item.of('gtceu:hv_autoclave',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_autoclave'
    })//高压釜升级至HV_2

    event.shaped(Item.of('gtceu:hv_bender',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_bender'
    })//卷板机升级至HV_2

    event.shaped(Item.of('gtceu:hv_brewery',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_brewery'
    })//酿造室升级至HV_2

    event.shaped(Item.of('gtceu:hv_canner',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_canner'
    })//装罐机升级至HV_2

    event.shaped(Item.of('gtceu:hv_centrifuge',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_centrifuge'
    })//离心机升级至HV_2

    event.shaped(Item.of('gtceu:hv_chemical_bath',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_chemical_bath'
    })//化学浸洗机升级至HV_2

    event.shaped(Item.of('gtceu:hv_chemical_reactor',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_chemical_reactor'
    })//化学反应釜升级至HV_2

    event.shaped(Item.of('gtceu:hv_compressor',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_compressor'
    })//压缩机升级至HV_2

    event.shaped(Item.of('gtceu:hv_cutter',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_cutter'
    })//切割机升级至HV_2

    event.shaped(Item.of('gtceu:hv_distillery',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_distillery'
    })//蒸馏室升级至HV_2

    event.shaped(Item.of('gtceu:hv_electrolyzer',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_electrolyzer'
    })//电解机升级至HV_2

    event.shaped(Item.of('gtceu:hv_electromagnetic_separator',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_electromagnetic_separator'
    })//电磁选矿机升级至HV_2

    event.shaped(Item.of('gtceu:hv_extractor',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_extractor'
    })//提取机升级至HV_2

    event.shaped(Item.of('gtceu:hv_extruder',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_extruder'
    })//压模器升级至HV_2

    event.shaped(Item.of('gtceu:hv_fermenter',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_fermenter'
    })//发酵槽升级至HV_2

    event.shaped(Item.of('gtceu:hv_fluid_heater',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_fluid_heater'
    })//流体加热器升级至HV_2

    event.shaped(Item.of('gtceu:hv_fluid_solidifier',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_fluid_solidifier'
    })//流体固化器升级至HV_2

    event.shaped(Item.of('gtceu:hv_forge_hammer',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_forge_hammer'
    })//锻造锤升级至HV_2

    event.shaped(Item.of('gtceu:hv_bender',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_bender'
    })//卷板机升级至HV_2

    event.shaped(Item.of('gtceu:hv_forming_press',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_forming_press'
    })//冲压机床升级至HV_2

    event.shaped(Item.of('gtceu:hv_lathe',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_lathe'
    })//车床升级至HV_2

    event.shaped(Item.of('gtceu:hv_scanner',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_scanner'
    })//扫描仪升级至HV_2

    event.shaped(Item.of('gtceu:hv_mixer',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_mixer'
    })//搅拌机升级至HV_2

    event.shaped(Item.of('gtceu:hv_ore_washer',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_ore_washer'
    })//洗矿厂升级至HV_2

    event.shaped(Item.of('gtceu:hv_packer',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_packer'
    })//打包机升级至HV_2

    event.shaped(Item.of('gtceu:hv_polarizer',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_polarizer'
    })//磁化机升级至HV_2

    event.shaped(Item.of('gtceu:hv_laser_engraver',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_laser_engraver'
    })//激光蚀刻机升级至HV_2

    event.shaped(Item.of('gtceu:hv_sifter',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_sifter'
    })//筛选机升级至HV_2

    event.shaped(Item.of('gtceu:hv_thermal_centrifuge',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_thermal_centrifuge'
    })//热力离心机升级至HV_2

    event.shaped(Item.of('gtceu:hv_wiremill',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_wiremill'
    })//线材轧机升级至HV_2

    event.shaped(Item.of('gtceu:hv_macerator',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_macerator'
    })//研磨机升级至HV_2

    event.shaped(Item.of('gtceu:hv_gas_collector',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_gas_collector'
    })//集气室升级至HV_2

    event.shaped(Item.of('gtceu:hv_rock_crusher',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_rock_crusher'
    })//碎岩机升级至HV_2

    event.shaped(Item.of('gtceu:hv_pump',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_pump'
    })//泵升级至HV_2

    event.shaped(Item.of('gtceu:hv_fisher',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_fisher'
    })//钓鱼机升级至HV_2

    event.shaped(Item.of('gtceu:hv_block_breaker',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_block_breaker'
    })//方块破坏器升级至HV_2

    event.shaped(Item.of('gtceu:hv_miner',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_miner'
    })//采矿机升级至HV_2

    event.shaped(Item.of('gtceu:hv_item_collector',2),[
        "ABA",
        "ASA",
        "ACA"
    ],{
        A:'gtceu:double_stainless_steel_plate',
        B:'gtceu:double_nichrome_plate',
        C:'prts:high_voltage_universal_casing',
        S:'gtceu:mv_item_collector'
    })//物品收集器升级至HV_2

    event.recipes.gtceu.implosion_compressor('prts:diamond_implosion_1')
    .itemInputs('4x minecraft:diamond','2x gtceu:dynamite')
    .itemOutputs('3x avaritia:diamond_lattice')
    .duration(145)
    .EUt(16)//钻石晶格爆破生产1

    event.recipes.gtceu.implosion_compressor('prts:diamond_implosion_2')
    .itemInputs('4x minecraft:diamond','gtceu:industrial_tnt')
    .itemOutputs('3x avaritia:diamond_lattice')
    .duration(145)
    .EUt(16)//钻石晶格爆破生产2

    event.recipes.gtceu.implosion_compressor('prts:diamond_implosion_3')
    .itemInputs('4x minecraft:diamond','4x minecraft:tnt')
    .itemOutputs('3x avaritia:diamond_lattice')
    .duration(145)
    .EUt(16)//钻石晶格爆破生产3

    // === 常规组件用途 ===
    
    event.recipes.gtceu.assembler('prts:mada_mv')
    .itemInputs('prts:conventional_component', 'gtceu:steel_rod', '2x gtceu:copper_single_wire', 'gtceu:magnetic_steel_rod')
    .itemOutputs('3x gtceu:mv_electric_motor')
    .duration(120)
    .EUt(64)//MV电动马达

    event.recipes.gtceu.assembler('prts:huosai_mv')
    .itemInputs('prts:conventional_component', 'gtceu:mv_electric_motor', '2x gtceu:copper_single_wire', 'gtceu:magnetic_steel_rod')
    .itemOutputs('2x gtceu:mv_electric_piston')
    .duration(120)
    .EUt(64)//MV电力活塞

    event.recipes.gtceu.assembler('prts:liutijiaozhun_mv')
    .itemInputs('prts:conventional_component', 'gtceu:mv_electric_pump', '#gtceu:circuits/mv')
    .itemOutputs('2x gtceu:mv_fluid_regulator')
    .duration(120)
    .EUt(64)//MV流体校准器

    event.recipes.gtceu.assembler('prts:chuansongdai_mv_1')
    .itemInputs('prts:conventional_component', '2x gtceu:steel_rod','2x gtceu:mv_electric_motor','2x gtceu:copper_single_cable')
    .inputFluids(Fluid.of('gtceu:rubber',576))
    .itemOutputs('2x gtceu:mv_conveyor_module')
    .duration(120)
    .EUt(64)//MV传送带Ⅰ

    event.recipes.gtceu.assembler('prts:chuansongdai_mv_2')
    .itemInputs('prts:conventional_component', '2x gtceu:steel_rod','2x gtceu:mv_electric_motor','2x gtceu:copper_single_cable')
    .inputFluids(Fluid.of('gtceu:silicone_rubber',288))
    .itemOutputs('2x gtceu:mv_conveyor_module')
    .duration(120)
    .EUt(64)//MV传送带Ⅱ

    event.recipes.gtceu.assembler('prts:chuansongdai_mv_3')
    .itemInputs('prts:conventional_component', '2x gtceu:steel_rod','2x gtceu:mv_electric_motor','2x gtceu:copper_single_cable')
    .inputFluids(Fluid.of('gtceu:styrene_butadiene_rubber',144))
    .itemOutputs('2x gtceu:mv_conveyor_module')
    .duration(120)
    .EUt(64)//MV传送带Ⅲ

    event.recipes.gtceu.assembler('prts:diandongbeng_mv')
    .itemInputs('prts:conventional_component', '2x #gtceu:xiang_jiao_huan', '2x gtceu:copper_single_wire', 'gtceu:bronze_rotor','gtceu:mv_electric_motor')
    .itemOutputs('3x gtceu:mv_electric_pump')
    .duration(120)
    .EUt(64)//MV电动泵

    event.recipes.gtceu.assembler('prts:jixiebi_mv')
    .itemInputs('prts:conventional_component', '2x gtceu:mv_electric_motor', 'gtceu:mv_electric_piston','gtceu:copper_single_cable')
    .itemOutputs('2x gtceu:mv_robot_arm')
    .duration(120)
    .EUt(64)//MV机械臂

    event.recipes.gtceu.assembler('prts:lichangfashengqi_mv_1')
    .itemInputs('prts:conventional_component', 'minecraft:ender_eye','#gtceu:circuits/mv','2x gtceu:waw_quadruple_wire')
    .itemOutputs('2x gtceu:mv_field_generator')
    .duration(120)
    .EUt(64)//MV力场发生器Ⅰ

    event.recipes.gtceu.assembler('prts:lichangfashengqi_mv_2')
    .itemInputs('prts:conventional_component', 'minecraft:ender_eye','#gtceu:circuits/mv','2x gtceu:magnesium_diboride_quadruple_wire')
    .itemOutputs('2x gtceu:mv_field_generator')
    .duration(120)
    .EUt(64)//MV力场发生器Ⅱ

    event.recipes.gtceu.assembler('prts:fasheqi_mv_1')
    .itemInputs('prts:conventional_component','2x gtceu:electrum_rod','gtceu:flawless_emerald_gem','#gtceu:circuits/mv')
    .itemOutputs('3x gtceu:mv_emitter')
    .duration(120)
    .EUt(64)//MV发射器Ⅰ

    event.recipes.gtceu.assembler('prts:fasheqi_mv_2')
    .itemInputs('prts:conventional_component','2x gtceu:electrum_rod','minecraft:ender_eye','#gtceu:circuits/mv')
    .itemOutputs('3x gtceu:mv_emitter')
    .duration(120)
    .EUt(64)//MV发射器Ⅱ

    event.recipes.gtceu.assembler('prts:chuanganqi_mv_1')
    .itemInputs('prts:conventional_component','gtceu:electrum_rod','2x gtceu:aluminium_plate','gtceu:flawless_emerald_gem')
    .itemOutputs('3x gtceu:mv_sensor')
    .duration(120)
    .EUt(64)//MV传感器Ⅰ

    event.recipes.gtceu.assembler('prts:chuanganqi_mv_2')
    .itemInputs('prts:conventional_component','gtceu:electrum_rod','2x gtceu:aluminium_plate','minecraft:ender_eye')
    .itemOutputs('3x gtceu:mv_sensor')
    .duration(120)
    .EUt(64)//MV传感器Ⅱ
    
    // === 非常规组件用途 ===
    
    // 非常规组件组装机械组件
    event.recipes.gtceu.assembler('prts:mada_mv_f')
    .itemInputs('prts:non_conventional_component', 'gtceu:steel_rod', '2x gtceu:copper_single_wire', 'gtceu:magnetic_steel_rod')
    .itemOutputs('5x gtceu:mv_electric_motor')
    .duration(120)
    .EUt(64)//MV电动马达

    event.recipes.gtceu.assembler('prts:huosai_mv_f')
    .itemInputs('prts:non_conventional_component', 'gtceu:mv_electric_motor', '2x gtceu:copper_single_wire', 'gtceu:magnetic_steel_rod')
    .itemOutputs('4x gtceu:mv_electric_piston')
    .duration(120)
    .EUt(64)//MV电力活塞

    event.recipes.gtceu.assembler('prts:liutijiaozhun_mv_f')
    .itemInputs('prts:non_conventional_component', 'gtceu:mv_electric_pump', '#gtceu:circuits/mv')
    .itemOutputs('4x gtceu:mv_fluid_regulator')
    .duration(120)
    .EUt(64)//MV流体校准器

    event.recipes.gtceu.assembler('prts:chuansongdai_mv_1_f')
    .itemInputs('prts:non_conventional_component', '2x gtceu:steel_rod','2x gtceu:mv_electric_motor','2x gtceu:copper_single_cable')
    .inputFluids(Fluid.of('gtceu:rubber',576))
    .itemOutputs('4x gtceu:mv_conveyor_module')
    .duration(120)
    .EUt(64)//MV传送带Ⅰ

    event.recipes.gtceu.assembler('prts:chuansongdai_mv_2_f')
    .itemInputs('prts:non_conventional_component', '2x gtceu:steel_rod','2x gtceu:mv_electric_motor','2x gtceu:copper_single_cable')
    .inputFluids(Fluid.of('gtceu:silicone_rubber',288))
    .itemOutputs('4x gtceu:mv_conveyor_module')
    .duration(120)
    .EUt(64)//MV传送带Ⅱ

    event.recipes.gtceu.assembler('prts:chuansongdai_mv_3_f')
    .itemInputs('prts:non_conventional_component', '2x gtceu:steel_rod','2x gtceu:mv_electric_motor','2x gtceu:copper_single_cable')
    .inputFluids(Fluid.of('gtceu:styrene_butadiene_rubber',144))
    .itemOutputs('4x gtceu:mv_conveyor_module')
    .duration(120)
    .EUt(64)//MV传送带Ⅲ

    event.recipes.gtceu.assembler('prts:diandongbeng_mv_f')
    .itemInputs('prts:non_conventional_component', '2x #gtceu:xiang_jiao_huan', '2x gtceu:copper_single_wire', 'gtceu:bronze_rotor','gtceu:mv_electric_motor')
    .itemOutputs('5x gtceu:mv_electric_pump')
    .duration(120)
    .EUt(64)//MV电动泵

    event.recipes.gtceu.assembler('prts:jixiebi_mv_f')
    .itemInputs('prts:non_conventional_component', '2x gtceu:mv_electric_motor', 'gtceu:mv_electric_piston','gtceu:copper_single_cable')
    .itemOutputs('4x gtceu:mv_robot_arm')
    .duration(120)
    .EUt(64)//MV机械臂

    event.recipes.gtceu.assembler('prts:lichangfashengqi_mv_1_f')
    .itemInputs('prts:non_conventional_component', 'minecraft:ender_eye','#gtceu:circuits/mv','2x gtceu:waw_quadruple_wire')
    .itemOutputs('4x gtceu:mv_field_generator')
    .duration(120)
    .EUt(64)//MV力场发生器Ⅰ

    event.recipes.gtceu.assembler('prts:lichangfashengqi_mv_2_f')
    .itemInputs('prts:non_conventional_component', 'minecraft:ender_eye','#gtceu:circuits/mv','2x gtceu:magnesium_diboride_quadruple_wire')
    .itemOutputs('4x gtceu:mv_field_generator')
    .duration(120)
    .EUt(64)//MV力场发生器Ⅱ

    event.recipes.gtceu.assembler('prts:fasheqi_mv_1_f')
    .itemInputs('prts:non_conventional_component','2x gtceu:electrum_rod','gtceu:flawless_emerald_gem','#gtceu:circuits/mv')
    .itemOutputs('5x gtceu:mv_emitter')
    .duration(120)
    .EUt(64)//MV发射器Ⅰ

    event.recipes.gtceu.assembler('prts:fasheqi_mv_2_f')
    .itemInputs('prts:non_conventional_component','2x gtceu:electrum_rod','minecraft:ender_eye','#gtceu:circuits/mv')
    .itemOutputs('5x gtceu:mv_emitter')
    .duration(120)
    .EUt(64)//MV发射器Ⅱ

    event.recipes.gtceu.assembler('prts:chuanganqi_mv_1_f')
    .itemInputs('prts:non_conventional_component','gtceu:electrum_rod','2x gtceu:aluminium_plate','gtceu:flawless_emerald_gem')
    .itemOutputs('5x gtceu:mv_sensor')
    .duration(120)
    .EUt(64)//MV传感器Ⅰ

    event.recipes.gtceu.assembler('prts:chuanganqi_mv_2_f')
    .itemInputs('prts:non_conventional_component','gtceu:electrum_rod','2x gtceu:aluminium_plate','minecraft:ender_eye')
    .itemOutputs('5x gtceu:mv_sensor')
    .duration(120)
    .EUt(64)//MV传感器Ⅱ

    event.remove({output:'gtceu:vacuum_freezer'})
    event.shaped('gtceu:vacuum_freezer',[
        ['gtceu:mv_electric_pump','gtceu:mv_electric_pump','gtceu:mv_electric_pump'],
        ['#gtceu:circuits/mv','gtceu:frostproof_machine_casing','#gtceu:circuits/mv'],
        ['gtceu:gold_single_cable','#gtceu:circuits/mv','gtceu:gold_single_cable']
    ])//真空冷冻机
    
})