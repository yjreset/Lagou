$(function () {
	$(".banner2 ul li a").hover(function() {
		$(this).children('.hot_info').css({"width":"113px","height":"113px"}, 300);
		$(this).children('.hot_info').css('transition', 'width');
	},function() {
		$(this).children('.hot_info').css({"width":"0","height":"0"}, 300);
	});
})