// priority: 0

ServerEvents.recipes(event => {
	event.remove({
		output: 'computercraft:wireless_modem_advanced'
	});
			
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			'C': {
				item: 'create:brass_casing'
			},
			'S': {
				item: 'create:brass_sheet'
			},
			'E': {
				item: 'minecraft:ender_eye'
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
			item: 'computercraft:wireless_modem_advanced'
		}
	});
})
