let arr = new Array();
let arrSort = new Array();
let number, operation;
number = Number(number);
let arrayOfStrings; //массив без символов

function sort(choose,arr) {
    let result = true;
    let index;
    if(operation == 1){
        for (i=0; i<arr.length; i++){
            for (j=0; j<arr.length; j++){
                if (arr[i]<arr[j]){
                    index = arr[i];
                    arr [i]= arr [j];
                    arr [j]= index;} 
            }
        }   
    }else{
        for (i=0; i<arr.length; i++){
            for (j=0; j<arr.length; j++){
                if (arr[i]>arr[j]){
                    index = arr[i];
                    arr [i]= arr [j];
                    arr [j]= index;} 
            }
        }
    }

    alert("Отсортированый массив \n" + arr.toString());
}
function splitString(stringToSplit) {
    let separator = ',';
    arrayOfStrings = stringToSplit.split(separator);
    // console.log(arrayOfStrings);
    // alert(arrayOfStrings.toString());
}
function multiple(arr) {
    let sortmultip=new Array();
    let j=0;
    for (i=0; i<arr.length; i++){
        if(arr[i]%3 ==0){
            sortmultip[j]=+arr[i];
            j++;
        }
    }
    alert(sortmultip.toString());
}
function max(array) {
    
    let element = array[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i]>element){
            element = array[i];
        }
    }
    alert(element);
}
function min(array) {
    
    let element = array[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i]<element){
            element = array[i];
        }
    }
    alert(element);
}
let inputString = prompt("Введите число через запятую");
let menu = prompt("Выберете операцию\n1-Отсортировать строку\n2-Вывести числа крaтные 3\n3-Склеить все числа с делителем\n4-Вывести максимальное чисто\n5-Вывести минимальное число");

switch (menu) {
    case "1":
        splitString(inputString);
        operation = prompt("1-По возрастанию\n2-По убыванию");
        sort(operation, arrayOfStrings);
        break;
    case "2":
        splitString(inputString);
        multiple(arrayOfStrings);
        break;
    case"3":

        break;
    case"4":
        splitString(inputString);
        max(arrayOfStrings);
        break;
    case"5":
        splitString(inputString);
        min(arrayOfStrings);
        break;
}  