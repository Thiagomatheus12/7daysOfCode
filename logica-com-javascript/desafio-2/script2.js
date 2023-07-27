const names = [];
const ages = []
const languages = []

function getName() {
  let name = prompt('Qual o seu nome?');

  // Verifica se o nome é válido (contém apenas letras)
  while (name === null || name.trim() === '' || !/^[a-zA-Z\s]+$/.test(name)) {
    name = prompt('Por favor, digite um nome válido (somente letras):');
  }

  names.push(name.toLowerCase());
  checkAndDisplayResult()
}

function getAge() {
  let age = prompt('Quantos anos você tem?');

  // Verifica se o nome é válido (contém apenas números)
  while (age === null || age.trim() === '' || !/^\d+$/.test(age)) {
    age = prompt('Por favor, digite uma idade válida (somente números):');
  }

  ages.push(age);
  checkAndDisplayResult()
}

function getLanguage() {
  let language = prompt('Qual linguagem de programação você está estudando?');

  // Verifica se o nome é válido (contém apenas letras)
  while (language === null || language.trim() === '' || !/^[a-zA-Z\s!@#$%^&*(),.?":{}|<>]+$/.test(language)) {
    language = prompt('Por favor, digite uma linguagem válida (letras, espaços e caracteres especiais):');
  }

  languages.push(language);
  checkAndDisplayResult()

}

function checkAndDisplayResult() {
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `Olá ${names}, você tem ${ages} anos e já está aprendendo ${languages}!`;
}

getName()
getAge()
getLanguage()