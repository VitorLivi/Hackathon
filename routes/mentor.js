var express = require('express');
var router = express.Router();
var mentor = require('../models/mentor.js');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/team',function (req, res, next) {
  mentor.selectMentor(req.body,function (err, rows) {
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
    mentor.insert(req.body, function (err, rows) {
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
  mentor.update(req.body, function (err, rows) {
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
  mentor.delete(req.body, function (err, rows) {
      if (err) {
          //res.json(err);
          res.send("Ocorreu um erro ao deletar o mentor!");
      } 
      else {
          res.send("mentor excluido com sucesso!");    
          
      }
  });
});

module.exports = router;
