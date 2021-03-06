let connection;

handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up')
  }
  if (key === 'a') {
    connection.write('Move: left')
  }
  if (key === 'd') {
    connection.write('Move: right')
  }
  if (key === 's') {
    connection.write('Move: down')
  }
  if (key === 'o') {
    connection.write('Say: yo')
  }
  if (key === 'p') {
    connection.write('Say: cricket')
  }
  if (key === 'l') {
    connection.write('Say: gg')
  }
}
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on('data', handleUserInput)
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

module.exports = { setupInput };