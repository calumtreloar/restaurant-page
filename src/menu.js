export function menuPageLoad() {
  let menuItems = 6;

  // Crate main content area and assign class
  const main = document.querySelector('.main');

  // Create card for main content area and assign class name
  let cardContainer = document.createElement('div');
  cardContainer.className = 'card-container';

  main.appendChild(cardContainer);

  // Loop for adding menu items
  for (let i = 0; i < menuItems; i++) {
    let card = document.createElement('div');
    card.className = 'menu-card';

    let sushiName = document.createElement('h2');
    sushiName.className = 'sushi-name';

    let lessPieces = document.createElement('p');
    lessPieces.className = 'less-pieces';
    lessPieces.textContent = '4 Pieces — $10';

    let morePieces = document.createElement('p');
    morePieces.className = 'more-pieces';
    morePieces.textContent = '8 Pieces — $16';

    cardContainer.appendChild(card);
    card.append(sushiName, lessPieces, morePieces);
  }

  const cardElements = document.getElementsByClassName('sushi-name');

  const salmonAvocado = cardElements[0].textContent;
  cardElements[0].textContent = 'Salmon & Avocado';

  const spicyTuna = cardElements[1].textContent;
  cardElements[1].textContent = 'Spicy Tuna';

  const prawnTempura = cardElements[2].textContent;
  cardElements[2].textContent = 'Prawn Tempura';

  const smokedSalmon = cardElements[3].textContent;
  cardElements[3].textContent = 'Smoked Salmon';

  const vegan = cardElements[4].textContent;
  cardElements[4].textContent = 'Cucumber Avocado (V)';

  const teriyakiChicken = cardElements[5].textContent;
  cardElements[5].textContent = 'Teriyaki Chicken (V)';
}
