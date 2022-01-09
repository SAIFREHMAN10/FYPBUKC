const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/LMS"

    
).then(()=>console.log("CONNECTION ESTABLISHED"))
.catch((err)=>console.log(err));