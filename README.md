# oop-s_practice
# Library Management System

## Overview
This project simulates a simple **Library Management System** using JavaScript classes. It allows users to **borrow** and **return** books while maintaining the availability of books.

## Features
✅ Define `Book` and `User` classes with essential properties and methods.  
✅ Implement borrowing and returning functionalities.  
✅ Ensure availability status updates dynamically.  
✅ Log transactions for verification.  

## How to Use
1. Create instances of `Book` and `User`.
2. Users can borrow books if available.
3. Users can return borrowed books.
4. Console logs will display actions.

## Example Usage
```javascript
const book1 = new Book("JavaScript Mastery", "John Doe", "123456");
const user1 = new User("Chethan", 101);

user1.borrow(book1);
user1.return(book1);
