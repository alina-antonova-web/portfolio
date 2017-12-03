$(document).ready(function() {

	// Navigation 

	var navButton = $("#navigation__toggle");
	var navMenu = $("#navigation__items");
	var navContainer = $("#navigation");


	$(navButton).on('click', function(e) {
		e.preventDefault();		
		navButtonToggle();
	});

	$(window).resize(function() {
		var w = $(window).width();
		if(w > 768) {
			navMenu.removeAttr('style');
			navButton.removeClass('navigation__toggle-button--active');
			navContainer.removeClass('navigation--active');
		}
	});

	// Скрываем меню при клике на него на смартфоне и планцете
	// По клику на ссылку в меню запускаем ф-ю navButtonToggle();
	$('nav.navigation a').on("click", function(){
		if ( navButton.hasClass("active")  ) {
			navButtonToggle();
		}
	});

	function navButtonToggle(){	
		navButton.toggleClass('active');
		navContainer.toggleClass('navigation--active');
		navMenu.slideToggle();		
	};


	//slide2id
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id,a.mouse_scroll").mPageScroll2id({
	    highlightSelector:"nav a"
	});
	
});