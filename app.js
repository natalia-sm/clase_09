const mysql = require('mysql');
const io = require('socket.io');
const http = require('http');


/**
 * Si no instalo socket.io-client
 * Usar un CDN
 */

 /**
  * CREAR USUARIO EN MYSQL
  * ----------------------
  * CREATE USER 'natalia'@localhost IDENTIFIED BY '123456 (pass)';
  * GRANT ALL ON localhost.* TO 'natalia'@localhost;
  */

//  const connection = mysql.createConnection({
//      host: 'localhost',
//      port: '3306',
//      user: 'root',
//      //password: '', root por defecto no tiene pass
//      database: 'test'
//  });

/* Desde la variable que mantiene la conexion sale siempre un metodo llamado query 
que es la que permite ejecutar asincronicamente cada consulta a la BD*/

// connection.query(/*consulta String, callback*/);
//connection.query(/*consulta String sin pasar el parametro a mano, sino con un segundo parametro ARRAY */);
// connection.query("SELECT * FROM alumnos WHERE id=?", [1], (err, res) => {
//})

// connection.close();

const server = http.createServer((req, res) => {
    
});


/**
 * io = Representa todos los sockets conectados al servidor de WebSockets
 * 
 * socket = Representa el cliente (singular) que se conecto al servidor
*/

io.on('connection', socket => {
    io.emit('nombre de evento String', 'data a enviar de cualquier tipo pero usualmente un objeto');
    io.emit('enviar mensaje', {msg: 'Se ha conectado un nuevo usuario'});
    socket.emit();

    socket.on('recibir mensaje', data => {
        //guardar data en la base
        //se lo emito a todos los sockets
        //io.emit();
    })
});

io.listen(9000); 

server.listen(8000);