import express from 'express';
import bodyParser from 'body-parser';

const server = express();
server.use(bodyParser.json());

var dataBase = [
                  {
                    Name:'HandMake Rose',
                    img :'http://www.all-list.cn/data/news/image/201103/20110311_142521_623.jpg',
                    link:'http://www.all-list.cn/view23504.html',
                    tag :["Mother's Day","HandMake"]
                  },
                  {
                    Name:"Nana's Green Tea",
                    img :'https://pic.pimg.tw/uglygirl4/1476851315-816890551_n.jpg',
                    link:'http://uglygirl4.pixnet.net/blog/post/210144745-nana%27s-green-tea%E4%BF%A1%E7%BE%A9a8%E2%80%A7%E6%8A%B9%E8%8C%B6%E7%95%8C%E6%98%9F%E5%B7%B4%E5%85%8B%E4%BE%86%E4%BA%86~%E6%8A%B9%E8%8C%B6',
                    tag :["Valentine's Day","Resturant"]
                  },
                  {
                    Name:"點水樓",
                    img:"http://farm9.staticflickr.com/8294/7800489778_65656815eb.jpg",
                    link:"http://leemi.pixnet.net/blog/post/162026678-%5B%E9%A3%9F%5D%E9%BB%9E%E6%B0%B4%E6%A8%93%E2%80%A7%E5%90%83%E5%88%B0%E9%A3%BD%E2%80%A7%E5%B0%8F%E7%B1%A0%E5%8C%85%E8%A9%95%E6%AF%94%E7%AC%AC%E4%B8%80%E5%90%8D-%E5%8F%B0%E5%8C%97",
                    tag:["Father's Day","Resturant"]
                  }
               ]

function query(condition){
  console.log(condition)
  var candidate=[]
  for(var n = 0;n< dataBase.length;n++){
    var found = true
    for(var m=0;m<condition.length;m++){
      if(dataBase[n].tag.indexOf(condition[m]) == -1 ){
        found = false
      }
    }
    console.log(found)
    if(found){
      candidate=candidate.concat(dataBase[n])
    }
  }
  return candidate
}

server.listen(3000, function () {
  console.log('listening on port 3000...');
});

server.get('/', (req, res) => {
  res.sendFile(__dirname+"/HomePage.html");
});

server.get('/bundle.js', (req, res) => {
  res.sendFile(__dirname+"/bundle.js");
});

server.post('/Advice', (req, res) => {
  console.log(req.body)
  var candidates = query([req.body[0].Choice,req.body[1].Choice])
  
  if(!candidates.length){
    candidates = [{Name:'Nothing Matched',img :'',link:''}]
  }
  res.send(candidates[Math.floor(Math.random()*candidates.length)])
});