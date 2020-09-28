$(function() {

	//scroll down menu
	$('.menu-title').hover(function(){
		$(this).find('.sub-menu-wrapper').css('display' , 'flex');
	}, function(){
		$(this).find('.sub-menu-wrapper').hide();
	});
	
	//lightbox gallery
	$(".rslides").responsiveSlides();

	//scroll top button
	$('#back_to_top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 800);
		return false;
	});

});