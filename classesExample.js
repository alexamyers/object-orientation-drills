class Dog {
constructor(name, breed, age) {
    this.name = name
    this.breed = breed
    this.age = age
    this.dogYears = age * 7
    this.isGoodDog = true
}

greet(personToBeGreeted) {
    console.log(`Hi ${personToBeGreeted}, my name is ${this.name} and I am a ${this.breed} who's ${this.age} years old.`)
}

incrementAge () {
    this.age += 1
    this.dogYears = this.age * 7
}
}


class Puppy extends Dog {
    constructor(name, breed, trainingLevel) {
        super(name, breed, 0)

        this.trainingLevel = trainingLevel
    }

    levelUp(num) {
        this.trainingLevel += num
    }
}

const chorri = new Dog('chorri', 'pittie', 4)
const athens = new Dog('athens', 'golden retriever', 3.5)
const lassie = new Puppy('Lassie', 'mut', 10)

chorri.greet('Alex')