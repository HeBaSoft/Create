// priority: 0

ServerEvents.recipes(event => {
	event.remove({
		output: 'computercraft:computer_advanced'
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
			'M': {
				item: 'kubejs:calculation_mechanism'
			},
			'D': {
				item: 'computercraft:monitor_advanced'
			}
		},
		pattern: [
			'CSC',
			'SMD',
			'CSC'
		],
		result: {
			item: 'computercraft:computer_advanced'
		}
	});

})
