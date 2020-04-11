var express = require('express');
var app = express();
var server = require('http').Server(app);//esta variable serve se la tengo que psar a socket.io---para que entienda que va a estra escuchando
var io = require('socket.io')(server);//ESTO ES UNA CONFIGURACION BASICA QUE NECESITAMOS TENER  SINO NO FUNCIONARA NADA DE OS SOQUES 
//Midwerll
app.use(express.static('client'));


//ruta
app.get('/hola-mundo',function(req,res){
    res.status(200).send('Hola mundo desde una ruta');
});

var messages = [{
    id:1,
    text:'Bienvenido al chat privado  de Socket.io y Node.js de Fabio Arpires ',
    nickname: 'Farpach'
}]
//on METDOD nos permite lansar eventos
io.on('connection', function(socket){
console.log("El cliente con Ip:"+socket.handshake.address+"se ha conectado...")
socket.emit('messages',messages)
});


//cramos servido con express y lo ponemos a escuchar(listem)
server.listen(6677, function(){
    console.log('Servidor esta funcionando en http://localhost:6677');
});