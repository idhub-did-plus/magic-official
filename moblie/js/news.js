var index = new Vue({
	el: "#app",
	data: function(){
		return {
			lang: "ch",
			content: {},
			tab01: 0
		}
	},
	mounted: function() {
		if(localStorage.getItem('save_language')){
			this.lang = localStorage.getItem('save_language');
		}else{
			localStorage.setItem('save_language',this.lang);
		}
		this.getData();
	},
	methods: {
		tabClick: function (tab01){
			this.tab01 = tab01;
			// TODO 执行切换相关代码
			
		},
		// 切换语言
		changeLanguage: function (index){
			var list = ['ch','en'];
			this.lang = list[index];
			this.getData();
			localStorage.setItem('save_language',this.lang);
		},
		// 获取语言包
		getData: function (){
			var that = this;
			var url = "language/news/news_ch.json";
			if(this.lang == "en"){
				url = "language/news/news_en.json";
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