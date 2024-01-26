/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */
 let hobbies = ['basketball', 'coding', 'hockey'];
 console.log(hobbies);
 console.log('for of loop');

 for (let i = 0;  i < hobbies.length; i+=1){
     console.log(hobbies[i]);
 }
 console.log(hobbies.length);
// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */
let colors = ['green', 'red', 'teal', 'orange'];
tealCount = 0;
let index = colors.length -1;
for(let tealCount= 0; tealCount <  colors.length;  tealCount += 1) {
     console.log('This is teal')
     console.log('tealcount', tealCount);

}


// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */
numbers = [1, 2, 3, 4, 5];
evenNumbers = [];
oddNumbers = [];

//if numbers%2===0 


console.log('original array: ', numbers);
console.log('Even Numbers: ', numbers);
console.log('Odd Numbers: ', numbers);




// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */
let Captain = [true, false, true, false];
let toggled = [];
for(let david of Captain){
     if (Captain === true){
        toggled.push(false)
     }
     else{
          toggled.push(true)
     }
}
console.log(Captain);
console.log(toggled);
// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */
let pew = [2, 0, 4, 5, 0, 0, 0, 0];
while (pew.length > 0 && pew[pew.length -1] === 0){
     pew.pop();
}
console.log(pew)
// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8


/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console
 */
      donut = [3, 6, 2, 56, 32, 5, 89, 32];
      console.log(donut);
      High = donut[0];
      low = donut[0];
      
      for (i = 0; i < donut.length; i++) {
      if (donut[i] > High ) {
      High= donut[i];
      }
      if (donut[i] < low ) {
          low = donut[i];
      }
     }
      console.log('High:', High);
      console.log ('Low:', low);
// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3
