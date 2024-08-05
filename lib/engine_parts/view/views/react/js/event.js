//事件類型
const eventType = [
    'RESET_DATATABLE',
    'LOADING',
];

export const EventType = (() => {
    let temp = {};
    for (let index in eventType) {
        let key = eventType[index];
        temp[key] = key;
    }
    return temp;
})();
let eventTable = [];

/**
 * 發送事件
 * @param {*} eventName 事件名稱參照:EventType
 * @param {*} arg 發送時附加參數
 */
export const emit = function (eventName, obj) {

    if (obj && typeof obj !== 'object') {
        console.log('user emit send parm use {} , Example:emit(EventType.Test,{a,b,c,d})');
        return;
    }

    const methods = eventTable[eventName];
    if (methods) {
        for (let index in methods) {
            let method = methods[index];
            method(obj);
        }
    }
};

/**
 * 註冊監聽事件
 * @param {*} eventName  事件名稱參照:EventType
 * @param {*} callBack 當事件觸發時的回調程序
 */
export const on = function (eventName, callBack) {
    if (!callBack) {
        console.log("Method not exist!!");
        return;
    }
    if (!eventTable[eventName]) {
        eventTable[eventName] = [];
    }
    eventTable[eventName].push(callBack);
};

/**
 * 移除監聽的事件
 * @param {*} eventName 事件名稱參照:EventType
 * @param {*} callBack 當事件觸發時的回調程序
 */
export const remove = function (eventName, callBack) {
    const methods = eventTable[eventName];
    if (methods) {
        const index = methods.indexOf(callBack);
        if (index > -1) {
            methods.splice(index, 1);
        }
    }
};

export default { on, emit, remove };