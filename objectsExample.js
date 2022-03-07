const person = {
    firstName: 'Alex',
    lastName: 'Myers',
    age: 31,
}

const meal = {
    appetizer: 'Chips and salsa',
    entree: 'tacos',
    dessert: 'tres leches', 
    drink: 'cerveza'
}

const {appetizer, entree} = meal
// console.log(appetizer)
// console.log(entree)

const {drink: bestSodaEver} = meal
// console.log(bestSodaEver)

for (let key in person) {
    // console.log({key, value: person[key]})
}

person.job = 'software developer'
// console.log(person)

person['pets'] = ['chorri', 'fausto']
// console.log(person)

delete person.job 
// console.log(person)
