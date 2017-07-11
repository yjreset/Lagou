$(function () {
	//hover切换
	$(".content .intro .img .img_right ul li").mouseover(function(e) {
		if(e.pageY > 204 && e.pageY < 254){
			$(this).children('i').css('background', 'url()');
			$(this).siblings().children('i').css('background', 'url(img/cover.png)');
			$(".img_right em").animate({top: '0'}, 100);
			$(".content .intro .img .banner1 .banner1_left").animate({'margin-top':'0px'}, 300);
		}else if(e.pageY > 259 && e.pageY < 309){
			$(this).children('i').css('background', 'url()');
			$(this).siblings().children('i').css('background', 'url(img/cover.png)');
			$(".img_right em").animate({top: '55px'}, 100);
			$(".content .intro .img .banner1 .banner1_left").animate({'margin-top':'-160px'}, 300);
		}else if(e.pageY > 314 && e.pageY < 364){
			$(this).children('i').css('background', 'url()');
			$(this).siblings().children('i').css('background', 'url(img/cover.png)');
			$(".img_right em").animate({top: '110px'}, 100);
			$(".content .intro .img .banner1 .banner1_left").animate({'margin-top':'-320px'}, 300);
		}
	});
	//自动轮播
	var mt = -160;
	var t = 55;
	var index = 1;
	// var li_index = $(".content .intro .img .img_right ul li").index();
	function lunbo() {
		if(mt < -320){
			mt = 0;
		}
		if(t > 110){
			t = 0;
		}
		if(index > 3){
			index = 1;
		}
		$(".content .intro .img .img_right ul li:nth-child("+index+") i").removeClass('current');
		if(index == 3){
			index = 0;
		}
		$(".content .intro .img .img_right ul li:nth-child("+(index+1)+") i").addClass('current');
		$(".img_right em").animate({top: t+'px'}, 100);
		$(".content .intro .img .banner1 .banner1_left").animate({'margin-top': mt +'px'}, 300);
		t = t + 55; 
		mt = mt + -160;
		index = index + 1;
	}
	setInterval(lunbo, 3000);
});