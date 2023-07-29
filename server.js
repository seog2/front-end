const express = require('express');
const app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/public'));

app.get('/',function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/write',function(req, res){
    res.sendFile(__dirname + '/write.html');
});

app.get('/style',function(req, res){
    res.sendFile(__dirname + '/style.css');
});

// 첫번째 파라1, 두번째 파라2
// 8080에 가면 function을 해라
app.listen(8080, function(){
    console.log('listening on 8080')
});
