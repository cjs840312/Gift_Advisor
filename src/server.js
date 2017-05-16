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
                    tag :["Valentine's Day","Restaurant"]
                  },
                  {
                    Name:"點水樓",
                    img:"http://farm9.staticflickr.com/8294/7800489778_65656815eb.jpg",
                    link:"http://leemi.pixnet.net/blog/post/162026678-%5B%E9%A3%9F%5D%E9%BB%9E%E6%B0%B4%E6%A8%93%E2%80%A7%E5%90%83%E5%88%B0%E9%A3%BD%E2%80%A7%E5%B0%8F%E7%B1%A0%E5%8C%85%E8%A9%95%E6%AF%94%E7%AC%AC%E4%B8%80%E5%90%8D-%E5%8F%B0%E5%8C%97",
                    tag:["Father's Day","Restaurant"]
                  },
                  {
                    Name:"豆腐村 Tofu-Village",
                    img:"http://iphoto.ipeen.com.tw/photo/comment/201411/cgm91bbb0fcbe4a3a47e56a7ebd6d313aac568.jpg",
                    link:"http://peko721.pixnet.net/blog/post/43333843-【台北車站美食】豆腐村-韓式豆腐煲料理%7C小",
                    tag:["Mother's Day","Father's Day","Restaurant"]
                  },

                  {
                    Name:"四川吳炒手",
                    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDohxjoT5tPbMG3YfjrzKXnSPG4qwshOo03C7viOR11cJLv5JR",
                    link:"http://shohoku082371.pixnet.net/blog/post/222565405-%5B%E5%8F%B0%E5%8C%97.%E5%A4%A7%E5%AE%89%5D-%E9%A3%9F%E8%A8%98-%E5%9B%9B%E5%B7%9D%E5%90%B3%E6%8A%84%E6%89%8B-%E5%BF%A0%E5%AD%9D%E5%BA%97-%E8%80%81%E5%AD%97%E8%99%9F-+",
                    tag:["Mother's Day","Father's Day","Restaurant"]

                  },

                  {
                    Name:"草莓工坊 Berry COBO",
                    img:"http://pic.pimg.tw/z314159/1353406903-1032511264.jpg",
                    link:"https://www.google.com.tw/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwj1zK3zpfTTAhULybwKHbLrC_AQFggsMAE&url=http%3A%2F%2Fappleofoneseye.pixnet.net%2Fblog%2Fpost%2F260865454-%25E5%25BF%25A0%25E5%25AD%259D%25E5%25BE%25A9%25E8%2588%2588%25E7%25AB%2599%25E2%2596%2589%25E8%258D%2589%25E8%258E%2593%25E5%25B7%25A5%25E6%2588%25BF%25E3%2580%2582%25E6%259D%25B1%25E5%258D%2580%25E6%259C%2580%25E8%25B6%2585%25E5%2580%25BC%25EF%25BC%258126%25E9%2581%2593%25E7%2594%259C&usg=AFQjCNFxe9dEJAZfu8qNFNys-t9AwakcGQ&sig2=Q1gaWt73tmPaGu0w-FKMzw",
                    tag :["Valentine's Day","Restaurant"]
                  },

                  {
                    Name:"Chelsea's 雀兒小餐館 ",
                    img:"https://pic.pimg.tw/aaddfang/1470056873-2779160701_l.jpg",
                    link:"http://aaddfang.pixnet.net/blog/post/330794828-%22%E9%A3%9F%E8%A8%98%22%E6%8D%B7%E9%81%8B%E5%85%AC%E9%A4%A8%E7%AB%99-chelsea%27s%E9%9B%80%E5%85%92%E5%B0%8F%E9%A4%90%E9%A4%A8-%E7%A9%B6%E6%A5%B5%E7%BE%8E",
                    tag :["Valentine's Day","Restaurant"]
                  },

                  {
                    Name:"沾美西餐廳",
                    img:"http://www.baohunter.com/public/cdn/restaurant/551/3_480_320.jpg",
                    link:"https://www.google.com.tw/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwjD6quBp_TTAhWKoJQKHWbdB-MQFggoMAE&url=http%3A%2F%2Frainieis.tw%2Fblog%2Fpost%2F31639108-%255B%25E5%258F%25B0%25E5%258C%2597%255D-%25E6%25B2%25BE%25E7%25BE%258E%25E8%25A5%25BF%25E9%25A4%2590%25E5%25BB%25B3-%25E8%2580%2581%25E5%25AD%2597%25E8%2599%259F%25E7%2589%259B%25E6%258E%2592%25E9%25A4%25A8-%257C-%25E7%25B6%2593%25E4%25B9%2585%25E4%25B8%258D%25E8%25A1%25B0&usg=AFQjCNGUMxFhpFL7BwnT8e_3bEXbbdm6vg&sig2=qQfBx79JCVIxT9ID2pT1gQ",
                    tag:["Mother's Day","Restaurant"]
                  },

                  {
                    Name:"羊毛氈",
                    img:"https://image.damanwoo.com/files/media/1/0/5/7/9/8/2/6/0/6/1057982606_l.jpg",
                    link:"https://www.damanwoo.com/node/86002",
                    tag :["Mother's Day","HandMake"]
                  },

                  {
                    Name:"母親節會開花的卡片",
                    img:"http://www.welovediy.com/wp-content/uploads/2013/04/DIY-3D-%E7%AB%8B%E9%AB%94%E8%8A%B1%E6%9D%9F%E6%AF%8D%E8%A6%AA%E7%AF%80%E5%8D%A1%E7%89%87.jpg",
                    link:"http://www.welovediy.com/blog/2013/04/23/%E6%AF%8D%E8%A6%AA%E7%AF%80-%E6%9C%83%E9%96%8B%E8%8A%B1%E7%9A%84%E7%AB%8B%E9%AB%94%E6%89%8B%E5%B7%A5%E5%8D%A1%E7%89%87/",
                    tag :["Mother's Day","HandMake"]
                  },

                  {
                    Name:"父親節領帶卡片",
                    img:"http://www.welovediy.com/wp-content/uploads/2013/07/Fathers-Day-Card-%E7%88%B6%E8%A6%AA%E7%AF%80%E9%A0%98%E5%B8%B6%E6%89%8B%E5%B7%A5%E5%8D%A1%E7%89%87%E6%95%99%E5%AD%B8-101.jpg",
                    link:"http://www.welovediy.com/blog/2013/07/15/%E7%88%B6%E8%A6%AA%E7%AF%80-%E7%88%B8%E7%88%B8%E7%9A%84%E9%A0%98%E5%B8%B6%E6%89%8B%E5%B7%A5%E5%8D%A1%E7%89%87/",
                    tag :["Father's Day","HandMake"]
                  },

                  {
                    Name:"父親最愛巧克力蛋糕",
                    img:"https://dbjdsnch130xu.cloudfront.net/uploads/recipe/cover/117750/large_57d2c9db948ad684.jpg",
                    link:"https://icook.tw/recipes/117750",
                    tag :["Father's Day","HandMake"]
                  },

                  {
                    Name:"相機造型相片集",
                    img:"https://pic.pimg.tw/wowdebby/1452430511-3437189593_n.png?v=1452430673",
                    link:"http://wowdebby.pixnet.net/blog/post/207714298-%E2%97%8F%E6%89%8B%E4%BD%9C%E2%97%8F%E3%80%80lg-pocket-photo-x-%E7%9B%B8%E6%A9%9F%E5%8D%A1%E7%89%87%EF%BD%9C%E6%83%85%E4%BA%BA%E7%AF%80%E5%8D%A1",
                    tag :["Valentine's Day","HandMake"]
                  },

                  {
                    Name:"濃情密意蜂蜜蛋糕",
                    img:"http://mongateau.com.tw/wordpress/wp-content/uploads/2015/12/EDX2920.jpg",
                    link:"https://icook.tw/recipes/167675",
                    tag :["Valentine's Day","HandMake"]
                  },

                  {
                    Name:"愛心派卡片",
                    img:"https://pic.pimg.tw/wowdebby/1446193348-2470850345_n.png?v=1446193371",
                    link:"http://wowdebby.pixnet.net/blog/post/173103696-%E2%97%8F%E5%8D%A1%E7%89%87%E2%97%8F%E3%80%80%E6%83%85%E4%BA%BA%E7%AF%80%E5%8D%A1%E7%89%87%EF%BD%9C%E6%89%8B%E5%B7%A5%E5%8D%A1%E7%89%87%EF%BD%9C%E6%84%9B%E5%BF%83%E6%B4%BE%E5%8D%A1",
                    tag :["Valentine's Day","HandMake"]
                  },

                  {
                    Name:"SK II",
                    img:"https://images-na.ssl-images-amazon.com/images/I/41c7a%2BAhcgL._SY355_.jpg",
                    link:"https://tw.buy.yahoo.com/gdsale/gdsale.asp?act=gdsearch&gdid=6847301",
                    tag :["Mother's Day","Shopping"]
                  },

                  {
                    Name:"YSL 情挑誘光水唇膏",
                    img:"http://www.elle.com.tw/sites/default/files/styles/slick_picture/public/new-dossier/011_112.jpg?itok=AXCUQanj",
                    link:"https://tw.buy.yahoo.com/YSL-%E6%83%85%E6%8C%91%E8%AA%98%E5%85%89%E6%B0%B4%E5%94%87%E8%86%8F4-5g-%E6%B5%B7%E5%A4%96%E8%88%AA%E7%A9%BA%E7%89%88-6956495-gdid",
                    tag :["Mother's Day","Shopping"]
                  },

                  {
                    Name:"NINE WEST--流蘇綴飾素面兩用包-經典黑",
                    img:"https://s.yimg.com/wb/images/284B1266E19795BAE52B4B721629C2D177B4367D",
                    link:"https://tw.buy.yahoo.com/gdsale/gdsale.asp?act=gdsearch&gdid=7163039",
                    tag :["Mother's Day","Shopping"]
                  },

                  {
                    Name:"Jo Malone",
                    img:"https://s.yimg.com/wb/images/3DAD5557B211266134D3717C36822FE0090BE401",
                    link:"https://tw.buy.yahoo.com/gdsale/Jo-Malone-6175745.html?hpp=belt_23_pd04",
                    tag :["Valentine's Day","Shopping"]
                  },

                  {
                    Name:"VDL 貝殼提亮光澤妝前乳",
                    img:"https://s.yimg.com/wb/images/A08D0ED8F1B7FB66313832F745C9CC94D961C5EA",
                    link:"https://tw.buy.yahoo.com/gdsale/VDL-%E8%B2%9D%E6%AE%BC%E6%8F%90%E4%BA%AE%E5%85%89%E6%BE%A4%E5%A6%9D%E5%89%8D%E4%B9%B330ml-6747585.html",
                    tag :["Valentine's Day","Shopping"]
                  },

                  {
                    Name:"Panasonic奈米水離子吹風機",
                    img:"https://s.yimg.com/wb/images/9468E7396D54AFA33D4B0022752AD32E7B721742",
                    link:"https://tw.buy.yahoo.com/gdsale/gdsale.asp?act=gdsearch&gdid=6215826",
                    tag :["Valentine's Day","Shopping"]
                  },

                  {
                    Name:"SKECHERS  跑步鞋 GORun Ride 6",
                    img:"https://s.yimg.com/wb/images/3F888C3233A0D48A934603AEA09F8E8027742AE5",
                    link:"https://tw.buy.yahoo.com/gdsale/gdsale.asp?act=gdsearch&gdid=7141515",
                    tag :["Father's Day","Shopping"]
                  },

                  {
                    Name:"飛利浦 三刀頭水洗刮鬍刀",
                    img:"https://s.yimg.com/wb/images/B7458301BFB0E02C725917F9D9AB279264DEDC07",
                    link:"https://tw.buy.yahoo.com/gdsale/gdsale.asp?act=gdsearch&gdid=4947492",
                    tag :["Father's Day","Shopping"]
                  },

                  {
                    Name:"SANTAFE 韓國進口窄版領帶 ",
                    img:"https://s.yimg.com/wb/images/2C785EA622DFF24B809A8752C37DC5BDB4BBEF27",
                    link:"https://tw.buy.yahoo.com/gdsale/gdsale.asp?act=gdsearch&gdid=6747539",
                    tag :["Father's Day","Shopping"]
                  },

                  




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