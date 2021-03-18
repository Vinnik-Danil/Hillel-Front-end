const students = [
    {
        name: 'Mark',
        marks: [100, 65, 88, 90, 50],
        attends: 0,
        avgMark: getAvgMark,
        maxMark: getMaxMark,
        setAttend: setAttend,
        getInfo: getInfo
    },
    {
        name: 'John',
        marks: [83, 10, 65, 0, 50, 83],
        attends: 0,
        avgMark: getAvgMark,
        maxMark: getMaxMark,
        setAttend: setAttend,
        getInfo: getInfo
    },
    {
        name: 'Joel',
        marks: [100, 65, 90, 20],
        attends: 0,
        avgMark: getAvgMark,
        maxMark: getMaxMark,
        setAttend: setAttend,
        getInfo: getInfo
    }
];


function getAvgMark() { 
    let avg = 0;
    let len = this.marks.length;
    for (let i = 0; i < this.marks.length; i++) {
        avg = avg + this.marks[i];
    } 
    avg = avg/this.marks.length;
    return avg;
} // средняя оценка студента


function getMaxMark() { 
    let max=0;
    for (let i = 0; i < this.marks.length; i++) {
        if(max<this.marks[i]){
            max = this.marks[i];
        }
        
    }
    return max;
} // максимальна оценка студента


function setAttend() {
    this.attends++;
} // увличить счетчик посещений студента


function getInfo() {
    return `Имя: ${this.name} \nСредняя оценка ${this.avgMark()}\nКоличество посещений ${this.attends}\n`
    
} // возвращаем строку с именем студента, средней оценкой и колличеством посещений


// students.map((e) => {
//   console.log(`Средняя оценка cтудента ${e.name}: ${e.avgMark()}`);
// });

// students.map((e) => {
//     console.log(`Максимальная оценка cтудента ${e.name}: ${e.maxMark()}`);
//   });

students.map((e) =>{ 
     e.setAttend();
    console.log(`Посещение студента ${e.name} увеличено на 1/n количество посещейний =${e.attends}`);
});
students.map((e) =>{ 
    console.log(e.getInfo());
});
