const mongoose=require("mongoose");

const schema4=new mongoose.Schema({
    coursename:{
    type:String,
    required:true},
    coursecode:
    {
        type:String,
        required:true
    },
    instructor:{
        type:String,
        required:true},
        credithours:
        {
            type:String,
            required:true
        },
        program:{
            type:String,
            required:true},
            semester:
            {
                type:String,
                required:true
            }
            
        
   
    

})
const S=new mongoose.model("course",schema4);
module.exports=S;

   
    

