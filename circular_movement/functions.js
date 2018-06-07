window.onload = function(){
	let styleTag = document.createElement('style');
	
	styleTag.innerHTML += "@keyframes circleMove { ";
	
	for(i=0; i<100; i++){
		styleTag.innerHTML += i.toString() + "% { transform:translate(" + (200 * (Math.sin((i/100)*(2*Math.PI)))).toString() + "px, " + (-200 * (Math.cos((i/100)*(2*Math.PI)))).toString() + "px) }";
	}
	
	styleTag.innerHTML += "}";
	
	document.querySelector('head').append(styleTag);
}