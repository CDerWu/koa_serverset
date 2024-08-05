/*
 * 這邊提供一個專門複寫Jquery ui的函式,從中替換調一些設定, 讓風格統一的做法
 * 本檔案需要在jquery ui之後引用, 且沒使用jquery ui應該會死掉, 請自行注意
 */

// 複寫jquery ui 的dialog函式
$.fn.originalDialog = $.fn.dialog;
$.fn.dialog = function (...params) {
    var selfParams = params;
    if (typeof (selfParams[0]) === 'object') {
        if (!('draggable' in selfParams[0]))
            selfParams[0].draggable = false;
        selfParams[0].classes = {
            "ui-dialog": "modal-content",
            "ui-dialog-titlebar": "modal-header",
            "ui-dialog-title": "modal-title",
            "ui-dialog-titlebar-close": "close",
            "ui-dialog-content": "modal-body",
            "ui-dialog-buttonpane": "modal-footer"
        };
    }

    return this.originalDialog(...selfParams);
};