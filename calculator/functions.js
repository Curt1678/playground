let clear = false;

function input(val){
	switch(val){
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 0:
			if(clear){
				document.querySelector('input#display').value = "";
				clear = false;
			}
			document.querySelector('input#display').value += val;
			break;
		case '.':
			document.querySelector('input#display').value += '.';
			break;
		case 'C':
			document.querySelector('p#first').innerHTML = "";
			document.querySelector('p#second').innerHTML = "";
			document.querySelector('p#operator').innerHTML = "";
			document.querySelector('p#equals').innerHTML = "";
			document.querySelector('p#answer').innerHTML = "";
			document.querySelector('input#display').value = "";
			document.querySelector('button#plus').classList.remove('btn-active');
			document.querySelector('button#minu').classList.remove('btn-active');
			document.querySelector('button#divi').classList.remove('btn-active');
			document.querySelector('button#mult').classList.remove('btn-active');
			break;
		case '*':
			document.querySelector('p#first').innerHTML = parseFloat(document.querySelector('input#display').value);
			document.querySelector('p#operator').innerHTML = '*';
			document.querySelector('button#plus').classList.remove('btn-active');
			document.querySelector('button#minu').classList.remove('btn-active');
			document.querySelector('button#divi').classList.remove('btn-active');
			document.querySelector('button#mult').classList.remove('btn-active');
			document.querySelector('button#mult').classList.add('btn-active');
			clear = true;			
			break;
		case '/':
			document.querySelector('p#first').innerHTML = parseFloat(document.querySelector('input#display').value);
			document.querySelector('p#operator').innerHTML = '/';
			document.querySelector('button#plus').classList.remove('btn-active');
			document.querySelector('button#minu').classList.remove('btn-active');
			document.querySelector('button#divi').classList.remove('btn-active');
			document.querySelector('button#mult').classList.remove('btn-active');
			document.querySelector('button#divi').classList.add('btn-active');
			clear = true;
			break;
		case '+':
			document.querySelector('p#first').innerHTML = parseFloat(document.querySelector('input#display').value);
			document.querySelector('p#operator').innerHTML = '+';
			document.querySelector('button#plus').classList.remove('btn-active');
			document.querySelector('button#minu').classList.remove('btn-active');
			document.querySelector('button#divi').classList.remove('btn-active');
			document.querySelector('button#mult').classList.remove('btn-active');
			document.querySelector('button#plus').classList.add('btn-active');
			clear = true;
			break;
		case '-':
			document.querySelector('p#first').innerHTML = parseFloat(document.querySelector('input#display').value);
			document.querySelector('p#operator').innerHTML = '-';
			document.querySelector('button#plus').classList.remove('btn-active');
			document.querySelector('button#minu').classList.remove('btn-active');
			document.querySelector('button#divi').classList.remove('btn-active');
			document.querySelector('button#mult').classList.remove('btn-active');
			document.querySelector('button#minu').classList.add('btn-active');
			clear = true;
			break;
		case '=':
			document.querySelector('p#second').innerHTML = parseFloat(document.querySelector('input#display').value);
			document.querySelector('p#equals').innerHTML = "=";
			clear = true;
			document.querySelector('button#plus').classList.remove('btn-active');
			document.querySelector('button#minu').classList.remove('btn-active');
			document.querySelector('button#divi').classList.remove('btn-active');
			document.querySelector('button#mult').classList.remove('btn-active');
			
			if (isNaN(parseFloat(document.querySelector('p#first').innerHTML) + parseFloat(document.querySelector('p#second').innerHTML)) == false){
				switch(document.querySelector('p#operator').innerHTML){
					case '+':
						document.querySelector('p#answer').innerHTML = parseFloat(document.querySelector('p#first').innerHTML) + parseFloat(document.querySelector('p#second').innerHTML);
						document.querySelector('input#display').value = parseFloat(document.querySelector('p#first').innerHTML) + parseFloat(document.querySelector('p#second').innerHTML);
						break;
					case '-':
						document.querySelector('p#answer').innerHTML = parseFloat(document.querySelector('p#first').innerHTML) - parseFloat(document.querySelector('p#second').innerHTML);
						document.querySelector('input#display').value = parseFloat(document.querySelector('p#first').innerHTML) - parseFloat(document.querySelector('p#second').innerHTML);
						break;
					case '*':
						document.querySelector('p#answer').innerHTML = parseFloat(document.querySelector('p#first').innerHTML) * parseFloat(document.querySelector('p#second').innerHTML);
						document.querySelector('input#display').value = parseFloat(document.querySelector('p#first').innerHTML) * parseFloat(document.querySelector('p#second').innerHTML);
						break;
					case '/':
						document.querySelector('p#answer').innerHTML = parseFloat(document.querySelector('p#first').innerHTML) / parseFloat(document.querySelector('p#second').innerHTML);
						document.querySelector('input#display').value = parseFloat(document.querySelector('p#first').innerHTML) / parseFloat(document.querySelector('p#second').innerHTML);
						break;
				}
			} else {
				document.querySelector('input#display').value = 'ERROR';
				document.querySelector('p#answer').innerHTML = 'ERROR';
			}
			break;
			
		
	}
return;
}

window.addEventListener('keydown',function(e){
	switch(parseInt(e.key)){
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 0:
			input(parseInt(e.key));
			break;
		default:
			switch(e.key){
				case '+':
				case '-':
				case '/':
				case '*':
					input(e.key);
					break;
				case 'Enter':
					input('=');
					break;
				case 'Backspace':
					input('C');
					break;
			}
	}
	
});