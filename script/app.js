const loadProducts = ()=>{
    fetch("https://fakestoreapi.com/products/categories")
    .then((res)=>res.json())
    .then((data)=>displayProducts(data))
}

const displayProducts= (products) => {
    console.log(products)
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = "";

    for(let product of products){
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
            <button class="btn btn-outline text-gray-800">${product}</button>
        `;
        productContainer.appendChild(btnDiv);
    }
}
loadProducts();