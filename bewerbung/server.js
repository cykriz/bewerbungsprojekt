const express = require('express');
const socket = require('socket.io');
const Datastore = require('nedb');

const app = express();

const database = new Datastore('database.db');
database.loadDatabase();

const port = 8080;
const server = app.listen(port, () => {
	console.log('Server running at port ' + port);
});

app.use(express.static('public'));

app.get('/corona-data', (req, res) => {
	const data = database.getAllData();
	res.send(data);
});

app.get('*', (req, res) => {
	res.redirect('404.html');
});

const io = socket(server);

io.on('connection', socket => {
	console.log('Connection made.', 'ID: ' + socket.id);

	socket.on('chat', data => {
		const { message, handle } = data;
		console.log(message, handle);
		data.id = socket.id;

		io.sockets.emit('chat', data);
	});

	socket.on('typing', data => {
		socket.broadcast.emit('typing', data);
	});
});
