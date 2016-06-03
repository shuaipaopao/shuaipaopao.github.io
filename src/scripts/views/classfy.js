var classfyTpl = require('../tpl/classfy.string');

SPA.defineView('classfy',{
	html:classfyTpl,
	plugins: ['delegated'],

	bindActions: {
	    'switch.swiper': function (e) {
	      $(e.el).addClass('active').siblings().removeClass('active');
	      this.classfySwiper.slideTo($(e.el).index());
	      console.log($(e.el).index()+1);
	    }
	},

	init:{
		classfySwiper: null
	},

	bindEvents:{
		'beforeShow':function(){
			 this.classfySwiper = new Swiper('#classfy-swiper',{
				direction: 'vertical',
		        onSlideChangeStart: function (swiper) {
		        	//console.log(swiper.activeIndex)
		          $('.classfy1 li').eq(swiper.activeIndex)
		            .addClass('active').siblings().removeClass('active');
		        }
			})
		}
	}
})
