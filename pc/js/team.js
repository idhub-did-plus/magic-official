var index = new Vue({
	el: "#app",
	data: function(){
		return {
			lang: "ch",
			content: {}
		}
	},
	mounted: function() {
		if(localStorage.getItem('save_language')){
			this.lang = localStorage.getItem('save_language');
		}else{
			localStorage.setItem('save_language',this.lang);
		}
		this.getData();
		
		this.$nextTick(function(){
			
			$('.m-members .slider').slick({
				dots: false,
				arrows: true,
				autoplay: true,
				slidesToShow: 4,
			});
		});
	},
	methods: {
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