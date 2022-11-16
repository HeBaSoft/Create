// priority: 0

ServerEvents.recipes(event => {
	event.shaped('waystones:return_scroll', [
		'GBG',
		' D '
	], {
		G: 'minecraft:gold_nugget',
		B: 'minecraft:book',
		D: 'minecraft:purple_dye'
	});
})
