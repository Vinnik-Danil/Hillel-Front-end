let operandEL1 = document.getElementById('operand_1').value;
let operandEL2 = document.getElementById('operand_2').value;
operandEL2 = Number(operandEL2);
operandEL1 = Number(operandEL1);

function sum(operand1, operand2){
    return operand1+operand2;
}

function main() {
    console.log(operandEL1);   
    let select = document.getElementById("selector");
    let HISTORY = document.getElementById("history").value;
    let op = select.value;
    switch (op) {
              case "sum":   
                  sum(operandEL1,operandEL2);
                  HISTORY += sum(operandEL1,operandEL2);
              case "+":
                return num1 + num2;
              case "-":
                return num1 - num2;
              case "/":
                if (num2 !== 0) {
                  return num1 / num2;
                } else {
                  return "не делится на нуль";
                }
            }
}