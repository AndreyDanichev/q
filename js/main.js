$(document).ready(function(){

		// slide2id
		$("a.mouse_scroll,nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
			highlightSelector:"nav a"
		});

		$(function() {
			$(".owl-carousel").owlCarousel({
				items:2,
				loop:true,
				dots:true,
				margin:5,
			});
		});
	});