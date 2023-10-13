const express= require("express");
const app=express();

app.set("view engine","hbs");
app.get("/",(req,res)=>{

res.render("manage.hbs");

})

app.get("/home",(req,res)=>{

res.render("manage.hbs");

})

app.get("/about",(req,res)=>{

res.render("about.hbs");

})

app.get("/contact",(req,res)=>{

res.render("contact.hbs");
})



app.listen("3000",()=>{
console.log("listening at port 3000");
})