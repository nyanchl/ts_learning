class Persson{
    constructor(public readonly initname: string, protected initage: number) {
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
    set major(value: string) {
        if (!value) {
            throw new Error('This is not a subject');
        }
        this._major = value;
    }
    constructor(initname: string, initage: number, public _major: string) {
        super(initname, initage);
    }
    greeting() {
        console.log(`Hello ${this.initname}. ${this.initage} ${this._major}`);
    }
}
const teacher = new Teacher('John', 30, 'Math');
// teacher.subject = 'Science';
teacher.greeting();