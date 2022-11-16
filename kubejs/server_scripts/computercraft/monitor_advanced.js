// priority: 0

ServerEvents.recipes(event => {
	event.remove({
		output: 'computercraft:monitor_advanced'
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
			'G': {
				item: 'create:gearbox'
			},
			'R': {
				item: 'create:redstone_contact'
			},
			'D': {
				item: 'create:display_board'
			}
		},
		pattern: [
			'CSC',
			'RGD',
			'CSC'
		],
		result: {
			item: 'computercraft:monitor_advanced'
		}
	});
})
