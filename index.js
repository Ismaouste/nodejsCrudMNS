const path = require('path');
let app = require('express')();
const Content = require('./data/content');
const bodyParser = require('body-parser')
const cors = require('cors');

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

// Permet de lire le contenu du body des requêtes
app.use(cors());

app.listen(3100, () => {
  console.log('Server Launch on Port : 3100');
});
app.use('/pages', require('express').static('./client/pages'));
app.use('/assets', require('express').static('./client/assets'));
app.use('/img', require('express').static('./client/assets/img'));
app.use('/css', require('express').static('./client/assets/css'));

app.use(require('express').json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});

app.get('/content', (req, res) => {
  res.send(Content);
});

// Pour parcourir le body d'une requête on peut utiliser body-parser
// qui est un package facilitant l'accès au body depuis le paramètre req
app.post('/participate', (req, res) => {
  Content.push(req.body);
  console.log(req.body);
  res.send(Content);
});

app.post('/del', (req, res) => {
  let id = req.body;
  console.log(req.body);
  res.send(Content);
});

app.get('/survey/:id', (req, res) => {
  let theId = req.params.id;
  Content.forEach(element => {
    if (element.id == theId) {
      res.send(element);
    }
  });
});