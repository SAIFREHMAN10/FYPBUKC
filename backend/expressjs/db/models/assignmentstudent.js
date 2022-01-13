const mongoose=require("mongoose");

const slug = require('mongoose-slug-generator');
const domPurifier = require('dompurify');
const { JSDOM } = require('jsdom');
const htmlPurify = domPurifier(new JSDOM().window);

//const stripHtml = require('string-strip-html');

//initialize slug/mongoose.plugin(slug);
mongoose.plugin(slug);
const schema10=new mongoose.Schema({
  Lname: {
    type: String,
    required:true
  },
  Assno: {
    type: String,
    required:true
  },
   img:{
        type: String,
       required:true,
        default: 'placeholder.jpg',
      //  unique:true
        }
        
        
       //slug: { type: String, slug: 'title', unique: true, slug_padding_size: 2 }
        
   
    

});

const z=new mongoose.model("AssignmentStudent",schema10);
module.exports=z;
