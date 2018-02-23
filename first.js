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

console.log(getSum(5,6));
console.log(power(5,3));