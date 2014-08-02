$(document).ready(function(){
Caman.remoteProxy = Caman.IO.useProxy('php');
  
  var theimagelink = $("input#img_link").val();
  
  $('button#up_but').click(function(){
  var theimagelink = $("input#img_link").val();
  //$("img#preview-here").attr('src',theimagelink)
  
    Caman('#canvas-to-img', theimagelink,  function () {
    this.revert();
    this.saturation(-100).render();
  });
  
  });
  
  function addToOtherImages(){
	var canvas = document.getElementById("canvas-to-img");
	var todiv = document.getElementById("canvas-as-bg");

	dataUrl = canvas.toDataURL();

	var divtopimg = document.getElementById("divtop-img");
	var divleftimg = document.getElementById("divleft-img");
	var divcenterimg = document.getElementById("divcenter-img");
	var divrightimg = document.getElementById("divright-img");
	var divbotimg = document.getElementById("divbot-img");

	divtopimg.setAttribute('src', dataUrl);
	divleftimg.setAttribute('src', dataUrl);
	divcenterimg.setAttribute('src', dataUrl);
	divrightimg.setAttribute('src', dataUrl);
	divbotimg.setAttribute('src', dataUrl);
  }
  
  $('div#go-bnw').click(function(){
  
    Caman('#canvas-to-img', theimagelink,  function () {
	this.revert();
    this.saturation(-100).render();
	});
  
	window.setTimeout(addToOtherImages, 2000);
  
	});
  
   $('div#go-sepia').click(function(){
  
    Caman('#canvas-to-img', theimagelink,  function () {
	this.revert();
    this.sepia(100).render();
	});
	
	window.setTimeout(addToOtherImages, 2000);
  
	});
  

});