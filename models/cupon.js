'use strict'

var mongoose= require('mongoose');
var  Schema=mongoose.Schema;

var  CuponSchema=Schema({
  
    codigo:{type:String,require:true},
    tipo:{type:String,require:true},//porcetaje | precio fijo
    valor:{type:Number,require:true},
    limite:{type:Number,require:true},
    createdAt:{type:Date,default:Date.now,require:true}
});
module.exports=mongoose.model('cupon',CuponSchema);
