//this must be in every document so that the javascript does not start
//effecting items that have not already loaded
// it says select the document chain it to the ready function which means it will function
// once everything is ready

$(document).ready(function(){

	var counter = .4;
	$('body').click(function(){
		counter++;
		if(window.console){ 
		console.debug(counter);	
		}
	});
	

	
//look at all the things with class accordian and do a function to them when you click on them	
	var isOpen = false;
	$('.accordion').click(function(){

		if(isOpen == false){
			$(this).children('section.content').slideDown();
			isOpen = true;
		}
		else{
			$(this).children("section.content").slideUp();
			isOpen = false;
		}
	});	
	
	$('span.toggle').click(function(){
		$('.accordions').slideToggle(400);	
	});



	$('.mousebox1').mouseenter(function(){
		$(this).html('F You Buddy!');
		$('.mousebox2').html('Words hurt Man!');
	});
	$('.mousebox1').mouseleave(function(){
		$(this).html('Give me the mouse!');
		$('.mousebox2').html('Give me the mouse!');
	});
	
	$('.customAnimate').click(function(){
		$('div.accordions').animate({'width':0},200,function(){
			// callback function, is executed upon completion of the animation, and is separated with comma from the milliseconds
			// [] = arrays
			// {} = objects
			$(this).fadeOut(180);
		});
	});
	
});