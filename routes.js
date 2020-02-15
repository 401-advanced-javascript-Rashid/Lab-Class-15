'use strict';

// modules 
const Categories = require('./models/categories.js');
const Products = require('./models/products.js');
// express module
const express = require('express');
const router = express.Router();



// url: https://webapplog.com/url-parameters-and-routing-in-express-js/

router.param('model' , getModel);
function getModel(req , res , next){

  let  model = req.params.model ;
  switch(model){
  case 'categories':
    req.model = Categories ;
    next();
    return;
  case 'products':
    req.model = Products;
    next();
    return ;
  default:
    next();
    return;        
  }
}

//  routes
//  string
//  function
//  {Response} 

router.get('/api/v1/:model',getRoutes);
function getRoutes(req , res , next){
  let model = req.model ;
  return model.get()
    .then(data => {
      res.status(200).json(data);
    });
}


router.get('/api/v1/:model/:_id',getById);
function getById(req , res , next){
  req.model.get(req.params._id)
    .then(data => {
      res.status(200).json(data);
    });
}


router.post('/api/v1/:model',postRoutes);
function postRoutes(req , res , next){
  req.model.create(req.body)
    .then(data => {
      res.status(201).json(data);
    }).catch(next);
}


router.put('/api/v1/:model/:_id',updateById);
function updateById(req , res , next){
  let value = req.body ;
  let id = req.params._id ;
  req.model.update(id , value)
    .then(data => {
      res.status(201).json(data);
    }).catch(next);
}


router.delete('/api/v1/:model/:_id',deleteById);
function deleteById(req , res , next){
  req.model.delete(req.params._id)
    .then(data => {
      res.status(200).json(data);
    });
}


module.exports = router ;