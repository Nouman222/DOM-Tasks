let products = [
  {
    "id": 1,
    "title": "Wireless Bluetooth Headphones",
    "productImage": "https://picsum.photos/id/180/600/400",
    "price": 59.99,
    "category": "Electronics",
    "rating": 4.5,
    "inStock": true
  },
  {
    "id": 2,
    "title": "Smart Fitness Watch",
    "productImage": "https://picsum.photos/id/1062/600/400",
    "price": 89.99,
    "category": "Wearables",
    "rating": 4.2,
    "inStock": true
  },
  {
    "id": 3,
    "title": "Men's Casual Sneakers",
    "productImage": "https://picsum.photos/id/21/600/400",
    "price": 74.5,
    "category": "Footwear",
    "rating": 4.0,
    "inStock": false
  },
  {
    "id": 4,
    "title": "Leather Office Backpack",
    "productImage": "https://picsum.photos/id/1080/600/400",
    "price": 120.0,
    "category": "Bags",
    "rating": 4.7,
    "inStock": true
  },
  {
    "id": 5,
    "title": "Ceramic Coffee Mug Set",
    "productImage": "https://picsum.photos/id/30/600/400",
    "price": 24.99,
    "category": "Home & Kitchen",
    "rating": 3.9,
    "inStock": true
  },
  {
    "id": 6,
    "title": "Portable Bluetooth Speaker",
    "productImage": "https://picsum.photos/id/82/600/400",
    "price": 45.0,
    "category": "Electronics",
    "rating": 4.3,
    "inStock": true
  },
  {
    "id": 7,
    "title": "Wooden Study Desk",
    "productImage": "https://picsum.photos/id/175/600/400",
    "price": 249.99,
    "category": "Furniture",
    "rating": 4.6,
    "inStock": false
  },
  {
    "id": 8,
    "title": "Organic Skincare Gift Box",
    "productImage": "https://picsum.photos/id/292/600/400",
    "price": 39.99,
    "category": "Beauty",
    "rating": 4.1,
    "inStock": true
  },
  {
    "id": 9,
    "title": "Gaming Mechanical Keyboard",
    "productImage": "https://picsum.photos/id/1044/600/400",
    "price": 99.99,
    "category": "Gaming",
    "rating": 4.8,
    "inStock": true
  },
  {
    "id": 10,
    "title": "Minimalist Table Lamp",
    "productImage": "https://picsum.photos/id/83/600/400",
    "price": 34.5,
    "category": "Home Decor",
    "rating": 3.8,
    "inStock": true
  }
]

// Container
let container = document.createElement("div")
container.setAttribute("class","container")
document.body.appendChild(container)



for(let i=0;i<products.length;i++){


// Card
let card = document.createElement("div")
card.setAttribute("class","card")
container.appendChild(card)

// Card img
let cardImage = document.createElement("img")
cardImage.setAttribute("src",products[i].productImage)
cardImage.setAttribute("alt",products[i].title)
cardImage.setAttribute("class","cardimage")
card.appendChild(cardImage)

// Card Title
let cardTitle = document.createElement("h2")
cardTitle.innerText=products[i].title
card.appendChild(cardTitle)

// Product Price
let price = document.createElement("strong")
price.innerText = "$" + products[i].price

card.appendChild(price)

// Product Category
let category = document.createElement("p")
category.innerText=products[i].category
card.appendChild(category)

// Product Rating
let rating = document.createElement("p")
rating.innerText = "⭐ " + products[i].rating
card.appendChild(rating)

// Product stock
let stock = document.createElement("p")
stock.innerText = products[i].inStock ? "In Stock ✅" : "Out of Stock ❌"
card.appendChild(stock)


}


