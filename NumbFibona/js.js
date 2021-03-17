let sum_fib=0, a=1,b=1;

function next() {
    return function fib() {   
    sum_fib = a + b; 
        a = b; 
        b = sum_fib; 
    document.getElementById('input').value = sum_fib;
    }
}

function back() {
    return function fib() {   
    document.getElementById('input').value = a;
    sum_fib=b-a;
    b=a;
    a=sum_fib;  
    }
}
