const express = require("express");
const { blogs } = require("./model/index.js");
 require("dotenv").config();
require("./model/index.js");

const app = express();
//setting view engine
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
//routing
app.get('/',(req, res) =>{
    res.render("index")
})

app.get('/addblog',(req, res) =>{
    res.render("addBlog")
})

app.get('/allblog',(req, res) =>{
    res.render("allBlog")
})

//handling form data
app.post('/addblog', (req,res) =>{
    console.log(req.body);
    blogs.create({
        title : req.body.title,
        subtitle : req.body.subtitle,
        imageurl : req.body.image,
        description : req.body.description,
    })
  res.send("blog created successfully");
})

//opening port for this server
app.listen(process.env.PORT,() => {
console.log("Port opened at " + process.env.PORT);
}
);
