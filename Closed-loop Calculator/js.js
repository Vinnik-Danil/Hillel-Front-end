function sum(numb1,numb2) {
    return function() {
        console.log(numb1+ numb2);
        return numb1+numb2;
    };
}
let fn = sum(1,6);
alert(fn());

