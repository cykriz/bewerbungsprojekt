import 'https://cdn.socket.io/4.0.1/socket.io.min.js';

const nameBox = document.getElementById('name-box'),
	chatBox = document.getElementById('chat-box'),
	output = document.getElementById('chat-output'),
	message = document.getElementById('message'),
	handleInp = document.getElementById('handle'),
	sendBtn = document.getElementById('sendBtn'),
	startChatBtn = document.getElementById('start-chat'),
	feedback = document.getElementById('feedback'),
	body = document.querySelector('body');

const socket = io.connect(window.location.host);

socket.on('chat', data => {
	const { message, handle, id } = data;

	const div = document.createElement('div');
	const pMessage = document.createElement('p');
	const pHandle = document.createElement('p');
	pHandle.className = 'handle';
	pMessage.className = 'message';

	if (socket.id === id) {
		div.className = 'right';
	} else {
		div.className = 'left';
	}

	pMessage.innerText = message;
	pHandle.innerText = handle;

	div.insertAdjacentElement('beforeend', pHandle);
	div.insertAdjacentElement('beforeend', pMessage);
	output.insertAdjacentElement('beforeend', div);

	feedback.className = 'hide';
	output.scrollTop = output.scrollHeight;
});

socket.on('typing', data => {
	feedback.innerText = data;
	feedback.className = '';
	output.scrollTop = output.scrollHeight;
	body.scrollTop = body.scrollHeight;
});

startChatBtn.addEventListener('click', () => {
	nameBox.classList.toggle('hide');
	chatBox.classList.toggle('hide');
});

handleInp.addEventListener('keypress', e => {
	if (e.code === 'Enter') {
		nameBox.classList.toggle('hide');
		chatBox.classList.toggle('hide');
	}
});

sendBtn.addEventListener('click', () => {
	socket.emit('chat', {
		message: message.value,
		handle: handleInp.value,
	});
	message.value = '';
});

message.addEventListener('keydown', event => {
	if (event.code === 'Enter') {
		socket.emit('chat', {
			message: message.value,
			handle: handleInp.value,
		});
		message.value = '';
	}
});

message.addEventListener('keypress', event => {
	if (event.code !== 'Enter') socket.emit('typing', handle.value);
});
