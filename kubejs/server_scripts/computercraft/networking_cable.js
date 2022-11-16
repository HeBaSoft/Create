// priority: 0

ServerEvents.recipes(event => {
	event.remove({
		output: 'computercraft:cable'
	});
			
	event.custom({
		type: "create:compacting",
		ingredients: [
			{
				item: 'create:belt_connector'
			},
			{
				item: 'create:belt_connector'
			},
			{
				item: 'create:belt_connector'
			},
			{
				item: 'create:belt_connector'
			},
			{
				item: 'minecraft:redstone_block'
			}
		],
		results: [
			{
				item: "computercraft:cable",
				count: 16
			}
		]
	});
})
