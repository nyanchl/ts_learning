interface Person {
    name: string;
    age: number;
    greeting(message: string): void;
}
class Student implements Person{
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }
    greeting(message: string) {
        console.log(message);
    }
}
type BloodType = {
    bloodtype: string;
}
class Child implements BloodType {
    constructor(public bloodtype: string) {
        this.bloodtype = bloodtype
    }
    myblood() {
        console.log(`私の血液型は${this.bloodtype}です。`)
    }
}
const bloodtype = new Child('A');
bloodtype.myblood();