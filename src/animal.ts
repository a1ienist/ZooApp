class Animal {
    private name: string;
    private age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;

    }
    makeSound(): void {
        console.log( 'make sound!!!' );
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}

export { Animal };