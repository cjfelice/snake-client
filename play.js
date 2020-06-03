const { connect } = require('./client');

const setupInput = function() {
  const stdin = process.stdin;
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }
  };
  stdin.on('data', handleUserInput)
  stdin.setRawMode();
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

setupInput();

console.log('Connecting ...');
connect();
