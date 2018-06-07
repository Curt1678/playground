window.onload = function(){
	for(i=0; i<200; i++){
		let windowWidth = window.innerWidth;
		let windowHeight = window.innerHeight;
		let starX = Math.random() * 98;
		let starY = Math.random() * 98;
		let star = document.createElement('div');
		
		star.classList.add('star');
		star.style = "left: " + starX.toString() + "%; top: " + starY.toString() + "%;";
		
		document.querySelector('body').append(star);		
	}
};