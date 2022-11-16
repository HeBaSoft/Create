// priority: 0

ServerEvents.recipes(event => {
	event.remove({
		output: 'computercraft:computer_command'
	});
})
