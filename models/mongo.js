'use strict';

// CRUD methods for MONGO DB
class Mongo {
  constructor(schema){
    this.schema = schema ;
  }

  // read data from DB
  read(name){
    if(name){
      return this.schema.find({name});
    }else{
      return this.schema.find({});
    }
  }

  // add data to DB
  create(value){
    let newValue = new this.schema(value);
    return newValue.save();
  }

  // update data in DB
  update(_id , value){
    return this.schema.findByIdAndUpdate(_id , value , {new : true});
  }

  // delete data from DB
  delete(_id){
    return this.schema.findOneAndDelete(_id); 
  }
}


module.exports = Mongo ;