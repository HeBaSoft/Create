// priority: 0

ServerEvents.recipes(event => {
	event.shaped('waystones:bound_scroll', [
		' E ',
		'GBG',
		'GDG'
	], {
		E: 'minecraft:ender_pearl',
		G: 'minecraft:gold_nugget',
		B: 'minecraft:book',
		D: 'minecraft:purple_dye'
	});
})
