const express=require("express");
const app=express();
const path=require("path");
const c=path.join(__dirname,"../../../public");
app.use(express.static(c))
console.log(c);
app.listen(8000,()=>{
console.log("LISTENING AT 8000");
});