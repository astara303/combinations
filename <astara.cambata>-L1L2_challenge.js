/**
* The following is the function where the solution shall be written
*/
function solution(input) {

  //identify/return only integers in string 
  const string = input.replace(/\D/g, '')

  //if string contains no integers, end the function
  if (string === '') {
    return 'No integers found'

  //split that string into array of individual values  
  } else {
    const arr = string.split('')

    //convert to integers 
    const numbers = arr.map((i) => Number(i))

    //Heap's algorithm
    //create new array the legth of current array to fill with permutations of numbers
    const length = numbers.length
    const results = [numbers.slice()]
    const array = new Array(length).fill(0)
    let i = 1
    let k, number

    //Fixes the element in the last position
    //Swaps the element in the last position with one of the rest and repeats the process based on k iteration it is in
    while (i < length) {
      if (array[i] < i) {
        k = i % 2 && array[i]
        number = numbers[i]
        numbers[i] = numbers[k]
        numbers[k] = number
        ++array[i]
        i = 1
        results.push(numbers.slice())
      } else {
        array[i] = 0
        ++i
      }
    }

    //combine integers separated by , for each permutation
    const joined = results.map(x => x.join())
    const combinations = joined.map(x => x.split(',').join(''))

    //sort in descending order
    const desc = combinations.sort(function (a, b) {
      return b - a
    })

    //return results
    return desc.join(',')
  }
}




// some example inputs
console.log(solution('326')) // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')) // expected ouput 632,623,362,326,263,236
console.log(solution('thanks for your time!')) // expected output 'No integers found'
