console.log("hello world");

//------ENGAGE JS------

$().ready(function(){

$('.rules').hide();
$('#rules').click(function(){
	$('.rules').show();
});

$('.rules').click(function(){
	$('.rules').hide();
});
});//End brackets for ready