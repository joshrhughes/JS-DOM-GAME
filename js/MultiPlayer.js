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
	$('h3').hide();
    $('#car1').hide();
    $('#car2').hide();
    $('button').hide();
    $('p').hide();
    $('.intro1').delay(1000).fadeIn(500,function () {
    	$('.intro2').delay(1000).fadeIn(1000,function(){
    		$('.intro3').delay(3000).fadeIn(1000,function(){
    				$('#play').delay(2000).fadeIn(1000);
    				$("#play").velocity({
  						translateY: "-10px"}, {loop: true}).velocity("reverse");
    		
    		});
    	});
    });
  
	
	$( '<div></div>').appendTo('#gameboard').addClass('white');
	//------BUTTONS-----

	$('#play').click(function(){
			gameStart = true;
			setInterval(setTime, 1000); //Starts Timer
			pushOb1();
			pushOb2();
			// $(this).delay(12000).pushOb2();  // Starts obsacels 
			$('.white').fadeOut("slow");
			$('#car1').show();
			$('#car2').show();
			$('h3').show();
			$('.intro').hide();
			
		$('#play').remove();  //Removes button. 
		});
		

	$("#playAgain").click(function(){
		location.reload();
	});

	//------ROAD MOVEMENT------
	var road1Num = 1;
	function createRoad (){	 //Creates a feeling of movement
	  if(gameOver == true){  
      		$(this).stop();
      		return;
      		}
      		else{
	  $('<div></div>').appendTo('#gameboard').attr('id', 'road1' + road1Num).addClass('road');
	  $('#road1' + road1Num).css({left:'1'});
	  $('#road1' + road1Num).velocity({top:'700px'}, 3500, 'linear',function() {
	    $(this).remove();
	  });
	  road1Num++;
	}
}
createRoad();
	function pushroad1(){
		if(gameOver == true){  //Stops time if car hit
      		$(this).stop();
      		return;
      		}
      		else{	
		window.setInterval(function(){
			createRoad();
		}, 1545);// creates a road on a interval

	}
	}


pushroad1();  //pushes continious road image

	//------PLAYER MOVEMENT------
	var $car = $('.car');

	//Player 1 Movement
	var car1Score = 0;
	var car2Score = 0; // to keep car in boundaries

	$(document).keyup(function(move){  
		$car = $('.car');
		if ((move.keyCode == 39) && (car1Score <= 4)){//Right Movement
				$("#car1").velocity({left: "+=30px"},2);
				car1Score +=1;
				
	}
		if ((move.keyCode == 37) && (car1Score >= -4)){//Left 
			$("#car1").velocity({left: "-=30px"},2);
			car1Score -=1;
			
		}
	});
	// Player 2 Movement 
	$(document).keyup(function(move){  
		$car = $('.car');
		if ((move.keyCode == 68) && (car2Score >= 4)){//Right Movement
			$("#car2").velocity({left: "+=30px"},2);
			car2Score +=1;
		}
		if ((move.keyCode == 65) && (car2Score >= -4)){// Left
			$("#car2").velocity({left: "-=30px"},2);
			car2Score -=1;
		}
	});

	//**************************************************possibly use animate to make car movement smooth
	//------TIMER------

	//create time on board
	  var minutesLabel = document.getElementById("minutes");
      var secondsLabel = document.getElementById("seconds");
      var totalSeconds = 0;
      

      // setInterval(setTime, 1000);


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
            if(valString.length < 2){
                return "0" + valString;
            }
            else{
                return valString;
            }
        }
	
      
	//------OBSTACLES------
	var ob1Speed = 5000;
	var ob1Num = 1;

	//Creates obsacles at top
	function createRanOb1 (){	
	  if(gameOver == true){  //Stops time if car hit
      		return;
      		}
      		else{
	  var array = [ 60, 175, 290]; //lanes on y axis
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
			createRanOb1();
		}, 3000);//3 seconds create ime
	
	}
	}

	// obstacle 2
	var ob2Speed = 4000;
	var ob2Num = 1;

	//Creates obsacles at top
	function createRanOb2 (){	
	  if(gameOver == true){  //Stops time if car hit
      		return;
      		}
      		else{
	  var array = [ 60, 175, 290]; //lanes on y axis
	  var randomOb = array[Math.floor(Math.random() * array.length)];
	  $('<div></div>').appendTo('#gameboard').attr('id', 'ob2n' + ob2Num).addClass('ob2 ob');
	  $('#ob2n' + ob2Num).css({left:randomOb, zIndex: '-1'});
	  $('#ob2n' + ob2Num).velocity({top:'700px'}, ob2Speed, 'linear',function() {
	    $(this).remove();
	  });
	  ob2Num++;
	  if (gameOver == true){
	    	$(this).stop();
	    }
	}
	}


	//Will push random obsacles at set interval
	function pushOb2(){
		if(gameOver == true){  //Stops time if car hit
      		return;
      		}
      		else{
		window.setInterval(function(){
			createRanOb2();
		}, 2000);//3 seconds create ime
	
	}
	}

// pushOb1();


//------Collision------

// function obPosition() {
//   $('.ob').each( function() {
//     var x1 = $('#car1').position().left;
//     var y1 = $('#car1').position().top;
//     var x3 = $(this).position().left;
//     var y3 = $(this).position().top;

//     if (car1running === true && (y1 + $('#car1').outerHeight(true)) < y3 ||
//       y1 > (y3 + $(this).outerHeight(true))  ||
//       (x1 + $('#car1').outerWidth(true)) < x3 ||
//       x1 > (x3 + $(this).outerWidth(true))) {
//     } else {
//       car1running = false;
//       gameOver = true;
//       $( '<div></div>').appendTo('#gameboard').addClass('black').fadeIn();  //Fades to black
//       console.log("you dead");
      
//       $('.outro1').delay(1000).fadeIn(500,function () {  //brings in outro message
//       	$('.outro2').delay(1000).fadeIn(1000,function(){
//     		$('#playAgain').delay(2000).fadeIn(1000, function(){
//     			$("#playAgain").velocity({translateY: "-10px"}, {loop: true}).velocity("reverse");
//     		});
//     	});
//     });
//       $(this).remove();
//     }
//   }); ob each
// }  //obPosition
//---------
function obPosition() {
  $('.ob').each( function() {
    var x1 = $('#car1').position().left;
    var y1 = $('#car1').position().top;
    var x2 = $('#car2').position().left;
    var y2 = $('#car2').position().top;
    var x3 = $(this).position().left;
    var y3 = $(this).position().top;
    
    if (car1running === true && (y1 + $('#car1').outerHeight(true)) < y3 ||
      y1 > (y3 + $(this).outerHeight(true))  ||
      (x1 + $('#car1').outerWidth(true)) < x3 ||
      x1 > (x3 + $(this).outerWidth(true))) {
        // console.log(false);
    } else {
        car1running = false;
      	gameOver = true;
      	$( '<div></div>').appendTo('#gameboard').addClass('black').fadeIn();  //Fades to black
      	console.log("you dead");
      	$('.name').append(' PLAYER 1');
      	$('.outro1').delay(1000).fadeIn(500,function () {  //brings in outro message
      		$('.outro2').delay(1000).fadeIn(1000,function(){
    			$('#playAgain').delay(2000).fadeIn(1000, function(){
    				$("#playAgain").velocity({translateY: "-10px"}, {loop: true}).velocity("reverse");
    			});
    		});
    	});
      $(this).remove();
      return;
    }
    if (car2running === true && (y1 + $('#car2').outerHeight(true)) < y3 ||
      y1 > (y3 + $(this).outerHeight(true))  ||
      (x1 + $('#car2').outerWidth(true)) < x3 ||
      x1 > (x3 + $(this).outerWidth(true))) {
        // console.log(false);
    } else {
      car2running = false;
      	gameOver = true;
      	$( '<div></div>').appendTo('#gameboard').addClass('black').fadeIn();  //Fades to black
      	console.log("you dead");
      	$('.name').append('PLAYER 2');
      	$('.outro1').delay(1000).fadeIn(500,function () {  //brings in outro message
      		$('.outro2').delay(1000).fadeIn(1000,function(){
    			$('#playAgain').delay(2000).fadeIn(1000, function(){
    				$("#playAgain").velocity({translateY: "-10px"}, {loop: true}).velocity("reverse");
    			});
    		});
    	});
      $(this).remove();
      return;
	}  
  });
}

// Removes player one from gameboard
function removeCar1() {
  $('#car1').remove();
}

//removes player two from gameboard
function removeCar2() {
  $('#car2').remove();
}


//----------
// Checks for collision
setInterval(function() {
  obPosition();
}, checkObPos);



});//End brackets for ready