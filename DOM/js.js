function input() {
        let date = document.getElementById('input').value;
        let li = document.createElement('li');
        if (date=='') {
            alert("Input=NUL!!!");
            return; 
        }
        li.innerHTML=date;
        document.body.append(li);
        document.getElementById('input').value = '';
}