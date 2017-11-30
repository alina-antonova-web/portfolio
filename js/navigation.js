$(document).ready(function() {

	// Navigation 

	var pull = $("#navigation__toggle");
	var nav = $("#navigation__items");

	$(pull).on('click', function(e) {
		e.preventDefault();		
		$(nav).slideToggle();
		$(this).toggleClass('navigation__toggle-button--active');
		$("#navigation").toggleClass('navigation--active');
	});

	$(window).resize(function() {
		var w = $(window).width();
		if(w > 992) {
			nav.removeAttr('style');
			pull.removeClass('navigation__toggle-button--active');
			$("#navigation").removeClass('navigation--active');
		} else {

	    }
	});

	// Скрываем меню при клике на него на смартфоне и планцете
	// По клику на ссылку в меню запускаем ф-ю fnstart();
	$('nav.navigation a').on("click", function(){
		fnstart();
	});

	// В ф-ии fnstart(); проверяем - если меню открыто (проверяем по наличию класса --active у кнопки pull)
	// тогда убираем класс модификатор --active у кнопки pull
	// и сворачиваем/скрываем меню 
	function fnstart(){	
		if ( pull.hasClass("navigation__toggle-button--active")  ) {
   			pull.toggleClass('navigation__toggle-button--active');
   			$("#navigation").toggleClass('navigation--active');
			nav.slideToggle();
		}
	};



	

	//slide2id
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});


	
});