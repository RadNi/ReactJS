'use strict'

function getSum(a,b) {
    return a + b;
}

function power(x,n) {
    if (n==1){
        return x;
    }
    else{
        return x * power(x,n-1);
    }
}

function print_items(...other){
    let x = ''
    for (var i = 0 ; i < other.length ; i++) {
        x += other[i] + "  ";
    }
    return x;
}

function sayHi(){
    //ask for name
    var person =  prompt("Please enter your name", "Harry Potter");

    if (person != null) {
        document.getElementById("hoy").innerHTML =
            "Hello " + person + "! How are you today?";
        setTimeout(() =>  3000, 3000)
        document.getElementById("hoy").innerHTML =
            "what do you like to eat, " + person + "?";
    }
    console.log("hi" + name);
}

function plusOne(number){
    return number +1;
}

sayHi();
let a = "finna woke";

//document.getElementById("hoy").innerHTML =+ a;
//console.log(getSum(5,6));
//console.log(power(5,3));
var listz = ["al","gl","bl"];

//setTimeout(() =>  3000, 3000)
//var elm = document.getElementById("hoy");
//elm.innerHTML = print_items(print_items(listz))