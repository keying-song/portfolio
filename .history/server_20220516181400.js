const http = require('http');
const fs = require('fs');
const port =3000;
const server=http.createServer(function(req,res){
   fs.readFile(__dirname+req.url, function(err, data)
   {
      if(err)
      {
         res.writeHead(404);
         console.log(`err.message1);
         res.end(err.message);
      }
      res.writeHead(200);

      res.end(data);
      console.log(data);
      
   });
});

server.listen(port, function()
{
   console.log(`server running at ${port}`);
});