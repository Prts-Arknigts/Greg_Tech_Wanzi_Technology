ServerEvents.recipes((event) => {//格雷科技部分
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:qingsetoujing_1')
    .circuit(1)
    .itemInputs('gtceu:glass_lens','2x minecraft:cyan_dye','prts:basic_wanzi')
    .itemOutputs('gtceu:cyan_glass_lens')
    .duration(120)
    .EUt(40)//青色透镜制作1
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:qingsetoujing_2')
    .circuit(1)
    .itemInputs('gtceu:glass_lens')
    .inputFluids(Fluid.of('gtceu:cyan_dye',288))
    .itemOutputs('gtceu:cyan_glass_lens')
    .duration(120)
    .EUt(40)//青色透镜制作2
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:chengsetoujing_1')
    .circuit(1)
    .itemInputs('gtceu:glass_lens','2x minecraft:orange_dye','prts:basic_wanzi')
    .itemOutputs('gtceu:orange_glass_lens')
    .duration(120)
    .EUt(40)//橙色透镜制作1
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:chengsetoujing_2')
    .circuit(1)
    .itemInputs('gtceu:glass_lens')
    .inputFluids(Fluid.of('gtceu:orange_dye',288))
    .itemOutputs('gtceu:orange_glass_lens')
    .duration(120)
    .EUt(40)//橙色透镜制作2

    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:shachenzhizuo_1')
    .itemInputs('prts:densified_iron_dust','12x prts:basic_wanzi')
    .itemOutputs('12x prts:iron_grit_dust_wanzi')
    .duration(120)
    .EUt(16)//铁砂尘制作
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:shachenzhizuo_2')
    .itemInputs('prts:densified_coppper_dust','12x prts:basic_wanzi')
    .itemOutputs('12x prts:copper_grit_dust_wanzi')
    .duration(120)
    .EUt(16)//铜砂尘制作
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:shachenzhizuo_3')
    .itemInputs('prts:densified_gold_dust','12x prts:basic_wanzi')
    .itemOutputs('12x prts:gold_grit_dust_wanzi')
    .duration(120)
    .EUt(16)//金砂尘制作

    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:gold_cable_1')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('minecraft:gold_ingot','2x gtceu:sticky_resin')
    .itemOutputs('8x gtceu:gold_single_cable')
    .duration(120)
    .EUt(16)//金线缆制作Ⅰ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:gold_cable_2')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('minecraft:gold_ingot','2x gtceu:rubber_ingot')
    .itemOutputs('12x gtceu:gold_single_cable')
    .duration(120)
    .EUt(16)//金线缆制作Ⅱ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:gold_cable_3')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('minecraft:gold_ingot','2x gtceu:silicone_rubber_ingot')
    .itemOutputs('16x gtceu:gold_single_cable')
    .duration(120)
    .EUt(16)//金线缆制作Ⅲ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:gold_cable_4')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('minecraft:gold_ingot','2x gtceu:polyethylene_ingot')
    .itemOutputs('16x gtceu:gold_single_cable')
    .duration(120)
    .EUt(16)//金线缆制作Ⅳ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:gold_cable_5')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('minecraft:gold_ingot','2x gtceu:styrene_butadiene_rubber_ingot')
    .itemOutputs('32x gtceu:gold_single_cable')
    .duration(120)
    .EUt(16)//金线缆制作Ⅴ
    
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:tin_cable_1')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('gtceu:tin_ingot','2x gtceu:sticky_resin')
    .itemOutputs('8x gtceu:tin_single_cable')
    .duration(120)
    .EUt(16)//锡线缆制作Ⅰ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:tin_cable_2')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('gtceu:tin_ingot','2x gtceu:rubber_ingot')
    .itemOutputs('12x gtceu:tin_single_cable')
    .duration(120)
    .EUt(16)//锡线缆制作Ⅱ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:tin_cable_3')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('gtceu:tin_ingot','2x gtceu:silicone_rubber_ingot')
    .itemOutputs('16x gtceu:tin_single_cable')
    .duration(120)
    .EUt(16)//锡线缆制作Ⅲ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:tin_cable_4')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('gtceu:tin_ingot','2x gtceu:polyethylene_ingot')
    .itemOutputs('16x gtceu:tin_single_cable')
    .duration(120)
    .EUt(16)//锡线缆制作Ⅳ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:tin_cable_5')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('gtceu:tin_ingot','2x gtceu:styrene_butadiene_rubber_ingot')
    .itemOutputs('32x gtceu:tin_single_cable')
    .duration(120)
    .EUt(16)//锡线缆制作Ⅴ

    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:copper_cable_1')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('minecraft:copper_ingot','2x gtceu:sticky_resin')
    .itemOutputs('8x gtceu:copper_single_cable')
    .duration(120)
    .EUt(16)//铜线缆制作Ⅰ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:copper_cable_2')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('minecraft:copper_ingot','2x gtceu:rubber_ingot')
    .itemOutputs('12x gtceu:copper_single_cable')
    .duration(120)
    .EUt(16)//铜线缆制作Ⅱ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:copper_cable_3')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('minecraft:copper_ingot','2x gtceu:silicone_rubber_ingot')
    .itemOutputs('16x gtceu:copper_single_cable')
    .duration(120)
    .EUt(16)//铜线缆制作Ⅲ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:copper_cable_4')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('minecraft:copper_ingot','2x gtceu:polyethylene_ingot')
    .itemOutputs('16x gtceu:copper_single_cable')
    .duration(120)
    .EUt(16)//铜线缆制作Ⅳ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:copper_cable_5')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('minecraft:copper_ingot','2x gtceu:styrene_butadiene_rubber_ingot')
    .itemOutputs('32x gtceu:copper_single_cable')
    .duration(120)
    .EUt(16)//铜线缆制作Ⅴ

    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:annealed_copper_cable_1')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('gtceu:annealed_copper_ingot','2x gtceu:sticky_resin')
    .itemOutputs('8x gtceu:annealed_copper_single_cable')
    .duration(120)
    .EUt(16)//退火铜线缆制作Ⅰ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:annealed_copper_cable_2')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('gtceu:annealed_copper_ingot','2x gtceu:rubber_ingot')
    .itemOutputs('12x gtceu:annealed_copper_single_cable')
    .duration(120)
    .EUt(16)//退火铜线缆制作Ⅱ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:annealed_copper_cable_3')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('gtceu:annealed_copper_ingot','2x gtceu:silicone_rubber_ingot')
    .itemOutputs('16x gtceu:annealed_copper_single_cable')
    .duration(120)
    .EUt(16)//退火铜线缆制作Ⅲ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:annealed_copper_cable_4')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('gtceu:annealed_copper_ingot','2x gtceu:polyethylene_ingot')
    .itemOutputs('16x gtceu:annealed_copper_single_cable')
    .duration(120)
    .EUt(16)//退火铜线缆制作Ⅳ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:annealed_copper_cable_5')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('gtceu:annealed_copper_ingot','2x gtceu:styrene_butadiene_rubber_ingot')
    .itemOutputs('32x gtceu:annealed_copper_single_cable')
    .duration(120)
    .EUt(16)//退火铜线缆制作Ⅴ

    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:cupronickel_cable_1')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('gtceu:cupronickel_ingot','2x gtceu:sticky_resin')
    .itemOutputs('8x gtceu:cupronickel_single_cable')
    .duration(120)
    .EUt(16)//白铜线缆制作Ⅰ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:cupronickel_cable_2')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('gtceu:cupronickel_ingot','2x gtceu:rubber_ingot')
    .itemOutputs('12x gtceu:cupronickel_single_cable')
    .duration(120)
    .EUt(16)//白铜线缆制作Ⅱ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:cupronickel_cable_3')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('gtceu:cupronickel_ingot','2x gtceu:silicone_rubber_ingot')
    .itemOutputs('16x gtceu:cupronickel_single_cable')
    .duration(120)
    .EUt(16)//白铜线缆制作Ⅲ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:cupronickel_cable_4')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('gtceu:cupronickel_ingot','2x gtceu:polyethylene_ingot')
    .itemOutputs('16x gtceu:cupronickel_single_cable')
    .duration(120)
    .EUt(16)//白铜线缆制作Ⅳ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:cupronickel_cable_5')
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemInputs('gtceu:cupronickel_ingot','2x gtceu:styrene_butadiene_rubber_ingot')
    .itemOutputs('32x gtceu:cupronickel_single_cable')
    .duration(120)
    .EUt(16)//白铜线缆制作Ⅴ

    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:typeb_aluminium_cable_1')
    .notConsumable('prts:type_b_wire_guide_connection_device')
    .itemInputs('gtceu:aluminium_ingot','2x gtceu:sticky_resin')
    .itemOutputs('8x gtceu:aluminium_single_cable')
    .duration(80)
    .EUt(256)//铝线缆制作Ⅰ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:typeb_aluminium_cable_2')
    .notConsumable('prts:type_b_wire_guide_connection_device')
    .itemInputs('gtceu:aluminium_ingot','2x gtceu:rubber_ingot')
    .itemOutputs('12x gtceu:aluminium_single_cable')
    .duration(80)
    .EUt(256)//铝线缆制作Ⅱ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:typeb_aluminium_cable_3')
    .notConsumable('prts:type_b_wire_guide_connection_device')
    .itemInputs('gtceu:aluminium_ingot','2x gtceu:silicone_rubber_ingot')
    .itemOutputs('16x gtceu:aluminium_single_cable')
    .duration(80)
    .EUt(256)//铝线缆制作Ⅲ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:typeb_aluminium_cable_4')
    .notConsumable('prts:type_b_wire_guide_connection_device')
    .itemInputs('gtceu:aluminium_ingot','2x gtceu:polyethylene_ingot')
    .itemOutputs('16x gtceu:aluminium_single_cable')
    .duration(80)
    .EUt(256)//铝线缆制作Ⅳ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:typeb_aluminium_cable_5')
    .notConsumable('prts:type_b_wire_guide_connection_device')
    .itemInputs('gtceu:aluminium_ingot','2x gtceu:styrene_butadiene_rubber_ingot')
    .itemOutputs('32x gtceu:aluminium_single_cable')
    .duration(80)
    .EUt(256)//铝线缆制作Ⅴ

    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:typeb_silver_cable_1')
    .notConsumable('prts:type_b_wire_guide_connection_device')
    .itemInputs('gtceu:silver_ingot','2x gtceu:sticky_resin')
    .itemOutputs('8x gtceu:silver_single_cable')
    .duration(80)
    .EUt(256)//银线缆制作Ⅰ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:typeb_silver_cable_2')
    .notConsumable('prts:type_b_wire_guide_connection_device')
    .itemInputs('gtceu:silver_ingot','2x gtceu:rubber_ingot')
    .itemOutputs('12x gtceu:silver_single_cable')
    .duration(80)
    .EUt(256)//银线缆制作Ⅱ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:typeb_silver_cable_3')
    .notConsumable('prts:type_b_wire_guide_connection_device')
    .itemInputs('gtceu:silver_ingot','2x gtceu:silicone_rubber_ingot')
    .itemOutputs('16x gtceu:silver_single_cable')
    .duration(80)
    .EUt(256)//银线缆制作Ⅲ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:typeb_silver_cable_4')
    .notConsumable('prts:type_b_wire_guide_connection_device')
    .itemInputs('gtceu:silver_ingot','2x gtceu:polyethylene_ingot')
    .itemOutputs('16x gtceu:silver_single_cable')
    .duration(80)
    .EUt(256)//银线缆制作Ⅳ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:typeb_silver_cable_5')
    .notConsumable('prts:type_b_wire_guide_connection_device')
    .itemInputs('gtceu:silver_ingot','2x gtceu:styrene_butadiene_rubber_ingot')
    .itemOutputs('32x gtceu:silver_single_cable')
    .duration(80)
    .EUt(256)//银线缆制作Ⅴ

    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:typeb_electrum_cable_1')
    .notConsumable('prts:type_b_wire_guide_connection_device')
    .itemInputs('gtceu:electrum_ingot','2x gtceu:sticky_resin')
    .itemOutputs('8x gtceu:electrum_single_cable')
    .duration(80)
    .EUt(256)//琥珀金线缆制作Ⅰ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:typeb_electrum_cable_2')
    .notConsumable('prts:type_b_wire_guide_connection_device')
    .itemInputs('gtceu:electrum_ingot','2x gtceu:rubber_ingot')
    .itemOutputs('12x gtceu:electrum_single_cable')
    .duration(80)
    .EUt(256)//琥珀金线缆制作Ⅱ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:typeb_electrum_cable_3')
    .notConsumable('prts:type_b_wire_guide_connection_device')
    .itemInputs('gtceu:electrum_ingot','2x gtceu:silicone_rubber_ingot')
    .itemOutputs('16x gtceu:electrum_single_cable')
    .duration(80)
    .EUt(256)//琥珀金线缆制作Ⅲ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:typeb_electrum_cable_4')
    .notConsumable('prts:type_b_wire_guide_connection_device')
    .itemInputs('gtceu:electrum_ingot','2x gtceu:polyethylene_ingot')
    .itemOutputs('16x gtceu:electrum_single_cable')
    .duration(80)
    .EUt(256)//琥珀金线缆制作Ⅳ
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:typeb_electrum_cable_5')
    .notConsumable('prts:type_b_wire_guide_connection_device')
    .itemInputs('gtceu:electrum_ingot','2x gtceu:styrene_butadiene_rubber_ingot')
    .itemOutputs('32x gtceu:electrum_single_cable')
    .duration(80)
    .EUt(256)//琥珀金线缆制作Ⅴ
})

ServerEvents.recipes((event) => {//万子科技部分
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:jiasuzengchanshezhi')
    .circuit(2)
    .chancedInput('prts:basic_wanzi_position_corrector',2500,-2500)
    .itemInputs('prts:basic_wanzi','minecraft:iron_ingot')
    .itemOutputs('8x prts:type_d_conductive_circuit')
    .duration(80)
    .EUt(15)//D型导电线路（万子矫正器提升效率）
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:jiasuzengchanshezhi_1')
    .circuit(3)
    .chancedInput('prts:basic_wanzi_position_corrector',2500,-2500)
    .itemInputs('prts:basic_wanzi','minecraft:iron_ingot','2x minecraft:copper_ingot')
    .itemOutputs('12x prts:type_d_resistor')
    .duration(80)
    .EUt(15)//D型电阻（万子矫正器提升效率）
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:jiasuzengchanshezhi_2')
    .circuit(2)
    .chancedInput('prts:basic_wanzi_position_corrector',2500,-2500)
    .itemInputs('2x prts:basic_wanzi','4x prts:micro_plastic_block','minecraft:iron_ingot')
    .itemOutputs('4x prts:type_d_packaging_unit')
    .duration(80)
    .EUt(15)//D型封装单元（万子矫正器提升效率）
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:jiasuzengchanshezhi_3')
    .circuit(7)
    .chancedInput('prts:basic_wanzi_position_corrector',2500,-2500)
    .itemInputs('3x prts:type_d_conductive_circuit','4x prts:basic_wanzi','2x prts:type_d_resistor','2x minecraft:iron_ingot','prts:micro_plastic_block')
    .itemOutputs('3x prts:type_d_high_voltage_transformation_component')
    .duration(80)
    .EUt(15)//D型高压变电组件（万子矫正器提升效率）
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:jiasuzengchanshezhi_4')
    .circuit(8)
    .chancedInput('prts:basic_wanzi_position_corrector',2500,-2500)
    .itemInputs('8x prts:basic_wanzi','4x minecraft:iron_ingot','8x minecraft:copper_ingot','2x prts:type_d_conductive_circuit','6x prts:micro_plastic_block')
    .itemOutputs('3x prts:type_d_risk_management_unit')
    .duration(80)
    .EUt(15)//D型风险管控单元（万子矫正器提升效率）
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:jiasuzengchanshezhi_5')
    .circuit(9)
    .chancedInput('prts:basic_wanzi_position_corrector',2500,-2500)
    .itemInputs('3x prts:type_d_conductive_circuit','3x prts:type_d_packaging_unit','2x prts:type_d_resistor','8x prts:basic_wanzi','3x prts:type_d_circuit_cross_domain_actuator')
    .itemOutputs('3x prts:experimental_dsv_component')
    .duration(80)
    .EUt(15)//实验型DSV装置（万子矫正器提升效率）
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:jiasuzengchanshezhi_6')
    .circuit(5)
    .chancedInput('prts:basic_wanzi_position_corrector',2500,-2500)
    .itemInputs('prts:basic_wanzi','2x gtceu:sticky_resin')
    .itemOutputs('8x prts:micro_plastic_block')
    .duration(80)
    .EUt(15)//微塑料块（万子矫正器提升效率）

    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:type_b_component_1')
    .circuit(1)
    .itemInputs('gtceu:flt_ingot','2x #forge:dusts/gold','gtceu:silver_dust','prts:type_two_wanzi')
    .itemOutputs('4x prts:type_b_resistor')
    .duration(80)
    .EUt(256)//B型电阻
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:type_b_component_2')
    .circuit(1)
    .itemInputs('gtceu:flt_dust','2x #forge:dusts/gold','prts:type_two_wanzi')
    .itemOutputs('4x prts:type_b_conductive_circuit')
    .duration(80)
    .EUt(256)//B型导电线路
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:type_b_component_3')
    .circuit(1)
    .itemInputs('gtceu:flt_ingot','prts:adhesive_plastic','prts:type_b_conductive_circuit','prts:type_b_resistor')
    .itemOutputs('2x prts:type_b_packaging_unit')
    .duration(80)
    .EUt(256)//B型封装单元
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:type_b_component_4')
    .circuit(1)
    .itemInputs('2x gtceu:flt_dust','prts:adhesive_plastic','2x prts:type_b_resistor','2x prts:type_b_conductive_circuit')
    .itemOutputs('prts:type_b_high_voltage_transformation_component')
    .duration(80)
    .EUt(256)//B型高压变电组件
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:type_b_component_5')
    .circuit(1)
    .itemInputs('2x #forge:dusts/gold','2x gtceu:silver_dust','prts:type_two_wanzi','2x prts:type_b_resistor','2x prts:type_b_conductive_circuit')
    .itemOutputs('prts:type_b_risk_management_unit')
    .duration(80)
    .EUt(256)//B型风险管控单元
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:type_b_component_6')
    .circuit(1)
    .itemInputs('6x #forge:dusts/gold','6x gtceu:silver_dust','2x gtceu:flt_ingot','4x prts:adhesive_plastic')
    .itemOutputs('prts:type_b_specialized_circuit_group')
    .duration(80)
    .EUt(256)//B型专型特化线路组
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:type_b_component_7')
    .circuit(1)
    .itemInputs('6x #forge:dusts/gold','6x gtceu:silver_dust','2x gtceu:flt_ingot','3x prts:medium_voltage_wanzi_circuit')
    .itemOutputs('prts:type_b_wanzi_emission_concentrator')
    .duration(80)
    .EUt(256)//B型万子发射集中器
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:type_b_component_8')
    .circuit(1)
    .itemInputs('gtceu:stainless_steel_ingot','2x gtceu:flt_ingot','2x prts:type_two_wanzi')
    .itemOutputs('prts:type_b_wire_guide_connection_device')
    .duration(80)
    .EUt(256)//B型线导连接装置
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:type_b_component_9')
    .circuit(1)
    .itemInputs('6x #forge:dusts/gold','6x gtceu:silver_dust','2x gtceu:flt_ingot','2x prts:type_two_wanzi','prts:medium_voltage_wanzi_circuit')
    .itemOutputs('prts:type_b_directed_chemical_reaction_device')
    .duration(80)
    .EUt(256)//B型反应定向装置
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:type_b_component_10')
    .circuit(1)
    .itemInputs('2x #forge:dusts/gold','2x gtceu:silver_dust','2x gtceu:flt_ingot','gtceu:mv_field_generator')
    .itemOutputs('prts:type_b_phase_change_device')
    .duration(80)
    .EUt(256)//B型物质相变装置
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:type_b_component_11')
    .circuit(1)
    .itemInputs('prts:pseudo_wanjing_etched_substrate','2x prts:adhesive_plastic','prts:type_two_wanzi')
    .itemOutputs('prts:type_b_circuit_cross_domain_actuator')
    .duration(80)
    .EUt(256)//B型线路跨域促动器

    // 神化模组兼容 //
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:gem_super_phase')
    .circuit(1)
    .itemInputs('2x apotheosis:gem_dust','4x apotheosis:common_material','prts:basic_wanzi')
    .itemOutputs('2x apotheosis:uncommon_material')
    .duration(40)
    .EUt(32)//神秘废金属转化为陈旧布匹
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:gem_super_phase_1')
    .circuit(1)
    .itemInputs('4x apotheosis:gem_dust','4x apotheosis:uncommon_material','prts:type_one_wanzi')
    .itemOutputs('2x apotheosis:rare_material')
    .duration(40)
    .EUt(128)//陈旧布匹转化为发光水晶碎片
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:gem_super_phase_2')
    .circuit(1)
    .itemInputs('8x apotheosis:gem_dust','4x apotheosis:rare_material','4x prts:type_one_wanzi')
    .itemOutputs('2x apotheosis:epic_material')
    .duration(40)
    .EUt(512)//发光水晶碎片转化为玄奥砂
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:gem_super_phase_3')
    .circuit(1)
    .itemInputs('16x apotheosis:gem_dust','4x apotheosis:epic_material','8x prts:type_one_wanzi')
    .itemOutputs('2x apotheosis:mythic_material')
    .duration(40)
    .EUt(512)//玄奥砂转化为神铸珍珠

    // 无尽贪婪模组兼容 //
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:avaritia_blaze_cube')
    .circuit(1)
    .notConsumable('avaritia:blaze_cube')
    .itemInputs('minecraft:ancient_debris','minecraft:bone_meal')
    .inputFluids(Fluid.of('gtceu:blaze',2304))
    .itemOutputs('2x avaritia:blaze_cube')
    .duration(40)
    .EUt(512)//批量制取炽骨立方
function basic_model_wanzi_phase_change_machine(id,C,I,O,T,E){
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine(id)
         .circuit(C)
         .itemInputs(I)
         .itemOutputs(O)
         .duration(T)
         .EUt(E)
}//基础型万子相变机代码，以下为万子相变配方实现代码
basic_model_wanzi_phase_change_machine('wanzi_phase_change',1,[
    'prts:basic_wanzi',
    'minecraft:iron_ingot'
],'4x prts:type_d_conductive_circuit',80,20)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_1',2,[
    'prts:basic_wanzi',
    'minecraft:iron_ingot',
    '2x minecraft:copper_ingot'
],'6x prts:type_d_resistor',80,15)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_2',3,[
    '2x prts:basic_wanzi',
    '4x prts:micro_plastic_block',
    'minecraft:iron_ingot'
],'2x prts:type_d_packaging_unit',80,20)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_3',4,[
    'prts:basic_wanzi',
    '2x gtceu:sticky_resin'
],'4x prts:micro_plastic_block',80,10)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_4',5,[
    'prts:type_one_wanjing_etched_substrate',
    'prts:basic_wanzi',
    '2x prts:micro_plastic_block'
],'2x prts:type_d_circuit_cross_domain_actuator',160,30)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_5',6,[
    '3x prts:type_d_conductive_circuit',
    '4x prts:basic_wanzi',
    '2x prts:type_d_resistor',
    '2x minecraft:iron_ingot',
    'prts:micro_plastic_block'
],'2x prts:type_d_high_voltage_transformation_component',200,20)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_6',7,[
    '8x prts:basic_wanzi',
    '4x minecraft:iron_ingot',
    '8x minecraft:copper_ingot',
    '2x prts:type_d_conductive_circuit',
    '6x prts:micro_plastic_block'
],'2x prts:type_d_risk_management_unit',180,30)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_7',8,[
    '3x prts:type_d_conductive_circuit',
    '3x prts:type_d_packaging_unit',
    '2x prts:type_d_resistor',
    '8x prts:basic_wanzi',
    '3x prts:type_d_circuit_cross_domain_actuator'
],'2x prts:experimental_dsv_component',300,30)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_8',1,[
    'gtceu:waw_ingot',
    'minecraft:copper_ingot',
    'prts:type_one_wanzi'
],'4x prts:type_c_conductive_circuit',30,120)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_9',1,[
    'gtceu:waw_ingot',
    '8x gtceu:fine_copper_wire',
    'prts:type_one_wanzi'
],'4x prts:type_c_conductive_circuit',30,120)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_10',1,[
    'gtceu:waw_ingot',
    'gtceu:copper_double_wire',
    'prts:type_one_wanzi'
],'4x prts:type_c_conductive_circuit',30,120)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_11',1,[
    'gtceu:waw_ingot',
    'prts:type_one_wanzi',
    '2x gtceu:copper_single_wire'
],'4x prts:type_c_conductive_circuit',30,120)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_12',1,[
    'gtceu:waw_ingot',
    'prts:type_one_wanzi',
    'gtceu:cupronickel_ingot'
],'8x prts:type_c_conductive_circuit',30,120)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_13',1,[
    'gtceu:waw_ingot',
    'prts:type_one_wanzi',
    '8x gtceu:fine_cupronickel_wire'
],'8x prts:type_c_conductive_circuit',30,120)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_14',1,[
    'gtceu:waw_ingot',
    'prts:type_one_wanzi',
    'gtceu:cupronickel_double_wire'
],'8x prts:type_c_conductive_circuit',30,120)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_15',1,[
    'gtceu:waw_ingot',
    'prts:type_one_wanzi',
    '2x gtceu:cupronickel_single_wire'
],'8x prts:type_c_conductive_circuit',30,120)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_16',1,[
    'gtceu:waw_ingot',
    'prts:type_one_wanzi',
    'gtceu:annealed_copper_ingot'
],'8x prts:type_c_conductive_circuit',30,120)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_17',1,[
    'gtceu:waw_ingot',
    'prts:type_one_wanzi',
    '8x gtceu:fine_annealed_copper_wire'
],'8x prts:type_c_conductive_circuit',30,120)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_18',1,[
    'gtceu:waw_ingot',
    'prts:type_one_wanzi',
    'gtceu:annealed_copper_double_wire'
],'8x prts:type_c_conductive_circuit',30,120)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_19',1,[
    'gtceu:waw_ingot',
    'prts:type_one_wanzi',
    '2x gtceu:annealed_copper_single_wire'
],'8x prts:type_c_conductive_circuit',30,120)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_20',2,[
    '#gtceu:waw_yuan',
    '#gtceu:iron_yuan',
    '2x #gtceu:copper_yuan',
    'prts:type_one_wanzi'
],'4x prts:type_c_resistor',30,120)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_21',2,[
    '2x prts:deformable_plastic_block',
    'prts:type_one_wanzi',
    'gtceu:waw_ingot',
    'minecraft:iron_ingot'
],'2x prts:type_c_packaging_unit',30,120)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_22',2,[
    'prts:type_d_purified_packaging_unit',
    'gtceu:waw_ingot',
    'minecraft:iron_ingot'
],'prts:type_c_packaging_unit',30,120)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_23',1,[
    '4x prts:type_one_wanzi',
    '2x prts:deformable_plastic_block',
    '4x #gtceu:iron_yuan',
    '4x #gtceu:copper_yuan',
    '2x prts:type_c_conductive_circuit'
],'2x prts:type_c_risk_management_unit',50,80)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_24',2,[
    '3x prts:deformable_plastic_block',
    '4x #gtceu:waw_yuan',
    '8x #gtceu:iron_yuan',
    '8x #gtceu:copper_yuan'
],'prts:type_c_specialized_circuit_group',50,80)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_25',1,[
    '4x prts:low_voltage_wanzi_circuit',
    '2x #gtceu:waw_yuan',
    '2x #gtceu:iron_yuan',
    '2x #gtceu:copper_yuan'
],'prts:type_c_wanzi_emission_concentrator',120,80)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_26',2,[
    '2x #gtceu:waw_yuan',
    '2x #gtceu:aluminium',
    '4x prts:type_one_wanzi',
    '3x #gtceu:copper_yuan'
],'2x prts:type_c_wire_guide_connection_device',120,80)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_27',1,[
    '3x #gtceu:waw_yuan',
    '2x #gtceu:aluminium',
    '4x #gtceu:copper_yuan',
    '4x #gtceu:iron_yuan',
    '2x prts:low_voltage_wanzi_circuit'
],'prts:type_c_directed_chemical_reaction_device',120,56)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_28',2,[
    '3x #gtceu:waw_yuan',
    '2x #gtceu:aluminium',
    '4x #gtceu:copper_yuan',
    '4x #gtceu:iron_yuan',
    'prts:medium_voltage_wanzi_circuit'
],'2x prts:type_c_directed_chemical_reaction_device',120,96)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_29',1,[
    '3x #gtceu:waw_yuan',
    '2x #gtceu:copper_yuan',
    'gtceu:lv_field_generator'
],'prts:type_c_phase_change_device',120,128)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_30',1,[
    '3x #gtceu:waw_yuan',
    '3x prts:type_c_conductive_circuit',
    '2x prts:type_c_resistor',
    'prts:deformable_plastic_block'
],'2x prts:type_c_high_voltage_transformation_component',120,96)
basic_model_wanzi_phase_change_machine('wanzi_phase_change_32',2,[
    'prts:stable_wanjing_etched_substrate',
    'prts:type_one_wanzi',
    '2x prts:deformable_plastic_block'
],'prts:type_c_circuit_cross_domain_actuator',120,80)

// ==================== DSV型组件合成配方 ====================
    // DSV型组件 - 万子相变机制作（基础方法）
    
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('dsv_component_phase_1')
        .circuit(1)
        .itemInputs(
            '4x prts:type_c_conductive_circuit',
            '4x prts:type_c_packaging_unit',
            '3x prts:type_c_circuit_cross_domain_actuator',
            '2x prts:type_one_wanzi'
        )
        .inputFluids(Fluid.of('prts:yisanwanzi', 288))
        .itemOutputs('2x prts:dsv_component')
        .duration(200)
        .EUt(96)
    
    // DSV型实验组件 - 万子相变机制作（使用基础万子校正器作为催化剂）
    
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('dsv_experimental_phase_1')
        .circuit(11)
        .notConsumable('prts:basic_wanzi_position_corrector')
        .itemInputs(
            '3x prts:type_d_conductive_circuit',
            '3x prts:type_d_packaging_unit',
            '2x prts:type_d_resistor',
            '8x prts:basic_wanzi',
            '3x prts:type_d_circuit_cross_domain_actuator'
        )
        .itemOutputs('3x prts:experimental_dsv_component')
        .duration(80)
        .EUt(15)

    // ==================== 拓展用途配方 ====================
    // 粘合性塑料 - 万子相变机制作
    
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('wanzi_sticky_plastic')
        .circuit(10)
        .itemInputs('4x prts:deformable_plastic_block', 'minecraft:slime_ball')
        .inputFluids(Fluid.of('gtceu:glue', 500))
        .itemOutputs('2x prts:adhesive_plastic')
        .duration(150)
        .EUt(64)

    // ==================== 机器合成配方 ====================

event.shaped('gtceu:lv_basic_model_wanzi_phase_change_machine',[
    ['gtceu:copper_double_wire','gtceu:lv_electric_motor','gtceu:copper_double_wire'],
    ['prts:basic_wanzi','gtceu:lv_machine_hull','prts:basic_wanzi'],
    ['gtceu:copper_double_wire','gtceu:lv_electric_piston','gtceu:copper_double_wire']
])//基础型万子相变机配方

event.shaped('gtceu:mv_basic_model_wanzi_phase_change_machine',[
    ['gtceu:silver_quadruple_wire','gtceu:mv_electric_motor','gtceu:silver_quadruple_wire'],
    ['gtceu:waw_ingot','gtceu:mv_machine_hull','prts:type_one_wanzi'],
    ['gtceu:silver_quadruple_wire','gtceu:mv_electric_piston','gtceu:silver_quadruple_wire']
])//正式型万子相变机配方

event.shaped('gtceu:hv_basic_model_wanzi_phase_change_machine',[
    ['gtceu:electrum_quadruple_wire','gtceu:hv_electric_motor','gtceu:electrum_quadruple_wire'],
    ['prts:type_two_wanzi','prts:high_voltage_universal_casing','prts:type_two_wanzi'],
    ['gtceu:electrum_quadruple_wire','gtceu:hv_electric_piston','gtceu:electrum_quadruple_wire']
])//进阶型万子相变机配方
})
ServerEvents.recipes((event) => {//AE2及其拓展部分
    event.recipes.gtceu.basic_model_wanzi_phase_change_machine('prts:yungang_1')
    .circuit(1)
    .itemInputs('16x #forge:ingots/steel','16x ae2:sky_stone_block')
    .inputFluids(Fluid.of('minecraft:lava',2000))
    .itemOutputs('16x megacells:sky_steel_block')
    .duration(100)
    .EUt(64)//陨钢块合成
})