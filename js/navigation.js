// $(document).ready(function() {

// 	// Опеделяем переменные
// 	var navToggle = $('.open');
// 	var navMenuOpen = 'oppenned';
// 	var navLink = $('.mobile__link');

// 	// События по клику на иконку
// 	navToggle.on('click', function(e){
// 		e.preventDefault();
// 		navToggle.toggleClass(navMenuOpen);
// 	})

// 	// События по клику на ссылки
// 	navLink.on('click', function(){
// 		if ( navToggle.hasClass(".oppenned") ) {
// 		}
// 		navToggle.removeClass(".oppenned");
// 	})

// 	$(window).resize(function(){
// 		var w = $(window).width();
// 		if(w > 1206 && navToggle.hasClass(navMenuOpen)) {
// 			navToggle.removeClass(navMenuOpen);
// 		}
// 	})
// }); 