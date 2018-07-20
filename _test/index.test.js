/* eslint-disable */
// var add = require('./add.js');
require('./../dist/lightDom.bundle');
var expect = require('chai').expect;

describe('加法函数的测试', function() {
	it('1 加 1 应该等于 2', function() {
		expect($$('div')).to.be.equal($('div'));
	});
});

/* eslint-enable */
