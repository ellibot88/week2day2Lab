// Find Lucky Numbers
// Difficulty
// Easy

// Concepts
// Loops, General

// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

// For example:

// luckyNumbers(2)
// // returns (3, 7)
// luckyNumbers(6)
// // returns (1, 7, 9, 6, 5, 2)

// let theNumbers = []
// const availableNums = [0,1,2,3,4,5,6,7,8,9,10]
// const luckyNumbers = n => {
//  for(let i = 0; i < n; i++){
//    let index =  Math.floor(Math.random()*availableNums.length)
//    // theNumbers = availableNums.splice(index,1)
//    //theNumbers.push(availableNums.splice(index,1))
//    theNumbers.push(availableNums[index])
//    availableNums.splice(index,1)
//    // console.log(availableNums)
//  }
//   return theNumbers;

// }

// console.log((luckyNumbers(8)))

//console.log(Math.floor(Math.random()*availableNums.length))

let ans = [];
//console.log(num)
const numFunc = (num) => {
  for (let i = 0; i < num; i++) {
    let num = Math.floor(Math.random() * 11);
    if (num === ans[0]) {
    } else {
      ans.push(num);
    }

    return ans;
  }
};

const test = numFunc(4);
console.log(test);
