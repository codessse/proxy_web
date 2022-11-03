//show table

const url = window.location.origin;
const sel_url = `${url}/search`;
console.log(sel_url);


function showtable(data) {


	// const label = ['name', 'port', 'target', 'description'];

	// const thead = document.createElement('thead');
	// thead.className = "thead-dark";
	// const tbody = document.createElement('tbody');

	// let headerTr = document.createElement('tr');

	// let del_title = document.createElement('th');
	// del_title.scope = "col";
	// del_title.style.fontSize = 'medium';
	// del_title.style.textAlign = 'center';
	// del_title.textContent = 'delete';
	// headerTr.appendChild(del_title);

	// label.forEach(title_item => {
	// 	let th = document.createElement('th');
	// 	th.scope = "col";
	// 	th.style.fontSize = 'medium';
	// 	// th.style.textAlign = 'center';
	// 	th.textContent = title_item;
	// 	headerTr.appendChild(th);
	// })

	// let en_title = document.createElement('th');
	// en_title.scope = "col";
	// en_title.style.fontSize = 'medium';
	// en_title.style.textAlign = 'center';
	// en_title.textContent = 'enable';
	// headerTr.appendChild(en_title);


	const label = ['name', 'port', 'target', 'description'];

	data.forEach(row => {
		// console.log("row ");
		// console.log(row);
		let tr = document.createElement('tr');

		let delTd = document.createElement('td');
		let del_ckbox = document.createElement('input');
		delTd.style.textAlign = 'center';
		del_ckbox.type = 'checkbox';
		del_ckbox.name = 'delete';
		delTd.appendChild(del_ckbox);
		tr.appendChild(delTd);

		label.forEach(title => {
			let td = document.createElement('td');
			td.textContent = row[title];
			//console.log(tdName);
			tr.appendChild(td);
		});

		let enTd = document.createElement('td');
		let en_ckbox = document.createElement('input');
		enTd.style.textAlign = 'center';
		en_ckbox.type = 'checkbox';
		en_ckbox.name = 'enable';

		if (row.enable == 1) {
			en_ckbox.checked = true;
		}

		enTd.appendChild(en_ckbox);
		tr.appendChild(enTd);

		tbody.appendChild(tr);
	})

	table.appendChild(tbody);
	thead.appendChild(headerTr);

	return thead;
}

document.addEventListener('DOMContentLoaded', function (event) {
	const table = document.getElementById("table");

	fetch(sel_url, {
		method: "GET"
	}).then((response) => response.json()
	).then((responseJSON) => {

		const data = responseJSON.data;
		// console.log(data);
		if (data) {
			let thead = showtable(data);
			table.appendChild(thead);
		}
	}).catch((error) => {
		console.log(error);
	});

})