const express = require('express');
const path = require('path');

const port = "3000"
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../Client/views'));//show express the views directory
app.use('/images', express.static(path.join(__dirname, '../Client/images')));

app.get('/',(req,res)=>{
    res.render("index")
})

app.listen(port, ()=>{
    console.log("website hosted on port " + port)
})