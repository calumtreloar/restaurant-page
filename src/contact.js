import location from './images/map-marker.svg';
import message from './images/message.svg';
import phone from './images/phone.svg';

export function contactPageLoad() {
  const content = document.getElementById('content');

  // Crate main content area and assign class
  const main = document.querySelector('.main');

  // Create card for main content area and assign class name
  const card = document.createElement('div');
  card.className = 'contact-card';

  // Text element for the card
  const cardInfo = document.createElement('h2');
  cardInfo.className = 'contact-card-info';
  cardInfo.textContent = `GET IN TOUCH`;

  // Create container for address, phone and email
  const infoContainer = document.createElement('div');
  infoContainer.className = 'info-container';

  // Address
  const addressContainer = document.createElement('div');
  addressContainer.className = 'address-container';

  const addressImg = document.createElement('img');
  addressImg.src = location;

  const addressTitle = document.createElement('h3');
  addressTitle.textContent = 'ADDRESS';

  const address = document.createElement('p');
  address.className = 'address';
  address.textContent = '46 Villeneuve Street, Harrietville, Victoria 3741';

  // Phone
  const phoneContainer = document.createElement('div');
  phoneContainer.className = 'phone-container';

  const phoneImg = document.createElement('img');
  phoneImg.src = phone;

  const phoneTitle = document.createElement('h3');
  phoneTitle.textContent = 'PHONE';

  const phone = document.createElement('p');
  phone.className = 'phone';
  phone.textContent = '(03) 5366 7413';

  // Email

  const emailContainer = document.createElement('div');
  emailContainer.className = 'email-container';

  const emailImg = document.createElement('img');
  emailImg.src = message;

  const emailTitle = document.createElement('h3');
  emailTitle.textContent = 'EMAIL';

  const email = document.createElement('p');
  email.className = 'email';
  email.textContent = 'contact@musashisushi.com.au';

  main.appendChild(card);
  card.append(cardInfo, infoContainer);
  infoContainer.append(addressContainer, phoneContainer, emailContainer);
  addressContainer.append(addressImg, addressTitle, address);
  phoneContainer.append(phoneImg, phoneTitle, phone);
  emailContainer.append(emailImg, emailTitle, email);
}
