// priority: 0

ServerEvents.recipes(event => {
	event.remove({
		output: 'computercraft:computer_normal'
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
			'M': {
				item: 'kubejs:calculation_mechanism'
			},
			'D': {
				item: 'computercraft:monitor_normal'
			}
		},
		pattern: [
			'CSC',
			'SMD',
			'CSC'
		],
		result: {
			item: 'computercraft:computer_normal'
		}
	});
})
