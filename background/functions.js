let light = 50;

window.onload=function(){
	let windowWidth = window.innerWidth;
	
	document.querySelector('.hsl').style = "font-size: " + ((windowWidth/1920) * 8).toString() + "em;";
}

window.addEventListener('mousemove',function(e){
	let mouseX = e.clientX;
	let mouseY = e.clientY;
	
	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;
	
	let hue = (mouseX / windowWidth)*360;
	let saturation = 100 - ((mouseY / windowHeight)*100);
	
	document.querySelector('body').style = "background: hsl(" + hue + "," + saturation + "%,50%);";
	
	document.querySelector('.hsl').style = "font-size: " + ((windowWidth/1920) * 8).toString() + "em;";
	
	document.querySelector('#hID').innerHTML = Math.round(hue).toString();
	document.querySelector('[id="sID"]').innerHTML = Math.round(saturation).toString();
});