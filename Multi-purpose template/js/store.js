const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

searchBtn.addEventListener("click", () => {

    if (searchInput.classList.contains("w-0")) {

        searchInput.classList.remove("w-0", "opacity-0");
        searchInput.classList.add("w-40", "opacity-100");

        searchInput.focus();

    } else {

        searchInput.classList.add("w-0", "opacity-0");
        searchInput.classList.remove("w-40", "opacity-100");

    }

});

// Add cart scriptS
function addToCart(name, price, image) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price,
        image: image,
        qty: 1
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart");

}