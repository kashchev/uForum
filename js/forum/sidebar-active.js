$("#navsub li").click(function() {

	$('#navsub li').removeClass('active');
	$(this).addClass('active');

});

$("#navfeed").click(function() {

	$('#feedface').removeClass('d_none');
	$('#feedface').addClass('d_block');
	$('#listface').removeClass('d_block');
	$('#listface').addClass('d_none');

});

$("#navlist").click(function() {

	$('#feedface').removeClass('d_block');
	$('#feedface').addClass('d_none');
	$('#listface').removeClass('d_none');
	$('#listface').addClass('d_block');
	$("#listface").load('/forum/?category #category .gDivRight', function() {
		$.getScript("/js/forum/list.js");
	});

});