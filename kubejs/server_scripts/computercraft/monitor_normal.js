// priority: 0

ServerEvents.recipes(event => {
	event.remove({
		output: 'computercraft:monitor_normal'
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
			'G': {
				item: 'create:gearbox'
			},
			'L': {
				item: 'create:display_link'
			},
			'D': {
				item: 'create:display_board'
			}
		},
		pattern: [
			'CLC',
			'SGD',
			'CSC'
		],
		result: {
			item: 'computercraft:monitor_normal'
		}
	});
})
