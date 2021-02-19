let arr = new Array();
let arrSort = new Array();
let number;
number = Number(number);

function sort(choose) {
let result = true;
let i=0;
let index;
while(arr.length<4 || result){
    number = prompt("Введите число ");
    if(number==null || number==''){
        result = false;
        break;
    }
    arr[i] = number;
    i++;
    if (!isFinite(number)){
        alert("Вы ввели не число повторите операцию");
        i--;
    }
    console.log(arr.toString());  
}
alert("Введенный массив \n" + arr.toString());
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

// let operation = prompt("1-По возрастанию\n2-По убыванию\n");
// sort(operation);

let inputString;
inputString = prompt("Введите число через запятую");
let sortString;
function sortStr() {

    for (let index = 0; index < inputString.length; index++) {
        if(inputString[index]!==','){
            arr[index] = inputString[index];
        }else{
            // index--;
            
        }
        console.log(arr[index]);

        
    }
    alert(arr.toString());
}
sortStr();  