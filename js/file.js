console.log("hello");



$().ready(function(){
  
console.log("We ready");

//Hides car 2 till mulitplayer 
$('#car2').hide();




//Player 1 Movement
$(document).keyup(function(move){  //Right Movement
	if (move.keyCode == 39){
		$("#car1").velocity({left: "+=50px"},2);
	}
	if (move.keyCode == 37){
		$("#car1").velocity({left: "-=50px"},2);
	}
});
//Player 2 Movement 
$(document).keyup(function(move){  //Right Movement
	if (move.keyCode == 68){
		$("#car2").velocity({left: "+=50px"},2);
	}
	if (move.keyCode == 65){
		$("#car2").velocity({left: "-=50px"},2);
	}
});

});//End brackets for ready