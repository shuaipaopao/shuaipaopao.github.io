
var tplGuide = require('../tpl/guide.string');

SPA.defineView('guide',{
	html: tplGuide,
	plugins:['delegated'],
//	bindActions:{
//		'goto.index':function(){
//			SPA.open('index');
//			var mySwiper = new Swiper ('.swiper-container', {
//			    direction: 'horizontal',
//			    autoplay:1500,
//		//	    autoplayDisableOnInteration:false;
//			    loop: true,
//			    pagination: '.swiper-pagination',
//		  	});
//		}
//	}


	bindEvents:{
		'beforeShow' : function(){
//			var guideSwiper = new Swiper('#guide-swiper',function(){
//				loop:false
//			});
			setTimeout(
				function(){
					SPA.open('index');
					
				}
			,1000)
		}
	}


});
