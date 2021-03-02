function input() {
        let data = document.getElementById('input').value;
        let li = document.createElement('li');
        if (data=='') {
            alert("Input=NUL!!!");
            return; 
        }
        li.innerHTML=data;
        // document.body.append(li);
        li.appendChild(document.body.append(li));
        ul.appendChild(li);
        document.getElementById('input').value = '';
}