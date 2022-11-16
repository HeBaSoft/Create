// priority: 0

ServerEvents.recipes(event => {
	event.remove({
		output: 'computercraft:printer'
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
			'V': {
				item: 'create:smart_chute'
			},
			'F': {
				item: 'create:andesite_funnel'
			},
			'G': {
				item: 'create:gantry_carriage'
			},
			'P': {
				item: 'create:mechanical_piston'
			}
		},
		pattern: [
			'CVC',
			'SGF',
			'CPC'
		],
		result: {
			item: 'computercraft:printer'
		}
	});
})
