"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");

describe("测试描述", function(){
    //sinon.spy(console, 'log');

    it("输入5位数字", function(){

        var result = main.numberToCode('95713');
        var expect_string = '||:|:::|:|:|:::|:::||::||::|:|:|';
        
        expect(expect_string).to.equal(result);
    });

    it("输入10位数字", function(){

        var result = main.numberToCode('19104-2345');
        var expect_string = '|:::|||:|:::::||||::::|::|::|:|::||::|::|:|:|::::|||';

        expect(expect_string).to.equal(result);
    });

    it("输入5位条形码", function(){

        //main();
        var result = main.codeToNumber('||:|:::|:|:|:::|:::||::||::|:|:|');
        var expect_string = '95713';

        expect(expect_string).to.equal(result);
    });

    it("输入10位条形码", function(){

        //main();
        var result = main.codeToNumber('|:::|||:|:::::||||::::|::|::|:|::||::|::|:|:|::::|||');
        var expect_string = '19104-2345';

        expect(expect_string).to.equal(result);
    });
});