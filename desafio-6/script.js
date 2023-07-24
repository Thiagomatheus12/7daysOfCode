let fruits = [];
let dairyProducts = [];
let candy = [];
let frozen = [];
let food = '';
let category = '';

let addMore = "sim";
while (addMore !== "não") {
  addMore = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");

  while (addMore !== "sim" && addMore !== "não") {
    alert(`Operação não reconhecida!`);
    addMore = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
  }

  if (addMore === "não") {
    break;
  }

  food = prompt("Qual comida você deseja inserir?");
  category = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");

  if (category === 'frutas') {
    fruits.push(food);
  } else if (category === 'laticínios') {
    dairyProducts.push(food);
  } else if (category === 'doces') {
    candy.push(food);
  } else if (category === 'congelados') {
    frozen.push(food);
  } else {
    alert("Essa categoria não foi pré-definida.")
  }
}

function printShoppingList() {
  let list = "Lista de compras:\n";
  list += fruits.length > 0 ? `  Frutas: ${fruits}\n` : '';
  list += dairyProducts.length > 0 ? `  Laticínios: ${dairyProducts}\n` : '';
  list += candy.length > 0 ? `  Doces: ${candy}\n` : '';
  list += frozen.length > 0 ? `  Congelados: ${frozen}\n` : '';
  return list;
}

while (true) {
  if (fruits.length === 0 && dairyProducts.length === 0 && candy.length === 0 && frozen.length === 0) {
    alert("A lista de compras está vazia.");
    break;
  }

  const removeItem = prompt(`${printShoppingList()}Digite o nome do item que deseja remover da lista ou 'não' para encerrar:`);

  if (removeItem === 'não') {
    break;
  }

  let found = false;

  if (fruits.includes(removeItem)) {
    fruits = fruits.filter(item => item !== removeItem);
    found = true;
  }
  if (dairyProducts.includes(removeItem)) {
    dairyProducts = dairyProducts.filter(item => item !== removeItem);
    found = true;
  }
  if (candy.includes(removeItem)) {
    candy = candy.filter(item => item !== removeItem);
    found = true;
  }
  if (frozen.includes(removeItem)) {
    frozen = frozen.filter(item => item !== removeItem);
    found = true;
  }

  if (!found) {
    alert("Não foi possível encontrar o item dentro da lista!");
  }
}

alert(printShoppingList())