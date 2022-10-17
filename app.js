require("dotenv/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const helloMiddleware = (req, res, next) => {
	console.log('Yeni bir istek geldi');
	next();
};

const postMiddleware = (req, res, next) => {
	console.log('Post isteği için istek gönderildi');
	next();
};

 app.get('/hello', helloMiddleware, (req, res) => {
	res.send('Merhaba, GET isteği attiniz');
});

app.post('/hello', helloMiddleware, postMiddleware, (req, res) => {
	res.send('Merhaba, POST isteği attiniz');
});

app.put('/hello', helloMiddleware, (req, res) => {
	res.send('Merhaba, PUT isteği attiniz');
});

app.delete('/hello', helloMiddleware, (req, res) => {
	res.send('Merhaba, DELETE isteği attiniz');
});
  app.listen(PORT, () => {
    console.log("Ready on http://localhost:" + PORT);
  });