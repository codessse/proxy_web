//delete data

const delButton = document.getElementById("deleteBtn");

delButton.addEventListener("click", (e) => {
	e.preventDefault();

	const url = window.location.origin;
	const sel_url = `${url}/delete`;

	const table = document.getElementById("table");
	const delCkbox = document.getElementsByName("delete");
	console.log("table.rows");
	console.log(delCkbox);
	let portObj = {};
	for (let i = 1, row; row = table.rows[i]; i++) {
		if (delCkbox[i - 1].checked) {
			const value = row.children[2].innerHTML;
			portObj[value] = i - 1;
		}
	}
	console.log(portObj);

	fetch(sel_url, {
		method: "POST",
		headers: {
			'content-type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(portObj)
	}).then((response) => response.json()
	).then((responseJSON) => {
		console.log(responseJSON);
		location.reload();

	}).catch((error) => {
		console.log(error);
	});
})