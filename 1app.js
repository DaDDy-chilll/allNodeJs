// const help = require('./2helper');
// const tt = require('./test');

// setTimeout(() => {
    //     console.log('hello world for 3s')
    // }, 5000);
    
    // let i = 0;
    // var myInter = setInterval(() => {
        //     i++;
        //     if(i==5){
            //         clearInterval(myInter)
            //     }else
            //     console.log(`hello world ${i}`)
            // }, 3000);
            
            // help('hello world');
            // help.fonky();
            // help.goofy();
            // tt();
            // ---------------------------------------------------------
            /*
            const event = require('events');
let myEmitter = new event.EventEmitter();
myEmitter.on('startW',function(){
    console.log('i am start working')
})

let i = 0;
setInterval(() => {
    i++;
    if((i%3)==0)
    myEmitter.emit('startW')
    else
    console.log('waiting to emit...')
}, 2000);
*/
// ---------------------------------------------------------
 /*
let myEmitter = new event.EventEmitter();


myEmitter.on('donow',function(val){
    console.log(`i am start working ${val}`)
});
myEmitter.emit('donow','daddy chill');
*/
// ---------------------------------------------------------
// let students = ['mg mg','aung aung','kyaw kyaw','tun tun','su su']

// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     console.log(element)
    
// }

// for(let i of students){ // of is each of array $ in is index no
//     console.log(i)
// }
// ---------------------------------------------------------
// let students = ['mg mg','aung aung','kyaw kyaw','tun tun','su su'];

// students.forEach(function(data){
//     console.log(data);
// })
// ---------------------File System------------------------------------
// let fs = require('fs');

// let data = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, repellendus.'
// fs.writeFileSync('mine.txt',data);

// let data = fs.readFileSync('test.txt','utf-8');
// console.log(data)

// let data = fs.readFileSync('mine.txt','utf-8');

// fs.appendFileSync('test.txt','two')
// =============================
// fs.writeFile('test.txt','daddy chill',function(err){
//     if(err)
//     console.log(err);
//     else
//     console.log('file successfully wite!');
// });

// fs.readFile('test.txt','utf-8',function(err,result){
//     if(err)
//     console.log(err);
//     else
//     console.log(result);
// });

// fs.appendFile('test.txt','paing sett kayw',function(err){
//     if(err)
//     console.log(err);
//     else
//     console.log('file append successufully');
// });
// =============================
// fs.mkdir('best',function(err){
//     if(err)
//     console.log(err)
//     else
//     console.log('file create successfully')
// })
// =============================

// let myReadStr = fs.createReadStream('./test.txt','utf-8');
// let myWriteStr = fs.createWriteStream('new.txt');

// myReadStr.on('data',function(chunk){
//     myReadStr.pipe(myWriteStr);
// });
// =============================
// let myReadableStr = fs.createReadStream('test.txt');
// myReadableStr.on('data',function(chunk){
//     console.log('we got  buffer chunk');
//     console.log(chunk);
// });

// let myReadStr = fs.createReadStream('test.txt','utf-8');
// let myWriteStr = fs.createWriteStream('new.txt');

// myReadStr.on('data',function(chunk){
//     myWriteStr.write(chunk);
// });
// --------------- Server ------------------------------------------
// let http = require('http');
// let port = 3000;

// let server = http.createServer(function(req,res){
//     res.writeHead(200,{'Content-type':'text/html'})
//     res.end('hello daddy')
// });

// server.listen(port,function(){
//     console.log('server is running at port' + port);
// });
// ===============Using Pipe==============
// let http = require('http');
// let fs = require('fs');

// let myReadStr = fs.createReadStream('test.txt','utf-8');
// let server = http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     myReadStr.pipe(res);
// });

// server.listen(3000,function(){
//     console.log('Server is running at port 3000')
// })
// ==============HTML to response===============
// let http = require('http');
// let fs = require('fs');
// let myReadStr = fs.createReadStream('index.html','utf-8');

// let server = http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     myReadStr.pipe(res);
// });
// server.listen(3000,function(){
//     console.log('Server is running on port 3000');
// });
// =============JSON================
// let http = require('http');
// let server = http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'application/json'});
//     let Obj = {
//         name:'mg mg',
//         age:30,
//         family:{
//             father:'U mya',
//             mother:'Daw Nu'
//         }

//     };
//     res.end(JSON.stringify(Obj));
// });
// server.listen(3000,function(){
//     console.log('Server is running on port 3000');
// });
// ===========Basic Routing==================
/*
let http = require('http');
let fs = require('fs');
let server = http.createServer(function(req,res){
    if(req.url === '/' || req.url === '/home' || req.url === '/index'){
        let myReadStr = fs.createReadStream('index.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        myReadStr.pipe(res);
    }else if(req.url === '/about'){
        let myReadStr = fs.createReadStream('about.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        myReadStr.pipe(res);
    }else if(req.url === '/fbresult'){
        let myReadStr = fs.createReadStream('fbresult.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        myReadStr.pipe(res);
    }else if(req.url === '/api/fb'){
        var obj ={
            name:'mg mg',
            age:20
        }
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(obj));
    }else{
        let message = 'your request is missing on server';
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end(message);
    }
});
server.listen(3000,function(){
    console.log('Server is running on port 3000');
});
*/
//==========Nodemon======================================
// let http = require('http');
// let server = http.createServer(function(req,res){
//     var obj = {
//         name:'daddy',
//         age:22,
//         relationship:'relationship with aye myat kyaw'
//     }
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.end(JSON.stringify(obj));
// });
// server.listen(3000,function(){
//     console.log('Server is running on port 3000');
// });
//=================Using Express====================================
// let express = require('express');
// let app = express();

// app.get('/',function(req,res){
//     res.send('index.html');
// });
// app.get('/content',function(req,res){
//     res.send('content page');
// });
// app.get('/about',(req,res)=>{
//     res.send('About page');
// });

// app.listen(3000,function(){
//     console.log('Server is running on port 3000')
// });
//=============================================
