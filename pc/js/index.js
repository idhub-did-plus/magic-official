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
			$('.slider-nav').slick({
				autoplaySpeed: 4000,
				dots: true,
				arrows: true,
				autoplay: true,
				pauseOnHover: false
			});
			$(".banner .slick-dots li").each(function() {
				var ss = $(this).find("button").html();
				var txt = "No" + ss;
				$(this).find("button").html(txt);
			});
		});
	},
	methods: {
		changeLanguage: function (index){
			var list = ['ch','en'];
			this.lang = list[index];
			this.getData();
			localStorage.setItem('save_language',this.lang);
		},
		getData: function (){
			var that = this;
			var url = "language/index/index_ch.json";
			if(this.lang == "en"){
				url = "language/index/index_en.json";
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