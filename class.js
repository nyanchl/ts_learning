"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    static checkage(age) {
        if (age >= 18) {
            console.log('Adult');
        }
        else {
            console.log('Child');
        }
    }
    IncreaseAge() {
        this.age++;
    }
    ShowProfile() {
        this.IncreaseAge();
        console.log(`I'm ${this.name}, ${this.age} years old.`);
        this.greeting();
    }
}
class Teacher extends Person {
    greeting() {
        console.log('Hello, nice to meet you.');
    }
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
        this.subject = subject;
    }
    ShowProfile() {
        super.ShowProfile();
        console.log(`I teach ${this.subject}.`);
    }
}
const person = new Teacher('Tom', 20, 'Math');
person.ShowProfile();
Person.checkage(15);
