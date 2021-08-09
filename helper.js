const fs = require('fs');
const name = 'mike';
const add = (a, b) => a + b;
const read = () => {
  fs.readFile('./sample.txt', 'utf8', (err, data) => {
    console.log(data);
  });
};
const write = () => {
  fs.writeFile('./sample.txt', 'hello world', () => {
    console.log('write file completed!');
  });
};

module.exports = {
  name,
  add,
  read,
  write,
};
