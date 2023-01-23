import { navList, navAdd, navContact, infoPage, addBookPage, contact } from './navbar.js'
import { Book, listBooks, populateFields } from './book.js';
import { DateTime } from './modules/luxon.js';

// const now = DateTime.now();
const now = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
const clock = document.querySelector('#clock');
clock.innerHTML = now;

const form = document.querySelector('.formInput');
const [title, author] = form.elements;

const inputBook = {};
let books = new Array();

// Storage
if (localStorage.savedBooks) {
  books = JSON.parse(localStorage.getItem('savedBooks'));
}

title.addEventListener('change', () => {
  inputBook.title = title.value;
});

author.addEventListener('change', () => {
  inputBook.author = author.value;
});

// Form Submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  Book.addBook(new Book(inputBook.title, inputBook.author));
});
