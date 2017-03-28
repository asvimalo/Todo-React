// function add (a,b) {
//   return a + b;
// }
//
// var toAdd = [9,5];
//
// console.log(add (...toAdd));

// var groupA = ['Jen','Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
// console.log(final)


var personOne = ['Andrew', 25];
var personTwo = ['Jen', 29];

//Hi Andrew, you are 25

function greetings (a, b) {
  return console.log(`Hi ${a}, you are ${b}`)
}

greetings (...personOne);
greetings (...personTwo);

var names = ['Mike','Ben'];
var final = ['Andrew', ...names];
final.forEach((name) => {
  console.log('Hi ' + name);
});
