$(document).ready(function() {

	// fancybox

	$(".fancybox").fancybox({
		closeBtn: true,
		arrows : true,
		nextClick: true,

		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
});