'use strict'

var mongoose= require('mongoose');
var  Schema=mongoose.Schema;

var AdminSchema=Schema({
    nombres:{type:String,required:true},
    apellidos:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    telefono:{type:String,require:true},
    rol:{type:String,require:true},
    dni:{type:String,require:true},
})
module.exports=mongoose.model('admin',AdminSchema);