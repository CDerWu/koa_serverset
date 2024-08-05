//局部使用語法
/* eslint rules_key1: value1, rules_key2: value2 */

module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jquery": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "arrowFunctions": true,
            "classes": true,
            "modules": true,
            "defaultParams": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "rules": {
        "no-console": "off",            //是否允許使用console.log, "off":允許
        "eqeqeq": "warn",                //需使用"==="取代"=="，以warning提示
        "no-useless-constructor": "error", //禁用不必要的建構子
        "no-var": "error",              //要求使用 let 或 const 而不是 var
    }
};