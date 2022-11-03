// create empty table
function clearTable(penel) {
	if (penel != null) penel.innerHTML = "";
}

const penel = document.getElementById("restable");
clearTable(penel);
penel.className = "x_panel";

const delBtn = document.createElement("button");
delBtn.id="deleteBtn";
delBtn.className = "btn btn-danger";
delBtn.type="button";
delBtn.textContent="Delete";

const table = document.createElement('table');
table.className = 'table';
table.id = "table";


//------------------ table title --------------------------------
const label = ['name', 'port', 'target', 'description'];

const thead = document.createElement('thead');
thead.className = "thead-dark";
const tbody = document.createElement('tbody');

const headerTr = document.createElement('tr');

const del_title = document.createElement('th');
del_title.scope = "col";
del_title.style.fontSize = 'medium';
del_title.style.textAlign = 'center';
del_title.textContent = 'delete';
headerTr.appendChild(del_title);

label.forEach(title_item => {
	let th = document.createElement('th');
	th.scope = "col";
	th.style.fontSize = 'medium';
	// th.style.textAlign = 'center';
	th.textContent = title_item;
	headerTr.appendChild(th);
})

const en_title = document.createElement('th');
en_title.scope = "col";
en_title.style.fontSize = 'medium';
en_title.style.textAlign = 'center';
en_title.textContent = 'enable';
headerTr.appendChild(en_title);

thead.appendChild(headerTr);
//----------------------------------------------------------------------

penel.appendChild(delBtn);
penel.appendChild(table);


