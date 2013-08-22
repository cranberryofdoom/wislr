$(function() {	
	$('#get-invited').mouseover(
		function(){
			$(this).addClass('animated wiggle');
		});
	$('#get-invited').mouseout(
		function(){
			$(this).removeClass('animated wiggle');
		});

	$("#inputPhoneNumber").mask("(999) 999-9999");
	$('#inputPhoneNumber').keypress(
		function(e) {
			var a = [];
			var k = e.which;
			for (i = 48; i < 58; i++)
				a.push(i);
			if (!(a.indexOf(k)>=0))
				e.preventDefault();
		});

	$('#school-search').click(
		function() {
			$('#multiple-school-select').removeClass('animated fadeInDown');
			var search = $('#inputSchool').val().toUpperCase();
			var state = $('select.state').val();
			var schoolDatabase = Parse.Object.extend("Schools");
			var querySchools = new Parse.Query(schoolDatabase);
			querySchools.equalTo("schoolState", state);
			querySchools.startsWith("schoolName", search);
			querySchools.limit(1000);
			querySchools.find({
				success: function(results) {
					var schoolArray = new Array();
					for (var i = 0; i < results.length; i++) { 
						schoolArray[i] = results[i].get('schoolNameCity');
					}
					$('#multiple-school-select').find('option').remove().end();
					$.each(schoolArray,
						function(key, value){
							$('#multiple-school-select').append('<option>' + value + '</option>').val(value);
						});
					$('#multiple-school-select').show();
					$('#multiple-school-select').addClass('animated fadeInDown');
				},
				error: function(error) {
				}
			});
		});

$('#multiple-school-select').click(
	function(){
		var schoolselected = $('select#multiple-school-select option:selected').val();
		var school = $('#inputSchool');
		school.val(schoolselected);
	});

$("#get-invited").click(
	function(){
		var first = $('#inputFirstName').val();
		var last = $('#inputLastName').val();
		var phone = $('#inputPhoneNumber').val();
		var email = $('#inputEmail').val();
		var school = $('select#multiple-school-select option:selected').val();
		var empty = $(this).parent().find("input").filter(
			function() {
				return this.value === "";
			});
		if(empty.length) {
			alert("Please fill out the required fields.");
		} else {
			$.parse.post('Signups', {
				firstName : first,
				lastName : last,
				phoneNumber : phone,
				schoolName : school,
				email : email
			}, function(json){
				console.log(json);
			});
			$('.hero-form').addClass('animated hinge');
		}
		return false;
	});

});