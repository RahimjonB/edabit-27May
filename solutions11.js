//1. Create a function that takes an array of numbers and returns the mean (average) of all those numbers.
function mean(numbers) {
    let total = numbers.reduce((sum, num) => sum + num, 0);
    let count = numbers.length;
    if (count > 0) {
      let average = total / count;
      return average.toFixed(2);
    } else {
      return '0.00';
    }
  }

//2. Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
function findLargestNums(arr) {
    return arr.map(subarr => Math.max(...subarr));
  }
  
  
//3. Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.
function maximumScore(tileHand) {
    let totalScore = 0;
    for (let i = 0; i < tileHand.length; i++) {
      totalScore += tileHand[i].score;
    }
    return totalScore;
  }
  
//4. Create a function that takes any non-negative number as an argument and return it with its digits in descending order. Descending order is when you sort from highest to lowest.
function sortDescending(num) {
    return Number(String(num).split('').sort().reverse().join(''));
  }

//5. Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.
function sayHelloBye(name, num) {
    if (num === 1) {
      return "Hello " + name.charAt(0).toUpperCase() + name.slice(1);
    } else {
      return "Bye " + name.charAt(0).toUpperCase() + name.slice(1);
    }
  }

//6. Create a function that returns the number of hashes and pluses in a string.
function hashPlusCount(str) {
    let hashCount = str.split('#').length - 1;
    let plusCount = str.split('+').length - 1;
    return [hashCount, plusCount];
  }
  
//7. Write two functions:
// toArray(), which converts a number to an array of its digits.
// toNumber(), which converts an array of digits back to its number.
function toArray(num) {
    return [...String(num)].map(Number);
  }

  function toNumber(arr) {
    return Number(arr.join(''));
  }

//8. Given a string of numbers separated by a comma and space, return the total sum of all the numbers.
function addNums(numbers) {
    let numsArray = numbers.split(', ');
    let sum = numsArray.reduce((total, num) => total + Number(num), 0);
    return sum;
  }

//9. Write a function that takes a string as an argument and returns the left most digit in the string.
function leftDigit(str) {
    let regex = /\d/;
    let digitMatch = str.match(regex);
    if (digitMatch !== null) {
      return Number(digitMatch[0]);
    }
    return null;
  }

//10. Given a word, write a function that returns the first index and the last index of a character.
function charIndex(word, char) {
    let firstIndex = -1;
    let lastIndex = -1;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === char) {
        if (firstIndex === -1) {
          firstIndex = i;
        }
        lastIndex = i;
      }
    }
    if (firstIndex === -1) {
      return undefined;
    }
    return [firstIndex, lastIndex];
  }
  
//11. Create a function that takes an array with numbers and return an array with the elements multiplied by two.
function getMultipliedArr(arr) {
    return arr.map(num => num * 2);
  }

//12. You will need to write three unfinished logic gates. Continue to write the three logic gates: AND, OR, and NOT.
function AND(a, b) {
    if (a === 1 && b === 1) {
      return 1;
    }
    return 0;
  }
  function OR(a, b) {
    if (a === 1 || b === 1) {
      return 1;
    }
    return 0;
  }
  function NOT(a) {
    if (a === 0) {
      return 1;
    }
    return 0;
  }

//13. Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.
function moveZeros(arr) {
    let nonZeroElements = [];
    let zeroCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        nonZeroElements.push(arr[i]);
      } else {
        zeroCount++;
      }
    }
    while (zeroCount > 0) {
      nonZeroElements.push(0);
      zeroCount--;
    }
    return nonZeroElements;
  }
  
//14. Create a function that takes an array of numbers and returns the smallest number in the set.
function findSmallestNum(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    return smallest;
  }
  
//15. Create a function that takes a string and returns a string with its letters in alphabetical order.
function AlphabetSoup(str) {
    return str.split('').sort().join('');
  }

//16. Write a function that takes an array of elements and returns only the integers.
function returnOnlyInteger(arr) {
    return arr.filter((element) => Number.isInteger(element));
  }

  
//17. Create a function that returns an array of strings sorted by length in ascending order.
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
  }

//18. Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
function sortNumsAscending(arr) {
    if (arr === null || arr === undefined || arr.length === 0) {
      return [];
    }
    return arr.sort((a, b) => a - b);
  }


//19. Write a function that takes a string as an argument and returns the left most digit in the string.
function leftDigit(str) {
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(parseInt(str[i]))) {
        return parseInt(str[i]);
      }
    }
  }

//20. Given an array of numbers, write a function that returns an array that...
function uniqueSort(arr) {
    let uniqueArr = Array.from(new Set(arr));
    uniqueArr.sort((a, b) => a - b);
    return uniqueArr;
  }
  
  