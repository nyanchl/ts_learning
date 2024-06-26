"use strict";
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    greeting(message) {
        console.log(message);
    }
}
class Child {
    constructor(bloodtype) {
        this.bloodtype = bloodtype;
        this.bloodtype = bloodtype;
    }
    myblood() {
        console.log(`私の血液型は${this.bloodtype}です。`);
    }
}
const bloodtype = new Child('A');
bloodtype.myblood();
