let numberToGuess = 7;
let attempts = 3;

function guessNumber() {
  const guess = parseInt(prompt(`Digite um número entre 0 e 10. Você tem ${attempts} tentativas:`));

  if (guess === numberToGuess) {
    alert("Parabéns! Você acertou!");
  } else {
    attempts--;
    if (attempts > 0) {
      alert(`Tente novamente! Restam ${attempts} tentativas.`);
      guessNumber();
    } else {
      alert(`Suas tentativas acabaram. O número era ${numberToGuess}.`);
    }
  }
}

guessNumber();