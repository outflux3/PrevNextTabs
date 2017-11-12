$(document).ready(function() {

 	var nextLink = $("#_ProcessPageEditNext"),
 		prevLink = $("#_ProcessPageEditPrev");

 	nextLink.tooltip();
	prevLink.tooltip();

	nextLink.parent().addClass('nextLink');
	prevLink.parent().addClass('prevLink');

	nextLink.click(function(e) {
		e.stopPropagation();
	});

	prevLink.click(function(e) {
		e.stopPropagation();
	});

});
