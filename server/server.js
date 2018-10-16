const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();

let server = http.createServer(app); //express está basado en este http

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = comunicación del backend
module.exports.io = socketIO(server);

require('./sockets/socket');

// http://localhost:3000/socket.io/socket.io.js -- si aparece el archivo es porque está correcto en el backend


server.listen(port, (err) => { //se cambia ya que es una instancia de http no de express

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});