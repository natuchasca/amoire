/* =======================================
* COMMON JS 
* =======================================
*/
$(document).ready(function() {
	// Hide burger menu
	//-----------------------------------------------
	$(document).on('click','.navbar-collapse.in',function(e) {
	  if( $(e.target).is('a') ) {
		  $(this).collapse('hide');
		}
	});

	//Scroll to top
	//-----------------------------------------------
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$(".scrollToTop").fadeIn();
		} else {
			$(".scrollToTop").fadeOut();
		}
	});

	$(".scrollToTop").click(function() {
		$("body,html").animate({scrollTop:0},800);
	});

}