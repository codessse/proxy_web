//add item

const name_in = document.getElementById("name");
const port_in = document.getElementById("port");
const target_in = document.getElementById("target");
const description_in = document.getElementById("description");
const addButton = document.getElementById("add-submit");

const tables = document.getElementById("table");

function formBody(name, port, target, description) {
	let details = new URLSearchParams(
		{
			"name": name,
			"port": port,
			"target": target,
			"description": description
		})
	return details;
}


addButton.addEventListener("click", (e) => {
	e.preventDefault();

	const url = window.location.origin;
	const sel_url = `${url}/insert`;

	const name = name_in.value;
	const port = port_in.value;
	const target = target_in.value;
	const description = description_in.value;

	const details = formBody(name, port, target, description);

	fetch(sel_url, {
		method: "POST",
		headers: {
			'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
		},
		body: details
	}).then((response) => response.json()
	).then((responseJSON) => {
		console.log("cccccccccccc");
		const statuscode = responseJSON.statuscode;
		// alert(statuscode);


		if (responseJSON.statuscode == 422) {
			alert("responseJSON.data");
			// throw "";
		}

		location.reload();
	}).catch((error) => {
		console.log(error);
	});
})




