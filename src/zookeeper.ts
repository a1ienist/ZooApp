import { Animal } from "./animal";
import { formattedDateTime } from "./formatedDate";

class Zookeeper{
    private feedLog: string[] = [];

    feedAnimalTime(animal: Animal):void{
        console.log(`Zookeper feds ${animal.getName()}`)
        this.feedLog.push(`${animal.getName()} was fed at ${formattedDateTime}`);
    }

    getLog():string[]{
        return this.feedLog;
}
}

export{Zookeeper}