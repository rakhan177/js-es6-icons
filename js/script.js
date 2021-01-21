/*Milestone 1:
- Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome,
  prefisso, tipo e famiglia.
- Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone
  con il proprio nome.*/

const firstContainer = document.getElementById('first-container');

const object = [
  {nome: 'cavallo', prefisso: 'fas', famiglia: 'animal', tipo: 'fa-horse'},
  {nome: 'drago', prefisso: 'fas', famiglia: 'animal', tipo: 'fa-dragon'},
  {nome: 'gatto', prefisso: 'fas', famiglia: 'animal', tipo: 'fa-cat'},
  {nome: 'mela', prefisso: 'fas', famiglia: 'food', tipo: 'fa-apple-alt'},
  {nome: 'torta', prefisso: 'fas', famiglia: 'food', tipo: 'fa-cheese'},
  {nome: 'pizza', prefisso: 'fas', famiglia: 'food', tipo: 'fa-pizza-slice'},
  {nome: 'snowboard', prefisso: 'fas', famiglia: 'sport', tipo: 'fa-snowboarding'},
  {nome: 'moto', prefisso: 'fas', famiglia: 'sport', tipo: 'fa-biking'},
  {nome: 'corsa', prefisso: 'fas', famiglia: 'sport', tipo: 'fa-running'},
];

object.forEach((item) => {
  firstContainer.innerHTML += `
  <div>
  <i class="${item.prefisso} ${item.tipo}"></i>
  ${item.nome}
  </div>
`
});

/*Milestone 2:
- Definire un array di colori e associare ad ogni tipo di icona un colore.
- Visualizzare le icone di colore diverso in base al tipo.*/

const secondContainer = document.getElementById('second-container');

let colors = ['red', 'lightgreen', 'yellow'];

object.forEach((elem) => {
  let color;
  if(elem.famiglia === 'animal'){
    color = colors[0];
  }else if(elem.famiglia === 'food'){
    color = colors[1];
  }else{
    color = colors[2];
  }
  secondContainer.innerHTML += `
  <div>
  <i class="${elem.prefisso} ${elem.tipo}" style="color:${color}"></i>
  ${elem.nome}
  </div>
  `
});

/*Milestone 3:
- Aggiungere una select per filtrare le icone in base al tipo.
- Popolare le options della select dinamicamente e, ogni volta che cambia il valore
  selezionato, visualizzare le icone corrispondenti.*/

  const thirdContainer = document.getElementById('third-container');
  const select = document.getElementById('seleziona');

  const family = [];

  object.forEach((elemento) => {
    if(!family.includes(elemento.famiglia)){
      family.push(elemento.famiglia)
    }
  });

  console.log(family);

  family.forEach((items) => {
    select.innerHTML += `
    <option value="${items}">${items}</option>
    `
  });

$('#seleziona').change(function(){
  thirdContainer.innerHTML = '';
  let valore = $(this).val();
  const filtro = object.filter((el) => {
    return el.famiglia === valore
  })
  console.log(filtro);
  filtro.forEach((e) => {
    let color;
      if(e.famiglia === 'animal'){
        color = colors[0];
      }else if(e.famiglia === 'food'){
        color = colors[1];
      }else{
        color = colors[2];
      }
    thirdContainer.innerHTML += `
    <div>
    <i class="${e.prefisso} ${e.tipo}" style="color:${color}"></i>
    ${e.nome}
    </div>
    `
  });
})


































/*icone animali:

<i class="fas fa-horse"></i>
<i class="fas fa-dragon"></i>
<i class="fas fa-cat"></i>

icone cibo:

<i class="fas fa-apple-alt"></i>
<i class="fas fa-cheese"></i>
<i class="fas fa-pizza-slice"></i>

icone sport:
<i class="fas fa-snowboarding"></i>
<i class="fas fa-biking"></i>
<i class="fas fa-running"></i>*/
