import { formattedDateTime } from "./formatedDate";
class Zookeeper {
    constructor() {
        this.feedLog = [];
    }
    feedAnimalTime(animal) {
        console.log(`Zookeper feds ${animal.getName()}`);
        this.feedLog.push(`${animal.getName()} was fed at ${formattedDateTime}`);
    }
    getLog() {
        return this.feedLog;
    }
}
export { Zookeeper };
