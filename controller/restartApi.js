// const axios = require('axios');
// const fetch = require("node-fetch");
const http = require('http');
require('dotenv').config({ path: "../.env" });
module.exports = function () {

	console.log(process.env.PROXY_API_URL);
	http.get(process.env.PROXY_API_URL, res => {
		console.log(res.statusCode);
		let result = "";
		res.on('data', (data) => result += data)
		res.on('end', () => {
			console.log(result);
		})
	}).on('error', err => console.log(err))
}