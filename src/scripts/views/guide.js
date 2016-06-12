
var tplGuide = require('../tpl/guide.string');

SPA.defineView('guide',{
	html: tplGuide,
	plugins:['delegated'],
	bindActions:{
		'goto.index':function(){
			SPA.open('index');
			SPA.util.storage('isVisited', true);
		}
	},


	bindEvents:{
		'beforeShow' : function(){
// 			var myScroll = this.widgets.classfysCroll;
// //			var guideSwiper = new Swiper('#guide-swiper',function(){
// //				loop:false
// //			});
// 			setTimeout(
// 				function(){
// 					SPA.open('index');
//
// 				}
// 			,1000)
				var guideSwiper = new Swiper('#guide-swiper', {
					loop: false
				});
		}
	}


});
