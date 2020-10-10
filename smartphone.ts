import Simcard from './simcard'

export default class Smartphone {
    price: number
    name: string
    doesHave5G: boolean
    simcard: Simcard

    constructor(name: string, price: number, doesHave5F: boolean = false) {
        this.price = price
        this.name = name
        this.doesHave5G = doesHave5F
    }

    verbose = (): string => {
        return `Smarthphone's name: ${this.name}, Price: ${this.price}, 5G: ${this.doesHave5G}`
    }

    addSimcard = (simcard: Simcard): Simcard => {
        let tempSimcard = this.simcard
        this.simcard = simcard

        return tempSimcard
    }
}