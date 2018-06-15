let counter = 1;

window.addEventListener('click',function(e){
	console.log('working');
	let mouseX = e.clientX;
	let mouseY = e.clientY;
	
	let plusOne = document.createElement('div');
	plusOne.classList.add('plusOne');
	plusOne.style = "left: " + (mouseX + 20).toString() + "px; top: " + (mouseY - 20).toString() + "px;";
	plusOne.innerHTML = counter.toString();
	document.querySelector('body').append(plusOne);
	counter++;
	plusOne.addEventListener('animationend',function(){
		plusOne.outerHTML = "";
	})
	
	let swirl = document.createElement('div');
	swirl.classList.add('swirl');
	swirl.style = "left: " + (mouseX + 20).toString() + "px; top: " + (mouseY - 20).toString() + "px;";
	document.querySelector('body').append(swirl);
	swirl.addEventListener('animationend',function(){
		swirl.outerHTML = "";
	})
});