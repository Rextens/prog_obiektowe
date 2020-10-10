import Person from './person'
import Smartphone from './smartphone'

let personArray: Array<Person> = [];

personArray.push(new Person("Anubis", 2002))
personArray.push(new Person("Bastet", 1997))
personArray.push(new Person("Ozyrys", 2012))

personArray[2].rename("Toth")
personArray[0].addSmartphone(new Smartphone("Samsung", 3000, true))

personArray.forEach(value => {
    console.log(JSON.stringify(value)) 
})
