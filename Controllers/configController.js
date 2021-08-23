var Config=require('../models/config');
var fs=require('fs');
var path=require('path');

const obtener_config_admin= async function(req,res){
    if(req.user){
        if(req.user.role=='admin'){
            let reg= await Config.findById({_id:"6121e71390558a20f45cddf4"});
            res.status(200).send({data:reg});
        }else{
            res.status(500).send({message:'NoAccess'});
        }
    }else{
        res.status(500).send({message:'NoAccess'});
    }
}
const actualiza_config_admin = async function(req,res){
    if(req.user){
        if(req.user.role=='admin'){
            let data=req.body;
            if(req.file){
                var img_path=req.files.logo.path;
                var name = img_path.split('\\');
                var logo_name=name[2];
                //actualización
                let reg=await Config.findByIdAndUpdate({_id:"6121e71390558a20f45cddf4"},
                {
                    categorias:data.categorias,
                    titulo:data.titulo,
                    serie:data.serie,
                    logo:logo_name,
                    correlativo:data.correlativo
               });
               //elimina la imagen anterior
             fs.stat('./uploads/configuraciones/'+reg.logo,function(err){
                if(!err){
                    fs.unlink('./uploads/configuraciones/'+reg.logo,(err)=>{
                        if(err)throw err;
                    });
                }
             })
             res.status(200).send({data:reg});
            }else{
                let reg=await Config.findByIdAndUpdate({_id:"6121e71390558a20f45cddf4"},
                {
                    categorias:data.categorias,
                    titulo:data.titulo,
                    serie:data.serie,
                    correlativo:data.correlativo
               });
               res.status(200).send({data:reg});
            } 
        }else{
            res.status(500).send({message:'NoAccess'});
        }
    }else{
        res.status(500).send({message:'NoAccess'});
    }
}

module.exports={
    actualiza_config_admin,
    obtener_config_admin
}