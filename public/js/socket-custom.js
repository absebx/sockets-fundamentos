var socket = io();
//----------ON----------------

//escuchar (on)
socket.on('connect', function(){
    console.log('conectado al servidor');
});


socket.on('disconnect', function(){
    console.log('Se perdió conexión con el servidor')
})

//----------EMITS----------

//Enviar informacion (emit), sólo al servidor, no a los demás clientes
socket.emit('enviarMensaje', {
    usuario: 'Alfonso',
    mensaje: 'Hola chocolate'
}, function(resp){  
    console.log('respuesta server', resp);
});

//escuchar información
socket.on('enviarMensaje',function(data){
    console.log('Servidor',data);
});