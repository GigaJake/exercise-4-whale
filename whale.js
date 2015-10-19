jQuery(document).ready(function($){
	var num = parseInt(location.hash.substr(1));
	console.log(num);

	if(isNaN(num))
	{
		num = 0;
	}

	$.get('/whale/txt/' + num + '.txt', function(txt) {
		console.log(txt);
	});
});
