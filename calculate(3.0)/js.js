let operandEL1,operandEL2;
function getEL() {
  operandEL1 = document.getElementById('operand_1').value;
  operandEL2 = document.getElementById('operand_2').value;
  operandEL1 = Number(operandEL1);
  operandEL2 = Number(operandEL2);
  return operandEL1, operandEL2;
}
function setValueNull() {
  document.getElementById('operand_2').value = 0;
  document.getElementById('operand_1').value = 0;
}
function sum(operand1, operand2) {
  return operand1+operand2;
}
function diff(operand1, operand2) {
  return operand1 - operand2;
}
function mult(operand1, operand2) {
  return operand1 * operand2;
}
function div(operand1, operand2) {
  return operand1 / operand2;
}

function main() { 
  getEL();
  let select = document.getElementById("selector");
  let op = select.value;
  switch (op) {
            case "sum":   
                // sum(operandEL1,operandEL2);
                document.getElementById("history").innerHTML +=operandEL1+"+"+operandEL2+"="
                +sum(operandEL1,operandEL2)+"\n";
                setValueNull();
                break;
            case "diff":
                document.getElementById("history").innerHTML +=operandEL1+"-"+operandEL2+"="
                +diff(operandEL1,operandEL2)+"\n";
                setValueNull();
                break
            case "mult":
              document.getElementById("history").innerHTML +=operandEL1+"*"+operandEL2+"="
              +mult(operandEL1,operandEL2)+"\n";
              setValueNull();
              break;
            case "div":
              document.getElementById("history").innerHTML +=operandEL1+"/"+operandEL2+"="
              +div(operandEL1,operandEL2)+"\n";
              setValueNull();
              break; 
          }
}