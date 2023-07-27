let firstValue;
let operator;
let lastValue;
let allowedOperators = ['+', '-', '*', '/'];
let isValidOperator = false;

do {
  firstValue = parseInt(prompt('Digite o primeiro valor, somente números:'));
} while (isNaN(firstValue));


do {
  operator = prompt('Digite a operação matemática: ("+" "-" "/" "*")');

  if (allowedOperators.includes(operator)) {
    isValidOperator = true;
  } else {
    alert('Operador inválido. Digite um dos seguintes operadores: "+", "-", "*", ou "/".');
  }
} while (!isValidOperator);


do {
  lastValue = parseInt(prompt('Digite o segundo valor valor, somente números:'));
} while (isNaN(lastValue));


switch (operator) {
  case '+':
    sum(firstValue, lastValue);
    break;

  case '-':
    subtraction(firstValue, lastValue);
    break;

  case '*':
    multiplication(firstValue, lastValue);
    break;

  case '/':
    division(firstValue, lastValue);
    break;

}


function sum(num1, num2) {
  alert(`O resultado da operação ${num1} + ${num2} = ${num1 + num2}`);
  alert('Até o próximo desafio!!')
}

function subtraction(num1, num2) {
  alert(`O resultado da operação ${num1} - ${num2} = ${num1 - num2}`);
  alert('Até o próximo desafio!!')
}
function multiplication(num1, num2) {
  alert(`O resultado da operação ${num1} * ${num2} = ${num1 * num2}`);
  alert('Até o próximo desafio!!')
}
function division(num1, num2) {
  alert(`O resultado da operação ${num1} / ${num2} = ${num1 / num2}`);
  alert('Até o próximo desafio!!')
}
