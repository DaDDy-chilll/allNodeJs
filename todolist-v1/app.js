const express = require('express');
const bdparser =  require('body-parser');
const date = require(__dirname + '/date')

const app = express();
app.set('view engine', 'ejs');
app.use(bdparser.urlencoded({extended:true}));
app.use(express.static('public'));

const items = ['buy food','cook food','eat food'];
const workItems = [];
app.get('/',function (req,res) {  
    const day = date.getDay();
    res.render('list',{listTitle:day,newListItems:items});
});
app.post('/',function(req,res){
    let item =  req.body.newItem;
    if(req.body.list === 'Work'){
        workItems.push(item);
        res.redirect('/work');
    }else{
        items.push(item);
        res.redirect('/');
    }
});
app.get('/work',function (req,res) {  
    res.render('list',{listTitle:'Work List',newListItems:workItems})
});
app.get('/about',function (req,res) {  
    res.render('about');
});
app.listen(3000,function () {  
    console.log('Server is running on port 3000')
});
// let currendDay = today.getDay();
// let day = '';
//    switch (currendDay) {
//        case 0:
//            day='Sunday';
//            break;
//            case 1:
//            day='Monday';
//            break;
//            case 2:
//            day='Tuesday';
//            break;
//            case 3:
//            day='Wednesday';
//            break;
//            case 4:
//            day='Thursday';
//            break;
//            case 5:
//            day='Friday';
//            break;
//            case 6:
//            day='Saturday';
//            break;
   
//        default:
//         console.log('Error: current day is equal to ' + currendDay)
//            break;
//    }