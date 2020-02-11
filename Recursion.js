// Write a function that takes an input character and returns that character repeated 5 times using recursion. For example, if the input is 'g', then the output should be 'ggggg'.
let count = 1;
function repeater(input) {
  if (count === 5) {
    output = output + input;
    count = 1;
    return output; //returns output when count hits 5. Once count hits 5, it resets the counter to 1 so that you can reset output so that you can run the repeater function on "j" instead of "g".
  } else if (count === 1) {
    count = count + 1;
    output = "";
    output = output + input; //output is reset when the count is at 1.
  } else {
    count = count + 1;
    output = output + input;
  }
  return repeater(input); //you have to return the repeater function so that the function can recurse. Make sure to include the parameter so that it will pass through to each recursive function.
}

console.log(repeater("g"));
console.log(repeater("j"));

//_____________________________

//Write a function that returns the factorial of a number.

//EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.

// function factorial (parameter, product = 1) {
//   if (parameter === 1 || parameter === []) {
//       return product;
//     } else  {
//       const newProduct = product * parameter;
//       const newParameter = parameter -1;
//       return factorial(newParameter, newProduct);//for each iteration, the NewParameter becomes the parameter which is run through the "host" function. In the same way, the newProduct becomes the product which is run through the "host" function
//     }
// }

// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720
// console.log(factorial([])); // -> 1

// //___________________________

// let array = [56, 55, 47, 32]
// let newArray = array.join("");
// console.log(newArray);
// let newerArray = [newArray]
// console.log(newArray.indexOf(7))

//____________________________

//Get the length of an array using recursion without accessing its length property.

// function getLength (firstArray, count = 0, secondArray = []) {
//   if (firstArray[0] === undefined) { //checks to see if there is an element in the array.
//     return 0;
//     } else if
//     (firstArray[count+1] === undefined) {    return secondArray.push(firstArray[count]); //the push operator returns the length of the resulting array.
//   } else {
//     let newCount = count + 1;
//     secondArray.push(firstArray[count])
//     return getLength(firstArray, newCount, secondArray)
//     //returning the recursive function passing in the newCount variable and secondArray
//   }
// }
// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5
// console.log(getLength([])); // -> []

//____________________________

//Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.

// function pow(base, exponent, product = 1, count = 1) {
//   if (count === exponent) {
//     return product * base;
//   } else {
//     let newCount = count + 1;
//     let newProduct = product * base;
//     return pow(base,exponent, newProduct, newCount);
//   }
// }

// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243

//______________________________

//Write a function that takes an array of functions and a number that will be piped through all those functions. The input number passes through the first function, whose output is passed as input to the second function, whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.

// function flow(input, arrayOfFunctions, count = 0) {
//   if(arrayOfFunctions[count + 1] === undefined) {
//     let output = arrayOfFunctions[count](input)
//     return output;
//   } else  {
//     let output = arrayOfFunctions[count](input);
//     let newCount = count + 1;
//     return flow (output, arrayOfFunctions, newCount)
//   }
// }

// function multiplyBy2(num) { return num * 2; }
// function add7(num) { return num + 7; }
// function modulo4(num) { return num % 4; }
// function subtract10(num) { return num - 10; }
// const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
// console.log(flow(2, arrayOfFunctions)); // -> -7
