window.onload = function(){
	let trunks = document.querySelectorAll('.trunk');
	
	// first, adding branches to trunks
	
	trunks.forEach(function(trunk){
		let LbranchHeight = document.createElement('span');
		LbranchHeight.classList.add('branch-height');
		LbranchHeight.style = "transform:translateY(-" + (50 * Math.random()) + "vh);";
		
		let RbranchHeight = document.createElement('span');
		RbranchHeight.classList.add('branch-height');
		RbranchHeight.style = "transform:translateY(-" + (50 * Math.random()) + "vh);";
		
		let Lbranch = document.createElement('div');
		Lbranch.classList.add('branch');
		Lbranch.classList.add('branch-left');
		
		let Rbranch = document.createElement('div');
		Rbranch.classList.add('branch');
		Rbranch.classList.add('branch-right'); 
		
		LbranchHeight.append(Lbranch);
		RbranchHeight.append(Rbranch);
		
		trunk.append(LbranchHeight);
		trunk.append(RbranchHeight);		
	});
	
	// next we'll generate grass
	
	let bladesOfGrass = 500;
	
	let windowWidth = window.innerWidth;
	
	for(i=0; i<bladesOfGrass-2; i++){		
		let blade = document.createElement('div');
		blade.classList.add('grass');
		
		let bladeXPos = i * (windowWidth/bladesOfGrass);
		
		let bladeWidth = (windowWidth/bladesOfGrass);
		
		let bladeAngle = (-10) + (20 * Math.random());
		blade.style="left:" + bladeXPos.toString() + "px; width:" + bladeWidth.toString() + "px; transform:rotate(" + bladeAngle.toString() + "deg);";
		
		document.querySelector('body').append(blade);				
	}
	
	// lets see if we can generate rain
	
	let rainMachine = setInterval(function(){
		
		
		let dropID = "drop" + ((Math.random()).toFixed(3)*1000).toString();
	
		let droplet = document.createElement('div');
		droplet.classList.add('rain-drop');
		droplet.id = dropID;
	
		droplet.style="left: " + (Math.random() * windowWidth).toString() + "px;";
	
		document.querySelector('body').append(droplet);
	
		setTimeout(function(){
			document.querySelector("#" + dropID).outerHTML = "";
		},1950);
	},50);
	
	
};