let sum_fib=0, a=1,b=1;

function next() {
    sum_fib = a + b; 
         a = b; 
         b = sum_fib; 
    document.getElementById('input').value = sum_fib;
}

function back() {
    // b=sum_fib-a;
    // a=b;
    // sum_fib=a;
    document.getElementById('input').value = a;
    sum_fib=b-a;
    b=a;
    a=sum_fib;  
    
}
