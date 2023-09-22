import { Animal } from '../animal';
class SleepAndWalk{
private animals: Animal [] = [];

addAnimalToSleepAndWalkGroup(animal: Animal){
 this.animals.push(animal);
}
    

   sleep(): void{
    for (const animal of this.animals){
        console.log(`${animal.getName()} is sleeping`)
    }
   };
   walk(): void{
    for (const animal of this.animals){
        console.log(`${animal.getName()} is walking`)
    }
   };
}


export { SleepAndWalk };