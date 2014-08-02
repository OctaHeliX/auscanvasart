$(document).ready(function(){
	var currentPos = 0;
	var thisbutcont = $('.but_nav').attr('data-butcont');
		$('.but_nav, .but_content').click(function(){
		// var thearrow = $(this).attr("data-arrow");
		// $(this).addClass('jumpup');
		// $('.but_nav.'+thearrow).addClass('jumpup');
			if (currentPos===0) {
				$('.but_content:first').addClass('jumpup');
				$('.but_content:not(:first)').fadeOut(500);
				$('.but_content:first').addClass('title01 color_01');
				$('.but_content:first').delay(500).queue( function(next){ $(this).css('margin-bottom','0'); next();});
				$('.nav_title').addClass('navTitleBackC1');
				$('.nav_title').addClass('navTitleIn');
				$('.but_nav:not(:first)').addClass('noArrow');
				$('.but_nav:first').addClass('arrowWhite');
				$('.mainCont_01').delay(800).fadeIn(500);
				thisbutcont = $(this).attr('data-butcont');
				currentPos = 1;
			}
		});
		var nextCont = function(stepUp){
			var stepUp;
			var thishtml = $('.but_content.but_cont_0'+stepUp+' .des').html(); 
				
	  			$('.but_content:first').html(thishtml).removeClass('color_01 color_02 color_03 color_04 ').addClass('titleSet color_0'+stepUp);
				$('#mainCont>div').hide();
	  			$('#mainCont .mainCont_0'+stepUp).fadeIn();
	  			$('.nav_title').removeClass('navTitleBackC_01 navTitleBackC_02 navTitleBackC_03 navTitleBackC_04').addClass('navTitleBackC_0'+stepUp);
	  			console.log(stepUp);
	  			currentPos = stepUp;
		}

		$('.but_nav').click(function(){
			thisbutcont = $(this).attr('data-butcont');
			
			if (true){
				var thishtml = $('.but_content.but_cont_'+thisbutcont+' .des').html(); 
				console.log(thisbutcont);
	  			$('.but_content:first').html(thishtml).removeClass('color_01 color_02 color_03 color_04 ').addClass('titleSet color_'+thisbutcont);
				$('#mainCont>div').hide();
	  			$('#mainCont .mainCont_'+thisbutcont).fadeIn();
	  			$('.nav_title').removeClass('navTitleBackC_01 navTitleBackC_02 navTitleBackC_03 navTitleBackC_04').addClass('navTitleBackC_'+thisbutcont);
	  			
	  			currentPos = thisbutcont;
  			}
  			else {
  				alert("please complete the form");
  			}
  		});

		$('#up_but').click(function(){
			var upImg = $('#img_link').val();
			imgSrc = upImg;
			console.log(upImg);
			$("#box_wrap").find('img').attr('width',imgWidth).attr('height',imgWidth).attr('src',imgSrc).css('position','relative');
			$("#cube").find('img').attr('width',imgWidth).attr('height',imgWidth).attr('src',imgSrc).css('position','relative');
			nextCont(3);
		});

  		$('.butOpt').click(function(){
  		 var parentdiv = $(this).parent('div.optionwrap').find('.options>div').slideToggle("fast");
   		 });

  		$('#3d_prev').click(function(){
  			$('#cube').slideToggle(100);
  		});

  		//canvas sizes
  		$('[data-canSize]').click(function(){
  			
  			nextCont(2);
  		});
		
		
		//all other next n prev buttons
  		$('button.navigation').click(function(e){
		e.preventDefault();
		var getclass = $(this).parent().parent('div').attr('class').split('_');
		
		if($(this).hasClass('prev-step')){
		nextCont((parseInt(getclass[1]))-1);
		}
		if($(this).hasClass('next-step')){
		nextCont((parseInt(getclass[1]))+1);
		}
  		});
		
  		//preview
	  		function SetImage(maskHeight,maskWidth,Canvasdepth,imgHeight,imgWidth,top,left,mirror)
	{

	        if(mirror) {   
	            
	          setTop= -(imgHeight+top-Canvasdepth);
	          setBot= -(imgHeight-maskHeight+top); 
	          setRight= -(imgWidth-maskWidth+left);
	          setLeft= -(imgWidth+left-Canvasdepth);
	            
	        }else
	        {

	          setTop=(Canvasdepth+top);
	          setBot=(-maskHeight+top); 
	          setRight=(-maskWidth+left);
	          setLeft=(Canvasdepth+left);  
	          
	        }
			
			
	  $("#divbot-img").css({ top: setBot, left: left });
	  $("#divtop-img").css({ top: setTop, left: left });
	  $("#divleft-img").css({ top: top, left: setLeft });
	  $("#divright-img").css({ top: top, left: setRight });  
	  
	  $("#cubecenter-img").css({ top: top, left: left });
	  $("#cubebot-img").css({ top: setBot, left: left });
	  $("#cubetop-img").css({ top: setTop, left: left });
	  $("#cubeleft-img").css({ top: top, left: setLeft });
	  $("#cuberight-img").css({ top: top, left: setRight });  
	}
	///////////////////////////////////////////////////////////////////

	function createCube(Boxwidth,Boxheight,Boxdepth){
	var halfdepth=Boxdepth/2;
	$(".one").css({ width:Boxwidth, height:Boxdepth,
	'transform': 'rotateX(90deg) translateZ('+halfdepth+'px)',
	'-webkit-transform': 'rotateX(90deg) translateZ('+halfdepth+'px)',
	'-moz-transform': 'rotateX(90deg) translateZ('+halfdepth+'px)',
	'-o-transform': 'rotateX(90deg) translateZ('+halfdepth+'px)',
	'-ms-transform': 'rotateX(90deg) translateZ('+halfdepth+'px)',

	});

	$(".two").css({ width:Boxwidth, height:Boxheight,
	'transform': 'translateZ('+halfdepth+'px)',
	'-webkit-transform': 'translateZ('+halfdepth+'px)',
	'-moz-transform': 'translateZ('+halfdepth+'px)',
	'-o-transform': 'translateZ('+halfdepth+'px)',
	'-ms-transform': 'translateZ('+halfdepth+'px)',
	});

	$(".three").css({ width:Boxdepth, height:Boxheight,
	'transform': 'rotateY(90deg) translateZ('+(Boxwidth-halfdepth)+'px)',
	'-webkit-transform': 'rotateY(90deg) translateZ('+(Boxwidth-halfdepth)+'px)',
	'-moz-transform': 'rotateY(90deg) translateZ('+(Boxwidth-halfdepth)+'px)',
	'-o-transform': 'rotateY(90deg) translateZ('+(Boxwidth-halfdepth)+'px)',
	'-ms-transform': 'rotateY(90deg) translateZ('+(Boxwidth-halfdepth)+'px)',
	});
	$(".four").css({ width:Boxwidth, height:Boxheight,
	'transform': 'rotateY(180deg) translateZ('+(halfdepth)+'px)',
	'-webkit-transform': 'rotateY(180deg) translateZ('+(halfdepth)+'px)',
	'-mos-transform': 'rotateY(180deg) translateZ('+(halfdepth)+'px)',
	'-o-transform': 'rotateY(180deg) translateZ('+(halfdepth)+'px)',
	'-ms-transform': 'rotateY(180deg) translateZ('+(halfdepth)+'px)',
	});
	$(".five").css({ width:Boxdepth, height:Boxheight,
	'transform': 'rotateY(-90deg) translateZ('+(halfdepth)+'px)',
	'-webkit-transform': 'rotateY(-90deg) translateZ('+(halfdepth)+'px)',
	'-mos-transform': 'rotateY(-90deg) translateZ('+(halfdepth)+'px)',
	'-o-transform': 'rotateY(-90deg) translateZ('+(halfdepth)+'px)',
	'-ms-transform': 'rotateY(-90deg) translateZ('+(halfdepth)+'px)',
	});

	$(".six").css({ width:Boxwidth, height:Boxdepth,
	'transform': 'rotatex(-90deg) translateZ('+(Boxheight-halfdepth)+'px)',
	'-webkit-transform': 'rotatex(-90deg) translateZ('+(Boxheight-halfdepth)+'px)',
	'-mos-transform': 'rotatex(-90deg) translateZ('+(Boxheight-halfdepth)+'px)',
	'-o-transform': 'rotatex(-90deg) translateZ('+(Boxheight-halfdepth)+'px)',
	'-ms-transform': 'rotatex(-90deg) translateZ('+(Boxheight-halfdepth)+'px)',
	});


	}
	///////////////////////////////////////////////////////////////
	function CreateCanvas(Height,Width,depth,BorderWidth,BorderColor){
	$("#box_wrap").css({ width: Width+(BorderWidth*4)+(depth*2), height: Height+(BorderWidth*4)+(depth*2)});

	$("#divtop").css({overflow:'hidden','margin-left':depth+BorderWidth, width: Width, height: depth,border:BorderWidth+'px solid'+BorderColor,'border-bottom-width':'0px'});

	$("#divleft").css({float:'left',overflow:'hidden', width: depth, height: Height,border:BorderWidth+'px solid'+BorderColor,'border-right-width':'0px'});

	$("#divcenter").css({float:'left',overflow:'hidden', width: Width, height: Height,border:BorderWidth+'px solid'+BorderColor});

	$("#divright").css({float:'left',overflow:'hidden', width: depth, height: Height,border:BorderWidth+'px solid'+BorderColor,'border-left-width':'0px'});
	    
	$("#divbot").css({float:'left',overflow:'hidden','margin-left':depth+BorderWidth, width: Width, height: depth,border:BorderWidth+'px solid'+BorderColor,'border-top-width':'0px'});

	}
	/////////////////////////////////////////

	var imgSrc='#';
	var CanvasWidth=200;
	 var CanvasHeight=100; 
	 var Canvasdepth=30;
	 var BorderWidth=3;
	 var BorderColor='#3366FF';
	 var imgZoom=0.9;
	 var imgWidth=250;
	 var imgHeight=250;
	 imgWidth=imgWidth*imgZoom;
	 imgHeight=imgHeight*imgZoom;
	var mirror=false;
	var setTop,setBot,setLeft,setRight;
	
	$("#box_wrap").find('img').attr('width',imgWidth).attr('height',imgWidth).attr('src',imgSrc).css('position','relative');
	$("#cube").find('img').attr('width',imgWidth).attr('height',imgWidth).attr('src',imgSrc).css('position','relative');
	$("#divcenter-img").css({ top: 0, left: 0 });
	var po=$("#divcenter-img").position()

	CreateCanvas(CanvasHeight,CanvasWidth,Canvasdepth,BorderWidth,BorderColor);
	createCube(CanvasWidth,CanvasHeight,Canvasdepth);
	SetImage(CanvasHeight,CanvasWidth,Canvasdepth,imgHeight,imgWidth,po.top,po.left,mirror)

	//Mirror Image
	 if(mirror) {  
	$("#divleft-img").addClass('mirrorx');
	$("#divright-img").addClass('mirrorx');
	$("#divtop-img").addClass('mirrory');
	$("#divbot-img").addClass('mirrory');
	 }
	//////////////////

	$("#divcenter-img").draggable({ 
	    cursor: 'move',  
	    drag: function(event, ui) {
	         xposs = ui.position.left;
	         yposs = ui.position.top;
	SetImage(CanvasHeight,CanvasWidth,Canvasdepth,imgHeight,imgWidth,yposs,xposs,mirror);

	    }
	});
	$('#cube').on('mousemove', function(event) {
	    var width = $('#cube').width();
	    var mouseX = event.pageX - (width * 0.5);
	    var height = $('#cube').height();
	    var mouseY = event.pageY - (height * 0.5);
	    var xAngle = (mouseY / height) * 90;
	    var yAngle = (mouseX / width) * 90;

	   $('.cube').css({
	   'transform': 'rotateX('+xAngle+'deg) rotateY('+yAngle+'deg)',
	   '-webkit-transform': 'rotateX('+xAngle+'deg) rotateY('+yAngle+'deg)',
	   '-mos-transform': 'rotateX('+xAngle+'deg) rotateY('+yAngle+'deg)',
	   '-o-transform': 'rotateX('+xAngle+'deg) rotateY('+yAngle+'deg)',
	   '-ms-transform': 'rotateX('+xAngle+'deg) rotateY('+yAngle+'deg)',
	   });
	   //$('.cube')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
	   // $('.cube-no-preserve')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
	});

	// $('#uploadform').submit(function (event) {
	// 	event.preventDefault();

	// 	$.ajax({
	// 	   url: "image.php", 
	// 	   type: "POST",
	// 	   data: $(this).serializeArray(),  
	// 	   cache: false,
	// 	   success: function (html) {
		   
	// 	   var obj = $.parseJSON(html);

	// 	obj.imglink 

	// }

 // });
});