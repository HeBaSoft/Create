// priority: 0

ServerEvents.recipes(event => {
	event.remove({
		output: 'computercraft:pocket_computer_advanced'
	});

	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			item: "create:brass_casing"
		},
		loops: 1,
		results: [
			{
				chance: 100,
				item: "computercraft:pocket_computer_advanced"
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
						item: "create:brass_sheet"
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
						item: "computercraft:monitor_advanced"
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
			item: "kubejs:incomplete_pocket_computer_advanced"
		}
	});
})
