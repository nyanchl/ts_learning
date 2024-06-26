abstract class Person {
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }
    static checkage(age: number) {
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
    abstract greeting(): void;
}
class Teacher extends Person {
    greeting() {
        console.log('Hello, nice to meet you.');
    }
    constructor(name: string, age: number, public subject: string) {
        super(name, age);
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