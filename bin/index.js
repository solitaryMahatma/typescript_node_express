"use strict";
/*import * as http from 'http';
 
http.createServer(function (request:http.IncomingMessage, response:http.ServerResponse) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    console.log(1);
    
    response.end('Hello World');
}).listen(8888);
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', function (req, res, next) {
    console.log(1);
    res.send('你好');
});
app.listen(3000);
//# sourceMappingURL=index.js.map