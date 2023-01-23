// Book Class to add-remove books
export const listBooks = document.querySelector('.bookList');
export let books = new Array();

export const Book = class {
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
      bookDiv.classList.add("bookDiv");
      const elementBook = document.createElement('td');
      elementBook.classList.add("elementBook");
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add("deleteBtn");
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

export const populateFields = () => {
  localStorage.setItem('savedBooks', JSON.stringify(books));
  document.querySelector('.book-title').value = '';
  document.querySelector('.book-author').value = '';
};

Book.displayBooks();
populateFields();
