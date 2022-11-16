// priority: 0

ServerEvents.recipes(event => {
	event.remove({
		output: 'computercraft:turtle_normal'
	});

	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			'C': {
				item: 'create:andesite_casing'
			},
			'M': {
				item: 'computercraft:computer_normal'
			},
			'P': {
				item: 'create:mechanical_piston'
			},
			'V': {
				item: 'create:precision_mechanism'
			},
			'G': {
				item: 'create:gearbox'
			}
		},
		pattern: [
			'CVC',
			'GMG',
			'CPC'
		],
		result: {
			item: 'computercraft:turtle_normal'
		}
	});
})
