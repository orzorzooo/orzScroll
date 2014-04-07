;(function($){
		$.fn.orzScroll = function(setting){
			var windowCenter = ($(window).height())/2
			  , orzProperty = {
					animation : 'fadeInLeft',
					offset: 0,
					delay: '0s'
			}
		var orzSetting = $.extend(orzProperty,setting);
		return this.each(function(){
			$(this).css('opacity','0').addClass('animated');
			$(this).css('-webkit-animation-delay',orzProperty.delay);
			$(this).css('animation-delay',orzProperty.delay);
			var thisClass = $(this)
			  , thisClassTop = $(this).offset().top
			  , thisClassBottom = thisClassTop + ($(this).height())+orzProperty.offset
			  , thisClassBottomOffset =  thisClassBottom + windowCenter - 130
			  , thisAnimation = orzSetting.animation;
			$(window).scroll(function(){
				var currentScroll = $(this).scrollTop()
				  , currentScrollCenter = currentScroll+($(this).height())/2
				  , currentScrollBottom = currentScroll+($(this).height());
				if((currentScrollCenter > thisClassTop)&&(currentScrollCenter < thisClassBottomOffset)){
					thisClass.addClass(thisAnimation);
					thisClass.css('opacity','1');
				}else if((currentScroll > thisClassBottom) || (currentScrollBottom < thisClassTop)){
					thisClass.removeClass(thisAnimation);
					thisClass.css('opacity','0');
				}
			});
		});
	}
	})(jQuery);