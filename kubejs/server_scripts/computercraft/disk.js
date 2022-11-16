// priority: 0

ServerEvents.recipes(event => {
	// Black (generic)
	event.remove({
		id: 'computercraft:disk_1'
	});
	
	event.shapeless({
		item: 'computercraft:disk',
		nbt: {
			Color: 1118481
		}
	}, [
		'create:iron_sheet',
		'create:belt_connector',
		'minecraft:redstone'
	]);
	
	// Red
	event.remove({
		id: 'computercraft:disk_2'
	});
	
	event.shapeless({
		item: 'computercraft:disk',
		nbt: {
			Color: 13388876
		}
	}, [
		'create:iron_sheet',
		'create:belt_connector',
		'minecraft:redstone',
		'minecraft:red_dye',
	]);
	
	// Green
	event.remove({
		id: 'computercraft:disk_3'
	});
	
	event.shapeless({
		item: 'computercraft:disk',
		nbt: {
			Color: 5744206
		}
	}, [
		'create:iron_sheet',
		'create:belt_connector',
		'minecraft:redstone',
		'minecraft:green_dye',
	]);
	
	// Brown
	event.remove({
		id: 'computercraft:disk_4'
	});
	
	event.shapeless({
		item: 'computercraft:disk',
		nbt: {
			Color: 8349260
		}
	}, [
		'create:iron_sheet',
		'create:belt_connector',
		'minecraft:redstone',
		'minecraft:brown_dye',
	]);
	
	// Blue
	event.remove({
		id: 'computercraft:disk_5'
	});
	
	event.shapeless({
		item: 'computercraft:disk',
		nbt: {
			Color: 3368652
		}
	}, [
		'create:iron_sheet',
		'create:belt_connector',
		'minecraft:redstone',
		'minecraft:blue_dye',
	]);
	
	// Purple
	event.remove({
		id: 'computercraft:disk_6'
	});
	
	event.shapeless({
		item: 'computercraft:disk',
		nbt: {
			Color: 11691749
		}
	}, [
		'create:iron_sheet',
		'create:belt_connector',
		'minecraft:redstone',
		'minecraft:purple_dye',
	]);
	
	// Cyan
	event.remove({
		id: 'computercraft:disk_7'
	});
	
	event.shapeless({
		item: 'computercraft:disk',
		nbt: {
			Color: 5020082
		}
	}, [
		'create:iron_sheet',
		'create:belt_connector',
		'minecraft:redstone',
		'minecraft:cyan_dye',
	]);
	
	// Light gray
	event.remove({
		id: 'computercraft:disk_8'
	});
	
	event.shapeless({
		item: 'computercraft:disk',
		nbt: {
			Color: 10066329
		}
	}, [
		'create:iron_sheet',
		'create:belt_connector',
		'minecraft:redstone',
		'minecraft:light_gray_dye',
	]);
	
	// Gray
	event.remove({
		id: 'computercraft:disk_9'
	});
	
	event.shapeless({
		item: 'computercraft:disk',
		nbt: {
			Color: 5000268
		}
	}, [
		'create:iron_sheet',
		'create:belt_connector',
		'minecraft:redstone',
		'minecraft:gray_dye',
	]);
	
	// Pink
	event.remove({
		id: 'computercraft:disk_10'
	});
	
	event.shapeless({
		item: 'computercraft:disk',
		nbt: {
			Color: 15905484
		}
	}, [
		'create:iron_sheet',
		'create:belt_connector',
		'minecraft:redstone',
		'minecraft:pink_dye',
	]);
	
	// Lime
	event.remove({
		id: 'computercraft:disk_11'
	});
	
	event.shapeless({
		item: 'computercraft:disk',
		nbt: {
			Color: 8375321
		}
	}, [
		'create:iron_sheet',
		'create:belt_connector',
		'minecraft:redstone',
		'minecraft:lime_dye',
	]);
	
	// Yellow
	event.remove({
		id: 'computercraft:disk_12'
	});
	
	event.shapeless({
		item: 'computercraft:disk',
		nbt: {
			Color: 14605932
		}
	}, [
		'create:iron_sheet',
		'create:belt_connector',
		'minecraft:redstone',
		'minecraft:yellow_dye',
	]);
	
	// Light blue
	event.remove({
		id: 'computercraft:disk_13'
	});
	
	event.shapeless({
		item: 'computercraft:disk',
		nbt: {
			Color: 10072818
		}
	}, [
		'create:iron_sheet',
		'create:belt_connector',
		'minecraft:redstone',
		'minecraft:light_blue_dye',
	]);
	
	// Magenta
	event.remove({
		id: 'computercraft:disk_14'
	});
	
	event.shapeless({
		item: 'computercraft:disk',
		nbt: {
			Color: 15040472
		}
	}, [
		'create:iron_sheet',
		'create:belt_connector',
		'minecraft:redstone',
		'minecraft:magenta_dye',
	]);
	
	// Orange
	event.remove({
		id: 'computercraft:disk_15'
	});
	
	event.shapeless({
		item: 'computercraft:disk',
		nbt: {
			Color: 15905331
		}
	}, [
		'create:iron_sheet',
		'create:belt_connector',
		'minecraft:redstone',
		'minecraft:orange_dye',
	]);
	
	// White
	event.remove({
		id: 'computercraft:disk_16'
	});
	
	event.shapeless({
		item: 'computercraft:disk',
		nbt: {
			Color: 15790320
		}
	}, [
		'create:iron_sheet',
		'create:belt_connector',
		'minecraft:redstone',
		'minecraft:white_dye',
	]);
})
