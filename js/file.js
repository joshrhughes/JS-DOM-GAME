console.log("hello world");

//------ENGAGE JS------

$().ready(function(){
  
console.log("We ready");

	//Has the game started? 
	var gameStart = false;
	
	//Is the game over
	var gameOver = false;

	//Have cars hit anyting to end the game
	var car1running = true;
	var	car2running = true;


	//timers
	var checkObPos = 400;

	//Hides car 2 till mulitplayer 
	// $('#car2').hide();


	//------PLAYER MOVEMENT------
	var $car = $('.car');

	//Player 1 Movement
	var car1Score = 0; // to keep car in boundaries

	$(document).keyup(function(move){  
		$car = $('.car');
		if ((move.keyCode == 39) && (car1Score <= 2)){//Right Movement
				$("#car1").velocity({left: "+=50px"},2);
				car1Score +=1;
				
	}
		if ((move.keyCode == 37) && (car1Score >= -2)){//Left 
			$("#car1").velocity({left: "-=50px"},2);
			car1Score -=1;
			
		}
	});
	//Player 2 Movement 
	// $(document).keyup(function(move){  
	// 	$car = $('.car');
	// 	if (move.keyCode == 68){//Right Movement
	// 		$("#car2").velocity({left: "+=50px"},2);
			
	// 	}
	// 	if (move.keyCode == 65){// Left
	// 		$("#car2").velocity({left: "-=50px"},2);

	// 	}
	// });

	//**************************************************possibly use animate to make car movement smooth
	//------TIMER------

	//create time on board
	  var minutesLabel = document.getElementById("minutes");
      var secondsLabel = document.getElementById("seconds");
      var totalSeconds = 0;
      setInterval(setTime, 1000);


      function setTime(){
      	if(gameOver == true){  //Stops time if car hit
      		return;
      		}
      		else{
            ++totalSeconds;
            secondsLabel.innerHTML = pad(totalSeconds%60);
            minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
        }
      
      }

        function pad(val){
            var valString = val + "";
            if(valString.length < 2)
            {
                return "0" + valString;
            }
            else
            {
                return valString;
            }
        }
	
        if (car1running === false){
        	setTime.stop();
        }

	//------OBSTACLES------
	var ob1Speed = 5000;
	var ob1Num = 1;
	var $ob = $('.ob');

	//Creates obsacles at top
	function createRanOb (){	
	  if(gameOver == true){  //Stops time if car hit
      		return;
      		}
      		else{
	  var array = [ 15, 75, 300, 500]; //lanes on y axis
	  var randomOb = array[Math.floor(Math.random() * array.length)];
	  $('<div></div>').appendTo('#gameboard').attr('id', 'ob1n' + ob1Num).addClass('ob1 ob');
	  $('#ob1n' + ob1Num).css({left:randomOb, zIndex: '-1'});
	  $('#ob1n' + ob1Num).velocity({top:'700px'}, ob1Speed, 'linear',function() {
	    $(this).remove();
	  });
	  ob1Num++;
	  if (gameOver == true){
	    	$(this).stop();
	    }
	}
	}


	//Will push random obsacles at set interval
	function pushOb1(){
		if(gameOver == true){  //Stops time if car hit
      		return;
      		}
      		else{
		window.setInterval(function(){
			createRanOb();
		}, 3000);//3 seconds create ime
	}
	}

pushOb1();


//------Collision------

function obPosition() {
  $('.ob').each( function() {
    var x1 = $('#car1').position().left;
    var y1 = $('#car1').position().top;
    var x3 = $(this).position().left;
    var y3 = $(this).position().top;

    if (car1running === true && (y1 + $('#car1').outerHeight(true)) < y3 ||
      y1 > (y3 + $(this).outerHeight(true))  ||
      (x1 + $('#car1').outerWidth(true)) < x3 ||
      x1 > (x3 + $(this).outerWidth(true))) {
    } else {
      car1running = false;
      gameOver = true;
      // $(this).stop();
      console.log("you dead");
      $(this).remove();
    }
  });
}  


// Checks for collision
setInterval(function() {
  obPosition();
}, checkObPos);



});//End brackets for ready