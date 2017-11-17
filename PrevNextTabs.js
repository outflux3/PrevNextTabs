$(document).ready(function() {

	// UiKit prev/next in breadcrumbs area
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

	// UiKit Required Mods -----
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
