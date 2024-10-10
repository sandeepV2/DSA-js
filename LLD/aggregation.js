// Aggregation
// Aggregation is a "has-a" relationship where one object contains another object. 
// The contained object can exist independently of the container object.

// Example: Library and Books
// In this example, a Library aggregates Book objects. The Book objects can exist independently of the Library.

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getBooks() {
        return this.books;
    }
}

// Creating books
const book1 = new Book("1984", "George Orwell");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

// Creating a library and adding books to it
const library = new Library("City Library");
library.addBook(book1);
library.addBook(book2);

console.log(library.getBooks());
