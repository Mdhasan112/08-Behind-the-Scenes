'use strict';
/*
function colsAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `${firstName} you are ${age} years old and your birth year is ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `oh, You are a millionaire ${firstName}`;
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

/*
//this keyword
console.log(this);

//in a regular function this keyword will be undefined
const calcAge = function (birthYear) {
  console.log(2030 - birthYear);
  console.log(this);
};
calcAge(2000);

//in Arrow function does not get it's own this keyword and it will be global window
const calcAgeArrow = birthYear => {
  console.log(2030 - birthYear);
  console.log(this);
};
calcAgeArrow(2000);

//this keyword inside of a method
const jonas = {
  year: 2000,
  colcAge: function () {
    console.log(this);
    console.log(2050 - this.year);
  },
};
jonas.colcAge();

const mathilda = {
  year: 2015,
};

mathilda.calcAge = jonas.colcAge;
mathilda.calcAge();
*/
