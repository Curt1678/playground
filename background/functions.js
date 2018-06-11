window.addEventListener('mousemove',function(e){
	console.log('working');
	let mouseX = e.clientX;
	let mouseY = e.clientY;
	
	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;
	
	let hue = (mouseX / windowWidth)*360;
	let saturation = 100 - ((mouseY / windowHeight)*100);
	
	document.querySelector('body').style = "background: hsl(" + hue + "," + saturation + "%,50%);";
});