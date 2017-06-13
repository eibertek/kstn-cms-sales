var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Color  Model
 * ==========
 * Fields: 
 *    name, color
 */

var Size = new keystone.List('Size', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
});

Size.add({
	name: { type: String, required: true },
	size: { type: Types.Select, options: 'S, M, L, XL, XXL', required: true, initial: true },
});

Size.register();
