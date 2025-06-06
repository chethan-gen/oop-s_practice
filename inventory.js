class Product {
    constructor(name, productId, price, stock = 0) {
        this.name = name;
        this.productId = productId;
        this.price = price;
        this.stock = stock;
    }

    addStock(quantity) {
        if (quantity > 0) {
            this.stock += quantity;
            console.log(`${quantity} units added to ${this.name}. New stock: ${this.stock}`);
        } else {
            console.log("Invalid stock quantity.");
        }
    }

    sell(quantity) {
        if (quantity > 0 && quantity <= this.stock) {
            this.stock -= quantity;
            console.log(`${quantity} units sold from ${this.name}. Remaining stock: ${this.stock}`);
        } else {
            console.log("Insufficient stock or invalid quantity.");
        }
    }
}

class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
        console.log(`${product.name} added to inventory.`);
    }

    sellProduct(productId, quantity) {
        const product = this.products.find(p => p.productId === productId);
        if (product) {
            product.sell(quantity);
        } else {
            console.log("Product not found in inventory.");
        }
    }

    checkStock(productId) {
        const product = this.products.find(p => p.productId === productId);
        if (product) {
            console.log(`Stock for ${product.name}: ${product.stock}`);
        } else {
            console.log("Product not found in inventory.");
        }
    }
}

// Testing the Inventory System
const inventory = new Inventory();

const product1 = new Product("Laptop", 101, 750, 10);
const product2 = new Product("Phone", 102, 500, 15);

inventory.addProduct(product1);
inventory.addProduct(product2);

inventory.checkStock(101);
inventory.sellProduct(101, 3);
inventory.checkStock(101);

inventory.addProduct(new Product("Tablet", 103, 300, 5));
inventory.checkStock(103);
