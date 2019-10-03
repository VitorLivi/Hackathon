var express = require('express');
var router = express.Router();
var c_time = require('../models/c_time.js');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/team',function (req, res, next) {
  c_time.selectc_time(req.body,function (err, rows) {
      if (err) {
          res.json(err);
      } else {
          res.json(rows);
      }
  });
}
);

router.post('/insert', function (req, res, next) {
  
  if (req.body.nome != "" && req.body.email != "" && req.body.senha != ""){
    c_time.insert(req.body, function (err, rows) {
        if (err) {
          //res.json(err);
          res.send("Ocorreu um erro ao criar o seu time!");
        } 
        else {
          res.json(rows);
        }
    });
  }
  else{
    res.send("Ocorreu um erro ao completar o seu cadastro!");
    console.log(req.body.nome,req.body.email,req.body.senha)
  }
  
});

router.post('/update', function (req, res, next) {
  c_time.update(req.body, function (err, rows) {
      if (err) {
          res.json(err);
          //res.send("Ocorreu um erro ao atualizar seu perfil!");
      } 
      else {
          res.json(rows.message);    
      }
  });
});

router.delete('/delete', function (req, res, next) {
  c_time.delete(req.body, function (err, rows) {
      if (err) {
          //res.json(err);
          res.send("Ocorreu um erro ao deletar o c_time!");
      } 
      else {
          res.send("c_time excluido com sucesso!");    
          
      }
  });
});

module.exports = router;
