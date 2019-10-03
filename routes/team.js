var express = require('express');
var router = express.Router();
var team = require('../models/team.js');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/hakcathonTeam',function (req, res, next) {
  team.selectTeam(req.body,function (err, rows) {
      if (err) {
          res.json(err);
      } else {
          res.json(rows);
      }
  });
}
);

router.post('/insert', function (req, res, next) {
  
  if (req.body.nome != "" && req.body.nome != null && req.body.nome != undefined){
    team.insert(req.body, function (err, rows) {
        if (err) {
          //res.json(err);
          res.send("Ocorreu um erro ao criar o seu time!");
        } 
        else {
          if (rows.affectedRows > 0){
            //res.json(rows);
            res.send("Time "+ req.body.nome +" foi criado com sucesso!");
          }else{
            res.send("Este nome ja existe, escolha outro!");
          }
        }
    });
  }
  else{
    res.send("Ocorreu um erro ao cadastrar seu time!");
  }
});


router.post('/update', function (req, res, next) {
  if (req.body.nome != "" && req.body.nome != null && req.body.nome != undefined){
    team.update(req.body, function (err, rows) {
        if (err) {
            res.json(err);
            //res.send("Ocorreu um erro ao atualizar seu perfil!");
        } 
        else {
            res.json(rows.message);    
        }
    });
  }else{
    res.send("O nome não pode ser vazio!")
  }
});

router.delete('/delete', function (req, res, next) {
  team.delete(req.body, function (err, rows) {
      if (err) {
          //res.json(err);
          res.send("Ocorreu um erro ao deletar o team!");
      } 
      else {
          res.send("team excluido com sucesso!");    
          
      }
  });
});


module.exports = router;
