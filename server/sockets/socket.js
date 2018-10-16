const {io} = require('../server');

io.on('connection', (client)=>{ //por cada conneccion con el cliente
  console.log('Usuario conectado');

  client.emit('enviarMensaje', {
      usuario: 'ADMIN',
      mensaje: 'Bienvenido a la app :)'
  })

  client.on('disconnect', ()=>{
      console.log('usuario desconectado')
  });

  //escuchar al cliente

  client.on('enviarMensaje', (data,callback)=>{
      console.log(data);

      client.broadcast.emit('enviarMensaje',data); //broadcast se lo envía a todos

      if(callback){ //si no se manda desde el cliente manda error
        if(data.usuario){
          callback({resp: 'Todo OK'});
        }else{
          callback({resp: 'Todo MAL'});
        }
      }

      //callback(); //se ejecuta como una manera de confirmar los "cambios", como una respuesta
  });

});