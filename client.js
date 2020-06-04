const net = require('net');

const { IP, PORT } = require('./constants');

const connect = function() {

  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  
  conn.on('data', (data) => console.log(data));

  conn.on('connect', () => console.log('you on the plane!'));

  conn.on('connect', () => conn.write('Name: Isz'));

  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = { connect };
