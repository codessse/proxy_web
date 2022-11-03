'use strict';
const fs = require('fs');
require('dotenv').config({ path: "../.env" });

async function readJSON() {
	const json_path = process.env.JSON_PATH;
	const content = fs.readFileSync(json_path, 'utf8');
	if (content == "") return null;
	const jsonObj = JSON.parse(content);
	return jsonObj;
}

module.exports = async () => {

	const jsonObj = await readJSON();
	// const jsonObj = null;
	if (jsonObj == null)
		return {
			statuscode: 200,
			count: 0,
			data: null
		};
	//console.log(jsonObj);

	return {
		statuscode: 200,
		count: 0,
		data: jsonObj
	}
};