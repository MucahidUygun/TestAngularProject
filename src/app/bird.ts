import { Animal } from "./animal";

export class Bird implements Animal{
    type: string;
    name: string;
    age: number;
    weight: number;
    habitat: string;
    isFlying: boolean;

    constructor(type:string,name: string, age: number, weight: number, habitat: string, isFlying: boolean)
    {
        this.type = type;
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.habitat = habitat;
        this.isFlying = isFlying;
    }  
}