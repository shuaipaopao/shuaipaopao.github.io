var indexTpl = require('../tpl/index.string');

//document.body.innerHTML +=indexTpl;
var Swiper = require('../lib/swiper-3.3.1.min.js')
window.onload=function(){
	var mySwiper = new Swiper ('#banner', {
	     direction: 'horizontal',
	    autoplay:1500,
//	    autoplayDisableOnInteration:false;
	    loop: true,
	    pagination: '.swiper-pagination',
	});
}
SPA.defineView('index',{
	html:indexTpl,

	plugins:['delegated'],

	//子视图嵌套定义
	modules: [{
	    name: 'content',
	    container: '.m-index-container',
	    views: ['home', 'classfy', 'shopcar', 'msg','my'],
	    defaultTag: 'my'
	}],

	init: {
	    indexSwiper: null,
	    setActive: function (obj) {
	      obj.addClass('active').siblings().removeClass('active');
	    }
	  },

	bindActions:{
		'switch.view':function(e){
			this.setActive($(e.el));
			this.modules.content.launch(e.data.tag);
		},
//		'switch.swiper': function (e) {
//	      $(e.el).addClass('active').siblings().removeClass('active');
//	      this.classfySwiper.slideTo($(e.el).index()+1);
//	    }
	},
//	bindEvents:{
//		'beforeShow':function(){
//			 this.classfySwiper = new Swiper('#classfy-swiper',{
//				direction: 'vertical',
//				loop: true,
//		        onSlideChangeStart: function (swiper) {
//		          $('.classfy1 li').eq(swiper.activeIndex-1)
//		            .addClass('active').siblings().removeClass('active');
//		        }
//			})
//		}
//	}

})
