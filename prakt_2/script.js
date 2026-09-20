const products = [
  { id: 1, name: "Pro Laptop", price: 1200, category: "laptops", inStock: true },
  { id: 2, name: "Wireless Mouse", price: 45, category: "accessories", inStock: true },
  { id: 3, name: "Mechanical Keyboard", price: 150, category: "accessories", inStock: false },
  { id: 4, name: "Budget Laptop", price: 600, category: "laptops", inStock: true },
  { id: 5, name: "USB-C Hub", price: 30, category: "accessories", inStock: true },
];

function renderProducts(items) {
    let html = items.map(product => {
        let statusClass = "";
        let priceText = "$" + product.price;

        if (!product.inStock) {
            statusClass = "out-of-stock";
            priceText = "Out of Stock";
        }

        return `<div class="product-card ${statusClass}">
            <h3>${product.name}</h3>
            <p>${priceText}</p>
        </div>`;
    }).join('');

    document.getElementById("product-container").innerHTML = html;
}

document.getElementById("btn-all").addEventListener("click", () => {
    renderProducts(products);
});

document.getElementById("btn-laptops").addEventListener("click", () => {
    let filtered = products.filter(p => p.category === "laptops");
    renderProducts(filtered);
});

document.getElementById("btn-accessories").addEventListener("click", () => {
    let filtered = products.filter(p => p.category === "accessories");
    renderProducts(filtered);
});

renderProducts(products);