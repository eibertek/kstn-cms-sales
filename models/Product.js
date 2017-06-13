var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product  Model
 * ==========
 * Fields: 
 *    name, description category, price, taxes, discounts, color, size, image
 */

var Product = new keystone.List('Product', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
});

Product.add({
	name: { type: String, required: true },
	description: { type: Types.Html, wysiwyg: true, required: true, initial: true },
	categories: { type: Types.Relationship, ref: 'ProductCategory', many: true },
	price: { type: Types.Money, required: true, initial: true },
	taxes: { type: Types.Money },
	discounts: { type: Types.Money },
	color: { type: Types.Relationship, ref: 'Color', many: true },
	size: { type: Types.Relationship, ref: 'Size', many: true },
	images: { type: Types.Relationship, ref: 'ProductGallery', many: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
});

Product.defaultColumns = 'name, price|20%, publishedDate|20%';

Product.register();
