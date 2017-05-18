var x=140,y=0,count, d, timer;
var c=0;

function gen(min, max) {
	 var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function f1() {
	d = gen(1,2);
	d2 = gen(1,2)
	count = gen(1, 20);
	f2();
}
f1();

function f2(){
	if (d==1 && x>=3) {
		x = x-3;
	}
	if (d==2 && x<=287) {
		x = x+3;
	}
	if (d2==1 && y<=288) {
		y = y+2;
	}
	if (d2==2 && y>=2) {
		y=y-2;
	}
	c++;
	document.querySelector('#block').style.bottom = y + 'px';
	document.querySelector('#block').style.left = x + 'px';
	if (c>=count) {
		clearTimeout(timer);
		c=0;
		f1();
		return;
	}
	timer = setTimeout(f2, 200);

}