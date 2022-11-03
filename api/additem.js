'use strict';
const fs = require('fs');
require('dotenv').config({ path: "../.env" });
const restart_api = require('../controller/restartApi');

function check_data(data) {
	let status = true;
	if (!data.name) status = false;
	if (!data.port) status = false;
	if (!data.target) status = false;
	if (!data.description) status = false;
	return status;
}

async function readJSON() {
	const json_path = process.env.JSON_PATH;
	const content = fs.readFileSync(json_path, 'utf8');
	const jsonObj = JSON.parse(content);
	return jsonObj;
}

async function writeJSON(jsonObj) {
	const json_path = process.env.JSON_PATH;
	fs.writeFile(json_path, JSON.stringify(jsonObj), err => {
		if (err) throw err;
		// console.log(datastr);
	})
}

module.exports = async (data) => {
	console.log(data);
	data['enable'] = 1;

	const val_status = check_data(data);


	const jsonObj = await readJSON();
	jsonObj[jsonObj.length] = data;

	// console.log(jsonObj);
	try {
		if (!val_status) {
		
			return {
				statuscode: 422,
				data: "Incorrect Data"
			}
		}
		else await writeJSON(jsonObj);
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