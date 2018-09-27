var express = require('express');
var router = express.Router();
var fs=require('fs');
var movie01=require("../mocks/nuoMiMovieList");
var movie02=require("../mocks/nuoMiMovie");
var files = fs.readdirSync(__dirname);


router.get('/movie01', function(req, res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    let m1 = req.query.movieId;
    fs.readFile('../mocks/nuoMiMovieList.json', function (err, data) {
        if (err) {
            return console.error(err);
        }
        var list= data.toString();
        console.log(list)
        list = JSON.parse(list);
        for(var i=0;i<list.length;i++){
            if(m1== list[i].movieId){
               list=list[i]
            }
        }
        res.send(list);
    });
});

// router.get('/movie02', function(req, res){
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     let m2 = req.query.movieTheaterId; //movieId2是movie01里面的movieId，需要找出对应的movieTheaterId
//     console.log("m2"+m2);
//     for(var i=0;i<movie02.length;i++){
//         if(m2 == movie02[i].movieId){
//             res.json(movie02[i]);
//             console.log("res.json(movie02[i]):"+res.json(movie02[i]));
//         }
//     }
// });

router.get('/', function(req, res) {
    return res.send('movie', { title: 'Express' });
});

module.exports = router;