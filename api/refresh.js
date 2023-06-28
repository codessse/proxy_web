'use strict';
const fs = require('fs');
require('dotenv').config({ path: "../.env" });
const restart_api = require('../controller/restartApi');

function search_jsonObj(jsonObj, value) {
	const index = jsonObj.findIndex(function (item, i) {
		return item['port'] === value;
	});
	return index;
}

module.exports = async (data) => {
	//data['enable'] = 1;
	console.log("data");
	console.log(data);
	//proxy_restart();
	restart_api();

	const jsonObj = await readJSON();
	// console.log("jsonObj");
	// console.log(jsonObj);
	const portlist = Object.keys(data);
	// console.log("portlist");
	// console.log(portlist);

	portlist.forEach(port => {
		const index = search_jsonObj(jsonObj, port);
		jsonObj[index].enable = data[port];
	})

	// console.log(jsonObj);
	try {

	} catch (error) {
		console.log(error);
	}

	return {
		statuscode: 200,
		count: 0,
		data: jsonObj
	}
};