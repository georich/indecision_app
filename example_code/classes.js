class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi, I am ${this.name}.`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.hasHomeLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}`;
    }

    return greeting;
  }
}

const me = new Student('George Richards', 24, 'Physics');
// console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.hasMajor());

const other = new Student();
console.log(other.getGreeting());
console.log(other.getDescription());
console.log(other.hasMajor());

const wanderer = new Traveller('Someone', 54, 'London');
console.log(wanderer.getGreeting());
