window.onload = function(){

	let numOfZoomers = 10;
	
	for(i=0; i<numOfZoomers; i++){
		let zoomer = document.createElement('div');
		zoomer.classList.add('zoomer');
		zoomer.setAttribute('data-anim',0);
		zoomer.style="animation-delay: " + ((i/numOfZoomers)*1).toString() + "s;";
	
		switch(parseInt(zoomer.getAttribute('data-anim'))){
			case 0:
				zoomer.classList.add('right');
				break;
			case 1:
				zoomer.classList.add('down');
				break;
			case 2:
				zoomer.classList.add('left');
				break;
			case 3:
				zoomer.classList.add('up');
				break;
		}
		document.querySelector('body').append(zoomer);
		
		zoomer.addEventListener('animationend',function(){
			let animationValue = parseInt(zoomer.getAttribute('data-anim'));
			
			let ripple = document.createElement('div');
			ripple.classList.add('ripple');
			
			switch(animationValue){
				case 0:
					ripple.style="left: 90.2%; top: 10.4%";
					break;
				case 1:
					ripple.style="left: 90.2%; top: 90.4%";
					break;
				case 2:
					ripple.style="left: 10.2%; top: 90.4%";
					break;
				case 3:
					ripple.style="left: 10.2%; top: 10.4%";
					break;
			}
			
			document.querySelector('body').append(ripple);
			
			ripple.addEventListener('animationend',function(){ripple.outerHTML="";})
	
			switch(animationValue){
				case 0:
					zoomer.classList.remove('right');
					zoomer.classList.add('down');
					zoomer.setAttribute('data-anim',1);
					zoomer.style="";
					break;
				case 1:
					zoomer.classList.remove('down');
					zoomer.classList.add('left');
					zoomer.setAttribute('data-anim',2);
					zoomer.style="";
					break;
				case 2:
					zoomer.classList.remove('left');
					zoomer.classList.add('up');
					zoomer.setAttribute('data-anim',3);
					zoomer.style="";
					break;
				case 3:
					zoomer.classList.remove('up');
					zoomer.classList.add('right');
					zoomer.setAttribute('data-anim',0);
					zoomer.style="";
					break;
			}
		});
	}
}