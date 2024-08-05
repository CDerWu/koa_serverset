const sseCtrl = require('koa_sse');
//這邊都是使用範例 可以考慮把sseObj拿到外部存放
const map = {};

//設定SSE連線路由位置
sseCtrl.setSSEurl("sse_connect");

//設定連線回傳 會回傳SSE物件以及該連線的ctx
sseCtrl.setCallBack(function (sseObj, ctx){
    let key = Date.now();
    ctx.cookies.ssekey = key
    map[key] = sseObj;
    map[key].send("SSE TEST!!!!!!!!!!!!!!!!!!!!!", "eventName");
});

//設定斷線時要執行的動作
sseCtrl.setCloseConnect(function (ctx){
    let key = ctx.cookies.ssekey;
    delete map[key];
});

//正式啟動SSE功能
sseCtrl.activate();

//這是當資料變動需要傳給client時的範例
exports.sendMsg = function (target, data) {
    //可以設定發送事件
    //map[target].send(data, eventName);
    map[target].send(data, "eventName");
};

//這是中斷SSE時的範例
exports.sendEnd = function (target) {
    //可以設定重新連線時間
    //let retry = 10 * 1000;//10秒
    //map[target].sendEnd(retry);
    map[target].sendEnd();
};

//test
(() => {
    setInterval(function () {
        for (const key in map) {
            map[key].send("test", "eventName");
        }
    }, 3000);
})()