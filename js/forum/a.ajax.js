// links inside #listface, #chater
$(function() {

	$('#listface, #chater').on('click', 'a', function(event) {

		event.preventDefault();

		window.url = $(this).attr('href');
		window.url1 = url.split('-')[0];
		window.url2 = url.split('-')[1];
	});

	$('#listface').on('click', 'a', function(event) {

		$("#chater").load(url + ' #sections');
		if ( $('#typesection').on('click') )
			$("#chater").css("height", "100%");
		$('li[id^="topicfeed-"]').removeClass('active');
		$('#chater_form').empty();
	});

	$('#chater').on('click', 'a', function(event) {

		$("#chater").load(url + ' #topicbody');
		if ( $('#typetopic').on('click') )
			$("#chater").css("height", "calc(100% - 120px)");
		$("#chater_form").load(url1 + - + url2 + '-0-1-4' + ' #formbody', function() {
			$.getScript("/js/forum/formloadtopic.js");
			$.getScript("/js/forum/del.js");
		});
	});

});

// location aside
$(window).resize(function() {

	if ( $(window).width() > 960 && $('aside').hasClass("aside-active") ) {

		$('#hidden').trigger('click');
	}

});