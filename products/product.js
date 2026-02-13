function getHeadphonesFromDB() {
    var headphonesData = {
        "products": [
            {
                "id": 1,
                "title": "Beat 4 Black",
                "description": "Premium wireless headphones with active noise cancellation and premium sound quality.",
                "category": "headphones",
                "price": 255,
                "discountPercentage": 10,
                "rating": 4.8,
                "stock": 25,
                "brand": "Beat",
                "sku": "HEAD-BEAT-001",
                "weight": 0.25,
                "dimensions": { "width": 18.0, "height": 20.0, "depth": 8.0 },
                "warrantyInformation": "2 years warranty",
                "shippingInformation": "Ships in 2–3 business days",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Amazing sound quality!" },
                    { "rating": 4, "comment": "Comfortable for long use." }
                ],
                "returnPolicy": "30 days return",
                "minimumOrderQuantity": 1,
                "meta": {
                    "barcode": "1234567890001",
                    "qrCode": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                },
                "images": [
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                ],
                "thumbnail": "../assets/img/product1.png"
            },
            {
                "id": 2,
                "title": "Beat 4 Red",
                "description": "Bold red wireless headphones with deep bass and crystal clear highs.",
                "category": "headphones",
                "price": 200,
                "discountPercentage": 8,
                "rating": 4.7,
                "stock": 30,
                "brand": "Beat",
                "sku": "HEAD-BEAT-002",
                "weight": 0.25,
                "dimensions": { "width": 18.0, "height": 20.0, "depth": 8.0 },
                "warrantyInformation": "2 years warranty",
                "shippingInformation": "Ships in 2–3 business days",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Love the color and sound!" },
                    { "rating": 4, "comment": "Great bass response." }
                ],
                "returnPolicy": "30 days return",
                "minimumOrderQuantity": 1,
                "meta": {
                    "barcode": "1234567890002",
                    "qrCode": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                },
                "images": [
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                ],
                "thumbnail": "../assets/img/product2.png"
            },
            {
                "id": 3,
                "title": "Beat 4 Yellow",
                "description": "Vibrant yellow wireless headphones with exceptional clarity and comfort.",
                "category": "headphones",
                "price": 200,
                "discountPercentage": 5,
                "rating": 4.6,
                "stock": 20,
                "brand": "Beat",
                "sku": "HEAD-BEAT-003",
                "weight": 0.25,
                "dimensions": { "width": 18.0, "height": 20.0, "depth": 8.0 },
                "warrantyInformation": "2 years warranty",
                "shippingInformation": "Ships in 2–3 business days",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Unique color, great sound!" },
                    { "rating": 4, "comment": "Very comfortable." }
                ],
                "returnPolicy": "30 days return",
                "minimumOrderQuantity": 1,
                "meta": {
                    "barcode": "1234567890003",
                    "qrCode": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                },
                "images": [
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                ],
                "thumbnail": "../assets/img/product3.png"
            },
            {
                "id": 4,
                "title": "Beat 4 Blue",
                "description": "Sleek blue wireless headphones with premium materials and superior audio.",
                "category": "headphones",
                "price": 200,
                "discountPercentage": 7,
                "rating": 4.9,
                "stock": 18,
                "brand": "Beat",
                "sku": "HEAD-BEAT-004",
                "weight": 0.25,
                "dimensions": { "width": 18.0, "height": 20.0, "depth": 8.0 },
                "warrantyInformation": "2 years warranty",
                "shippingInformation": "Ships in 2–3 business days",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Best headphones I've owned!" },
                    { "rating": 5, "comment": "Perfect sound balance." }
                ],
                "returnPolicy": "30 days return",
                "minimumOrderQuantity": 1,
                "meta": {
                    "barcode": "1234567890004",
                    "qrCode": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                },
                "images": [
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                ],
                "thumbnail": "../assets/img/product4.png"
            },
            {
                "id": 5,
                "title": "Beat Pro Studio Black",
                "description": "Professional studio-grade headphones with advanced noise isolation.",
                "category": "headphones",
                "price": 350,
                "discountPercentage": 12,
                "rating": 4.9,
                "stock": 15,
                "brand": "Beat",
                "sku": "HEAD-BEAT-005",
                "weight": 0.28,
                "dimensions": { "width": 18.5, "height": 21.0, "depth": 8.5 },
                "warrantyInformation": "3 years warranty",
                "shippingInformation": "Ships in 2–3 business days",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Studio quality at home!" },
                    { "rating": 5, "comment": "Worth every penny." }
                ],
                "returnPolicy": "30 days return",
                "minimumOrderQuantity": 1,
                "meta": {
                    "barcode": "1234567890005",
                    "qrCode": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                },
                "images": [
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                ],
                "thumbnail": "../assets/img/product1.png"
            },
            {
                "id": 6,
                "title": "Beat Sport Red Edition",
                "description": "Sports wireless headphones with sweat resistance and secure fit.",
                "category": "headphones",
                "price": 180,
                "discountPercentage": 15,
                "rating": 4.5,
                "stock": 40,
                "brand": "Beat",
                "sku": "HEAD-BEAT-006",
                "weight": 0.22,
                "dimensions": { "width": 17.5, "height": 19.5, "depth": 7.5 },
                "warrantyInformation": "2 years warranty",
                "shippingInformation": "Ships in 2–3 business days",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Perfect for workouts!" },
                    { "rating": 4, "comment": "Stays in place while running." }
                ],
                "returnPolicy": "30 days return",
                "minimumOrderQuantity": 1,
                "meta": {
                    "barcode": "1234567890006",
                    "qrCode": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                },
                "images": [
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                ],
                "thumbnail": "../assets/img/product2.png"
            },
            {
                "id": 7,
                "title": "Beat Elite Yellow Pro",
                "description": "Premium yellow edition with enhanced bass and premium leather cushions.",
                "category": "headphones",
                "price": 280,
                "discountPercentage": 10,
                "rating": 4.8,
                "stock": 22,
                "brand": "Beat",
                "sku": "HEAD-BEAT-007",
                "weight": 0.27,
                "dimensions": { "width": 18.2, "height": 20.5, "depth": 8.2 },
                "warrantyInformation": "2 years warranty",
                "shippingInformation": "Ships in 2–3 business days",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Luxurious feel and sound!" },
                    { "rating": 4, "comment": "Great for long sessions." }
                ],
                "returnPolicy": "30 days return",
                "minimumOrderQuantity": 1,
                "meta": {
                    "barcode": "1234567890007",
                    "qrCode": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                },
                "images": [
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                ],
                "thumbnail": "../assets/img/product3.png"
            },
            {
                "id": 8,
                "title": "Beat Gaming Blue",
                "description": "Gaming-focused headphones with surround sound and RGB lighting.",
                "category": "headphones",
                "price": 220,
                "discountPercentage": 8,
                "rating": 4.7,
                "stock": 28,
                "brand": "Beat",
                "sku": "HEAD-BEAT-008",
                "weight": 0.26,
                "dimensions": { "width": 18.0, "height": 20.0, "depth": 8.0 },
                "warrantyInformation": "2 years warranty",
                "shippingInformation": "Ships in 2–3 business days",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Immersive gaming experience!" },
                    { "rating": 4, "comment": "RGB looks amazing." }
                ],
                "returnPolicy": "30 days return",
                "minimumOrderQuantity": 1,
                "meta": {
                    "barcode": "1234567890008",
                    "qrCode": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                },
                "images": [
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                ],
                "thumbnail": "../assets/img/product4.png"
            }
        ]
    };

    return headphonesData.products;
}

// ---------------------------

var products = getHeadphonesFromDB();
for (var i = 0; i < products.length; i++) {
    showProducts(products[i]);
}

var cart = [];
var cart = JSON.parse(localStorage.getItem("cart")) || [];

function showProducts(p) {
    var article = document.createElement("article");
    var contentDiv = document.createElement("div");
    var img = document.createElement("img");
    var title = document.createElement("h3");
    var price = document.createElement("span");
    var btnAdd = document.createElement("button");
    
    // Add classes
    article.classList.add("product-card");
    contentDiv.classList.add("product-content");
    img.classList.add("product-img");
    title.classList.add("product-title");
    price.classList.add("priceProduct");
    btnAdd.classList.add("button", "button--flex", "product-btn");
    
    // Set content
    img.src = p.thumbnail;
    img.alt = p.title;
    title.textContent = p.title;
    price.textContent = "$" + p.price;
    
    // Add shopping icon to button
    var icon = document.createElement("i");
    icon.classList.add("ri-shopping-bag-line", "btn-icon");
    btnAdd.appendChild(icon);
    
    // Append elements
    contentDiv.append(img, title, price, btnAdd);
    article.appendChild(contentDiv);
    document.getElementById("myProduct").appendChild(article);
    
    // Add to cart functionality
    btnAdd.onclick = function () {
        cart.push(p);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
    }
}

function updateCartCount() {
    var cartcount = document.getElementById("cartCount");
    if (cartcount) {
        cartcount.textContent = cart.length;
        cartcount.style.display = cart.length > 0 ? "block" : "none";
    }
}

updateCartCount();