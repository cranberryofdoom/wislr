$(function() {

	$('.accordion').on('show', function (e) {
		$(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('open-sidebar');
	});

	$('.accordion').on('hide', function (e) {
		$(this).find('.accordion-toggle').not($(e.target)).removeClass('open-sidebar');
	});

	var path = window.location.pathname;
	if (path == "/youth-advisory" || path == "/jobs" || path == "/about") {
		$('#company').addClass('open-sidebar');
		$('#collapseOne').addClass('in');
	}

	if (path == "/community" || path == "/privacy-policy" || path == "/tos") {
		$('#policies').addClass('open-sidebar');
		$('#collapseThree').addClass('in');
	}


	var pathSplit = "#" + path.substring(1,path.length);
	$(pathSplit).css("text-decoration", "underline");


});