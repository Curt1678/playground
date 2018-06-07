let iota = 0;

let rotators = [];

window.onload = function(){

	let tables = document.querySelectorAll('tbody');

	tables.forEach(function(table){
		for(i=0; i<10; i++){
			table.innerHTML += "<tr></tr>";
		}
	});
	
	let rows = document.querySelectorAll('tr');
	
	rows.forEach(function(row){
		for(i=0; i<10; i++){
			row.innerHTML += "<td></td>";
		}
	});
	
	let cells = document.querySelectorAll('td');
	
	cells.forEach(function(cell){
		cell.innerHTML += "<div class='origin'><div class='line'></div></div>";
	});
	
	rotators = document.querySelectorAll('.origin');

};


window.addEventListener('mousemove',function(e){
	
	let cursorX = e.clientX;
	let cursorY = e.clientY;
	
	updateRotators(cursorX, cursorY);
	
});

function updateRotators(cursorX, cursorY){
	rotators.forEach(function(spinner){
		
		let originRect = spinner.getBoundingClientRect();
	
		let originCentreX = ((originRect.right - originRect.left)/2) + originRect.left;
		let originCentreY = ((originRect.bottom - originRect.top)/2) + originRect.top;
		
		// Math.atan() works shit so I've brute-forced it to work out iota properly as angle measured anti-clockwise from x-axis in radians (angle of line joining cursor to origin)
		// one statement for each of four XY quadrants
		// +
		// one statement for each of four axis locations
	
		if(originCentreX > cursorX && originCentreY > cursorY){iota = Math.atan((originCentreY - cursorY)/(originCentreX - cursorX));}
		if(originCentreX < cursorX && originCentreY > cursorY){iota = Math.PI + Math.atan((originCentreY - cursorY)/(originCentreX - cursorX));}
		if(originCentreX < cursorX && originCentreY < cursorY){iota = Math.PI + Math.atan((originCentreY - cursorY)/(originCentreX - cursorX));}
		if(originCentreX > cursorX && originCentreY < cursorY){iota = (2 * Math.PI) + Math.atan((originCentreY - cursorY)/(originCentreX - cursorX));}
		
		if(originCentreX > cursorX && originCentreY == cursorY){iota = 0;}
		if(originCentreX == cursorX && originCentreY > cursorY){iota = Math.PI * (1/2);}
		if(originCentreX < cursorX && originCentreY == cursorY){iota = Math.PI;}
		if(originCentreX == cursorX && originCentreY < cursorY){iota = Math.PI * (3/2);}
	
		spinner.style = "transform:rotate(" + iota + "rad)";
	
	});
}