const mongoose=require("mongoose");

const schema3=new mongoose.Schema({
    teachername:{
    type:String,
    required:true},
    tprogram:
    {
        type:String,
        required:true
    },
    tusername:
    {
        type:String,
        unique:true,
        required:true
    },
    tpassword:
    {
        type:String,
        required:true
    },
    tcoursecode:
    {
        type:String,
        required:true
    },
    tfriend:
    {
        type:String,
        required:true
    }
   
    

})
const S=new mongoose.model("teacher",schema3);
module.exports=S;