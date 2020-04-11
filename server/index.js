var express = require('express');
var app = express();
var server = require('http').Server(app);//esta variable serve se la tengo que psar a socket.io---para que entienda que va a estra escuchando
var io = require('socket.io')(server);//ESTO ES UNA CONFIGURACION BASICA QUE NECESITAMOS TENER  SINO NO FUNCIONARA NADA DE OS SOQUES 

//ruta
app.get('/hola-mundo',function(req,res){
    res.status(200).send('Hola mundo desde una ruta');
})

//cramos servido con express y lo ponemos a escuchar(listem)
server.listen(6677, function(){
    console.log('Servidor esta funcionando en http://localhost:6677');
});