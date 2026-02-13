// Your original cart logic (unchanged)
var get = JSON.parse(localStorage.getItem("cart"));

function getdata() {
    document.getElementsByClassName("cart-box")[0].innerHTML = "";
    
  
    if (!get || get.length === 0) {
        document.getElementsByClassName("cart-box")[0].innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-color);">
                <i class="ri-shopping-cart-line" style="font-size: 4rem; color: var(--text-color-light); margin-bottom: 1rem;"></i>
                <p style="font-size: var(--normal-font-size);">Your cart is empty</p>
            </div>
        `;
        total();
        return;
    }
    
    for (var i = 0; i < get.length; i++) {
        showCart(get[i]);
    }

    total();
}

function showCart(pr) {
    var div2 = document.createElement('div');
    var img = document.createElement('img');
    var h2 = document.createElement('h2');
    var h3 = document.createElement('h3');
    var qny = document.createElement('input');
    var but = document.createElement('button');
    
    img.src = pr.thumbnail;
    h2.textContent = pr.title;
    
  
    qny.setAttribute('type', 'number');
    qny.setAttribute('value', '1');
    h3.innerHTML = pr.price * qny.value;
    
    qny.onchange = function () {
        if (qny.value >= 0) {
            h3.innerHTML = qny.value * pr.price;
        } else {
            h3.innerHTML = qny.value = 1;
        }
        total();
    }
    
    // REM
    but.textContent = "X";
    but.onclick = function () {
        localStorage.removeItem("cart");
        document.getElementsByClassName("cart-box")[0].removeChild(div2);
        total();
    }
    
    // draw
    div2.append(img, h2, h3, qny, but);
    div2.classList.add('caart');

    document.getElementsByClassName("cart-box")[0].appendChild(div2);

    total();
}

function total() {
    var h3 = document.querySelectorAll('.caart h3');
    var totalUp = document.getElementsByClassName("totalPrice")[0];
    var total = 0;
    
    for (var i = 0; i < h3.length; i++) {
        total += parseFloat(h3[i].innerHTML);
    }
    
    totalUp.innerHTML = total.toFixed(2);
    return total;
}

var cp = document.getElementById("copon");

cp.onclick = function() {
    var totalD = total();
    var discount = totalD * 0.10;
    var finalTotal = totalD - discount;
    document.getElementsByClassName("totalPrice")[0].innerHTML = finalTotal.toFixed(2);
}