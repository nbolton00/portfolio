(function() {
//wrap our existing svg and store elements to be animated
	var animatingSvg = Snap('#cd-animated-svg'),
		
		floor = animatingSvg.select('#floor'),
		floor2 = animatingSvg.select('#floor2'),
		floor3 = animatingSvg.select('#floor3'),
		mountain1 = animatingSvg.select('#mountain1Peaks'),
		mountain2 = animatingSvg.select('#mountain2Peaks'),
		sky = animatingSvg.select('#sun'),
		rays = animatingSvg.select('#sunray');



	
	//this variable will be used to store the loadingCircle animation object
	var globalAnimation;


	// SCROLLMAGIC STUFF
	  //init controller
	  var controller = new ScrollMagic.Controller();
	   
	  new ScrollMagic.Scene({
	     triggerElement: "#contact"
	  })
	  .on('start', function () {
	        animateFloor();
	  })
	    .addTo(controller);

	


	
	function animateFloor() {
		floor.animate({'x2': floor.attr('data-x')}, 400, mina.easeinout, animateFloor2);
		
	}

	function animateFloor2() {
		floor2.attr('visibility', 'visible').animate({'x2': floor2.attr('data-x')}, 400, mina.easeinout);

		setTimeout(function(){
			floor3.attr('visibility', 'visible').animate({'x2': floor3.attr('data-x')}, 400, mina.easeinout, 
				animateMountains);
		}, 100);
			
	}



	function animateMountains() {
		mountain1.attr('visibility', 'visible').animate({'transform': 't0 0'}, 800, mina.elastic);
		setTimeout(function(){
			mountain2.attr('visibility', 'visible').animate({'transform': 't0 0'}, 800, mina.elastic);
		}, 100);

		setTimeout(function(){
			sky.attr('visibility', 'visible').animate({'transform': 't0 0'}, 800, mina.elastic);	
		}, 100);

		setTimeout(function(){
			rays.attr('visibility', 'visible').animate({'transform': 's0.5'}, 800, mina.elastic);
		}, 100);
		
	}


})();