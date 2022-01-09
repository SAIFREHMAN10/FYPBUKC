const mongoose=require("mongoose");

const schema2=new mongoose.Schema({
    email:{
    type:String,
    required:true},
    password:
    {
        type:String,
        required:true
    }
   
    

})
const S=new mongoose.model("admin",schema2);
module.exports=S;