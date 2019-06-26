/*import * as http from 'http';
 
http.createServer(function (request:http.IncomingMessage, response:http.ServerResponse) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    console.log(1);
    
    response.end('Hello World');
}).listen(8888);
*/

import * as express from 'express';
const app: any = express()

app.get('/', function (req, res, next) {
    console.log(1);
    res.send('你好')
});
app.listen(3000)
