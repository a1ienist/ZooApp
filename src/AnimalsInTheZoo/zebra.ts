import { Animal } from '../animal';

class Zebra extends  Animal {
    private maxSpeed: number;
    private origin: string;


    constructor(name: string, age: number, maxSpeed: number, origin: string){
        super(name, age);
        this.maxSpeed = maxSpeed;
        this.origin = origin;
    }
    
}


export { Zebra };