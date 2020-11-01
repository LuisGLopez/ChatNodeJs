// Hacer la conexion
let socket = io.connect();

let message = document.getElementById('message');
let handle = document.getElementById('handle');
let btnSend = document.getElementById('send');
let output = document.getElementById('output');
let feedback = document.getElementById('feedback');

btnSend.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = '';
})

message.addEventListener('keypress', () => {
    socket.emit('typing', handle.value);
})

// Escuchando eventos
socket.on('chat', data => {
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
})

socket.on('typing', data => {
    feedback.innerHTML = '<p><em> ' + data + 'esta escribiendo un mensaje...</em><p>';
})