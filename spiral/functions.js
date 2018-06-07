window.onload = function(){
	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;
	let outerMarginPX = (windowWidth - (0.6 * windowHeight)) / 2;
	let outerMarginVW = (outerMarginPX / windowWidth)*100;
	console.log(outerMarginVW.toFixed(2));

	let styleOne = document.createElement('style');
	styleOne.id = "styleOne";
	styleOne.innerHTML = ".container {left: " + outerMarginVW.toFixed(2) + "vw;}";
	document.querySelector('head').append(styleOne);
	
	let numberOfPoints = 100;
	
	// now to generate container divs
	
	for(i=0; i<numberOfPoints; i++){
		let newCont = document.createElement('div');
		newCont.classList.add('container');
		newCont.style="animation-delay:" + ((i/numberOfPoints)*20).toString() + "s;";
		
		let newTracer = document.createElement('div');
		newTracer.classList.add('tracer');
		newTracer.style="animation-delay:" + ((i/numberOfPoints)*20).toString() + "s;";
		
		newCont.append(newTracer);
		document.querySelector('body').append(newCont);
	}
	
	// now to generate oscillation animation style tag
	
	let styleTwo = document.createElement('style');
	styleTwo.classList.add('styleTwo');
	styleTwo.innerHTML = "@keyframes oscillate { ";
	
	for(i=0; i<100; i++){
		styleTwo.innerHTML += i.toString() + "%{ transform: translateY(" + ((Math.pow(Math.sin((i*Math.PI)/100),2)) * 30) + "vh) }";
	}
	
	styleTwo.innerHTML += "}";
	
	document.querySelector('head').append(styleTwo);
	
};