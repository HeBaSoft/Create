// priority: 0

ServerEvents.recipes(event => {
	event.remove({
		output: 'computercraft:wireless_modem_normal'
	});
			
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			'C': {
				item: 'create:andesite_casing'
			},
			'S': {
				item: 'create:iron_sheet'
			},
			'E': {
				item: 'minecraft:ender_pearl'
			},
			'M': {
				item: 'kubejs:calculation_mechanism'
			},
			'W': {
				item: 'computercraft:wired_modem_full'
			}
		},
		pattern: [
			'CEC',
			'SMS',
			'CWC'
		],
		result: {
			item: 'computercraft:wireless_modem_normal'
		}
	});
})
