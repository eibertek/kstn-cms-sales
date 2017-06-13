var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Color  Model
 * ==========
 * Fields: 
 *    name, color
 */

var Color = new keystone.List('Color', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
});

Color.add({
	name: { type: String, required: true, index: true, initial: true },
	color: { type: Types.Color, initial: true, required: true },
});

Color.register();

