// priority: 0

ServerEvents.recipes(event => {
	event.remove({
		output: 'computercraft:pocket_computer_normal'
	});

	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			item: "create:andesite_casing"
		},
		loops: 1,
		results: [
			{
				chance: 100,
				item: "computercraft:pocket_computer_normal"
			}
		],
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_pocket_computer_normal"
					},
					{
						item: "kubejs:calculation_mechanism"
					}
				],
				results: [
					{
						item: "kubejs:incomplete_pocket_computer_normal"
					}
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_pocket_computer_normal"
					},
					{
						item: "create:iron_sheet"
					}
				],
				results: [
					{
						item: "kubejs:incomplete_pocket_computer_normal"
					}
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_pocket_computer_normal"
					},
					{
						item: "minecraft:stone_button"
					}
				],
				results: [
					{
						item: "kubejs:incomplete_pocket_computer_normal"
					}
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_pocket_computer_normal"
					},
					{
						item: "computercraft:monitor_normal"
					}
				],
				results: [
					{
						item: "kubejs:incomplete_pocket_computer_normal"
					}
				]
			}
		],
		transitionalItem: {
			item: "kubejs:incomplete_pocket_computer_normal"
		}
	});
})
