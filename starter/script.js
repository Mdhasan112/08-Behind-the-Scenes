'use strict';
/*
function colsAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `${firstName} you are ${age} years old and your birth year is ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `oh, You are a millioner ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  console.log(firstName);
  return age;
}
const firstName = 'jonas';
colsAge(1995);
// console.log(age);
// printAge();

/*

/*
const jonas = {
  age: 1990,
  calcAge: function () {
    const bd = 2050 - this.age;
    return bd;
  },
};

console.log(jonas.calcAge());
*/

const jonas = {
  firstName: 'jonas',
  year: 1995,
  colcAge: function () {
    console.log(2050 - this.year);
  },
  greet: function () {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};

jonas.colcAge();
jonas.greet();
