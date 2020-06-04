const net = require('net');


const connect = function() {
  
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });
  
  conn.on('data', (data) => console.log(data));

  conn.on('connect', () => console.log('you on the plane!'));

  conn.on('connect', () => conn.write('Name: Isz'));

  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = { connect };
