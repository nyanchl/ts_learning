"use strict";
class Persson {
    constructor(initname, initage) {
        this.initname = initname;
        this.initage = initage;
    }
    incrementAge() {
        this.initage += 1;
    }
    greeting() {
        this.incrementAge();
        console.log(`Hello ${this.initname}. ${this.initage}`);
    }
}
const giveperson = new Persson('John', 30);
giveperson.greeting();
class Teacher extends Persson {
    set major(value) {
        if (!value) {
            throw new Error('This is not a subject');
        }
        this._major = value;
    }
    constructor(initname, initage, _major) {
        super(initname, initage);
        this._major = _major;
    }
    greeting() {
        console.log(`Hello ${this.initname}. ${this.initage} ${this._major}`);
    }
}
const teacher = new Teacher('John', 30, 'Math');
// teacher.subject = 'Science';
teacher.greeting();
