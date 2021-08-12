const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("<h1>Hello World, I comin' new World!</h1>"); //htmlを返すことが可能
});

app.get('/api/v1/user', (req, res) => {
  res.send({
    //jsonを返すことも可能
    name: 'Mike',
    age: 39,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening ${port} port`));
