alert("Привет!");
let number1 = prompt("Введите число 1");
let number2 = prompt("Введите число 2");
number1 = Number(number1);
number2 = Number(number2);

// function count(num1, num2, mark) {
//     switch (mark) {
//       case "*":
//         return num1 * num2;
//       case "+":
//         return num1 + num2;
//       case "-":
//         return num1 - num2;
//       case "/":
//         if (num2 !== 0) {
//           return num1 / num2;
//         } else {
//           return "не делится на нуль";
//         }
//     }
//   }

let result;
    const add = function (a, b){
        return a+b;
    }
    const diff = function (a, b){
        return a-b;  
    }
    const mult = function (a, b){
        return a*b;
    }
    const div = function (a, b){
        return a/b;
    }


    result =`Result operation
    Operation[+]: ${number1} + ${number2} = ${add(number1, number2)} 
    Operation[-]: ${number1} - ${number2} = ${diff(number1, number2)} 
    Operation[*]: ${number1} * ${number2} = ${mult(number1, number2)} 
    Operation[/]: ${number1} / ${number2} = ${div(number1, number2)} 
    `
    alert(result);
    console.log(result);
    

