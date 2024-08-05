//使用範例

// const WebSocket = require('ws');

// const ws = new WebSocket.Server({ port: 8888 });
// let wsList = [];

// ws.on('connection', ws => {
//     console.log('server connection');

//     ws.on('message', msg => {
//         console.log('server receive msg：', msg);
//     });

//     ws.send('Information from the server');
//     wsList.push(ws)
// });


// (() => {
//     setInterval(
//         () =>{
//             wsList.forEach(ws => {
//                 ws.send("test");
//         })}
//         , 3 * 1000);
// })()