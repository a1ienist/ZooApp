class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makeSound() {
        console.log('make sound!!!');
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
export { Animal };
