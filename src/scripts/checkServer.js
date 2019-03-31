const { promisify } = require('util');
const { exec } = require('child_process');

const promisifiedExec = promisify(exec);
const url = 'http://localhost:3777/todos';

promisifiedExec(`curl ${url}`)
  .then(res => {
    if (res.stdout && res.stdout.length) {
      process.stdout.write(`Successfully connected to ${url}.`);
      process.exit(0);
    } else {
      process.exit(1);
    }
  })
  .catch(err => {
    process.stderr.write(
      `Error: could not connect to ${url}\n ${err}\nPlease try again when the server is running on ${url}`,
    );
    process.exit(1);
  });
