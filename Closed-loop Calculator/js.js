function sum(numb1) {
    return function add(numb2) {
        console.log(numb1+ numb2);
        return numb1+numb2;
    };
}



function diff(numb1,numb2) {
    return function() {
        console.log(numb1-numb2);
        return numb1-numb2;
    };
}



function mult(numb1,numb2) {
    return function() {
        console.log(numb1*numb2);
        return numb1*numb2;
    };
}


function div(numb1,numb2) {
    return function() {
        console.log(numb1/numb2);
        return numb1/numb2;
    };
}



let sum1 = sum(1,6);
alert(sum1());

// let diff1 = diff(1,6);
// alert(diff1());

// let mult1 = mult(1,6);
// alert(mult1());

// let div1 = div(1,6);
// alert(sum1());

