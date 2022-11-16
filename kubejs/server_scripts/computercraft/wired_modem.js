// priority: 0

ServerEvents.recipes(event => {
	event.remove({
		input: '#forge:dusts/redstone',
		output: 'computercraft:wired_modem'
	});
			
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			'C': {
				item: 'create:brass_casing'
			},
			'S': {
				item: 'create:iron_sheet'
			},
			'R': {
				item: 'create:redstone_contact'
			},
			'O': {
				item: 'create:content_observer'
			},
			'M': {
				item: 'kubejs:calculation_mechanism'
			}
		},
		pattern: [
			'CSC',
			'OMR',
			'CSC'
		],
		result: {
			item: 'computercraft:wired_modem_full'
		}
	});
})
