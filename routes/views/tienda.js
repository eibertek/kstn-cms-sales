var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'tienda';
	locals.filters = {
		product: req.params.product,
	};
	locals.data = {
		products: [],
	};

	// Load other posts
	view.on('init', function (next) {

		var q = keystone.list('Product').model.find().where('state', 'published').sort('-publishedDate').populate('categories');

		q.exec(function (err, results) {
			locals.data.products = results;
			next(err);
		});

	});

	// Render the view
	view.render('tienda');
};
