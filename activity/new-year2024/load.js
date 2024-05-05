function randomNum(minNum, maxNum){
	switch(arguments.length){
		case 1:
			return parseInt(Math.random()*minNum+1,10);
			break;
		case 2:
			return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
			break;
		default:
			return 0;
			break;
	}
}
function buildFirework(element) {
	element.src = ".\\firework.png";
	element.style["z-index"] = -1;
	element.alt = "Firework";
	element.onclick = "";
}
function buildFirecracker(maxX, maxY){
	var x = randomNum(34,maxX);
	var y = randomNum(34,maxY);
	var code = '<img class="cannot-select" style="position:absolute;left:'+String(x)+'px;top:'+String(y)+'px;" \
		src="firecracker.png" onclick="buildFirework(this)" alt="Firecracker">';
	document.write(code);
}
function buildGame(){
	var x = document.documentElement.clientWidth-50;
	var y = document.documentElement.clientHeight-450;
	document.write('<div style="center;position:fixed;width:'+String(x)+'px;height:'+String(y)+'px;left:25px">');
	for(var i=0 ; i<randomNum(10,19) ; i++) buildFirecracker(x-100, y-200);
	document.write('</div>');
}
