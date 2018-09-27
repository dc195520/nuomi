var express = require('express');
var router = express.Router();
var fs=require('fs')
var mock1 = require("../mocks/nuoMiMovie")
var mock2 = require("../mocks/meishi")
var shoplist=require("../mocks/shoplist")
var movelist=require("../mocks/nuoMiMovieList")
var nmfj=require("../mocks/nmfj")

// yy
var shipin = require ("../mocks/shipin.json")
var toutiao = require ("../mocks/toutiao.json")
var mock3 = require ("../mocks/msxq.json")
var mock21 = require("../mocks/meishi1")



/* GET home page. */
router.get('/api/mock1', function(req, res) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    fs.readFile('../mocks/nuoMiMovie.json', function (err, data) {
        if (err) {
            return console.error(err);
        }
        var list= data.toString();
        // console.log(list)
        list = JSON.parse(list);
        res.send(list)
    });
});

router.get('/api/mock2', function(req, res) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.json(mock2)
});

router.get('/api/shoplist', function(req, res) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.json(shoplist)
});

router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });

});


router.get('/api/mock21', function(req, res) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Codntrol-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    fs.readFile('../mocks/meishi1.json', function (err, data) {
        if (err) {
            return console.error(err);
        }
        var list= data.toString();
        console.log(list)
        list = JSON.parse(list);
        res.send(list)
    });
});
router.get('/api/mocks', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    let obj = mock2[0].msclassid;
    console.log(mock2[0].msclassid)
    for (let j in obj) {
        if (obj[j].shopId == req.query.shopId){
            res.json(obj[j])
        }
    }
})

router.get('/api/nmfj', function(req, res) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.json(nmfj)
});
router.get('/api/mock3', function(req, res) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    let id =req.query.id
    console.log(id)
    for(let i=0;i<mock3.length;i++){
        if(mock3[i].shopId == id){
            res.json(mock3[i].ProductDetails)
        }
    }
});
router.get('/api/shipin', function(req, res) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.json(shipin)
});

router.get('/api/toutiao', function(req, res) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.json(toutiao)
});

router.get('/api/movelist', function(req, res) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    fs.readFile('../mocks/nuoMiMovieList.json', function (err, data) {
        if (err) {
            return console.error(err);
        }
        var list= data.toString();
        // console.log(list)
        list = JSON.parse(list);
        res.send(list)
    });
});

module.exports = router;
