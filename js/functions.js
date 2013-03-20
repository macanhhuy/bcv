Cufon.replace('span, div.col2, div.col3', { fontFamily: 'GothamBook' });
Cufon.replace('h3', { fontFamily: 'GothamBold' });
Cufon.replace('.total-video, h1, h2, p', { fontFamily: 'GothamLight' });
Cufon.replace('.status p', { fontFamily: 'GothamMedium' });

$(document).ready(function(){

	  gadgets.window.adjustHeight(660); //or whatever default height you please
    //this will trigger the event handler below. Note that window in this case refers to the app iframe.
    //If you have width: auto or 100% it will also trigger whenever a user changes their browser window (width) size.
    $(window).resize(function(){
          jive.canvas.getCanvasDimensions(function(dimensions) {
          	console.log(dimensions);
               gadgets.window.adjustHeight(dimensions.height-150); //the jive header + footer is around 150px
          });
    });
    function showBC(data){
      brightcoveItems = data;
	 var template = $("#videoTemplate").html();
       var html = Mustache.to_html(template, brightcoveItems);
       osapi.jive.core.container.editor().insert('xxxxxxx');
    }

    $("tr.video-item").click(function(){
    	$("tr.video-item").not(this).removeClass("active");
    	$(this).toggleClass("active");

    	$(".insert-video").toggleClass("disable");
    	if($(".insert-video").hasClass("disable")){
    		Cufon.replace('.insert-video span', {
			color: '#aaaaaa',
			fontFamily: 'GothamLight'
		});

    	}
    	else {
    		Cufon.replace('.insert-video span', {
			color: 'white',
			fontFamily: 'GothamLight'
			});
    	}

    });
     $(".insert-video").click(function(){
    	if($(".insert-video").hasClass("disable")){
    		return;
    	}
    	else{
    		console.log($("tr.video-item.active").attr("id"));
    		var data = {
    			"id" : $("tr.video-item.active").attr("id")
    		};
    		 var template = $("#videoTemplate").html();
	      console.log(template);
	      var html = Mustache.to_html(template, data);
	    osapi.jive.core.container.editor().insert(html);
    	}

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