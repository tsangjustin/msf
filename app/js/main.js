window.onload = function() {
	init();
}


var init = function() {
	var form = document.querySelector('.content__form');
	var search_field = document.querySelector('.content__form__term')

	form.addEventListener('submit', function() {
		search_term = search_field.value.toLowerCase;

	});	
}
