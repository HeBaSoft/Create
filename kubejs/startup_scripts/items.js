// priority: 0

StartupEvents.registry('item', event => {
	event.create('incomplete_calculation_mechanism').displayName('Incomplete Calculation Mechanism');
	event.create('calculation_mechanism').displayName('Calculation Mechanism');
	event.create('incomplete_pocket_computer_normal').displayName('Incomplete Pocket Computer');
	event.create('incomplete_pocket_computer_advanced').displayName('Incomplete Advanced Pocket Computer');
});