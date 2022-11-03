'use strict';

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config({ path: "./.env" });

const app = express();
app.set('views', process.env.VIEWS_ROOT);
app.use(express.static(process.env.VIEWS_ROOT));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.engine('html', require('ejs').renderFile);

require("./controller/routes")(app);

http.createServer(app).on('connection', function (socket) {
	socket.setTimeout(parseInt(process.env.TIMEOUT, 10));
}).listen(process.env.SERVER_PORT, function () {
	console.log('HTTP server is listening on port: ' + process.env.SERVER_PORT);
});
