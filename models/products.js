'use strict';

// import schema and DB CRUD
const Mongo = require('./mongo');
const schema = require('../schemas/products-S.js') ;

// products class
class Products extends Mongo {
  constructor(){
    super(schema );
  }
}


module.exports = new Products;