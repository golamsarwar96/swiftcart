const loadProducts = ()=>{
    fetch("https://fakestoreapi.com/products/categories")
    .then((res)=>res.json())
    .then((data)=>displayCategory(data))
}

const loadCategoryProducts = (category) => {
    console.log(category);
    const url = `https://fakestoreapi.com/products/category/${category}`
    fetch(url)
    .then((res)=>res.json())
    .then((data) => displayProducts(data))
};


const loadAllProducts = (allProducts) => {
    const url = `https://fakestoreapi.com/products`
    fetch(url)
    .then((res)=>res.json())
    .then((data) => displayProducts(data))
}
//    {
//     "id": 5,
//     "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//     "price": 695,
//     "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//     "category": "jewelery",
//     "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
//     "rating": {
//       "rate": 4.6,
//       "count": 400
//    }

const displayProducts = (products) => {
    const productContainer = document.getElementById('products-container');
    productContainer.innerHTML = "";

    for(let product of products){
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <div>
                <div>
                    <img src=${product?.image} class="lg:w-[400px] lg:h-[300px] object-contain" alt="">
                </div>
            <div class="flex justify-between mt-3 px-2">
                <p class="bg-primary/30 px-2 py-1 rounded-xl text-sm text-primary font-medium">${product?.category}</p>
                <div class="flex justify-center gap-1">
                    <p><i class="fa-solid fa-star text-[#efc518]"></i></p>
                    <P>${product?.rating?.rate}(${product?.rating?.count})</P>
                </div>
            </div>
            <h1 class=" px-2 mt-3 text-2xl font-medium">${product?.title.slice(0,45)}</h1>
            <p class="px-2 mt-1 text-2xl font-medium">${product?.price}</p>
            <div class="flex justify-between gap-2 px-2 mt-5">
            <button class="flex-1 btn btn-outline">Details</button>
            <button class=" flex-1 btn btn-primary">Add To Cart</button>
          </div>
        </div>
        `;
        productContainer.appendChild(productDiv);
    }

}

// Showed all the categories from this api
const displayCategory= (categories) => {
    console.log(categories)
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.innerHTML = "";

    const allBtn = document.createElement('div');
    allBtn.innerHTML = `<button onclick="loadAllProducts(this.innerText)" class="btn btn-outline">All</button>`;
    categoryContainer.appendChild(allBtn);

    for(let category of categories){
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
            <button onclick="loadCategoryProducts(this.innerText)" class="btn btn-outline text-gray-800">${category}</button>
        `;
        categoryContainer.appendChild(btnDiv);
    }
}





loadProducts();