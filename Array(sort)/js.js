const operation = prompt("1-По возрастанию\n2-По убыванию\n");
sort(operation);
function sort() {
    let arr = new Array();
    let number;
    number = Number(number);
    let i = 0;
    let result = true;
    while (arr.length < 4 || result) {
        number = prompt("Введите число ");
        if (number == null || number == '') {
            result = false;
            break;
        }
        arr[i] = number;
        i++;
        if (!isFinite(number)) {
            alert("Вы ввели не число повторите операцию");
            i--;
        }
        console.log(arr.toString());
    }
    alert("Введенный массив \n" + arr.toString());
    if (operation == 1) {
        let index;
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
console.log(number);