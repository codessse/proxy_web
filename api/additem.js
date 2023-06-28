'use strict';
const fs = require('fs');
require('dotenv').config({ path: "../.env" });
const restart_api = require('../controller/restartApi');

function check_data(data) {
	let status = true;
	if (!data.target) status = false;
	if (!data.description) status = false;
	return status;
}

module.exports = async (data) => {
	console.log(data);
	data['enable'] = 1;

	const val_status = check_data(data);
	// console.log(jsonObj);
	try {
		if (!val_status) {
		
			return {
				statuscode: 422,
				data: "Incorrect Data"
			}
		}
	} catch (error) {
		console.log(error);
	}

	restart_api();
	return {
		statuscode: 200,
		count: 0,
		data: jsonObj
	}
};