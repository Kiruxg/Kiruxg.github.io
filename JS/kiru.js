$(document).ready(function () {
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
    $('#bars').click(function() {
		toggleNavigation();
    });


// The toggleNav function itself
function toggleNavigation() {
    if ($(nav).hasClass('display-nav')) {
        // Close Nav
        $(nav).removeClass('display-nav');
    } else {
        // Open Nav
        $(nav).addClass('display-nav');
    }
}

	
	}) 
