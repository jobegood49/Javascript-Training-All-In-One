console.log('hello')
let object = {}
object = { name: 'john', type: 'dog' }
const object1 = { name: 'john', type: 'dog1' }
let pets = [object, object1]

// console.log(pets)

// pets.push([object, object1])

console.log('^^^^^^^^^^^')

console.log(pets)

// console.log(pets[0])
// console.log(pets[1])
// console.log('pets[2]', pets[2][0])

// pets.name

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
}
