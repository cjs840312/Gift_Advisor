import express from 'express';
const server = express();

server.listen(3000, function () {
  console.log('listening on port 3000...');
});

server.get('/', (req, res) => {
  res.sendFile(__dirname+"/view.html");
});

server.get('/bundle.js', (req, res) => {
  res.sendFile(__dirname+"/bundle.js");
});
