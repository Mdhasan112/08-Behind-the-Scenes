'use strict';
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
