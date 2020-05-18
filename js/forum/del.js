// Delete messages
function pdel(id, n ) {

	const ssider = $('input[name="ssid"]').val();

	$('#topicbody').on('click', 'a', function(event) {

		event.preventDefault();
		var url = $(this).attr('href');
		console.log(id);

		if (confirm('Do you confirm the removal?') ) {

			(window.pDelBut = document.getElementById('dbo' + id)) && (pDelBut.width = pDelBut.height = 13) && (pDelBut.src = '/.s/img/ma/m/i2.gif');
_uPostForm('', {url:url + id + '-8-0-' + ssider, 't_pid': n});
}

});

}