

$(document).ready(function() {

	$('uk-pagination').addClass('InputfieldIgnoreChanges');
	
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	var id = urlParams.get('id');
	var url = '?prevNextTabs='+id;
	
	$.get(url, function(response) {
		console.log(response);
		var next = response.next;
		var prev = response.prev;
		var first = response.first;
		var last = response.last;

		// Section 1: Breadcrumbs, UiKit
		$('.prev-next-links .uk-pagination-previous a i').removeClass('fa-spinner fa-spin').addClass('fa-angle-left');
		$('.prev-next-links .uk-pagination-next a i').removeClass('fa-spinner fa-spin').addClass('fa-angle-right');

		// Section 2: Breadcrumbs, Reno
		$('.prev-next-links .pagination-previous a i').removeClass('fa-spinner fa-spin').addClass('fa-angle-left');
		$('.prev-next-links .pagination-next a i').removeClass('fa-spinner fa-spin').addClass('fa-angle-right');

		// Section 3: Tabs
		$('#_ProcessPageEditPrev i').removeClass('fa-spinner fa-spin').addClass('fa-angle-double-left');
		$('#_ProcessPageEditNext i').removeClass('fa-spinner fa-spin').addClass('fa-angle-double-right');

		if(prev) {	
			$('.prev-next-links .uk-pagination-previous a, .prev-next-links .pagination-previous a, #_ProcessPageEditPrev')
			.prop('href', config.urls.admin + 'page/edit/?id='+prev)
			.prop('title', response.prevTitle);	
		} else {
			$('.prev-next-links .uk-pagination-previous a, .prev-next-links .pagination-previous a, #_ProcessPageEditPrev')
			.prop('href', config.urls.admin + 'page/edit/?id='+last)
			.prop('title', response.lastTitle);
		}
		
		if(next) {
			$('.prev-next-links .uk-pagination-next a, .prev-next-links .pagination-next a, #_ProcessPageEditNext')
			.prop('href', config.urls.admin + 'page/edit/?id='+next)
			.prop('title', response.nextTitle);
		} else {
			$('.prev-next-links .uk-pagination-next a, .prev-next-links .pagination-next a, #_ProcessPageEditNext')
			.prop('href', config.urls.admin + 'page/edit/?id='+first)
			.prop('title', response.firstTitle);
		}

		$('.prev-next-links .uk-pagination-previous a').tooltip();
		$('.prev-next-links .uk-pagination-next a').tooltip();
	
		// Reno prev/next in breadcrumbs area
		$('.prev-next-links .pagination-previous a').tooltip();
		$('.prev-next-links .pagination-next a').tooltip();

		// Prev/Next in Tabs -----
		var nextLink = $("#_ProcessPageEditNext"),
			prevLink = $("#_ProcessPageEditPrev");

		nextLink.tooltip();
		prevLink.tooltip();

	},"json");


	// Prev/Next in Tabs -----
	var nextLink = $("#_ProcessPageEditNext"),
		prevLink = $("#_ProcessPageEditPrev");

	// UiKit Required Mods for Tabs -----
	nextLink.parent().addClass('nextLink');
	prevLink.parent().addClass('prevLink');

	if(prevLink.hasClass('space-right')) {
		prevLink.parent().addClass('spaceRight');
	}

	nextLink.click(function(e) {
		e.stopPropagation();
	});

	prevLink.click(function(e) {
		e.stopPropagation();
	});

});
