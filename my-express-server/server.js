const express = require('express');
const res = require('express/lib/response');

const app = express();

app.get('/',function(req,res){
    res.send(`<h1>Hello World!</h1>`);
});
app.get('/contact',function(req,res){
    res.send(`<h1>Contact me at : daddychill@gamil.com</h1>`);
});
app.get('/about',function(req,res){
    res.send('<h1>This is About page</h1>');
});
app.listen(3000,function(){
    console.log('Server is running on port 3000');
});