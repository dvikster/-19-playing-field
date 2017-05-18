var bug= document.querySelector('#bug');
var x = 0;
var y = 280;
var direction;
var bugMove;
var n;
var counter;
var key=1;

function fBugMove(){
    console.log('first X'+x);
    console.log('first Y'+y);
    n = Math.floor(Math.random() * 10 + 1);//колво шагов
    if(key==1){
        console.log('key:'+ key);
        for (counter=0; counter <= n; counter++) {
                if (x != 280 && y != 0) {
                    console.log('X'+x);
                    console.log('Y'+y);
                    x += 10;
                    y -= 10;
                }
                bug.style.top = y +'px';
                bug.style.left = x +'px';
        }
        key=-1;
        bugMove = setTimeout(fBugMove,500);
    }
    else{
        for (counter=0; counter <= n; counter++) {
                if (x != 0 && y != 0) {
                    console.log('X'+x);
                    console.log('Y'+y);
                    x -= 10;
                    y -= 10;
                }
                bug.style.top = y +'px';
                bug.style.left = x +'px';
        }
        key=0;
        bugMove = setTimeout(fBugMove,500);
    }
    key++;
    if (y == 0) {
        clearTimeout(bugMove);
        // bug.style.display = 'none';
    }
}
fBugMove();

// document.querySelector('#stop').onclick = function (event) {
//     clearTimeout(bugMove);
// }

document.querySelector('#field').addEventListener('click', mouseHit);

var audio = new Audio();

function  mouseHit(event) {
    var xMouse = event.offsetX;
    var yMouse = event.offsetY;
    console.log('xMouse: ' + xMouse);
    console.log('yMouse: ' + yMouse);
    // x y
    if(xMouse >= 0 && xMouse <=30 &&  yMouse >= 0 && yMouse<=30){
            console.log('Yes');
            bug.style.display = 'none';
            audio.src = 'sounds/mix3.mp3';
            audio.autoplay = true;
    }
    else{
        console.log('No');
        audio.src = 'sounds/miss1.mp3';
        audio.autoplay = true;
    }
}



