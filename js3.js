/**
 * Created by StudentGoIT on 18.05.2017.
 */
/**
 * Created by StudentGoIT on 17.05.2017.
 */

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


    // for (counter=0; counter <= n; counter++) {
    // console.log(counter);
    // if (x != 280 && y != 0) {
    //     console.log(x);
    //     console.log(y);
    //     x += 10;
    //     y -= 10;
    //     bugMove = setTimeout(fBugMove,50);
    // }
    if (y == 0) {
        clearTimeout(bugMove);
        // bug.style.display = 'none';
    }
    // }

    if(counter >= n){
        // clearTimeout(bugMove);
    }

}
fBugMove();

// function fBugMove(){
//     calculate();
//     bug.style.top = y +'px';
//     bug.style.left = x +'px';
// }
// fBugMove();


document.querySelector('#stop').onclick = function (event) {
    clearTimeout(bugMove);
    // console.log('Y: ' + y);
    // console.log('X: ' + x);

}


