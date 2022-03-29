//Object Syntax

//const car = {
// type = 'Toyota',
// model = 'Camry',
// year = 2013

//}

//declare an object
const person = {
  firstName: "Elliott",
  lastName: "Leonard",
  fullName: "Elliott Leonard",
  age: 25,
  location: "DevMountain",
  isSmart: false,
};

//log properties using dot and bracket notation
console.log(person.firstName);
console.log(person["isSmart"]);

//add or update properties
person.emotion = "happy";
person["age"] = 27;
console.log(person);

//create alias for variable
let { fullName } = person;
let { age: myAge } = person;
console.log(myAge);
console.log(fullName);

//meal object
let meal = {
  appetizer: "Mac n Cheese",
  entree: "Steak",
  dessert: "Cheesecake",
  drink: "Diet Coke",
};

const { dessert } = meal;
const { drink: bev } = meal;
const { appetizer: app, entree: ent } = meal;
meal.drink = "Sprite";
console.log(dessert, bev, meal.drink);

//looping through properties of an object
for (let key in person) {
  console.log(person[key]);
  console.log(`The value is ${person[key]} for the property ${key}`);
}

//adding properties using different notation
person.job = "Coder";
person["ethnicity"] = "White";
console.log(person);

//delete property from object
delete person["ethnicity"];
delete person.job;

console.log(person);

//Object of objects
// {
//     {},
//     {},
//     {}

// }

// //Array of objects
// [   {},
//     {},
//     {}
// ]

//Classes Syntax

// class ClassName {
//   constructor() { ... }
// }

//Dog class example
class Dog {
  constructor(dogName, dogBreed, dogAge) {
    this.name = dogName;
    this.breed = dogBreed;
    this.age = dogAge;
    this.toys = [];
    this.hunger = false;
  }
  greeting() {
    return `Woof woof`;
  }
  addToy(toy) {
    this.toys.push(toy);
  }
}

//Instantiate new Dog object from class
const lassie = new Dog("Lassie", "German Shepherd", 15);
const louie = new Dog("Louie", "Border Collie", 2);
louie.addToy("rubber bone");
lassie.addToy("test");
console.log(lassie);
console.log(louie);

//Extend class using the 'extends' keyword
class Puppy extends Dog {
  constructor(dogName, dogBreed, dogAge, puppyTrainingLevel) {
    super(dogName, dogBreed, dogAge);
    this.puppyTrainingLevel = puppyTrainingLevel;
  }
  levelUp(num) {
    this.puppyTrainingLevel += num;
  }

  greeting() {
    return super.greeting() + " and I am a puppy";
  }
}

const pup1 = new Puppy("Rex", "Chihuahua", 4, 0);
const winston = new Puppy("Winston", "Laberdoodle", 1, 8);
pup1.levelUp(4);
winston.levelUp(9);
console.log(pup1.greeting());
console.log(louie.greeting());
console.log(pup1);
winston.addToy("brick");
console.log(winston);
