
$(function () {
	// 搜索框
	$("#sousuo input:first").focus(function () {
		$("#sousuo input:first").attr('placeholder', '搜索职位、公司或地点');
	});
	$("#sousuo input:first").blur(function() {
		$("#sousuo input:first").attr('placeholder', '交互设计');
	});
	//热门职位and最新职位
	$(".content .workIntro .c_nav ul li").click(function() {
		var li_index = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".workIntro #job div.jobList:nth-child("+(li_index+1)+")").removeClass('hide').siblings().addClass('hide');
	});
	// 展开-收缩
	$("#zk").toggle(function() {
		$(".content .workIntro .link_list dd").css({'overflow': 'visible','height':'auto'});
		$("#zk").text('收缩');
		$("#zk").css('background','url(img/arrow_up.png)  35px 5px no-repeat');
	},function() {
		$(".content .workIntro .link_list dd").css({'overflow': 'hidden','height':'22px'});
		$("#zk").text('展开');
		$("#zk").css('background','url(img/arrow_down.png)  35px 5px no-repeat');
	});
	//回到顶部
	$(".backtop").mouseover(function() {
		$(".backtop a").css("background-position","-28px 0");
	});
	$(".backtop").mouseout(function() {
		$(".backtop a").css("background-position","0 0");
	});
	$(".backtop").click(function () {
		$("html,body").animate({"scrollTop": 0},1000);
	});
	//反馈
	$(".fk").mouseover(function() {
		$(".fk a").css("background-position","0 -31px");
	});
	$(".fk").mouseout(function() {
		$(".fk a").css("background-position","0 0");
	});
	//回到顶部消失特效
	$(window).scroll(function() {
		var h = $(document).scrollTop();
		if(h == 0){
			$(".backtop a").css("display","none");
		}
		else{
			$(".backtop a").css("display","block");
		}
	});
	//固定定位
	$(window).scroll(function() {
		var $ScrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
		if($ScrollBottom < 68){
			if($("#zk").text() == "展开"){
				$("#fixed").css({"position":"absolute","bottom":"-1380px"});
				$(".bkfk").css({"position":"absolute","bottom":"-1300px"});
			}
			if($("#zk").text() == "收缩"){
				$("#fixed").css({"position":"absolute","bottom":"-1450px"});
				$(".bkfk").css({"position":"absolute","bottom":"-1370px"});
			}
		}
		else{
			$("#fixed").css({"position":"fixed","bottom":"0"});
			$(".bkfk").css({"position":"fixed","bottom":"85px"});
		}
	});
	//二维码
	$(".footer .wrapper .inner a").hover(function() {
		$(this).children('img').css('display', 'block');
	}, function() {
		$(this).children('img').css('display', 'none');
	});
});