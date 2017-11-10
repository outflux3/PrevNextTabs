 $(function() {
    $("#_ProcessPageEditNext").tooltip();
    $("#_ProcessPageEditPrev").tooltip();
 });


$(document).ready(function() {
	$('#_ProcessPageEditNext').click(function(e) {
		e.stopPropagation();
	});

	$('#_ProcessPageEditPrev').click(function(e) {
		e.stopPropagation();
	});
});
