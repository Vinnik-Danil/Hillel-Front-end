alert("Привет!");
let number1 = prompt("Введите число 1");
number1 = Number(number1);
let number2 = prompt("Введите число 2");
number2 = Number(number2);
let result;
    const add = function (){
        return number1 + number2;   
    }
    const diff = function (){
        return number1 - number2;   
    }
    const mult = function (){
        return number1 * number2;   
    }
    const div = function (){
        return number1 / number2;   
    }
    result =`Result operation
    Operation[+]: ${number1} + ${number2} = ${add()} 
    Operation[-]: ${number1} - ${number2} = ${diff()} 
    Operation[*]: ${number1} * ${number2} = ${mult()} 
    Operation[/]: ${number1} / ${number2} = ${div()} 
    `
    alert(result);
    console.log(result);
    

