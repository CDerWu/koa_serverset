//判斷字串是否為大小寫英文加數字
exports.checkEngNum = function (str) {
	let regExp = new RegExp(/^.[\d|a-zA-Z]+$/);
	if (regExp.test(str))
		return true;
	else
		return false;
}

//判斷字串是否為純英文
exports.checkEng = function (str) {
	let regExp = new RegExp("^[A-Za-z]+$");
	if (regExp.test(str))
		return true;
	else
		return false;
}

//判斷字串是否為純數字(至少n個)
exports.checkNum = function (str, n = 0) {
	n = n || 0;
	let regExp = new RegExp("^\\d{" + n + ",}$");
	if (regExp.test(str))
		return true;
	else
		return false;
}

//判斷字串是否為純數字 長度限制
exports.checkNumWithLength = function (str, min, max) {
	min = min || 0;
	max = max || 50;
	let regExp = new RegExp("^\\d{" + min + "," + max + "}$");
	if (regExp.test(str))
		return true;
	else
		return false;
}

//判斷字串是否為大小寫英文 長度限制
exports.checkEngWithLength = function (str, min, max) {
	min = min || 0;
	max = max || 50;
	let regExp = new RegExp("^[A-Za-z]{" + min + "," + max + "}$");
	if (regExp.test(str))
		return true;
	else
		return false;
}

//判斷字串是否為大小寫英文加數字 長度限制
exports.checkEngNumWithLength = function (str, min, max) {
	min = min || 0;
	max = max || 50;
	let regExp = new RegExp("^[\\d|A-Za-z]{" + min + "," + max + "}$");
	if (regExp.test(str))
		return true;
	else
		return false;
}

//判斷兩字串是否相等
exports.checkStrEqual = function (str1, str2) {
	if (str1 === str2) {
		return true;
	}
	else {
		return false;
	}
}

//判斷字串是否為電子郵件(正確格式:xxx@xxx.xxx)
exports.checkIsEmail = function (str) {
	let regExp = new RegExp("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$");
	if (regExp.test(str))
		return true;
	else
		return false;
}

//判斷字串是否為空
exports.checkIsEmpty = function (str) {
	if (str === '') {
		return true;
	}
	else {
		return false;
	}
}

//判斷字串是否為混合大小寫英文數字 長度限制 (必須為英文與數字都有)
exports.checkMixEngNumWithLength = function (str, min, max) {
	min = min || 0;
	max = max || 50;
	let regExp = new RegExp("^(?=.*\\d)(?=.*[A-Za-z]).{" + min + "," + max + "}$");
	if (regExp.test(str))
		return true;
	else
		return false;
}