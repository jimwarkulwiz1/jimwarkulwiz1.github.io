var integer = Math.ceil((Math.random()*100)+1);
var previousGuess = 0;

$(document).ready(function(){
	$('#guess').focus(function() {
		if ($(this).val() == $(this).attr("value")){
			$(this).val("");
		}
	});

$('#submit').on('click', function() {
	var userGuess = $("input[name='guess']").val();
	console.log(userGuess);
	if(userGuess == integer){
		$("#correct").show();
		$("#warmer").hide();
		$("#colder").hide();
		$("#clue").html('There you go!').show();
	}else if(userGuess < 1 || userGuess > 100){
		$("#correct").hide();
		$("#warmer").hide();
		$("#colder").hide();
		$('#clue').html('That\'s not between 1 and 100').show();
	}else{
		if(Math.abs(integer-userGuess) < Math.abs(integer-previousGuess)){
			$("#warmer").show();
			$("#colder").hide();
			$('#clue').html('You\'re close.').show();
		}else{
			$("#colder").show();
			$("#warmer").hide();
			$('#clue').html('You\'re going the wrong way.').show();
			}
		userGuess = previousGuess;
	}
});
	
	$("#guess").keyup(function (enter) {
			if(enter.keyCode == 13) {
			event.preventDefault();
			submit.click();
		}
	}); 		
});