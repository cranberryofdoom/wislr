$(function() {
	$('#get-invited').mouseover(
		function(){
			$(this).addClass('animated wiggle');
		});
	$('#get-invited').mouseout(
		function(){
			$(this).removeClass('animated wiggle');
		});

	$('#get-invited').click(
		function(){
			$('.hero-form').addClass('animated hinge');
		});
	$(this).detach();
});