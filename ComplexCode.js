/*
Filename: ComplexCode.js

This code is a complex implementation of a library management system. It includes various modules for managing books, authors, and library patrons. It demonstrates the use of advanced JavaScript concepts like prototypes, closures, and object-oriented programming.

Note: This is a simplified implementation and certain features might be omitted for brevity.

*/

// Book Class
function Book(title, author, genre, price) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.price = price;
}

// Prototype methods for Book Class
Book.prototype.getDetails = function () {
  return `${this.title} by ${this.author}, genre: ${this.genre}, price: ${this.price}`;
};

Book.prototype.changeGenre = function (newGenre) {
  this.genre = newGenre;
};

// Author Class
function Author(name, nationality, genre) {
  this.name = name;
  this.nationality = nationality;
  this.genre = genre;
}

// Prototype methods for Author Class
Author.prototype.getDetails = function () {
  return `${this.name}, nationality: ${this.nationality}, genre: ${this.genre}`;
};

// LibraryPatron Class
function LibraryPatron(name, age, membership) {
  this.name = name;
  this.age = age;
  this.membership = membership;
}

// Prototype methods for LibraryPatron Class
LibraryPatron.prototype.issueBook = function (book) {
  if (this.membership === 'Premium' || this.membership === 'Regular') {
    console.log(`${this.name} has issued ${book.title}`);
    // Implementation to update book availability, user history, etc.
  } else {
    console.log(`${this.name} needs to have a valid membership.`);
  }
};

// Library Class
function Library(name, location) {
  this.name = name;
  this.location = location;
  this.books = [];
}

// Prototype methods for Library Class
Library.prototype.addBook = function (book) {
  this.books.push(book);
};

Library.prototype.findAvailableBooks = function () {
  return this.books.filter(book => book.isAvailable);
};

// Creating instances of books, authors, and patrons
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', 25);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 'Fiction', 20);
const author1 = new Author('F. Scott Fitzgerald', 'American', 'Fiction');
const author2 = new Author('Harper Lee', 'American', 'Fiction');
const patron1 = new LibraryPatron('John Doe', 25, 'Premium');
const patron2 = new LibraryPatron('Jane Smith', 35, 'Regular');

// Creating an instance of the Library
const library = new Library('MyLibrary', 'New York');

// Adding books to the Library
library.addBook(book1);
library.addBook(book2);

// Outputting available books
const availableBooks = library.findAvailableBooks();
console.log('Available Books:');
availableBooks.forEach(book => console.log(book.getDetails()));

// Simulating issuing a book by a patron
patron1.issueBook(book1);
patron2.issueBook(book2);
patron1.issueBook(book2); // Invalid membership

// Changing the genre of a book
book1.changeGenre('Classic');

console.log(book1.getDetails()); // Outputting updated book details

// Outputting details of authors
console.log(author1.getDetails());
console.log(author2.getDetails());