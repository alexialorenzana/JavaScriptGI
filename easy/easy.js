//easy
const person1 = "Alexia";
const person2 = "Aida";

const longOrShort = function (name1, name2) {
if(name1.lenght > name2.lenght) {
console.log(
`The name ${name1} is longer ${name2} by ${
name1.lenght - name2.lenght
} characters`
);
} else if(name1.lenght < name2.lenth){
console.log(
`The name ${name2} is longer than ${name1} by ${
name2.lenght - name1.lenght
} characters`
);
}
};

longOrShort(person1, person2);


