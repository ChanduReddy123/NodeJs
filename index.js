'use strict';

const express = require('express');
const request = require("request");
var options = { method: 'GET',
  url: 'https://api.github.com/meta',
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'accept-encoding': 'gzip, deflate',
     Host: 'api.github.com',
     'Postman-Token': '4c127421-2f3f-42b5-a82c-a20f23f7a085,4b19d2ab-85d2-424b-8300-611e6bb09b16',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.13.0' } };


function curling(){
    console.log("this is in curling function")
    var resbody = "";
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
    
        console.log(body);
      },
      );
     // console.log(result);
}
// Constants
const PORT = 8988;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/curl',(req,res) =>{
    const result = curling();
    console.log(typeof(result));
    
    res.send(result);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);