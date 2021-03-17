function calculate(numb1) {
    return{
        add: function(numb2){
          return numb1+numb2;
        },
        sub: function(numb2){
            return numb1-numb2;
        },
        div: function(numb2){
            return numb1/numb2;
        },
        mult: function(numb2){
            return numb1*numb2;
        }
      }
}



// function diff(numb1,numb2) {
//     return function() {
//         console.log(numb1-numb2);
//         return numb1-numb2;
//     };
// }



// function mult(numb1,numb2) {
//     return function() {
//         console.log(numb1*numb2);
//         return numb1*numb2;
//     };
// }


// function div(numb1,numb2) {
//     return function() {
//         console.log(numb1/numb2);
//         return numb1/numb2;
//     };
// }



let num1 = calculate(4);

console.log(num1.add(5));

num1.mult(7);
console.log(num1.mult(5));


// alert(sum1());

// let diff1 = diff(1,6);
// alert(diff1());

// let mult1 = mult(1,6);
// alert(mult1());

// let div1 = div(1,6);
// alert(sum1());

