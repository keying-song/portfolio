const http = require('http');
const fs = require('fs');
const port =3000;
const server=http.createServer(function(req,res){
   fs.readFile(__dirname+req.url, function()
 {

 })
});

server.listen(port, function()
{
   console.log(`server running at ${port}`);
});