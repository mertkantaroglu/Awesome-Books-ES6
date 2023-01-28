// Nav Bar
const navList = document.querySelector('.navList');
const navAdd = document.querySelector('.navAdd');
const navContact = document.querySelector('.navContact');
const infoPage = document.querySelector('.info-page');
const addBookPage = document.querySelector('.add-book-page');
const contact = document.querySelector('.contact');

navList.addEventListener('click', () => {
  infoPage.classList.remove('close');
  addBookPage.classList.add('close');
  contact.classList.add('close');
});

navAdd.addEventListener('click', () => {
  infoPage.classList.add('close');
  addBookPage.classList.remove('close');
  contact.classList.add('close');
});

navContact.addEventListener('click', () => {
  infoPage.classList.add('close');
  addBookPage.classList.add('close');
  contact.classList.remove('close');
});
