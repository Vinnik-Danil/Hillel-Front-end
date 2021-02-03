let leftside;
let rightside;
let prior_sum = false;
let prior_div  = false;
let prior_mult = false;
let prior_diff = false;



function zero() {
    document.getElementById('result').value += 0;
}
function one() {
    document.getElementById('result').value += 1;
}
function two() {
    document.getElementById('result').value += 2;
}
function three() {
    document.getElementById('result').value += 3;
}
function four() {
    document.getElementById('result').value += 4;
}
function five() {
    document.getElementById('result').value += 5;
}
function six() {
    document.getElementById('result').value += 6;
}
function seven() {
    document.getElementById('result').value += 7;
}
function eight() {
    document.getElementById('result').value += 8;
}
function nine() {
    document.getElementById('result').value += 9;
}
function decimal() {
    document.getElementById('result').value += '.';
}
function AC() {
    document.getElementById('result').value = '';
}
function sum() {
    prior_sum = true;
    prior_div = false;  
    prior_mult= false;
    prior_diff= false;
    leftside = document.getElementById('result').value;
    leftside = Number(leftside);
    console.log(leftside);
    document.getElementById('result').value ='';
}
function div() {
    prior_sum = false;
    prior_div = true;  
    prior_mult= false;
    prior_diff= false;
    leftside = document.getElementById('result').value;
    leftside = Number(leftside);
    console.log(leftside);
    document.getElementById('result').value ='';
}
function mult() {
    prior_sum = false;
    prior_div = false;  
    prior_mult= true;
    prior_diff= false;
    leftside = document.getElementById('result').value;
    leftside = Number(leftside);
    console.log(leftside);
    document.getElementById('result').value ='';
}
function diff() {
    prior_sum = false;
    prior_div = false;  
    prior_mult= false;
    prior_diff= true;
    leftside = document.getElementById('result').value;
    leftside = Number(leftside);
    console.log(leftside);
    document.getElementById('result').value ='';
}
function eq() {
    rightside = document.getElementById('result').value;
    rightside = Number(rightside);
    console.log(rightside);
    if (prior_sum == true){
        document.getElementById('result').value = leftside + rightside;
    }
    if (prior_div == true){
        document.getElementById('result').value = leftside - rightside;
    }
    if (prior_mult == true){
        document.getElementById('result').value = leftside * rightside;
    }
    if (prior_diff == true){
        document.getElementById('result').value = leftside / rightside;
    }
}