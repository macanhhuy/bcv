Cufon.replace('span, div.col2, div.col3', { fontFamily: 'GothamBook' });
Cufon.replace('h3', { fontFamily: 'GothamBold' });
Cufon.replace('.total-video, h1, h2, p', { fontFamily: 'GothamLight' });
Cufon.replace('.status p', { fontFamily: 'GothamMedium' });

$(document).ready(function(){

	  gadgets.window.adjustHeight(640); //or whatever default height you please
    //this will trigger the event handler below. Note that window in this case refers to the app iframe.
    //If you have width: auto or 100% it will also trigger whenever a user changes their browser window (width) size.
    $(window).resize(function(){
          jive.canvas.getCanvasDimensions(function(dimensions) {
          	console.log(dimensions);
               gadgets.window.adjustHeight(dimensions.height -150); //the jive header + footer is around 150px
          });
    });


	$("input.keyword").focusin(function () {
  			$(this).next("span").css('display','inline');
	});
	$("span.search-delete").bind("click", function(e){
		$("input.keyword").val("");
		//$(this).hide();
	});
	$("input.keyword").focusout(function(e) {

		if($("input.keyword").val()==""){
				$(this).next("span").hide();
		}

	});


});