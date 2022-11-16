// priority: 0

ServerEvents.recipes(event => {
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			tag: "forge:plates/copper"
		},
		loops: 3,
		results: [
			{
				chance: 85,
				item: "kubejs:calculation_mechanism"
			},
			{
				chance: 8,
				item: "minecraft:redstone"
			},
			{
				chance: 5,
				item: "minecraft:gold_nugget"
			},
			{
				chance: 2,
				item: "create:electron_tube"
			}
		],
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_calculation_mechanism"
					},
					{
						item: "minecraft:redstone"
					}
				],
				results: [
					{
						item: "kubejs:incomplete_calculation_mechanism"
					}
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_calculation_mechanism"
					},
					{
						item: "minecraft:gold_nugget"
					}
				],
				results: [
					{
						item: "kubejs:incomplete_calculation_mechanism"
					}
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_calculation_mechanism"
					},
					{
						item: "create:electron_tube"
					}
				],
				results: [
					{
						item: "kubejs:incomplete_calculation_mechanism"
					}
				]
			}
		],
		transitionalItem: {
			item: "kubejs:incomplete_calculation_mechanism"
		}
	});
})
