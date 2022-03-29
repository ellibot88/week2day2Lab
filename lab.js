//////////////////////////// PROBLEM 1 ////////////////////////////
/*
  Create an object called me.
  Give it a key of name with the value being your name, and another key of age with the value being your age.
*/

const me = {
  name: "Elliott",
  age: 27,
};

//console.log(me)

//////////////////////////// PROBLEM 2 ////////////////////////////

//Create an object saved to the variable dog.
//The dog object should have the following properties:
//name (a string), color (a string), age (a number),
//and goodBoy/goodGirl (a boolean).

const dog = {
  name: "Rufus",
  color: "Cream",
  age: 47,
  goodBoy: true,
};
//console.log(dog)

//////////////////////////// PROBLEM 3 ////////////////////////////
/* Print out the name of the dog you created in problem 2 using dot-notation. */

//console.log(dog.name)

//////////////////////////// PROBLEM 4 ////////////////////////////
/* Print out the color of the dog you created in problem 2 using bracket-notation. */

// console.log(dog["color"])

//////////////////////////// PROBLEM 5 ////////////////////////////
/*
  Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.
  Have the values to those keys be strings that are equal to your favorite thing in that category.
*/

const favoriteThings = {
  band: "Bullet for my Valentine",
  food: "Meatloaf",
  person: "Will Smith",
  book: "Eragon",
  movie: "Palm Springs",
  holiday: "Easter",
};

//console.log(favoriteThings)
/*
  After you've made your object, use bracket or dot notation to add another key named 'car' with the value being your favorite car and then another key named 'show' with the value being your favorite show.
*/

favoriteThings.car = "Corvette";
favoriteThings.show = "Arrested Development";
// console.log(favoriteThings)

/*
  Now use bracket or dot notation to change the value of the food key in your favoriteThings object to be 'Chicken Nuggets'
  and change the value of the book key in your favoriteThings object to be 'Harry Potter'. (If they were either of those things already, change them to something else.)
*/

favoriteThings.food = "Chickie Nuggies";
favoriteThings.book = "Harry Potter";

// console.log(favoriteThings)

//////////////////////////// PROBLEM 6 ////////////////////////////

// Do not edit the code below.
var carDetails = {
  color: "red",
  make: "toyota",
  model: "tacoma",
  year: 1994,
};
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

const { color, make, model, year } = carDetails;
// console.log(carDetails)

//////////////////////////// PROBLEM 7 ////////////////////////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting(obj) {
  //Code Here
  const { firstName, lastName, title } = obj;

  // Do not edit the code below.
  return "Hello, " + title + " " + firstName + " " + lastName + "!";
  // Do not edit the code above.
}

// console.log(greeting(
//   {firstName: "Elliott",
//    lastName:"Leonard",
//    title:"master"}))

//////////////////////////// PROBLEM 8 ////////////////////////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

const totalPopulation = (obj2) => {
  const { utah, california, texas, arizona } = obj2;
  return utah + california + texas + arizona;
};

const tori = {
  utah: 29,
  california: 42,
  texas: 90,
  arizona: 33,
};

//console.log(totalPopulation(tori))

// const totalPopulation = {

// }

//////////////////////////// PROBLEM 9 ////////////////////////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

proteinShake = {
  carb: "10g",
  fat: "15g",
  protein: "30g",
};

const ingredients = (obj3) => {
  const { carb, fat, protein } = obj3;
  const arr = [];
  arr.push(carb, fat, protein);
  return arr;
};
// console.log(proteinShake)
// console.log(ingredients(proteinShake))
//////////////////////////// PROBLEM 10 ////////////////////////////
// Do not edit the code below.
var user = {
  name: "Bryan",
  age: 24,
  pwHash: "U+Ldlngx2BYQk",
  email: "BryanSmith33@gmail.com",
  birthday: "05/02/1990",
  username: "bryansmith33",
};
// Do not edit the code above.

/*
  Let's say I, the user, decided to change my name and email address to the following:
  name -> 'Bryan G. Smith' and email -> 'bryan.smith@devmounta.in'.
  Make that change without modifying the original object code above.
*/

let { name: newName } = user;
let { email: newEmail } = user;
newName = "Elliot";
newEmail = "yaimcool27@aol.com";

// console.log(user)
// console.log(newName, newEmail)

//////////////////////////// PROBLEM 11 ////////////////////////////
/*
  Using the user object above, delete the users age off of the object.
*/

delete user.age;
// console.log(user)

//////////////////////////// PROBLEM 12 ////////////////////////////
/*
  Create a class called 'Cat'. Make sure to call your constructor, and require these 3 parameters: name, age, color.
  Outside of your class, create an instance of your cat, passing in whatever values you would like.
  Print the name of your cat instance using dot notation.
*/

class Cat {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}
const elliCat = new Cat("Millie", 1, "white, black, and orange");
// console.log(elliCat)

//////////////////////////// PROBLEM 13 ////////////////////////////
/*
  Create a class called 'Wizard'. Make sure to call your constructor, and require these 3 parameters: name, age, favoriteSpell.
  Add a function to your Wizard class called castSpell. This function should print "{name} has cast {favoriteSpell}"
  Outside of your class, create an instance of your Wizard, passing in whatever values you would like.
  Call the castSpell function on the instance of your wizard.
*/

class Wizard {
  constructor(name, age, favoriteSpell) {
    this.name = name;
    this.age = age;
    this.favoriteSpell = favoriteSpell;
  }
  castSpell() {
    return `${this.name} has cast ${this.favoriteSpell}`;
  }
}

const harryPotter = new Wizard("Harry Potter", 17, "Oculus Reparo");

// console.log(harryPotter.castSpell())

//////////////////////////// PROBLEM 14 ////////////////////////////
/*
    Write a class called Phone. We'll use it as if we were creating
    phone objects to keep track of inventory using an app.

    Phone will build phone objects with brand, model, storage, color, price, and sold properties.

    Write a constructor that sets those values -- all of the values 
    should come from the constructors parameters except sold, which
    should always be set to false. We want that to be false since 
    when we create a new phone, we're putting it in our inventory
    and it won't be sold yet. 

    Create a method called 'sell'.
    sell should be a function that changes the value of sold to true and prints the string: '{brand} {model} has been sold.'
    
    Create another method called 'changePrice'. We can use this 
    to change the price in case a phone isn't selling.
    changePrice should take in one argument, 'newPrice'. 
    Inside the function, reassign the value of the object's price
    to be newPrice.
*/

class Phone {
  constructor(brand, model, storage, color, price) {
    this.brand = brand;
    this.model = model;
    this.storage = storage;
    this.color = color;
    this.price = price;
    this.sold = false;
  }
  sellPhone() {
    this.sold = true;
    return `${this.brand} ${this.model} has been sold`;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }
}

const iPhone34 = new Phone("iPhone", 34, "64g", "Red", 1200);
// console.log(iPhone34)

// console.log(iPhone34)

/*
    Next make three new phone instances using your class.
    Send in values of your choice. They should match these data types:
    - brand: string
    - model: string
    - storage: number
    - color: string
    - price: number
*/

const samsung = new Phone("Samsung", 19, "256g", "Black", 1200);
const blackBerry = new Phone("Black Berry", 1, "12mb", "Slate grey", 200);

/* 
  Call the changePrice function on one of your phones, 
  don't forget to pass in a new price 

  Then console.log that object to see the price change
*/

iPhone34.changePrice(650);

/*
  Now call the sell method on one of your other phone objects

  Print the value of that phone's sell property to make sure it's been changed to true
*/

iPhone34.sellPhone();
// console.log(iPhone34)

//////////////////////////// PROBLEM 15 ////////////////////////////

/*
  Use the spread operator to create a copy of the colors object below.
  Store the copy in a variable called colorsCopy.
  Note: We did not cover the spread operator in class. We do not expect you to know how to use it. Challenge yourself by going online and researching what the spread operator is and how to use it.
*/

//do not edit this object
const colors = {
  background: "red",
  highlight: "blue",
  text: "yellow",
};
//do not edit this object

const colorsCopy = { ...colors };
//console.log(colorsCopy)

/*
 Now use the spread operator to combine the following 2 objects into one. 
 Call the new variable helensInfo. 
 When they combine, none of the properties should be repeated.
*/

//do not edit the objects below
const contactInfo = {
  firstName: "Helen",
  lastName: "Parr",
  phoneNumber: 1234445555,
  email: "helen@mymail.com",
};

const shippingInfo = {
  firstName: "Helen",
  lastName: "Parr",
  street: "100 E. Main Street",
  city: "Anytown",
  state: "AZ",
  zipCode: 85004,
};
//do not edit the objects above

const helensInfo = {
  ...contactInfo,
  ...shippingInfo,
};
// console.log(helensInfo)

//Print helensInfo to see what it looks like, there should be no repeating properties.

//////////////////////////// PROBLEM 16 ////////////////////////////

/*
  Create a class called Vehicle. Make sure to call your constructor, 
  and require these 3 parameters: capacity (how many passengers), color, and mileage.

  Write a method inside your class called 'move'.
  The move function should take in one parameter, miles.
  Inside the function, add the number of miles to the object's mileage.
  And finally, print the value of the mileage.
*/

class Vehicle {
  constructor(capacity, color, mileage) {
    this.capacity = capacity;
    this.color = color;
    this.mileage = mileage;
  }
  move(miles) {
    this.mileage += miles;
    console.log(this.mileage);
  }
}

/*
  Create a vehicle using your new class and save it to a variable called myFirstVehicle
*/

const focus17 = new Vehicle(5, "black", 83000);
//console.log(focus17)

/* 
  Now we'll create a class that's based off of the vehicle class. 

  Write a class called Motorcycle that *extends* the Vehicle class. In the constructor, 
  make sure you require all of the parameters from the Vehicle class as well as 2 
  new ones: make and isCool. (Hint: don't forget to call the super function)
*/

class Motorcycle extends Vehicle {
  constructor(capacity, color, mileage, make, isCool) {
    super(capacity, color, mileage);
    this.make = make;
    this.isCool = isCool;
  }
}

/*
  Create a Motorcycle using your new class and save it to a variable called myFirstMotorcycle
*/

const myFirstMotorcycle = new Motorcycle(
  1,
  "black",
  17000,
  "Harley Davidson",
  true
);
//console.log(myFirstMotorcycle)

/*
  Call the move function on myFirstMotorcycle (don't forget the parameter)
*/
//myFirstMotorcycle.move(50)

/*
  Let's make another class based off of Vehicle. 

  Write a class called Boat that *extends* the Vehicle class. The constructor should take in
  all the same arguments as Vehicle plus 3 new ones: 
  name (boats gotta have cool names), type (ski boat, yacht, etc), and isSeaworthy.

  Create a method inside of the Boat class called checkSeaworthiness 
  Inside the method, check to see if the boat is seaworthy
  If it is, console.log a string: 'The {color} {type} {name} is seaworthy!'
  If it isn't, console.log a string: 'You need to get your {type} in shape!'

  Write a second function in this class called performMaintenance 
  This function should set isSeaworthy to be true
*/

class Boat extends Vehicle {
  constructor(capacity, color, mileage, name, type, isSeaworthy) {
    super(capacity, color, mileage);
    this.name = name;
    this.type = type;
    this.isSeaworthy = isSeaworthy;
  }
  checkSeaworthiness() {
    if (this.isSeaworthy === true) {
      console.log(`The ${this.color} ${this.type} ${this.name} is seaworthy!`);
    } else {
      console.log(`You need to get your ${this.type} in shape!`);
    }
  }
  performMaintenance() {
    this.isSeaworthy = true;
  }
}

/*
  Create a new boat using your class. You can choose whatever values you like for all the 
  properties except isSeaworthy -- make that one false. Call your variable myFirstBoat.
*/

const sailboat = new Boat(20, "white", 12000, "Princess", "Sailboat", false);
//console.log(sailboat)

/*
  Call the checkSeaworthiness method on your new boat
*/

//sailboat.checkSeaworthiness()

/*
  Now run the performMaintenance method on your boat
*/

//sailboat.performMaintenance()

/*
  Check the seaworthiness once more (you should be ready for the water!)
*/

//sailboat.checkSeaworthiness()

// Practice Problem: Class
class Student {
  constructor(name, age, isPresent, location) {
    this.name = name;
    this.age = age;
    this.isPresent = isPresent;
    this.location = location;
  }
  greeting() {
    return `Hi, my name is ${this.name}, I'm here today, this is ${this.isPresent}`;
  }
}
const nik = new Student("Nik", 24, true, [1, 3]);
//console.log(nik)
//console.log(nik.greeting())

class Teacher extends Student {
  constructor(name, age, isPresent, location, lessonsTaught, type) {
    super(name, age, isPresent, location);
    this.lessonsTaught = lessonsTaught;
    this.type = type;
    this.isQueueOpen = false;
  }
  openQueue() {
    this.isQueueOpen = true;
    return `${this.name} here, do you have anything you need help with?`;
  }
}

const scott = new Teacher("Scott", 24, true, [0, 0], 100, "Instructor");
console.log(scott);
console.log(scott.openQueue());
console.log(scott);

//Create a DevMountain object with the following properties: location (string), number of students (integer, size in sq feet (string), students (array of names)

const devMountain = {
  location: "Lehi",
  numberOfStudents: 20,
  students: ["Tanner", "Trent", "Kyle", "Saul"],
};

console.log(devMountain);
