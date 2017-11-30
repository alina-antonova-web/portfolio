$(document).ready(function() {

	$(".project__maket a").append('<div class="img-hover"><i class="fa fa-search" aria-hidden="true"></i><br><span>смотреть макет</span> </div>');

	$(".project__maket a").hover(function(){
	    $(".img-hover", this).fadeIn(600);
	    }, function(){
	  	$(".img-hover", this).fadeOut(600);
	});
	
});