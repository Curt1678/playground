window.onload = function(){
	let bladeStyle = document.createElement('style');
	bladeStyle.id = "blade-style";
	
	// maths for animation on blade 1
	bladeStyle.innerHTML += "@keyframes blade1 { ";
	for(i=0; i<360; i++){
		bladeStyle.innerHTML += ((i/360)*100).toString() + "% { width:" + (((-1*Math.sin((i*Math.PI)/180))*3) + 6).toString() + "vw;";
		bladeStyle.innerHTML += "height:" + (((-1*(Math.pow(Math.sin((i*Math.PI)/180),2)))*40)+45).toString() + "vh;}";
	}
	bladeStyle.innerHTML += "}";
	
	// maths for animation on blade 2 (PI/3 out of phase) 
	bladeStyle.innerHTML += "@keyframes blade2 { ";
	for(i=0; i<360; i++){
		bladeStyle.innerHTML += ((i/360)*100).toString() + "% { width:" + (((-1*Math.sin(((i*Math.PI)/180)+((2*Math.PI) / 3)))*3) + 6).toString() + "vw;";
		bladeStyle.innerHTML += "height:" + (((-1*(Math.pow(Math.sin((i*Math.PI)/180),2)))*40)+45).toString() + "vh;}";
	}
	bladeStyle.innerHTML += "}";
	
	// maths for animation on blade 3 (2PI/3 out of phase)
	bladeStyle.innerHTML += "@keyframes blade3 { ";
	for(i=0; i<360; i++){
		bladeStyle.innerHTML += ((i/360)*100).toString() + "% { width:" + (((-1*Math.sin(((i*Math.PI)/180)+ ((4*Math.PI)/3)))*3) + 6).toString() + "vw;";
		bladeStyle.innerHTML += "height:" + (((-1*(Math.pow(Math.sin((i*Math.PI)/180),2)))*40)+45).toString() + "vh;}";
	}
	bladeStyle.innerHTML += "}";
	
	document.querySelector('head').append(bladeStyle);
};