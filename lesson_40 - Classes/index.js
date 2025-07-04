class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product is: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}$`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();


const salesTax = 0.05;

const total = product3.calculateTotal(salesTax);
console.log(`The total price is ${total.toFixed(2)}`);
