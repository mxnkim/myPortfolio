//this must be in every document so that the javascript does not start
//effecting items that have not already loaded
// it says select the document chain it to the ready function which means it will function
// once everything is ready



//dropdown menu

$(document).ready(function(){

	var counter = .4;
	$('body').click(function(){
		counter++;
		if(window.console){ 
		console.debug(counter);	
		}
	});

	//1
	var isOpen = false;
	$('#indexcontent1').click(function(){

		if(isOpen == false){
			$(this).children('#content1').slideDown();
			isOpen = true;
		}
		else{
			$(this).children("#content1").slideUp();
			isOpen = false;
		}
	});	
	
	$('span.toggle').click(function(){
		$('#indexcontent2').slideToggle(400);	
	});
	
	
	
	
	
	
	
	
	//2
	var isOpen = false;
	$('#indexcontent2').click(function(){

		if(isOpen == false){
			$(this).children('#content2').slideDown();
			isOpen = true;
		}
		else{
			$(this).children("#content2").slideUp();
			isOpen = false;
		}
	});	
	
	$('span.toggle').click(function(){
		$('#indexcontent1').slideToggle(400);	
	});

	
	
	
	//3
	var isOpen = false;
	$('#indexcontent3').click(function(){

		if(isOpen == false){
			$(this).children('#content3').slideDown();
			isOpen = true;
		}
		else{
			$(this).children("#content3").slideUp();
			isOpen = false;
		}
	});	
	
	
	$('span.toggle').click(function(){
		$('#indexcontent3').slideToggle(400);	
	});
	
	
	
	
	
	
	
	
	
	
	//iat content dropdown
	
	var isOpen = false;
	$('#iatcontent').click(function(){

		if(isOpen == false){
			$(this).children('#grass').slideDown();
			isOpen = true;
		}
		else{
			$(this).children("#grass").slideUp();
			isOpen = false;
		}
	});	
	
	$('span.toggle').click(function(){
		$('#iatcontent').slideToggle(400);	
	});




	var isOpen = false;
	$('#iatcontent2').click(function(){

		if(isOpen == false){
			$(this).children('#tessella').slideDown();
			isOpen = true;
		}
		else{
			$(this).children("#tessella").slideUp();
			isOpen = false;
		}
	});	
	
	$('span.toggle').click(function(){
		$('#iatcontent2').slideToggle(400);	
	});




	var isOpen = false;
	$('#iatcontent3').click(function(){

		if(isOpen == false){
			$(this).children('#fillin').slideDown();
			isOpen = true;
		}
		else{
			$(this).children("#fillin").slideUp();
			isOpen = false;
		}
	});	
	
	$('span.toggle').click(function(){
		$('#iatcontent3').slideToggle(400);	
	});





var isOpen = false;
	$('#iatcontent4').click(function(){

		if(isOpen == false){
			$(this).children('#raindrops').slideDown();
			isOpen = true;
		}
		else{
			$(this).children("#raindrops").slideUp();
			isOpen = false;
		}
	});	
	
	$('span.toggle').click(function(){
		$('#iatcontent4').slideToggle(400);	
	});


});




//IAT content dropdown
