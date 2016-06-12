var detTpl = require('../tpl/det.string');

SPA.defineView('det',{
	html:detTpl,
	plugins:['delegated',{
			name:'avalon',
			options:function(vm){
				vm.detlist = [];
			}
	}],
	bindActions:{
		'goto.classfy':function(){
			this.hide();
		}
	},
	init:{
		formatData:function(data){
			var tempArr = [];
			for(var i=0;i<Math.ceil(data.length/2);i++){
				tempArr[i] = [];
				tempArr[i][0] = data[2*i];
				tempArr[i][1] = data[2*i+1];
			}
			return tempArr;
		},
		liveListArr: []
	},
	bindEvents:{
		'show':function(){
			var vm = this.getVM();
			var that = this;
			//初次渲染
			$.ajax({
				url: '/duoshangwang/mock/det.json',
				success:function(res){
					var det = res.det;
					that.liveListArr = det;
					//var tempArr = [];
					//that.formatData(det);
					vm.detlist = that.formatData(det);
				}
			})
			//pull to refresh
				var myScroll = this.widgets.detScroll;
		    var topSize = 30;

		    myScroll.scrollBy(0, -topSize);

		    var head = $('.head img'),
		          topImgHasClass = head.hasClass('up');
		    var foot = $('.foot img'),
		          bottomImgHasClass = head.hasClass('down');

		      // 判断顶部与底部的边界
		    myScroll.on('scroll', function () {
		        var y = this.y,
		            maxY = this.maxScrollY - y;
		        if (y >= 0) {
		            !topImgHasClass && head.addClass('up');
		            return '';
		        }
		        if (maxY >= 0) {
		            !bottomImgHasClass && foot.addClass('down');
		            return '';
		        }
		    });
			// 拖拽停止后的处理
		      myScroll.on('scrollEnd', function () {

		          // 松开到了上边界，弹回
		          if (this.y >= -topSize && this.y < 0) {
		              myScroll.scrollTo(0, -topSize);
		              head.removeClass('up');
		          } else if (this.y >= 0) {
		              head.attr('src', '/duoshangwang/images/ajax-loader.gif');
		              // ajax下拉刷新数据
		              $.ajax({
		                url: '/api/det.php',
		                data: {
		                  type: 'new'
		                },
										//url:'/duoshangwang/mock/det-new.json',
		                success: function (res) {
											//console.log(res.det);
		                  // 将新数据prepend到临时的一维数组liveListArr里
		                  that.liveListArr = res.det.concat(that.liveListArr);

		                  // 格式化最新的一维数组，进行avalon数组渲染
		                  vm.detlist = that.formatData(that.liveListArr);

		                  // 恢复现场
		                  setTimeout(function () {
		                    myScroll.scrollTo(0, -topSize);
		                    head.removeClass('up');
		                    head.attr('src', '/duoshangwang/images/indicator_arrow.png');
		                  }, 0);
		                }
		              });
		          }

		          var maxY = this.maxScrollY - this.y;
		          var self = this;

		          // 底部收回
		          if (maxY > -topSize && maxY < 0) {
		              myScroll.scrollTo(0, self.maxScrollY + topSize);
		              foot.removeClass('down')
		          } else if (maxY >= 0) {
		              foot.attr('src', '/duoshangwang/images/ajax-loader.gif');

		              // ajax上拉加载数据
		              $.ajax({
		                url: '/api/det.php',
		                data: {
		                  type: 'more'
		                },
										//url:'/duoshangwang/mock/det-more.json',
		                success: function (res) {
		                	//console.log(res)
		                  // 追加新数据
		                  that.liveListArr = that.liveListArr.concat(res.det);

		                  // 格式化数据再次赋值
		                  var moreArray = that.formatData(that.liveListArr);

		                  vm.detlist = moreArray;

		                  // 恢复现场
		                  setTimeout(function () {
		                    myScroll.scrollTo(0, self.y + topSize);
		                    foot.removeClass('down');
		                    foot.attr('src', '/duoshangwang/images/indicator_arrow.png');
		                  }, 0);
		                }
		              });
		          }
		      });
		}
	}
})
