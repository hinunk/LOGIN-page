	$('input[type="text"],input[type="password"]').focus(function () {
	    $(this).animate({ 'opacity': '1' }, 200);
	});
	$('input[type="text"],input[type="password"]').blur(function () {
	    $(this).animate({ 'opacity': '.5' }, 200);
	});