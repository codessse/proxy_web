//change data enable

const refButton = document.getElementById("refresh-submit");

refButton.addEventListener("click", (e) => {
	e.preventDefault();

	const url = window.location.origin;
	const sel_url = `${url}/refresh`;

	const table = document.getElementById("table");
	const ckbox = document.getElementsByName("enable");
	console.log("table.rows");
	console.log(table.rows[1].children[2]);
	let portObj = {};
	for (let i = 1, row; row = table.rows[i]; i++) {
		const value = row.children[2].innerHTML;
		if (ckbox[i - 1].checked) portObj[value] = 1;
		else portObj[value] = 0;
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
		// location.reload();

	}).catch((error) => {
		console.log(error);
	});
})
