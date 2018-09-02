class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    addPhone(phone) {
        this.phone = phone;
    }

    call() {
        if (this.phone) {
            console.log(`Calling ${this.name} at ${this.phone}`);
        } else {
            console.log(`${this.name} has no phone number saved.`);
        }
    }

    birthday() {
        console.log(`Wishing ${this.name} a happy ${this.age + 1}th birthday!`)
    }
}

// remember to write a constructor function
let jimmy = new Person("Jimmy", 28);

jimmy.addPhone("55551234");

jimmy.call();
// should say "Calling Jimmy at 55551234..."

jimmy.birthday();
// should say "Wishing Jimmy a happy 29th birthday!"

let jill = new Person("Jill");

jill.call();
