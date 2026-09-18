const products = [
  { id: 1, name: "Pro Laptop", price: 1200, category: "laptops", inStock: true },
  { id: 2, name: "Wireless Mouse", price: 45, category: "accessories", inStock: true },
  { id: 3, name: "Mechanical Keyboard", price: 150, category: "accessories", inStock: false },
  { id: 4, name: "Budget Laptop", price: 600, category: "laptops", inStock: true },
  { id: 5, name: "USB-C Hub", price: 30, category: "accessories", inStock: true },
];

function renderProducts(items){
                
    let html = items.map(product => {
        let status="";
        let price="$"+product.price;

        if(!product.inStock){
            status="Out of Stock";
            price="Out of Stock";

        }
                
        return `<divclass="product-card" ${status}>
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        </div>`
    }).join('');
    document.getElementById("product-container").innerHTML = html;
            }


