const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public'))); //public内のページを読み込んでくれる。
app.use(express.urlencoded({ extended: false })); //これでreqのbodyを取得できる。
// app.get('/', (req, res) => {
//   console.log(req); //reqを見ることが可能、めっちゃ情報が多い！
//   res.send(); //htmlを返すことが可能
// });

app.post('/api/v1/quiz', (req, res) => {
  const ans = req.body.answer; //formのnameから取得が可能
  console.log(ans);
  res.send(ans);
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
