console.log("hello world");

//------ENGAGE JS------

$().ready(function(){
  
console.log("We ready");

	//Hides car 2 till mulitplayer 
	// $('#car2').hide();


	//------PLAYER MOVEMENT------

	//Player 1 Movement
	var car1Score = 0; // to keep car in boundaries

	$(document).keyup(function(move){  
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
	$(document).keyup(function(move){  
		if (move.keyCode == 68){//Right Movement
			$("#car2").velocity({left: "+=50px"},2);
		}
		if (move.keyCode == 65){// Left
			$("#car2").velocity({left: "-=50px"},2);
		}
	});

	//------OBSTACLES------
	var ob1Speed = 5000;
	var ob1Num = 1;

	//Creates obsacles at top
	function createRanOb (){	
	  var array = [ 10,100, 200, 300]; //lanes on y axis
	  var randomOb = array[Math.floor(Math.random() * array.length)];
	  $('<div>'+ ob1Num +'</div>').appendTo('#gameboard').attr('id', 'ob1n' + ob1Num).addClass('ob1 car');
	  $('#ob1n' + ob1Num).css({left:randomOb,});
	  $('#ob1n' + ob1Num).velocity({top:'700px'}, ob1Speed, 'linear',function() {
	    $(this).remove();
	  });
	  ob1Num++;
	}

	

	//Will push random obsacles at set interval
	function pushOb1(){
		window.setInterval(function(){
			createRanOb();
		}, 3000);//3 seconds create time

	}

pushOb1();

//------Collision------

	// function collision($div1, $div2) {
 //        var x1 = $div1.offset().left;
 //        var y1 = $div1.offset().top;
 //        var h1 = $div1.outerHeight(true);
 //        var w1 = $div1.outerWidth(true);
 //        var b1 = y1 + h1;
 //        var r1 = x1 + w1;
 //        var x2 = $div2.offset().left;
 //        var y2 = $div2.offset().top;
 //        var h2 = $div2.outerHeight(true);
 //        var w2 = $div2.outerWidth(true);
 //        var b2 = y2 + h2;
 //        var r2 = x2 + w2;

 //       if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
 //        return true;
 //    }



// ----------



// var CANVAS_WIDTH = 480;
// var CANVAS_HEIGHT = 320;

// var canvasElement = $("<canvas width='" + CANVAS_WIDTH + 
//                       "' height='" + CANVAS_HEIGHT + "'></canvas>");
// var canvas = canvasElement.get(0).getContext("2d");
// canvasElement.appendTo('body');

// var FPS = 30;
// setInterval(function() {
//   update();
//   draw();
// }, 1000/FPS);


// function update() {
  
//   $(document).keyup(function(move){
//   		if (move.keyCode == 39){
// 			player.x += 1;
// 		}
// 		if (move.keyCode == 37){
// 		player.x -= 1;
// 		}
// 		});
// }


// //---


// //---

// function draw() {
//   canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//   canvas.fillStyle = "#000";
  
//   player.draw();
// }

// var player = {
//   color: "#00A",
//   x: 220,
//   y: 100,
//   width: 32,
//   height: 32,
//   draw: function() {
//     canvas.fillStyle = this.color;
//     canvas.fillRect(this.x, this.y, this.width, this.height);
//   }
// };





});//End brackets for ready