var classfyTpl = require('../tpl/classfy.string');

SPA.defineView('classfy',{
	html:classfyTpl,
	plugins: ['delegated',{
		name:'avalon',
		options:function(vm){
			vm.classfy1=[];
			vm.classfy2=[];
			vm.classfy3=[];
		}
	}],

	bindActions: {
	    'class.tap': function (e, data) {
				// var myScroll = this.widgets.classfyScroll;
				// console.log(myScroll);
				// myScroll.refresh();
				//var w=window.innerHeight;
				//var offset = $(e.el).offset().top;
	      $(e.el).addClass('active').siblings().removeClass('active');
				//$(".classfy-container").eq($(e.el).index()).addClass('active').siblings().removeClass('active');
				var offseth = $(e.el).offset().top;
				var h = window.innerHeight;
				numb = $(e.el).index() + 1;
				var vm = this.getVM();
				//console.log(that.param.id);
				$.ajax({
					url: '/duoshangwang/mock/classfy'+numb+'.json',
					// data:{
					// 	id:numb
					// },
					success:function(res){
							vm.classfy1 = res.data1;
							vm.classfy2 = res.data2;
							vm.classfy3 = res.data3;
							var data1 = res.data1;
							var data2 = res.data2;
							var data3 = res.data3;
							var tempArr1 =[];
							var tempArr2 = [];
							for(var i=0;i<Math.ceil(data1.length/3);i++){
									tempArr1[i] = [];
									tempArr1[i][0] = data1[3*i];
									tempArr1[i][1] = data1[3*i+1];
									tempArr1[i][2] = data1[3*i+2];
							}
							for(var i=0;i<Math.ceil(data2.length/3);i++){
									tempArr2[i] = [];
									tempArr2[i][0] = data2[3*i];
									tempArr2[i][1] = data2[3*i+1];
									tempArr2[i][2] = data2[3*i+2];
							}
							vm.classfy1 = tempArr1;
							vm.classfy2 = tempArr2;
					}
				});
				// console.log(offseth);
				// console.log(h);
				// if(0<$(e.el).index()<4){
				// 	this.listScroll.scrollBy(0,-51*$(e.el).index());
				// }
				// if(8<$(e.el).index()<11){
				// 	this.listScroll.scrollBy(0,51*$(e.el).index());
				// }

	    },
			'goto.det':function(){
				SPA.open('det');
			}
	},

	init:{
		listScroll:null,
		numb:null
	},

	bindEvents: {
		'show':function(){
			var that = this;
			var vm = this.getVM();
			$.ajax({
				url: '/duoshangwang/mock/classfy1.json',
				// data:{
				// 	id:1
				// },
				success:function(res){
						vm.classfy1 = res.data1;
						vm.classfy2 = res.data2;
						vm.classfy3 = res.data3;
						var data1 = res.data1;
						var data2 = res.data2;
						var data3 = res.data3;
						var tempArr1 =[];
						var tempArr2 = [];
						for(var i=0;i<Math.ceil(data1.length/3);i++){
								tempArr1[i] = [];
								tempArr1[i][0] = data1[3*i];
								tempArr1[i][1] = data1[3*i+1];
								tempArr1[i][2] = data1[3*i+2];
						}
						for(var i=0;i<Math.ceil(data2.length/3);i++){
								tempArr2[i] = [];
								tempArr2[i][0] = data2[3*i];
								tempArr2[i][1] = data2[3*i+1];
								tempArr2[i][2] = data2[3*i+2];
						}
						vm.classfy1 = tempArr1;
						vm.classfy2 = tempArr2;
				}
			});
			var classfyScroll = this.widgets.classfyScroll;
			classfyScroll.on('scrollEnd', function () {
						classfyScroll.refresh();
				});
			// this.listScroll = that.widgets.listScroll;
			// this.listScroll.options.crollX = false;
			// this.listScroll.options.crollY = true;
		}
	}

})
