$(document).ready(function() {

	$('#contact-form').validate({
		rules: {
			fio: { required: true },
			email: { required: true, email: true },
			user_message: { required: true }
		},

		messages: {
			fio: "Пожалуйста, введите своё имя.",
			email: {
				required: "Пожалуйста, введите свой email.",
				email: "Email должен быть в формате name@domaim.com. Возможно Вы ввели email с ошибкой."
			},
			user_message: "Пожалуйста, введите текст сообщения.",

		},

		submitHandler: function() {
			ajaxFormSubmit();
		}
	});


	// AJAX form send-answer

	function ajaxFormSubmit(){

		var string = $("#contact-form").serialize();

		$.ajax({
			type: "POST",
			url: "php/mail.php",
			data: string,

			success: function(html){
				$("#contact-form").slideUp(800);
				$('#answer').html(html);
			}
		});

		return false;
	}

});