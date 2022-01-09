const mongoose=require("mongoose");

const schema4=new mongoose.Schema({
    studentname:{
    type:String,
    required:true},
   
        semail:{
            type:String,
            required:true},
          
            enrollment:
            {
                type:String,
                required:true
            },
            sprogram:
            {
                type:String,
                required:true
            },
            ssemester:
            {
                type:String,
                required:true
            },
            spassword:
            {
                type:String,
                required:true
            }
            ,scoursecode:
            {
                type:[String],
                required:true
            }
            
        
   
    

})
const S=new mongoose.model("mainstudent",schema4);
module.exports=S;

   
    

