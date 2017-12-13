console.log("hello world");

//------ENGAGE JS------

$().ready(function(){
  
console.log("We ready");

	//Hides car 2 till mulitplayer 
	// $('#car2').hide();


	//------PLAYER MOVEMENT------

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

	//------OBSTACLES------

	var ob1Speed = 5000;
	var ob1Num = 1;


	//Creates obsacles at top
	function createRanOb (){
	// var randomOb = Math.floor((Math.random() *480) + 60);
	var randomOb = -10;
	$('<div>'+ ob1Num +'</div>').appendTo('#gameboard').attr('id', 'ob1n' + ob1Num).addClass('ob1 car');
	$('#ob1n' + ob1Num).css({top:randomOb, display: 'inline'});
	$('#ob1n' + ob1Num).velocity({top:'1000px'}, ob1Speed, function() {
		$(this).remove();
	});
	ob1Num++;
	console.log(randomOb);
	console.log(ob1Num);
	}

	
	

	//Will push random obsacles at set interval
	function pushOb1(){
		window.setInterval(function(){
			createRanOb();
		}, 3000);
	}

pushOb1();

});//End brackets for ready