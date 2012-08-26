var angle = 0;
setInterval(function(){
      angle+=0.3;
  $("#image").rotate(angle);
	var d=angle; var rad=130;
    for(var i=0;i<5; ++i) {
	  d += 360 /5;
	var nx = d/360 * 2 * Math.PI;
          x=rad*Math.cos(nx) + 150 -25;
          y=rad*Math.sin(nx) + 150 ;
//	console.log(x)
          $("#image" + (i+1)).css({
		"margin-top": y,
		"margin-left": x
	});
    }
},10);
