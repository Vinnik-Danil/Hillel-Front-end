let arr = new Array();
let number;
let i=0;
number = Number(number);
let result = true;

while(arr.length<4 || result){
    number = prompt("Введите число ");
    if(number==null || number==''){
        result = false;
        break;
    }
    arr[i] = number;
    i++;
    if (!isFinite(number)){
        alert("Вы ввели не число");
        i--;
    }
    console.log(arr.toString());  
}
alert("Введенный массив \n" + arr.toString());