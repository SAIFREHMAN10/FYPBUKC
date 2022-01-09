const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const mongoose=require("mongoose");
const b=path.join(__dirname,"../src/partials");

const d=path.join(__dirname,"../../../node_modules/bootstrap");
const e=path.join(__dirname,"../../../node_modules/bootstrap/dist");
const c=path.join(__dirname,"../../../public");
var sid;
var tid;
var cid;
//app.use(express.static(c))

require("../db/conn");
const Register=require("../db/models/student");
const Register2=require("../db/models/admin");
const Register3=require("../db/models/course");
const Register4=require("../db/models/students");
const Register5=require("../db/models/teacher");
var router = express.Router();
//var handlebars = require('./helpers/handlebars.js')(hbs);
//functions
var e1;
/* const  func1=async()=>
{
    try{
       
        // for async
         
      // const result=await doc.save();
        console.log(e1);
    }
    catch(err)
    {
console.log(err);
    }

}*/
/*function updateRecord(req, res) {
    console.log(sid);
    Register4.findOneAndUpdate({ _id: sid}, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('adminstudentmanagement'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("adminstudentmanagement", {
                    
                    adminstudentmanagement: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}*/
///////////////FUNCTIONS END
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine","hbs");
hbs.registerPartials(b);

app.get("/",(req,res)=>
{
    app.use(express.static(c));
    res.render("landing");
});

app.get("/adminlogin",async(req,res)=>
{
    e1= await Register2.findOne({email:"saify_saif80@yahoo.com"},{_id:0,email:1});
    console.log(e1);
    app.use(express.static(c));
    var e2=JSON.stringify(e1);
    res.render("adminlogin",{name5:e2.substr(10,22)});
});
app.get("/admincoursemanagement",(req,res)=>
{

    app.use(express.static(c));
    Register3.find((err, docs) => {
        if (!err) {
            res.render("admincoursemanagement", {
                admincoursemanagement: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});
app.get("/adminteachermanagement",(req,res)=>
{
    app.use(express.static(c));
    Register5.find((err, docs) => {
        if (!err) {
            res.render("adminteachermanagement", {
                adminteachermanagement: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
    
    
});app.get("/adminstudentmanagement",(req,res)=>
{
    app.use(express.static(c));
    Register4.find((err, docs) => {
        if (!err) {
            res.render("adminstudentmanagement", {
                adminstudentmanagement: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
   // res.render("adminstudentmanagement");
});
app.get("/admindashboard",(req,res)=>
{
    app.use(express.static(c));
    res.render("admindashboard");
});
app.get("/studentupdate",(req,res)=>
{
    app.use(express.static(c));
    res.render("studentupdate");
});
app.get("/teacherupdate",(req,res)=>
{
    app.use(express.static(c));
    res.render("teacherupdate");
});
app.get("/courserupdate",(req,res)=>
{
    app.use(express.static(c));
    res.render("courseupdate");
});
app.get('/delete/:id', function(req,res) {
    Register4.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.render('adminstudentmanagement');
        }
        else { res.render('adminstudentmanagement'); }
    });
});
app.get('/delete1/:id', function(req,res) {
    Register5.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.render('adminteachermanagement');
        }
        else { res.render('adminteachermanagement'); }
    });
});
app.get('/delete2/:id', function(req,res) {
    Register3.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.render('admincoursemanagement');
        }
        else { res.render('admincoursemanagement'); }
    });
});
app.get("/studentlogin",(req,res)=>
{
    app.use(express.static(c));
    res.render("studentlogin");
});

app.get('/users/:id', function (req,res){
sid=req.params.id;
console.log(sid);
    Register4.findById(req.params.id, (err, doc) => {
        console.log("l");
        //updateRecord(req,res);
        if (!err) {
            console.log("succ");
            res.render("studentupdate", {
             
                adminstudentmanagement: doc
            });
        }
    });
    
    
})
app.get("/users/:id/adminstudentmanagement",(req,res)=>
{
    app.use(express.static(c));
    res.render("adminstudentmanagement");
});
app.get('/users1/:id', function (req,res){
    tid=req.params.id;
    console.log(tid);
        Register5.findById(req.params.id, (err, doc) => {
            console.log("l");
            //updateRecord(req,res);
            if (!err) {
                console.log("succ");
                res.render("teacherupdate", {
                 
                    adminteachermanagement: doc
                });
            }
        });
    });
    app.get('/users2/:id', function (req,res){
        cid=req.params.id;
        console.log(cid);
            Register3.findById(req.params.id, (err, doc) => {
                console.log("l");
                //updateRecord(req,res);
                if (!err) {
                    console.log("courseofstudent");
                    res.render("courseupdate", {
                     
                        admincoursemanagement: doc
                    });
                }
            });
        });

app.post('/users/:id', function (req,res){
    
    Register4.findOneAndUpdate({ _id: sid}, req.body, { new: true }, (err, doc) => {
        if (!err) {
            console.log(sid);
             res.render("adminstudentmanagement"); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("adminstudentmanagement", {
                    
                    adminstudentmanagement: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
    });
    app.post('/users1/:id', function (req,res){
    
        Register5.findOneAndUpdate({ _id: tid}, req.body, { new: true }, (err, doc) => {
            if (!err) {
                console.log(tid);
                 res.render("adminteachermanagement"); }
            else {
                if (err.name == 'ValidationError') {
                    handleValidationError(err, req.body);
                    res.render("adminteachermanagement", {
                        
                        adminteachermanagement: req.body
                    });
                }
                else
                    console.log('Error during record update : ' + err);
            }
        });
        });
        app.post('/users2/:id', function (req,res){
    
            Register3.findOneAndUpdate({ _id: cid}, req.body, { new: true }, (err, doc) => {
                if (!err) {
                    console.log(cid);
                     res.render("admincoursemanagement"); }
                else {
                    if (err.name == 'ValidationError') {
                        handleValidationError(err, req.body);
                        res.render("admincoursemanagement", {
                            
                            admincoursemanagement: req.body
                        });
                    }
                    else
                        console.log('Error during record update : ' + err);
                }
            });
            });


app.get("/teacherlogin",(req,res)=>
{
    app.use(express.static(c));
    res.render("teacherlogin");
});
app.get("/register",(req,res)=>

{app.use(express.static(c))
    res.render("register");
});
app.get("/login",(req,res)=>
{
    app.use(express.static(c));
    res.render("login");
});
app.post("/register",async(req,res)=>
{
    try{app.use(express.static(c));
        const re=new Register (
            {
        email:req.body.email,
        password:req.body.password,
        active:true

        })
        const result=await re.save();
        //console.log(req.body.role);
        res.status(201).render("index");

    }
    catch(err)
    {
        res.status(400).send(err);

        
    }
    
});
//student login
app.post("/login",async(req,res)=>
{
    
    try{
      
        app.use(express.static(c))
        const email=req.body.email;
        const password=req.body.password;
        const emaill=await Register.findOne({email:email});
        
        if(emaill.password===password)
        {
            res.status(201).render("index");
        }
else{
res.send("INcorrect");
}
        
       
        

    }
    catch(err)
    {
        res.status(400).send(err);
        
    }
    
});
//adminlogin
app.post("/adminlogin",async(req,res)=>
{
    
    try{
      
        app.use(express.static(c));
        const email=req.body.email;
        const password=req.body.password;
        const emaill=await Register2.findOne({email:email});
       

        if(emaill.password===password)
        {
            res.status(201).render("admindashboard");
        }
else{
res.send("INcorrect");
}
        
       
        

    }
    catch(err)
    {
        res.status(400).send(err);
        
    }
    
});
//admincourseregister
app.post("/admincoursemanagement",async(req,res)=>
{
    try{app.use(express.static(c));
        const re=new Register3 (
            {
        coursename:req.body.coursename,
        coursecode:req.body.coursecode,
        instructor:req.body.instructor,
        credithours:req.body.credithours,
        program:req.body.program,
        semester:req.body.semester,

        active:true

        })
        const result=await re.save();
        res.status(201).render("admincoursemanagement");

    }
    catch(err)
    {
        res.status(400).send(err);

        
    }
    
    
});
//adminstudentregister
app.post("/adminstudentmanagement",async(req,res)=>
{
    var student= new Register4();
    console.log(req.body.id);
   // if (req.body._id == '')
    try{app.use(express.static(c));
        const re=new Register4 (
            {
        studentname:req.body.studentname,
      
        semail:req.body.semail,
        enrollment:req.body.enrollment,
       
        sprogram:req.body.sprogram,
        
        ssemester:req.body.ssemester,
        spassword:req.body.spassword,
        scoursecode:req.body.scoursecode,

        active:true

        })
        const result=await re.save();
        res.status(201).render("adminstudentmanagement");

    }
    catch(err)
    {
        res.status(400).send(err);

        
    }
   /* else
    console.log("l2");
    updateRecord(req,res);*/
    
    
});
//adminteachermanagement
app.post("/adminteachermanagement",async(req,res)=>
{
    try{app.use(express.static(c));
       
        const re=new Register5 (
            {
        teachername:req.body.teachername,
        tprogram:req.body.tprogram,
        tusername:req.body.tusername,
        tpassword:req.body.tpassword,
        tcoursecode:req.body.tcoursecode,
       
        active:true

        })
        const result=await re.save();
        res.status(201).render("adminteachermanagement");

    }
    catch(err)
    {
        res.status(400).send(err);

        
    }
    
    
});
//Teacherlogin
app.post("/teacherlogin",async(req,res)=>
{
    
    try{
      
        app.use(express.static(c))
        const tusername=req.body.tusername;
        const tpassword=req.body.tpassword;
        const emaill=await Register5.findOne({tusername:tusername});
        


        if(emaill.tpassword===tpassword)
        {
            res.status(201).render("admindashboard");
        }
else{
res.send("Incorrect");
}
        
       
        

    }
    catch(err)
    {
        res.status(400).send(err);
        
    }
    
});
//STUDENTLOGIN
app.post("/studentlogin",async(req,res)=>
{
    
    try{
      
        app.use(express.static(c))
        const enrollment=req.body.enrollment;
        const spassword=req.body.spassword;
        const emaill=await Register4.findOne({enrollment:enrollment});
        


        if(emaill.spassword===spassword)
        {
            res.status(201).render("admindashboard");
        }
else{
res.send("INcorrect");
}
        
       
        

    }
    catch(err)
    {
        res.status(400).send(err);
        
    }
    
});

app.listen(8000,()=>{
    console.log("LISTENING AT 8000");
 });
