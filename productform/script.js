let form = document.getElementById("form")
let product_list = document.getElementById("product_list")
let product = []

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let formdata = new FormData(form)

    let product_data = Object.fromEntries(formdata.entries())
    product.push(product_data)
    localStorage.setItem("products", JSON.stringify(product))

    displayProduct()
})

function displayProduct() {
    
    let product = JSON.parse(localStorage.getItem("products")) || []
    product_list.innerHTML = ""

    for (p of product) {
        let productCard = `
        <div class="product-card">
            <img src="${p.productUrl}" alt="${p.title}">

            <div class="card-content">
                <h3 class="product-title">${p.title}</h3>
                <p class="product-desc">
                    ${p.description}
                </p>

                <div class="card-footer">
                    <span class="price">${p.price}</span>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
        `

        product_list.innerHTML += productCard
    }
}

