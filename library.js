class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true; // Default availability
    }

    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been borrowed.`);
        } else {
            console.log(`${this.title} is currently unavailable.`);
        }
    }

    returnBook() {
        this.isAvailable = true;
        console.log(`${this.title} has been returned.`);
    }
}

// Example usage
const book1 = new Book("JavaScript Mastery", "John Doe", "123456");
console.log(book1);
book1.borrowBook();
console.log(book1);
book1.returnBook();
console.log(book1);


class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }

    borrow(book) {
        if (book.isAvailable) {
            book.borrowBook();
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed "${book.title}".`);
        } else {
            console.log(`${book.title} is currently unavailable.`);
        }
    }

    return(book) {
        const bookIndex = this.borrowedBooks.indexOf(book);
        if (bookIndex !== -1) {
            book.returnBook();
            this.borrowedBooks.splice(bookIndex, 1);
            console.log(`${this.name} returned "${book.title}".`);
        } else {
            console.log(`${this.name} does not have "${book.title}" borrowed.`);
        }
    }
}

// Example usage
const user1 = new User("Chethan", 101);
const book2 = new Book("MERN Stack Essentials", "Jane Doe", "789012");

console.log(user1);
user1.borrow(book2);
console.log(user1);
user1.return(book2);
console.log(user1);
