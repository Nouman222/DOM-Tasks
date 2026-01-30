let products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Keyboard", price: 75, inStock: false },
  { name: "Monitor", price: 200, inStock: true },
  { name: "USB Cable", price: 10, inStock: false }
];
// Create a new array productNames with only the product names.
// let productNames = products.map(pName=>pName.name)
// console.log(productNames)

// Create a new array expensiveProducts with products price > 100.
// let expensiveProducts = products.filter(xp => xp.price>100,)
// console.log(expensiveProducts)

// Find the first out-of-stock product.
// let fOutStock = products.find(out => out.inStock == false)
// console.log(fOutStock)

// Calculate total price of all in-stock products.
// let total_price = products.reduce(function reduce(total, current){ return total + current.price }, 0)
// console.log(total_price)

// Check if any product costs more than 1500 (true/false).
// let productCost = products.some(pc => pc.price>1500)
// console.log(productCost);

// Check if all products are in stock (true/false).
// let inStock = products.every(stock => stock.inStock==true)
// console.log(inStock)
