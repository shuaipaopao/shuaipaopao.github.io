var classfyTpl = require('../tpl/classfy.string');

SPA.defineView('classfy',{
	html:classfyTpl,
	plugins: ['delegated'],
	
	bindActions: {
	    'switch.swiper': function (e) {
	      $(e.el).addClass('active').siblings().removeClass('active');
	      this.classfySwiper.slideTo($(e.el).index()+1);
	    }
	},  
	
	init:{
		classfySwiper: null
	},
	
	bindEvents:{
		'beforeShow':function(){
			 this.classfySwiper = new Swiper('#classfy-swiper',{
				direction: 'vertical',
				loop: true,
		        onSlideChangeStart: function (swiper) {
		          $('.classfy1 li').eq(swiper.activeIndex-1)
		            .addClass('active').siblings().removeClass('active');
		        }
			})
		}
	}
})