var isApp = false;

// local storage
//暫存資料用(只PC 瀏覽器可用)
(function ($) {
    $.localStorage = function (key, value) {
        if (localStorage == null) {
            return console.log('Local storage not supported!');
        } else {
            try {
                if (typeof value != 'undefined') {
                    localStorage.setItem(key, value);
                    result = value;
                } else {
                    result = (value === null) ? localStorage.removeItem(key) :
                        localStorage.getItem(key);
                };
                return result;
            } catch (err) {
                private_browsing_error = 'Unable to store local data. Are you using Private Browsing?';
                //QUOTA_EXCEEDED_ERR/.test(err) ? alert(private_browsing_error) : throw(err);
            };
        };
    };
})(jQuery);

/**
 * 用來傳送form to server
 * @param path url路徑字串
 * @param parameters 要傳送的table內容
 */
function postForm(path, parameters) {
    var form = $('<form></form>');

    form.attr("method", "post");
    form.attr("action", path);

    $.each(parameters, function (key, value) {
        var field = $('<input></input>');

        field.attr("type", "hidden");
        field.attr("name", key);
        field.attr("value", value);

        form.append(field);
    });

    $(document.body).append(form);
    form.submit();
}

function setIsApp() {
    isApp = true;
}

function backPrePage() {
    if (isApp === true)
        window.location.href = 'uniwebview://unitygoback';
    else
        history.back();
}