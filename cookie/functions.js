let rate = 0;

let timeLeft = 0;
let leftDetect = 0;

let val = 0;

// variable prices of each auto cookie maker (clickers, grandmas, etc)
let auto1Price = 10;
let auto2Price = 50;
let auto3Price = 200;
let auto4Price = 1000;

// variable cookie generation rates of each auto cookie maker 
let auto1Rate = 0.1;
let auto2Rate = 5;
let auto3Rate = 20;
let auto4Rate = 50;

// function for updating buttons and cookie count
function update(){
	document.querySelector('span#rateSpan').innerHTML = rate.toFixed(1);
	
	document.querySelector('div#counter').innerHTML = Math.floor(val);
	
	if(val >= auto1Price){
		document.querySelector('button#auto1').disabled="";
	} else {
		document.querySelector('button#auto1').disabled="disabled";
	}
	
	if(val >= auto2Price){
		document.querySelector('button#auto2').disabled="";
	} else {
		document.querySelector('button#auto2').disabled="disabled";
	}
	
	if(val >= auto3Price){
		document.querySelector('button#auto3').disabled="";
	} else {
		document.querySelector('button#auto3').disabled="disabled";
	}
	
	if(val >= auto4Price){
		document.querySelector('button#auto4').disabled="";
	} else {
		document.querySelector('button#auto4').disabled="disabled";
	}
	
	document.querySelector('span#auto1Price').innerHTML = auto1Price;
	document.querySelector('span#auto2Price').innerHTML = auto2Price;
	document.querySelector('span#auto3Price').innerHTML = auto3Price;
	document.querySelector('span#auto4Price').innerHTML = auto4Price;
	
}

// when cursor bought
function auto1(){
		rate += auto1Rate;
		let amm = parseInt(document.querySelector('span#auto1amount').innerHTML);
		amm++;
		document.querySelector('span#auto1amount').innerHTML = amm;
		val -= auto1Price;
		document.querySelector('div#counter').innerHTML = Math.floor(val);
		auto1Price = Math.floor(auto1Price * 1.35);
		update();
}

// when grandma bought
function auto2(){
		rate += auto2Rate;
		let amm = parseInt(document.querySelector('span#auto2amount').innerHTML);
		amm++;
		document.querySelector('span#auto2amount').innerHTML = amm;
		val -= auto2Price;
		document.querySelector('div#counter').innerHTML = Math.floor(val);
		auto2Price = Math.floor(auto2Price * 1.35);
		update();
}

// when farm bought
function auto3(){
		rate += auto3Rate;
		let amm = parseInt(document.querySelector('span#auto3amount').innerHTML);
		amm++;
		document.querySelector('span#auto3amount').innerHTML = amm;
		val -= auto3Price;
		document.querySelector('div#counter').innerHTML = Math.floor(val);
		auto3Price = Math.floor(auto3Price * 1.35);
		update();
}

// when bank bought
function auto4(){
		rate += auto4Rate;
		let amm = parseInt(document.querySelector('span#auto4amount').innerHTML);
		amm++;
		document.querySelector('span#auto4amount').innerHTML = amm;
		val -= auto4Price;
		document.querySelector('div#counter').innerHTML = Math.floor(val);
		auto4Price = Math.floor(auto4Price * 1.35);
		update();
}

// VERY frequent function for adding cookies on to cookie timer due to increase rate
setInterval(function(){
		val += rate/100;
		document.querySelector('div#counter').innerHTML = Math.floor(val);
		update();		
}, 10);

// function to recognise when you move away from the tab
window.onblur = function(){
		setTimeout(function(){
			if (document.hidden){
			leftDetect = 1;
			timeLeft = Date.now();
			} else {leftDetect = 0;}
		},10);		
}

// function to control what happens when you come back to the tab	
window.onfocus = function(){
		if(leftDetect == 1){
			leftDetect = 0;
			timeAway = (Date.now() - timeLeft)/1000;
			val += timeAway * rate;
			document.querySelector('div#counter').innerHTML = Math.floor(val);
			update();
		} else {update();}
		
}



window.onload= function(){
	
	// function for cursor animation on cookie click
	document.querySelector('div#cookie').addEventListener('click',function(e){
	let newEle = document.createElement('div');
	newEle.classList.add("image-wrapper");
	let newP = document.createElement('p');
	newP.classList.add("cursorText");
	newP.innerHTML = "+1";
	
	newEle.style.animationName = "cursorImageFade";
	newEle.style.animationDuration = "1s";
	
	setTimeout(function(){newEle.outerHTML="";},1000);
	
	document.querySelector('body').append(newEle);
	newEle.append(newP);
	
	newEle.style.left = e.pageX + "px";
	newEle.style.top = e.pageY + "px";
	
	
	
	});

	update();
	
	// function for cookie animation on mousedown
	document.querySelector('div#cookie').addEventListener('mousedown',function(){
		document.querySelector('div#cookie').classList.add('active');
		val++;
		document.querySelector('div#counter').innerHTML = Math.floor(val);
		update();
	});
	
	// function for cookie de-animation on mouseup
	document.querySelector('div#cookie').addEventListener('mouseup',function(){
		document.querySelector('div#cookie').classList.remove('active');
		update();
	});

	
}