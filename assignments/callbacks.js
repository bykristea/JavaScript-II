// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(items.length);
  }

  getLength(items, function (length) {
    console.log(length)
  });

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  
    return cb(arr[3]);
  }

  last(items, function (last) {
    console.log(last)
  });



  function sumNums(x, y, cb) {
    // sumNums adds two numbers (x, y) and passes the result to the callback.
    return (x + y);
  }

  function calculate(x, y, cb) {
    return cb(x, y)
  }

  const result = calculate(5, 2, sumNums);
  console.log(result)


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.

  return x*y;
}

function calculate(x, y, cb) {
  return cb(x, y);
}
console.log(multiplyNums(5,10))


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

// for ( let i=0; i<items.length; i++) {
//   if (item[i] === list) {
//     return true;
//   }
//   return false;
// }

cb(list.includes(item))
}
contains('yo-yo', items,console.log)

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const check = array.filter(function(item, pos) {
    return array.indexOf(item) == pos;
  });
  cb(check);
}

function cb(result) {console.log(result);}
removeDuplicates( [1,4,9,8,6,8,1], cb);