var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */
var myStorage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: 'data/files',
    publicPath: '/files',
  },
});

var ProductGallery = new keystone.List('ProductGallery', {
	autokey: { from: 'name', path: 'key', unique: true },
});

ProductGallery.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	image: { type: Types.File, storage: myStorage },
});

ProductGallery.register();
