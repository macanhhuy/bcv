Cufon.replace('span, div.col2, div.col3', { fontFamily: 'GothamBook' });
Cufon.replace('h3', { fontFamily: 'GothamBold' });
Cufon.replace('.total-video, h1, h2, p', { fontFamily: 'GothamLight' });
Cufon.replace('.status p', { fontFamily: 'GothamMedium' });

$(document).ready(function(){
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