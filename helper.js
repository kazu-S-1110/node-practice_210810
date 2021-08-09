const fs = require('fs');
const name = 'mike';
const add = (a, b) => a + b;

const person = {
  name: 'hoge',
  age: 20,
};

const read = () => {
  fs.readFile('./sample.json', 'utf8', (err, data) => {
    const person = JSON.parse(data); //jsonファイルにあるのはテキストなのでJsonとして汲み出す必要あり。
    console.log(person.name);
  });
};
const write = () => {
  // personだけだとエラーになる。json形式で渡すのではなくテキストにして渡す必要あり(JSON.stringifyを使う)。
  fs.writeFile('./sample.json', JSON.stringify(person), () => {
    console.log('write file completed!');
  });
};

module.exports = {
  name,
  add,
  read,
  write,
};
