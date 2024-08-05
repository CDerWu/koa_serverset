
//將數字格式化
export const parseNumberFormat = function (value, sign = '$', fixed = 2, comma = 3) {
    let number = value;
    let regExpStr = '';
    if (fixed) {
        number = parseInt(value);
        if (isNaN(number))
            return value;
        number = number.toFixed(fixed);
        regExpStr = '\\d(?=(\\d{' + comma + '})+\\.)';
    }
    else {
        regExpStr = '\\d(?=(\\d{' + comma + '})+$)';
    }
    let regExp = new RegExp(regExpStr, 'g');
    return sign + number.toString().replace(regExp, '$&,');
};
