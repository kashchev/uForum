function haveFiles() {

	var f = false;
	$("input.uplFileFl").each(function() {
		if ( $(this).val('') ) f = true;
	});

	return f
}

document.addform.onsubmit = function() {

	var namewnd = "w" + Math.floor(Math.random() * 999);
	_uWnd.alert('<img src="/.s/img/wd/3/ajax.gif" border="0" alt="Загрузка">', 'Загрузка', {
		name: namewnd, w: 250, h: 80, tm: 0
	});

	$("#frF16").attr("disabled", true);

	if ( haveFiles() ) {

		_uPostForm($("form[name='addform']"), {
			success: function(dt) {
				parseResult(dt, namewnd);
			}
		})

	} else {

		$.post("/forum", $("form[name='addform']").serialize(), function(dt) {
parseResult(dt, namewnd)
})

	};

	return false;
};

function parseResult(dt, namewnd) {

	var err = $("#frM2", dt).text();

	if (err) {

		_uWnd.content(namewnd, '<center>' + err + '</center>');
		_uWnd.setTitle(namewnd, 'Ошибка');
		$("#frF16").attr("disabled", false);

	} else if ( $(dt).text().indexOf("Post has been added") > -1 ) {

		$("textarea#message").val('');
		$("form[name='addform'] input:file").val('');
		$("#frF16").attr("disabled", false);
		$('.active').trigger('click');

	} else {

		_uWnd.content(namewnd, 'Что-то пошло не так...');
		_uWnd.setTitle(namewnd, 'Ошибка');
		$("#frF16").attr("disabled", false);

	}

	setTimeout(function() {
		_uWnd.close(namewnd)
	}, 2000);

};