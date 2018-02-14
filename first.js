'use strict';
console.log('hi');

[1, 2].forEach(console.log);

let message;
message = "hi";
console.log(message);

//let vaar = prompt("give a message", "default message")

function sum() {
    let s = 0;
    for(let arg of arguments) s += arg;
    return s;
}

function summ(a, b) {
    return a+b;
}

console.log(sum(1,2,3,4,5))

console.log(summ(5,3,4,10))


let ar = "hello"

console.log("h","e")

ar = (1,2,3,4,5)

console.log([])



function sayX() {
    let x = 'c'
    console.log(x)
}

let x = 'b'

sayX()



function counter() {
    let count = 0;
    return function () {
        return count++;
    }

}

let cnt1 = counter();
let cnt2 = counter();

console.log(cnt1())
console.log(cnt1())

console.log(cnt2())


function varch() {
    phrase = "hi";

    console.log(phrase)

    var phrase;
}

varch()



function animate({duration,draw,timing}) {
    let start=performance.now();
    requestAnimationFrame(function animate(time) {
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1)
                timeFraction = 1;
            let progress = timing(timeFraction);
            draw(progress);
            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }
        }
    );
}




function onclick() {
    animate({
        duration: 1000,
        timing: function (timeFraction) {
            return timeFraction;
        },
        draw: function (progress) {
            elem.style.width = progress * 100 + '%';
        }
    });
}