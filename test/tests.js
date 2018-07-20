/* eslint-disable */

var should = chai.should();

describe('dom查找', function() {
	it('class查找', function() {
		should.equal($$('.box').length(), $('.box').length);
	});
	it('id查找', function() {
		should.equal($$('#div').length(), $('#div').length);
	});
	it('tag name查找', function() {
		should.equal($$('div').length(), $('div').length);
	});
	it('父元素', function() {
		should.equal($$('.child').parent()[0], $('.child').parent()[0]);
	});
	it('子元素', function() {
		should.equal($$('.parent').children()[0], $('.parent').children()[0]);
	});
});

describe('dom修改', function() {
	it('addClass', function() {
		$$('.box').addClass('test5');
		should.equal($$('.test5').length(), $('.test5').length);
	});
	it('removeClass', function() {
		$$('.box1').removeClass('box1');
		should.equal($$('.box').length(), $('.box').length);
	});
});

describe('dom删除', function() {
	it('remove', function() {
		$$('.remove').remove();
		should.equal($$('.remove').length(), $('.remove').length);
	});
});

describe('dom增加', function() {
	it('append', function() {
		$$('.box').append('<span class="span">我是新增加的dom</span>');
		should.equal($$('.span').length(), $('.span').length);
	});
});

describe('dom属性', function() {
	it('html取值', function() {
		should.equal($$('.box').html(), $('.box').html());
	});
	it('html设置', function() {
		$$('.box').html('<div>我是新增内容</div>');
		should.equal($$('.box').html(), $('.box').html());
	});
	it('attr', function() {
		should.equal($$('#div').attr('data-test'), $('#div').attr('data-test'));
	});

	it('css取值和设置', function() {
		$$('#div').css('color', 'red');
		should.equal($$('#div').css('color'), $('#div').css('color'));
	});
});

describe('事件绑定', function() {
	it('click', function() {
		var click1, click2;

		$$('#click1').click(function() {
			click1 = 1;
		});
		$('#click2').click(function() {
			click2 = 1;
		});
		document.getElementById('click1').click();
		document.getElementById('click2').click();

		should.equal(click1, click2);
	});
	it('bind绑定', function() {
		var click1, click2;

		$$('#click1').bind(function() {
			click1 = 1;
		});
		$('#click2').bind(function() {
			click2 = 1;
		});
		document.getElementById('click1').click();
		document.getElementById('click2').click();

		should.equal(click1, click2);
	});
	it('unbind取消绑定', function() {
		var click1 = 1,
			click2 = 1;
		$$('#click1').bind(function() {
			click1 = 1;
		});
		$('#click2').bind(function() {
			click2 = 2;
		});
		$$('#click1').unbind();
		$('#click2').unbind();
		document.getElementById('click1').click();
		document.getElementById('click2').click();

		should.equal(click1, click2);
	});
});

describe('显示隐藏', function() {
	it('显示', function() {
		$$('#div').show();
		should.equal($$('#div').css('display'), $('#div').css('display'));
	});
	it('隐藏', function() {
		$$('#div').hide();
		should.equal($$('#div').css('display'), $('#div').css('display'));
	});
});
/* eslint-enable */
