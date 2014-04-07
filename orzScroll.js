function orzScroll(className, animation, offset){
		var windowCenter = ($(window).height())/2;
		$("" + className + "").addClass('animated');
		$("" + className + "").css('opacity','0');
		$(window).scroll(function(){
			var current = $(window).scrollTop();
			var scrollBottom = current+($(window).height());
			var scrollCenter = current + windowCenter;
			var classTop = $("" + className + "").offset().top;
			var classBottom = classTop + ($("" + className + "").height())+offset;
			var classBottomOffset = classBottom + windowCenter - 130;
			

			if((scrollCenter > classTop)&&(scrollCenter<classBottomOffset)){
				$("" + className + "").addClass("" + animation + "");
				$("" + className + "").css('opacity','1');
			}else if((classTop > scrollBottom)||(current > classBottom)){
				$("" + className + "").removeClass("" + animation + "");
				$("" + className + "").css('opacity','0');
			}
		});
	}