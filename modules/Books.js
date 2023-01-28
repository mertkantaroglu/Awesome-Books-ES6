const listBooks = document.querySelector('.bookList');
const form = document.querySelector('.formInput');
const [title, author] = form.elements;

const inputBook = {};
let books = new Array(0);

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

const populateFields = () => {
  localStorage.setItem('savedBooks', JSON.stringify(books));
  document.querySelector('.book-title').value = '';
  document.querySelector('.book-author').value = '';
};

// Book Class to add-remove books
const Book = class {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // Add Book
  static addBook(newBook) {
    books.push(newBook);
    populateFields();
    this.displayBooks();
  }

  // Remove Book
  static removeBook(book) {
    const result = books.filter((b) => b !== book);
    books = result;
    populateFields();
  }

  // Display Book
  static displayBooks() {
    listBooks.innerHTML = '';
    books.map((book) => {
      const bookDiv = document.createElement('tr');
      bookDiv.classList.add('bookDiv');
      const elementBook = document.createElement('td');
      elementBook.classList.add('elementBook');
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('deleteBtn');
      deleteBtn.textContent = 'Remove';

      elementBook.textContent = `"${book.title}" by ${book.author}`;

      bookDiv.classList.add('container-book');
      bookDiv.appendChild(elementBook);
      bookDiv.appendChild(deleteBtn);

      listBooks.appendChild(bookDiv);

      deleteBtn.addEventListener('click', () => {
        this.removeBook(book);
        listBooks.removeChild(bookDiv);
      });
      return listBooks;
    });
  }
};

// Form Submit

form.addEventListener('submit', (e) => {
  e.preventDefault();
  Book.addBook(new Book(inputBook.title, inputBook.author));
});

Book.displayBooks();
populateFields();
