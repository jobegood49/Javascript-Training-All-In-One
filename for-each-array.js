// let arr = [3, 4, 5, 6, 7]

// arr.forEach(el => {
//   console.log(el * 2)
// })

const objTest = {
  toto: () => {
    console.log('Toto')
  },
  bara: 'I am bara',
  jo: (a, b) => {
    console.log(a + b)
  },
  cake: {
    id: 8,
    type: 'chocolate',
  },
  blabla: array => {
    array.forEach(el => {
      console.log(el)
    })
  },
}

// let totoFuntion = objTest.toto
// totoFuntion()

// let bara1 = objTest.bara
// console.log(bara1)

// let functionJo = objTest.jo
// console.log(functionJo)

// functionJo(2, 3)

// let cake = objTest.cake
// console.log(cake.type)

// console.log(objTest.blabla)

let blablaFunction = objTest.blabla
console.log('blablaFunction', blablaFunction)
let arr = [1, 2, 3]
blablaFunction(arr)
