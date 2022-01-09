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
    }
   
    

})
const S=new mongoose.model("teacher",schema3);
module.exports=S;