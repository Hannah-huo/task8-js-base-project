const items = require('./items').items();

exports.numberToCode = function numberToCode(number){
    // 95713
    number = number.replace('-','');
    number += getVerifyCode(number);//957137
    return getBarCode(number);
}

function getBarCode(number){
    let codes = '|';

    for(let n of number.split('')){
        let v = items.filter(r => r.number === parseInt(n));
        codes += v[0].code;
    }
    codes += '|'
    return codes;
}

function getVerifyCode(number){
    let total = 0;
    for(let i of number.split('')){
        total += parseInt(i)
    }
    return 10 - total % 10;
}

exports.codeToNumber = function codeToNumber(code){
    //|	 |:|::	:|:|:	|:::|	:::||	::||:	:|:|:	|
    code = code.substring(1, code.length - 1);

    return getNumberFromCode(code);
}

function getNumberFromCode(code) {
    let result = '';
    for(let i = 0; i < code.length; i += 5){
        let baseCode = code.substring(i, i + 5);
        let v = items.filter(e => e.code === baseCode);
        result += v[0].number.toString();
    }

    return fixResult(result);
}

function fixResult(result) {
    result = result.substring(0, result.length - 1);
    if(result.length > 5) {
        result = result.substring(0, 5) + '-'+result.substring(5, result.length);
    }
    return result;

}