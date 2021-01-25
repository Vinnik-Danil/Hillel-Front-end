alert("Привет!");
let number1 = prompt("Введите число 1");
number1 = Number(number1);
let number2 = prompt("Введите число 2");
number2 = Number(number2);

let function_type = prompt("Выберете тип операции \n+ \n-\n* \n/");
    if(function_type=='+'){
        alert(number1 + "+" + number2+ "=" + Number(number1+number2));
        console.log(number1+number2);
    }
    if(function_type=='-'){
        alert(number1 + "-" + number2 + "=" + Number(number1-number2));
        console.log(number1-number2);
    }
    if(function_type=='*'){
        alert(number1 + "*" + number2+ "=" + Number(number1*number2));
        console.log(number1*number2);
    }
    if(function_type=='/'){
        if(number2==0){
            alert('На 0 делить запрещено');
            
        }
        console.log(number1/number2);
        alert(number1 + "/" + number2+ "=" + Number(number1/number2));
    }
    


