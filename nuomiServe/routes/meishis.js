var express = require('express');
var router = express.Router();
var fs=require('fs');
var msJson =require("../mocks/meishi1");
var files = fs.readdirSync(__dirname);


//读取全部文件
router.get('/msall', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    fs.readFile('../mocks/meishi1.json',"utf-8", function (err, data) {
        data=data.replace(/\s+/g,'')
        data=JSON.parse(data)
        res.json(data)
    });
})

//删除数据
router.get('/ms', function(req, res) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    let id = req.query.id;
    function deleteJson(id){
        fs.readFile('../mocks/meishi1.json',function(err,data) {
        if (err) {
            return console.error(err);
        }
        var datalist = data.toString();//二进制转字符串
        datalist = JSON.parse(datalist);//字符串转json
        //把数据读出来删除
        for (var i = 0; i < datalist.length; i++) {
            if (id == datalist[i].shopId) {
                datalist.splice(i, 1);
            }
        }
        datalist.total = datalist.length;
        var str = JSON.stringify(datalist);
        fs.writeFile('../mocks/meishi1.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log("----------删除成功------------");
        })
    });
    }
    deleteJson(id);
});

//增加数据
router.post('/addms', function(req, res) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    let list =req.body ;
    for(key in list){
        list=key;
    }
    console.log(list);
    function addJson(list){
        fs.readFile('../mocks/meishi1.json',function(err,data) {
            if (err) {
                return console.error(err);
            }
            var datalist = data.toString();//二进制转字符串
            datalist = JSON.parse(datalist);//字符串转json
            list=JSON.parse(list);
            //将传来的数据push进数组中
            datalist.push(list);

            datalist.total = datalist.length;
            var str = JSON.stringify(datalist);
            fs.writeFile('../mocks/meishi1.json',str,function(err){
                if(err){
                    console.error(err);
                }
                console.log("----------添加成功------------");
            })
        });
    }
    addJson(list);
});

//更改数据
router.post('/updatems',function(req,res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    let lists = req.body;
    for (key in lists) {
        list = key;
    }
    list = JSON.parse(list)
    ids = list.shopIdOrg;
    function updateJson(list, ids) {
        fs.readFile('../mocks/meishi1.json', function (err, data) {
            if (err) {
                return console.error(err);
            }
            var datalist = data.toString();//二进制转字符串
            datalist = JSON.parse(datalist);//字符串转json
            //把数据读出来更改
            for (var i = 0; i < datalist.length; i++) {
                if (ids == datalist[i].shopId) {
                    datalist[i].shopId=list.shopId;
                    datalist[i].shopName=list.shopName;
                    datalist[i].shopimg=list.shopimg;
                    datalist[i].shopPosi=list.shopPosi;
                    datalist[i].shopPrice=list.shopPrice;
                    datalist[i].shopActivityName=list.shopActivityName;
                    datalist[i].shopEvaluation=list.shopEvaluation;
                    datalist[i].shopActivity=list.shopActivity;
                }
            }
            var str = JSON.stringify(datalist);
            fs.writeFile('../mocks/meishi1.json',str,function(err){
                if(err){
                    console.error(err);
                }
                console.log("----------修改成功------------");
            })
        })
    }
    updateJson(list, ids)
})

//批量删除数据
router.post("/delms",function (req,res) {
    datas = req.body;
    for (key in datas) {
        list = key;
    }
    list=JSON.parse(list)
    // console.log(list)
    fs.readFile("../mocks/meishi1.json","utf-8", function(err, data) {
        data=JSON.parse(data)
        data=list
        console.log(data)
        var str = JSON.stringify(data);
        fs.writeFile('../mocks/meishi1.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log("----------修改成功------------");
        })
    })

})
module.exports = router;