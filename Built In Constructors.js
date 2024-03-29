// String

const name1 = 'Jeff';
const name2 = new String('Jeff');

// name2.foo = 'bar';
console.log(name2);

console.log(typeof name2);

if (name1 === 'Jeff') {
  console.log('YES')
} else {
  console.log('NO')
}


// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean 
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function () {
  return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');

// Object
const john1 = {
  name: "John"
};

const john2 = new Object({
  name: "John"
})

// Array
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// Regular Expressions
const reg1 = /\w+/;
const reg2 = new RegExp('\\w+')