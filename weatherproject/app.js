const express = require('express');
const https = require('https');
const bdparser = require('body-parser');
const app = express();

app.use(bdparser.urlencoded({extended:true}));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.post('/',function(req,res){
    const place = req.body.cityName;
    const apiKey = 'a91e35d21cd69d9b1fce078e882eafb1';
    const unit = 'metric';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+place+'&units='+unit+'&appid='+apiKey;
    https.get(url,function(resp){
        console.log(resp.statusCode);
        resp.on('data',(data)=>{
           const weatherData =  JSON.parse(data);
           const temp = weatherData.main.temp;
           const weatherDesc = weatherData.weather[0].description;
           const icon  = weatherData.weather[0].icon;
           const imgUrl = 'http://openweathermap.org/img/wn/'+icon+'@2x.png';
        //    console.log(temp);
            res.write("<p>The weather is currently" +weatherDesc+"</p>");
            res.write("<h1>The Temperature of "+place+" is" +temp +"Degree Celcius!</h1>");
            res.write("<img src= "+imgUrl+">");
            res.send();
        })
    });
})

app.listen(3000,function(){
    console.log('server is running on port 3000')
})