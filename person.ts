import Smartphone from './smartphone'

export default class Person {
    name: string;
    age: number;

    private smarthpones: Smartphone[] = []
  
    constructor(name: string, age: number) {
      console.log('Tworzymy instancję klasy Person')
      this.name = name;
      this.age = age;
    }

    verbal = (): string => {
        if(this.age === undefined) {
            return `Osoba: nazwisko:${this.name}, wiek: nie podano`
        } else {
            return `Osoba: nazwisko:${this.name}, wiek: ${this.age}`
        }
    }

    rename = (newName: string): void => {
        this.name = newName
    }

    celebrateBirthday = (): void => {
        console.log(`Person: ${this.name} is celebrating his/her ${this.age + 1} birthday`)
        this.age += 1;
    }

    addSmartphone = (smartphone: Smartphone): void => {
        if(this.smarthpones.length <= 3 && this.age >= 18) {
            this.smarthpones.push(smartphone)
        }
        else if(this.smarthpones.length <= 3 && this.age < 18 && smartphone.price > 2500) {
            this.smarthpones.push(smartphone)
        }
    }
}