$(document).ready(function () {
	
	$('.burger-nav').on("click",function(){
		$('#menus').toggleClass("open");
	})
	$('#menus li a').on("click",function(){
		$('#menus').toggleClass("open");
})
	var scrollLink = $('.scroll');
	
	//Smooth scrolling
	scrollLink.click(function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
			},1000); 
		/*offset calculates the distance between top and next part of section 
		 this.hash reads the href attribute of the scrollLink object */
	})
    
	}) 
