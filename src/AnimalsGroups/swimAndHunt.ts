import { Animal } from '../animal';
class SwimAndHunt {
    private animals: Animal[] = [];

    addAnimalToSwimAndHuntGroup(animal:Animal){
        this.animals.push(animal);
    }
   

 swim(): void{
    for(const animal of this.animals){
        console.log(`${animal.getName()} is swimming `)
    }
 };
    hunt(): void{
        for(const animal of this.animals){
            console.log(`${animal.getName()} is hunting `)
        }
    };
}


export { SwimAndHunt };