1.准备工作
###
*安装了VSCODE 和 node.js
*安装TypeScript 的支持 npm install -g typescript

2.新建工程
###
*随便新建一个工程并进入工程目录
*初始化： npm init 和 tsc init
*新建目录 src和dist文件目录
*修改tsc init生成的文件，即tsconfig.json，默认rootDir和outDir是被注释,打开注释并配置如下"rootDir": "./src","outDir": "./bin",
*在src目录下新建index.ts并在跟目录 打开cmd命令: tsc -W
*安装hotnode插件 npm install -g hotnode(全局只安装一次)
*安装Express
```
npm install express --save (js识别)
npm install @types/express --save-dev (ts识别)
```
*在index.ts编码
```

import * as express from 'express';
const app: any = express()

app.get('/', function (req, res, next) {
    console.log(1);
    res.send('你好')
});
app.listen(3000)
```

*dist目录下打开cmd命令：hotnode index.js
