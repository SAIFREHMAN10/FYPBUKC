const mongoose=require("mongoose");

const schema1=new mongoose.Schema({
    email:{
    type:String,
    required:true},
    password:
    {
        type:String,
        required:true
    }
   
    

})
const T=new mongoose.model("Student",schema1);
module.exports=T;