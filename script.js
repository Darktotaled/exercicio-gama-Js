const type = 5

let resultado = fizzBuzz(29)
console.log(resultado)
function fizzBuzz(entrada) {
  if (entrada % 3 == 0) {
    if (entrada % 5 == 0) {
      return 'FizzBuzz'
    } else {
      return 'Fizz'
    }
  } else if (entrada % 5 == 0) {
    return 'Buzz'
  } else if (typeof entrada != typeof type) {
    return 'Não é um numero'
  } else {
    return entrada
  }
}
