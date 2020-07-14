const os = require('os');
const fs = require('fs');
const { user: userData, addLog } = require('./user');

console.log('userData: ', userData);
console.log('addLog: ', addLog());

const user = os.userInfo();
const { username } = os.userInfo();

const platform = os.platform();

const date = new Date();
let message = `User: ${username} \nstarted app at ${date}`;

if (addLog()) {
  fs.appendFile(
    'hello.txt',
    `\nWelcome to the Milky Way Universe \n${message}`,
    (err) => {
      if (err) {
        console.log(`error: `, err);
      }
    }
  );
}
