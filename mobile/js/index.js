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
			$('.banner .slider-nav').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				autoplay: true,
				pauseOnHover: false,
				fade: true
			});
			$('.ban-news').slick({
				autoplaySpeed: 4000,
				slidesToShow: 3,
				dots: true,
				arrows: false,
				autoplay: true,
				pauseOnHover: false
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