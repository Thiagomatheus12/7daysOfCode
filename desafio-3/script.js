let area;
let specialization;

function selectArea(selectedArea) {
    area = selectedArea;
    if(area === 'Front-End' ) {
      document.querySelector('.container').innerHTML = `
          <h1>Jogo de Escolhas</h1>
          <p>Você escolheu a área de ${area}.</p>
          <p>Agora escolha uma tecnologia para aprender:</p>
          <button onclick="selectTechnology('React')">React</button>
          <button onclick="selectTechnology('Vue')">Vue</button>
      `;
    } else if (area === 'Back-End') {
      document.querySelector('.container').innerHTML = `
      <h1>Jogo de Escolhas</h1>
      <p>Você escolheu a área de ${area}.</p>
      <p>Agora escolha uma tecnologia para aprender:</p>
      <button onclick="selectTechnology('C#')">C#</button>
      <button onclick="selectTechnology('Java')">Java</button>
  `;
    }
}

function selectTechnology(selectedTech) {
    specialization = selectedTech;
    document.querySelector('.container').innerHTML = `
        <h1>Jogo de Escolhas</h1>
        <p>Você escolheu a área de ${area} e a tecnologia ${specialization}.</p>
        <p>Agora, escolha se deseja se especializar ou se desenvolver em Fullstack:</p>
        <button onclick="showResult('Especializar')">Especializar</button>
        <button onclick="showResult('Fullstack')">Fullstack</button>
    `;
}

function showResult(choice) {
    const finalMessage = choice === 'Especializar' ?
        `Parabéns! Você escolheu se especializar na área de ${area}, com foco em ${specialization}.` :
        `Parabéns! Você escolheu se desenvolver em Fullstack, abrangendo as áreas de Front-End e Back-End.`;

    document.querySelector('.container').innerHTML = `
        <h1>Jogo de Escolhas</h1>
        <p>${finalMessage}</p>
        <p>Agora, diga quais tecnologias você gostaria de aprender:</p>
        <input type="text" id="techInput">
        <button onclick="addTechnology()">OK</button>
    `;
}

function addTechnology() {
    const techInput = document.getElementById('techInput');
    const technology = techInput.value.trim();
    
    if (technology !== '') {
        techInput.value = '';
        const resultContainer = document.querySelector('.container');
        const techList = document.createElement('p');
        techList.textContent = technology;
        resultContainer.appendChild(techList);
    }
}