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
			'R': {
				item: 'create:redstone_contact'
			},
			'D': {
				item: 'create:display_board'
			},
			'X': {
				item: 'create:cog'
			}
		},
		pattern: [
			'CGC',
			'SXD',
			'CRC'
		],
		result: {
			item: 'computercraft:monitor_normal'
		}
	});
})
