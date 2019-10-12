var index = new Vue({
	el: "#app",
	data: function(){
		return {
			lang: "ch",
			content: {},
			list2: {
				// 初始化数量
				num: 4,
				// 每次递增
				add: 2
			}
		}
	},
	mounted: function() {
		if(localStorage.getItem('save_language')){
			this.lang = localStorage.getItem('save_language');
		}else{
			localStorage.setItem('save_language',this.lang);
		}
		this.getData();
		
		// this.$nextTick(function(){
			
		// 	$('.m-members .slider').slick({
		// 		dots: false,
		// 		arrows: true,
		// 		autoplay: true,
		// 		slidesToShow: 4,
		// 	});
		// });
	},
	computed: {
		getList2: function(){
			return this.content.rowB2.list.slice(0,this.list2.num);
		}
	},
	methods: {
		// 切换语言
		changeLanguage: function (index){
			var list = ['ch','en'];
			this.lang = list[index];
			this.getData();
			localStorage.setItem('save_language',this.lang);
		},
		getMore: function() {
			console.log(this.content.rowB2.list.length);
			this.list2.num += this.list2.add;
			if(this.list2.num >= this.content.rowB2.list.length){
				this.list2.num = this.content.rowB2.list.length;
			}
		},
		// 获取语言包
		getData: function (){
			var that = this;
			var url = "language/team/team_ch.json";
			if(this.lang == "en"){
				url = "language/team/team_en.json";
			}
			$.ajax({
				url: url,
				type: "GET",
				async: false,
				success: function(res){
					that.content = res;
				}
			});
		}
	}
});