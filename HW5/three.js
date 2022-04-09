"use strict";

class Workers {
  constructor(name, age, experience, languages) {
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.languages = languages;
  }
}

const workerOne = new Workers("John", 28, 1, ["Java", "JavaScript", "SQL"]);
const workerTwo = new Workers("Bill", 30, 5, ["HTML", "JavaScript", "CSS"]);
const workerThree = new Workers("Mike", 32, 4, ["Python", "SQL"]);
console.log(workerOne);
console.log(workerTwo);
console.log(workerThree);
