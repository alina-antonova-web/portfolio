$(document).ready(function() {

	$('#contact-form').validate({
		rules: {
			fio: { required: true },
			email: { required: true, email: true },
			message: { required: true }
		},

		messages: {
			fio: "Пожалуйста, введите своё имя.",
			email: {
				required: "Пожалуйста, введите свой email.",
				email: "Email должен быть в формате name@domaim.com. Возможно Вы ввели email с ошибкой."
			},
			message: "Пожалуйста, введите текст сообщения.",

		}
	});

});