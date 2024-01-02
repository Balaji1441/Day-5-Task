class Person {
    constructor(first_name, last_name, age, email) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.email = email;
    }

    getFullName() {
        return `${this.first_name} ${this.last_name}`;
    }

    displayDetails() {
        console.log(`Name: ${this.getFullName()}`);
        console.log(`Age: ${this.age}`);
        console.log(`Email: ${this.email}`);
    }
}


const person1 = new Person("John", "Doe", 30, "john@example.com");

person1.displayDetails();