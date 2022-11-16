// priority: 0

ServerEvents.recipes(event => {
	event.remove({
		output: 'computercraft:disk_drive'
	});
	
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			'C': {
				item: 'create:andesite_casing'
			},
			'F': {
				item: 'create:andesite_funnel'
			},
			'P': {
				item: 'create:mechanical_piston'
			},
			'R': {
				item: 'create:redstone_contact'
			},
			'D': {
				item: 'create:depot'
			},
			'O': {
				item: 'create:content_observer'
			}
		},
		pattern: [
			'COC',
			'PDF',
			'CRC'
		],
		result: {
			item: 'computercraft:disk_drive'
		}
	});
})
