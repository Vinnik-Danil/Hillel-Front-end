let operation;
let arrayOfStrings; //массив без символов

function sort(choose, arr) {
    let result = true;
    let index;
    if (operation == 1) {
        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    index = arr[i];
                    arr[i] = arr[j];
                    arr[j] = index;
                }
            }
        }
    } else {
        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    index = arr[i];
                    arr[i] = arr[j];
                    arr[j] = index;
                }
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
    let sortmultip = new Array();
    let j = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0) {
            sortmultip[j] = +arr[i];
            j++;
        }
    }
    alert(sortmultip.toString());
}
function max(array) {

    let element = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > element) {
            element = array[i];
        }
    }
    alert(element);
}
function min(array) {

    let element = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < element) {
            element = array[i];
        }
    }
    alert(element);
}
function joinString(arr, delimeter) {
    let result;
    result = arr.join(delimeter);
    alert(result);
}


let again = true;
let a=1;
function funcQuestion() {
    let question = prompt("Хотите продолжить?\n1-Yes;\n2-No;");
            if (question==1) {
                again=true;
            }else{
                again=false;
                return;
            }
    a = prompt("Хотите использовать эту строку или ввести ноую?\n1-Ввести новую;\n2-Использовать введённую раньше;");
}
while (again == true) {
    let inputString;
    if (a==1) {
        inputString = prompt("Введите число через запятую");
    }
    let menu = prompt("Выберете операцию\n1-Отсортировать строку\n2-Вывести числа крaтные 3\n3-Склеить все числа с делителем\n4-Вывести максимальное чисто\n5-Вывести минимальное число");
    switch (menu) {
        case "1":
            splitString(inputString);
            operation = prompt("1-По возрастанию\n2-По убыванию");
            sort(operation, arrayOfStrings);
            funcQuestion();
            break;
        case "2":
            splitString(inputString);
            multiple(arrayOfStrings);
            funcQuestion();
            break;
        case "3":
            splitString(inputString);
            operation = prompt("Введите разделитель");
            joinString(arrayOfStrings, operation);
            funcQuestion();
            break;
        case "4":
            splitString(inputString);
            max(arrayOfStrings);
            funcQuestion();
            break;
        case "5":
            splitString(inputString);
            min(arrayOfStrings);
            funcQuestion();
            break;
    }
}