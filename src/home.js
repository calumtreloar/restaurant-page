export function pageLoad() {
  // Select the content container
  const content = document.getElementById('content');

  // Create header section and assign class
  const header = document.createElement('div');
  header.className = 'header';

  // Crate maain content area and assign class
  const main = document.createElement('div');
  main.className = 'main';

  // Create footer Section and assign class
  const footer = document.createElement('div');
  footer.className = 'footer';

  // Create header nested elements, add text to main-title and class name to nav bar
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = 'Musashi Sushi';
  const navBar = document.createElement('div');
  navBar.className = 'nav-bar';

  // Create nested elements for nav bar
  const home = document.createElement('div');
  const menu = document.createElement('div');
  const contact = document.createElement('div');

  // Assign class names and text content for nav bar elements
  home.className = 'home';
  home.textContent = 'Home';
  menu.className = 'menu';
  menu.textContent = 'Menu';
  contact.className = 'contact';
  contact.textContent = 'Contact';

  // Create card for main content area and assign class name
  const card = document.createElement('div');
  card.className = 'card';

  // Text element for the card
  const cardInfo = document.createElement('p');
  cardInfo.textContent = `Indulge your senses in an exquisite culinary journey at Musashi Sushi, where artistry
            meets authenticity. Nestled in the heart of the city, our restaurant is a haven for
            sushi enthusiasts seeking an unparalleled dining experience. With a passion for
            perfection, our skilled chefs craft each sushi roll as a masterpiece, using only the
            freshest and finest ingredients to ensure a symphony of flavors in every bite. From
            traditional favorites to innovative creations, our menu boasts a harmonious blend of
            flavors that will transport you straight to the vibrant streets of Japan. Immerse
            yourself in the elegant yet welcoming ambiance as you savor the delights of Musashi
            Sushi. Join us and discover the true essence of sushi perfection.`;

  // Author info for the footer element
  const author = document.createElement('div');
  author.className = 'author';
  author.textContent = 'Copyright © 2023 calumtreloar';

  // Append all children to header, main and footer elements
  content.append(header, main, footer);
  header.append(headerTitle, navBar);
  navBar.append(home, menu, contact);
  main.appendChild(card);
  card.appendChild(cardInfo);
  footer.appendChild(author);
}
