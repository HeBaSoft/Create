// priority: 0

ServerEvents.recipes(event => {
	event.remove({
		output: 'computercraft:speaker'
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
			'N': {
				item: 'minecraft:note_block'
			},
			'R': {
				item: 'create:redstone_contact'
			}
		},
		pattern: [
			'CSC',
			'SGN',
			'CRC'
		],
		result: {
			item: 'computercraft:speaker'
		}
	});
})
