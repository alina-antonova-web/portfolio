$(document).ready(function() {

	var submitted=false;

	$('#contact-form').validate({
		rules: {
			entry.1468846692: { required: true },
			entry.29343622: { required: true, email: true },
			entry.1953925097: { required: true }
		},

		messages: {
			entry.1468846692: "Пожалуйста, введите своё имя.",
			entry.29343622: {
				required: "Пожалуйста, введите свой email.",
				email: "Email должен быть в формате name@domaim.com. Возможно Вы ввели email с ошибкой."
			},
			entry.1953925097: "Пожалуйста, введите текст сообщения.",

		},

		submitHandler: function() {
			//ajaxFormSubmit();
			gForm();
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


	// Google form

	function gForm() {
		$("#contact-form").slideUp(800);
		$('#answer').html("<div class='contact-form__success'>Форма отправлена успешно!</div>");
	}

});