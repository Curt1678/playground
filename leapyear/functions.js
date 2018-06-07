window.addEventListener('load',colorChangeKeyframe());

function colorChangeKeyframe(){
	let styleTag = document.querySelector('style#colorChangeKeyframe');

	styleTag.innerHTML += "@keyframes colorCycle {";
	
	for(i=0; i<100.5; i+=0.5){
		styleTag.innerHTML += i + "% {background-color:hsl(" + (i/100)*360 + ", 70%, 70%)}";
	}
	
	styleTag.innerHTMl += "}";
}

function calculate(val){
	if (val !== ''){
		if (Number.isInteger(parseInt(val))){
			if (parseInt(val)%4 == 0){
				if (parseInt(val)%400 == 0){
					return "Leap Year!";
				}
				if (parseInt(val)%100 == 0){
					return "Not a Leap Year!";
				}
				return "Leap Year!";
			}
		} else {return "Not a year!"}
	} else {return "Please input a year."}	
}

function fill(){
	document.querySelector('#output').value = calculate(parseInt(document.querySelector('#input').value));
}

function multiply(){
	document.querySelector('#result').value = parseInt(document.querySelector('#one').value) * parseInt(document.querySelector('#two').value);
}
function divide(){
	document.querySelector('#result').value = parseInt(document.querySelector('#one').value) / parseInt(document.querySelector('#two').value);
}

function calcC(){
	let Fval = document.querySelector('#fahrenheit').value;
	document.querySelector('#celsius').value = (5*(Fval-32)/9).toFixed(2);
}

function calcF(){
	let Cval = document.querySelector('#celsius').value;
	document.querySelector('#fahrenheit').value = ((1.8*Cval)+32).toFixed(2);
}

function tableCreate(){
	let rows = parseInt(document.querySelector('#rows').value);
	let columns = parseInt(document.querySelector('#columns').value);
	
	if(isNaN(rows) || isNaN(columns) || rows == 0 || columns == 0){
		document.querySelector('span.error').classList.add('errorTrigger'); 
		setTimeout(function(){document.querySelector('span.error').classList.remove('errorTrigger');}, 250); return;}
	
	let newTable = document.createElement('table');
	
	for (i=0; i<rows; i++){
		newTable.appendChild(document.createElement('tr'));
		}
	
	newTable.childNodes.forEach(function(val){for(i=0;i<columns;i++){
		val.appendChild(document.createElement('td')) 
		}});	
	
	document.querySelector('#tables').appendChild(newTable);
}

function tableDestroy(){
	let numberOfTables = document.querySelectorAll('table').length;
	document.querySelector('#tables table:nth-child(' + numberOfTables +')').outerHTML='';
}

function cut(){
	let startWord = document.querySelector('#wordCutter').value;
	let startWordLength = startWord.length;
	
	if(startWordLength % 2 == 0){
		let firstHalfArr = [];
		let secondHalfArr = [];
		
		for(i=0; i<startWordLength/2; i++){
			firstHalfArr.push(startWord[i]);
			secondHalfArr.unshift(startWord[startWordLength-i-1]);
		}
		
		document.querySelector('#cutResult1').value = firstHalfArr.join('');
		document.querySelector('#cutResult2').value = secondHalfArr.join('');
	} else {
		let firstHalfArr = [];
		let secondHalfArr = [];
		
		for(i=0; i<startWordLength/2; i++){
			firstHalfArr.push(startWord[i]);
			secondHalfArr.unshift(startWord[startWordLength-i]);
		}
		
		document.querySelector('#cutResult1').value = firstHalfArr.join('');
		document.querySelector('#cutResult2').value = secondHalfArr.join('');
	}
}

function remove(){
	let selection = document.querySelector('#mySelect').value;
	document.querySelectorAll('#mySelect option').forEach(function(val){
		if(val.innerHTML==selection){val.outerHTML="";}
	});
}

function add(){
	let addition=document.querySelector("#addToSelect").value;
	
	document.querySelector('#mySelect').appendChild(document.createElement('option')).innerHTML=addition;
}

function arrayHighest(){
	
	let arr = [];
	
	document.querySelectorAll('#arrayLocation input').forEach(
		function(val){
			if(Number.isInteger(parseInt(val.value))){
				arr.push(val.value);
			}
		}
	);
				
	let sorted = arr.sort(function(a,b){return b-a;});
	
	let highest = sorted.shift();
	
	document.querySelector('#arrayHighest').value = highest;
	return;
	
}

function arrayLowest(){
	
	let arr = [];
	
	document.querySelectorAll('#arrayLocation input').forEach(
		function(val){
			if(Number.isInteger(parseInt(val.value))){
				arr.push(val.value);
			}
		}
	);
	
	
				
	let sorted = arr.sort(function(a,b){return a-b;});
	
	let lowest = sorted.shift();
	
	document.querySelector('#arrayLowest').value = lowest;
	return;
	
}

function arrayGen(){
	document.querySelector('#arrayLocation').innerHTML="";
	let elements = document.querySelector('#arraySize').value;
	
	let newElements = [];
	let counter = 0;
	
	for(i=0; i<elements; i++){

		newElements[i] = document.createElement('input');
		
		newElements[i].setAttribute('id','array' + i);
		newElements[i].setAttribute('class','arrayInput');
		newElements[i].setAttribute('type','number');
		
		document.querySelector('span#arrayLocation').appendChild(document.createElement('newElement'));
	}
	newElements.forEach(function(val){
		document.querySelector('#arrayLocation').appendChild(val);
		counter++;
		if (counter < newElements.length){
			document.querySelector('#arrayLocation').innerHTML += ',';
		}
		
	});
}

function getFactors(){

	let input = parseFloat(document.querySelector('#factorInput').value);
	
	console.log(Number.isInteger(input));
	
	if(input <= 0 || !Number.isInteger(input)){
		document.querySelector('#factors').value = "Please input a positive, whole, non-zero number";
		document.querySelector('#perfect').value = "";
		return;
	}
	
	if(input == 1){
		document.querySelector('#factors').value = "1";
		document.querySelector('#perfect').value = "No (doesn't count)";
		return;}
	
	let factors = [];
	
	for(i=1; i<(input/2)+1; i++) {
		if(input%i === 0){
			factors.push(i);
		}
	}
	
	let factorString = factors.join(', ');
	document.querySelector('#factors').value = factorString + ', ' +  input;
	
	let sum = 0;
	
	factors.forEach(function(val){sum+=val;});
	
	if(sum === input){document.querySelector('#perfect').value = "Yes";} else {document.querySelector('#perfect').value = "No";}
}

function romanConvert(){
	let input = parseInt(document.querySelector('#number').value);
	
	let output = "";
	
	while (input >= 1000){input -= 1000; output += "M"}	
	while (input >= 900){input -= 900; output += "CM"}	
	while (input >= 500){input -= 500; output += "D"}	
	while (input >= 400){input -= 400; output += "CD"}	
	while (input >= 100){input -= 100; output += "C"}	
	while (input >= 90){input -= 90; output += "XC"}	
	while (input >= 50){input -= 50; output += "L"}	
	while (input >= 40){input -= 40; output += "XL"}	
	while (input >= 10){input -= 10; output += "X"}	
	while (input >= 9){input -= 9; output += "IX"}	
	while (input >= 5){input -= 5; output += "V"}	
	while (input >= 4){input -= 4; output += "IV"}	
	while (input >= 1){input -= 1; output += "I"}
	
	document.querySelector('#roman').value = output;
	return;
	
}

function numberConvert(){
	let input = document.querySelector('#roman').value;
	
	let output = 0;
	
	for(i=0; i<input.length; i++){
		switch (input[i]) {
			case 'M':
				output += 1000;
				break;				
			case 'D':
				output += 500;
				break;				
			case 'C':
				switch (input[i+1]){
					case 'M':
						output += 900;
						i++;
						break;						
					case 'D':
						output += 400;
						i++;
						break;						
					default:
						output += 100;
						break;
				}
				break;				
			case 'L':
				output += 50;
				break;				
			case 'X':
				switch (input[i+1]){
					case 'C':
						output += 90;
						i++;
						break;						
					case 'L':
						output += 40;
						i++;
						break;						
					default:
						output += 10;
						break;
				}
				break;				
			case 'V':
				output += 5;
				break;				
			case 'I':
				switch (input[i+1]){
					case 'X':
						output += 9;
						i++;
						break;					
					case 'V':
						output += 4;
						i++;
						break;					
					default:
						output += 1;
						break;
				}
				break;				
			default:
				break;
		}
	}	
	document.querySelector('#number').value = output;
}

function fizzBuzz(){

	let output = document.querySelector('#fizzBuzzOutput');
	
	output.innerHTML = "";
	
	let numberOne = parseInt(document.querySelector('#fizzBuzzNumberOne').value);
	let numberTwo = parseInt(document.querySelector('#fizzBuzzNumberTwo').value);
	
	let wordOne = "";
	let wordTwo = "";
	
	
	
	if(document.querySelector('#fizzBuzzWordOne').value != ""){
		wordOne = document.querySelector('#fizzBuzzWordOne').value;
	} else {
		wordOne = "Fizz";
	}
	
	if(document.querySelector('#fizzBuzzWordTwo').value != ""){
		wordTwo = document.querySelector('#fizzBuzzWordTwo').value;
	} else {
		wordTwo = "Buzz";
	}
	
	let upTo = parseInt(document.querySelector('#fizzBuzzUpTo').value);	
	
	for(i=1;i<upTo+1;i++){
		if(i%numberOne == 0 && i%numberTwo != 0){
			document.querySelector('#fizzBuzzOutput').innerHTML += "<b>" + i + "</b>" + ": " + wordOne + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp;&nbsp;&nbsp;";
		}
		if(i%numberOne != 0 && i%numberTwo == 0){
			document.querySelector('#fizzBuzzOutput').innerHTML += "<b>" + i + "</b>" + ": " + wordTwo + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp;&nbsp;&nbsp;";
		}
		if(i%numberOne == 0 && i%numberTwo == 0){
			document.querySelector('#fizzBuzzOutput').innerHTML += "<b>" + i + "</b>" + ": " + wordOne + wordTwo + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp;&nbsp;&nbsp;";
		}
	}
	
	
	
}

function range1(){
	document.querySelector('#rangeReader1').value = document.querySelector('#fizzBuzzNumberOne').value;
}

function range2(){
	document.querySelector('#rangeReader2').value = document.querySelector('#fizzBuzzNumberTwo').value;
}

function range3(){
	document.querySelector('#rangeReader3').value = document.querySelector('#fizzBuzzUpTo').value;
}

function buildXmasTree(){
	let height = parseInt(document.querySelector('#xmasHeight').value);
	let tree = document.querySelector('div#xmasTree');
	
	tree.innerHTML = "";
	
	let leaves = 0;
	
	for(i=1; i<height-1; i++){
		leaves = i;
		tree.innerHTML += "<p>";
		for(j=1; j<leaves+1; j++){
			tree.innerHTML += "  *  ";
		}
		tree.innerHTML += "</p>";
	}
	
	tree.innerHTML += "<p>*</p><p>*****</p>";
}

function changeBackground(){
	let BGcolorTag = document.querySelector('style#backgroundColor');
	
	let color = document.querySelector('input#BGCTag').value;
	
	BGcolorTag.innerHTML = ".container {background-color: " + color + ";}";
	
	document.querySelector('button[onclick="backgroundReturn()"]').style.display="inline";
}

function changeText(){
	let TcolorTag = document.querySelector('style#textColor');
	
	let color = document.querySelector('input#TCTag').value;
	
	TcolorTag.innerHTML = ".container:not(input) {color: " + color + ";}";
}

function changeRadius(){
	let radiusInput = document.querySelector('input#radiusInput').value + "px";
	
	document.querySelector('.container').style.borderRadius = radiusInput;
}

function backgroundReturn(){
	let tag = document.querySelector('style#backgroundColor');
	
	tag.innerHTML = ".container {animation-name: colorCycle; animation-iteration-count: infinite;}";

	document.querySelector('button[onclick="backgroundReturn()"]').style.display = "none";
}

function seizureControl(){
	let input = document.querySelector('input#seizureControl').value;
	let period = (20000-input)/1000;
	
	let tag = document.querySelector('style#seizureControl');
	
	tag.innerHTML = ".container {animation-duration:" + period + "s}";
}