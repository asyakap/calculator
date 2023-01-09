// business logic
function add(number1, number2) {
  return number1 + number2;
}

function substract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert(
  "The addition of your numbers equals " + add(number1, number2) + ".\n" + number1 + " + " + number2 + " = " + add(number1, number2) + "\nThe substraction of your numbers equals " + substract(number1, number2) +".\n" + number1 + " - " + number2 + " = " + substract(number1, number2) + "\nThe multiplication of your numbers equals " + multiply(number1, number2) + ".\n" + number1 + " * " + number2 + " = " + multiply(number1, number2) + "\nThe division of your numbers equals " + divide(number1, number2) + ".\n" + number1 + " / " + number2 + " = " + divide(number1, number2) 
  );



