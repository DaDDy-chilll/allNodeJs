const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});
app.post('/',function(req,res){
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send('The result of Calculation is = '+ result);
});
app.get('/bmicalculator',function(req,res){
    res.sendFile(__dirname + '/bmicalculator.html')
});
app.post('/bmicalculator',function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height * height);
    res.send('You BMI is ' + bmi)
})
app.listen(3000,function(){
    console.log('server is running on port 3000');
});