alert("Привет!");
let number1 = prompt("Введите число 1");
number1 = Number(number1);
let number2 = prompt("Введите число 2");
number2 = Number(number2);
let result;
// const result = "Result operation: \n";

// let function_type = prompt("Выберете тип операции \n+ \n-\n* \n/");
//     if(function_type=='+'){
//         alert(number1 + "+" + number2+ "=" + (number1+number2));
//         console.log(number1+number2);
//     }
//     if(function_type=='-'){
//         alert(number1 + "-" + number2 + "=" + (number1-number2));
//         console.log(number1-number2);
//     }
//     if(function_type=='*'){
//         alert(number1 + "*" + number2+ "=" + (number1*number2));
//         console.log(number1*number2);
//     }
//     if(function_type=='/'){
//         if(number2==0){
//             alert('На 0 делить запрещено');
            
//         }
//         console.log(number1/number2);
//         alert(number1 + "/" + number2+ "=" + (number1/number2));
//     }
    const add = function ($number1, $number2){
        return number1 + number2;   
    }
    const diff = function ($number1, $number2){
        return number1 - number2;   
    }
    const mult = function ($number1, $number2){
        return number1 * number2;   
    }
    const div = function ($number1, $number2){
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
    


