'use strict';
const additem = require('../api/additem');
const show = require('../api/show');
const refresh = require('../api/refresh');
const deleteitem = require('../api/delete');



module.exports = async function (app,) {
	/* HOME PAGE (with login links) */
	app.get('/', function (req, res) {
		res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
		res.render('./index.html');
	});

	app.post('/insert', async (req, res) => {
		const result = await additem(req.body);
		//console.log(result);
		if (result.statuscode == 500) res.send('select error');
		res.json(result);
	});

	app.post('/delete', async (req, res) => {
		const result = await deleteitem(req.body);
		//console.log(result);
		if (result.statuscode == 500) res.send('select error');
		res.json(result);
	});

	app.post('/refresh', async (req, res) => {
		const result = await refresh(req.body);
		//console.log(result);
		if (result.statuscode == 500) res.send('select error');
		res.json(result);
	});

	app.get('/search', async (req, res) => {
		const result = await show();
		//console.log(result);
		if (result.statuscode == 500) res.send('select error');
		res.json(result);
	});

};