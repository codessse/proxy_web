'use strict';
const { log } = require('console');
const fs = require('fs');
require('dotenv').config({ path: "../.env" });
const restart_api = require('../controller/restartApi');

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
	})
}

function deleteJson(jsonObj, index) {
	jsonObj.splice(index, 1);
	return jsonObj;
}

module.exports = async (data) => {
	console.log(data);

	const jsonObj = await readJSON();
	let aft_json = [];
	if (Object.keys(data).length === 0) aft_json = jsonObj;

	Object.keys(data).forEach(([key, value]) => {
		aft_json = deleteJson(jsonObj, value);
	})
	// console.log(aft_json);

	try {
		await writeJSON(aft_json);
	} catch (error) {
		console.log(error);
	}

	// restart_api();
	return {
		statuscode: 200,
		count: 0,
		data: "jsonObj"
	}
}