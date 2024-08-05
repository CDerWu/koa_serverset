exports.stringFormat = function() {
    if (arguments.length <= 0) {
        return null;
    }

    let result = arguments[0];
    for (let index = 0; index < arguments.length - 1; index++) {
        let reg = new RegExp("\\{" + index + "\\}", "gm");             
        result = result.replace(reg, arguments[index + 1]);
    }

    return result;
}