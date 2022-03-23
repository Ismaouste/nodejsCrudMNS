const { realpathSync } = require('fs');
const path = require('path');
let app = require('express')();
const Content = require('./data/content');

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
  app.post('/survey', (req, res) => {
    Content.push(req.body);
    res.send(Content);
  });
  
  app.get('/survey/:id', (req, res) => {

    let theId = req.params.id;
    Content.forEach(element => {
      if(element.id === theId) {
        res.send(element);
      }
    });


  });