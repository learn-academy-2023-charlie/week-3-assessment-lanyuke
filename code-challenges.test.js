// ASSESSMENT 3: Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

  // describe("fibSeq", () => {
  //   it("returns an array that length containing the numbers of the Fibonacci sequence.", () => {
  //     expect(fibSeq(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]),
  //     expect(fibSeq(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  //   })
  // })

  // FAIL  ./code-challenges.test.js
  // fibSeq
  //   ✕ returns an array that length containing the numbers of the Fibonacci sequence. (1 ms)

  // ● fibSeq › returns an array that length containing the numbers of the Fibonacci sequence.

  //   ReferenceError: fibSeq is not defined


// const fibLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]

// const fibLength2 = 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

  // Pseudo code:
  // input: num
  // output: returns an array that length containing the numbers of the Fibonacci sequence.
  // process:
  // create a function name: fibSeq
  // make a new varible name: fibArr = [1, 1] because fibonacci sequence always starts with 1, 1.
  // then use for loop, declare starting point is [2] because the array already have [0] and [1] value; 
  // stoping point is less then the giving num; 
  // iteration is i++ :
  // for (let i = 2; i < num; i++) 
  // then use .push method to add new value into array after [1, 1], new value will be the sum of value of [current iteration index -1] and value of [current iteration index -2]
  // fibArr.push(fibArr[i - 1] + fibArr [i - 2])
  // return the varible.
  // pass test

// const fibSeq = (num) => {
//   const fibArr = [1, 1];
//   for (let i = 2; i < num; i++) {
//    fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
//   }
//   return fibArr;
// } 

  // testpass:
  // PASS  ./code-challenges.test.js
  // fibSeq
  //   ✓ returns an array that length containing the numbers of the Fibonacci sequence. (3 ms)


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.


  // describe("lowTogrt", () => {
  //   it("returns an array of the values sorted from least to greatest.", () => {
  //     expect(lowTogrt(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]),
  //     expect(lowTogrt(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  //   })
  // })

  // Good Fail:
  // FAIL  ./code-challenges.test.js
  // lowTogrt
  //   ✕ returns an array of the values sorted from least to greatest. (1 ms)

  // ● lowTogrt › returns an array of the values sorted from least to greatest.

  //   ReferenceError: lowTogrt is not defined


// const studyMinutesWeek1 = {
//   sunday: 90,
//   monday: 30,
//   tuesday: 20,
//   wednesday: 15,
//   thursday: 30,
//   friday: 15,
//   saturday: 60
// }
// // Expected output: [15, 15, 20, 30, 30, 60, 90]

// const studyMinutesWeek2 = {
//   sunday: 100,
//   monday: 10,
//   tuesday: 45,
//   wednesday: 60,
//   thursday: 20,
//   friday: 15,
//   saturday: 65
// }
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

  // Pseudo code:
  // input: object
  // output: returns an array of the values sorted from least to greatest.
  // process:
  // create a function name: lowTogrt
  // use Object.values(object) to get all value from giving object
  // then use .sort((a, b) => a - b) to arrange array value from least to greatest
  // return Object.values(object).sort((a, b) => a - b)
  // pass test

      // const lowTogrt = (object) => {
      //   return Object.values(object).sort((a, b) => a - b)
      // }

  
  // pass test:
  // PASS  ./code-challenges.test.js
  //   lowTogrt
  //     ✓ returns an array of the values sorted from least to greatest. (2 ms)


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

  describe("accSum", () => {
    it("returns an array of the accumulating sum.", () => {
      expect(accSum(accountTransactions1)).toEqual([100, 83, 60, 51]),
      expect(accSum(accountTransactions2)).toEqual([250, 161, 261, 165]),
      expect(accSum(accountTransactions3)).toEqual([])
    })
  })

// Good Fail:
// FAIL  ./code-challenges.test.js
// accSum
//   ✕ returns an array of the accumulating sum. (2 ms)

// ● accSum › returns an array of the accumulating sum.

//   ReferenceError: accSum is not defined



const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.
// Pseudo code:
// input: array
// output: returns an array of the accumulating sum.
// process:
// create a function name: accSum
// use for loop declear starting point with index 1 because nothing will be iterating on index 0
// stop point will be less than array.length;
// iteration will be i++:
// for(let i = 1; i < array.length; i++)
// then use .map method to declare maping using array  
// replacing new value with the sum of the value of [current iteration index] and the value of [current iteration index - 1]
// array.map(array => array[i] = array[i] + array[i - 1])
// return array
// pass test

const accSum = (array) => {
  let sum = 0
return array.map(value => sum += value)
  }


  // // test pass:
  // PASS  ./code-challenges.test.js
  // accSum
  //   ✓ returns an array of the accumulating sum. (5 ms)
  // // 
