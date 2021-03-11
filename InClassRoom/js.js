const template = 'Hello, {{name}}, are you {{age}} old?';

const a = {
    name: 'Max',
    age: 22
};
const b = {
    name: 'Danil',
}

// function sayHiBye(firstName, lastName) {

//     alert( "Привет, " + getFullName() );
  
//     function getFullName() {
//       return firstName + " " + lastName;
//     }
  
//   }

//   sayHiBye("123","vasya");

function make(temp){
    return function (obj) {
        for(key in obj){
            temp= template.replace(`{{${name}}}`, key[obj])
            return temp;
        }
    }
}
const text = make(template);
text;