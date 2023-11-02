const express = require("express");
 require("dotenv").config();


const app = express();
//setting view engine
app.set("view engine", "ejs");
//routing
app.get('/',(req, res) =>{
    res.render("index")
})

app.get('/addblog',(req, res) =>{
    res.render("addBlog")
})

//opening port for this server
app.listen(process.env.PORT,() => {
console.log("Port opened at " + process.env.PORT);
}
);
