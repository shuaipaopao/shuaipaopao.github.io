var homeTpl = require('../tpl/home.string');

SPA.defineView('home',{
	html: homeTpl,
	bindEvents:{
		'beforeShow' : function(){
			// var indexScroll = this.widgets.indexScroll;
			// indexScroll.on('scrollEnd', function () {
		  //         indexScroll.refresh();
		  //     });
			var mySwiper = new Swiper ('#banner', {
				autoplay:2000,//自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。

				loop: true,//循环
				autoplayDisableOnInteraction : false,
					// 如果需要分页器
				 pagination: '.swiper-pagination',
			})
		}
	}
})
