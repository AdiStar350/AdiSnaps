class Product {
    constructor(id, productName, picture, brand, type, price, other) {
        this.id = id;
        this.productName = productName;
        this.picture = picture;
        this.brand = brand;
        this.type = type;
        this.price = price;
        this.quantity = 0;
        this.other = other;
        this.total = 0;
    }

    set setID(val) {
        if(!isNaN(val)) {
            this.id = val * 1;
        } else {
            prompt("Error: Invalid ID");
        }
    }

    set setName(val) {
        this.productName = val;
    }

    set setPicture(val) {
        if (/^pic\/Shop\/[a-zA-z]{1,}.jpeg$/.test(val)) {
            this.picture = val;
        } else {
            prompt("Error: Invalid Picture Src");
        }
    }

    set setBrand(val) {
        if (/^[a-z]/i.test(val)) {
            this.brand = val;
        } else {
            prompt("Error: Invalid Brand");
        }
    }

    set setType(val) {
        if (/^[a-z]/i.test(val)) {
            this.type = val;
        } else {
            prompt("Error: Invalid Type");
        }
    }

    set setPrice(val) {
        if (!isNaN(val)) {
            this.price = val * 1;
        } else {
            prompt("Error: Invalid Price");
        }
    }

    set setQuantity(val) {
        if (!isNaN(val)) {
            this.quantity = val * 1;
        } else {
            prompt("Error: Invalid Quantity");
        } 
    }

    set setOther(val) {
        if (/^[a-z,]/i.test(val)) {
            this.other = val;
        } else {
            prompt("Error: Invalid Other");
        }
    }
     
    set setTotal(val) {
        if (!isNaN(val)) {
            this.total = val * 1;
        } else {
            prompt("Error: Invalid Total");
        } 
    }

    get getID() {
        return this.id;
    }

    get getName() {
        return this.productName;
    }

    get getPicture() {
        return this.picture;
    }

    get getBrand() {
        return this.brand;
    }

    get getType() {
        return this.type;
    }

    get getPrice() {
        return this.price;
    }

    get getQuantity() {
        return this.quantity;
    }

    get getOther() {
        return this.other;
    }

    get getTotal() {
        return this.total;
    }
 
    
    toString() {
        return `
            <link rel="stylesheet" href="/css/AdiSnapsStyle.css" />
            <div class="temp">
                <div class="shop">
                    <button class="cart-button" id="cartButton" onclick="toggleCart = cartBar(toggleCart)">
                        <img src="/pic/cart_transparent.png" />
                    </button>
                    <img id="image" src="${this.picture}" />
                    <br /><br />
                    <div id="cam-name">
                        ${this.brand} ${this.productName}
                    </div>
                    <br /><br />
                    <div id="cam-description">
                        ${this.type} ${this.other}
                    </div>
                    <br /><br />
                    <div id="cam-price">
                        ${this.price}₪
                    </div>
                    <br /><br />
                    <div class="quantity">
                        <button id="incrementButton" class="top"> + </button>
                        <div id="quan">${this.quantity}</div>
                        <button id="decrementButton" class="top"> - </button>
                    </div>
                    Total:
                    <div id="total">
                        ${this.total}₪
                    </div>
                    <br /><br />
                    <button id="addToCart" class="top">ADD TO CART</button>
                </div>
                <aside class="cart" id="cart">
                    <h2>Cart</h2>
                    <div id="cartFill">
                            
                    </div>
                </aside>
            </div>
        `;
    }

    increment(val) {
        val < 10 ? val++ : alert("Cant go any higher!");
        return val;
    }

    decrement(val) {
        val > 0 ? val-- : alert("Cant go any lower!");
        return val;
    }

    updateDisplay() {
        document.getElementById("quan").innerText = this.quantity;
        document.getElementById("total").innerText = this.total + "₪";
        document.getElementById("addToCart").style.visibility = this.quantity == 0 ? "hidden" : "visible";
    }

    init() {
        document.getElementById("addToCart").onclick = () => {
            var item = [this.quantity, this.brand, this.productName, this.type, this.total, this.id, this.price];

            for (var i = 0; i < cart.length; i++) {
                if (cart[i][5]  == this.id) {
                    item[0] = cart[i][0] + this.quantity;
                    item[4] = item[6] * item[0];
                    cart.splice(i);
                }
            }

            cart.push(item);
            sessionStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
        };

        document.getElementById("incrementButton").onclick = () => {
            this.setQuantity = this.increment(this.quantity);
            this.setTotal = this.quantity * this.price;
            this.updateDisplay();
        };
        
        document.getElementById("decrementButton").onclick = () => {
            this.setQuantity = this.decrement(this.quantity);
            this.setTotal = this.quantity * this.price;
            this.updateDisplay();
        };

        document.getElementById("addToCart").style.visibility = this.quantity == 0 ? "hidden" : "visible";
        displayCart();
    }
}

const warehouse = [
    [1, "ZV-1 mark II", "/pic/Shop/Sony/Cam/zv-1-II.jpeg", "Sony", "Camera", 3969, "18-50mm Fixed Lens, 3840 x 2160 Video Resolution, 20.1MP, Mirrorless"],
    [2, "A6400", "/pic/Shop/Sony/Cam/a6400.jpeg", "Sony", "Camera", 3149, "Mirrorless, For Sony E Mount"],
    [3, "A6600", "/pic/Shop/Sony/Cam/a6600.jpeg", "Sony", "Camera", 5679, "Mirrorless, For Sony E Mount"],
    [4, "A6700", "/pic/Shop/Sony/Cam/a6700.jpeg", "Sony", "Camera", 6220, "Mirrorless, For Sony E Mount"],
    [5, "A7 mark III", "/pic/Shop/Sony/Cam/a7-III.jpeg", "Sony", "Camera", 5899, "Full Frame, Mirrorless"],
    [6, "A7 mark IV", "/pic/Shop/Sony/Cam/a7-IV.jpeg", "Sony", "Camera", 8899, "Full Frame, Mirrorless, 33MP"],
    [7, "A7c mark II", "/pic/Shop/Sony/Cam/a7c-II.jpeg", "Sony", "Camera", 9079, "Mirrorless For Cinema, 3840 x 2160 Video Resolution, 33MP"],
    [8, "A1", "/pic/Shop/Sony/Cam/a1.jpeg", "Sony", "Camera", 24549, "UHD 4K Video Resolution, Full Frame, 50.1MP, Mirrorless"],
];
var toggleNav = true;
var toggleCart = true;
var cart = [];


function filterShop(form) {
    switch (form.filter.value) {
        case "cam-sony": 
            document.getElementById("placeholder").innerHTML = `
                <img src="/pic/Shop/Sony/Cam/zv-1-II.jpeg" />
                <img src="/pic/Shop/Sony/Cam/a6400.jpeg" />
                <button class="top" id="show1">SHOW PRODUCT</button>
                <button class="top" id="show2">SHOW PRODUCT</button>
                <img src="/pic/Shop/Sony/Cam/a6600.jpeg" />
                <img src="/pic/Shop/Sony/Cam/a6700.jpeg" />
                <button class="top" id="show3";">SHOW PRODUCT</button>
                <button class="top" id="show4";">SHOW PRODUCT</button>
                <img src="/pic/Shop/Sony/Cam/a7-III.jpeg" />
                <img src="/pic/Shop/Sony/Cam/a7-IV.jpeg" />
                <button class="top" id="show5";">SHOW PRODUCT</button>
                <button class="top" id="show6";">SHOW PRODUCT</button>
                <img src="/pic/Shop/Sony/Cam/a7c-II.jpeg" />
                <img src="/pic/Shop/Sony/Cam/a1.jpeg" />
                <button class="top" id="show7";">SHOW PRODUCT</button>
                <button class="top" id="show8";">SHOW PRODUCT</button>
            `;

            for (let i = 1; i <= 8; i++) {
                document.getElementById("show" + i).addEventListener("click", () => {
                    displayProduct(i);
                });
            }

            break;
    }
}


function navBar(toggleNav) {
    if (toggleNav) {
        document.getElementById("nav").style.flex = "1 1 150px";
        document.getElementById("pan1").style.transformOrigin = "center";
        document.getElementById("pan1").style.transform = "translate(0px, 19px) rotatez(45deg)";
        document.getElementById("pan2").style.transform = "rotatez(180deg)";
        document.getElementById("pan2").style.visibility = "hidden";
        document.getElementById("pan3").style.transformOrigin = "center";
        document.getElementById("pan3").style.transform = "translate(0px, -19px) rotatez(-45deg)";
        return false;
    } else {
        document.getElementById("nav").style.flex = "0 0 0px";
        document.getElementById("pan1").style.transformOrigin = "center";
        document.getElementById("pan1").style.transform = "translate(0px, 0px) rotatez(0deg)";
        document.getElementById("pan2").style.visibility = "visible";
        document.getElementById("pan2").style.transform = "rotatez(-180deg)";
        document.getElementById("pan3").style.transformOrigin = "center";
        document.getElementById("pan3").style.transform = "translate(0px, 0px) rotatez(0deg)";
        return true;
    }
}


function cartBar(toggleCart) {
    if (toggleCart) {
        document.getElementById("cart").style.flex = "1 1 1000px";
        return false;
    } else {
        document.getElementById("cart").style.flex = "0 0 0px";
        return true;
    }
}


function lock() {
    document.getElementById("container").style.filter = "blur(20px)";
    document.getElementById("waker").style.visibility = "visible";
}


function login(form) {
    if (/^[\d]{9}$/.test(form.password.value) && /^[a-z]{3,}$/i.test(form.username.value)) {
        document.getElementById("waker").style.visibility = "hidden";
        document.getElementById("container").style.filter = "none";
        setInterval('lock();', 300000);
    } else {
        alert("Try again!");
    }
}


function displayProduct(id) {
    for (var i = 0; i < warehouse.length; i++) {
        if (warehouse[i][0] == id) {
            var product = new Product(warehouse[i][0], warehouse[i][1], warehouse[i][2], warehouse[i][3], warehouse[i][4], warehouse[i][5], warehouse[i][6]);
            break;
        }
    }

    document.write(product.toString());
    product.init();
}

function displayCart() {
    const arr = sessionStorage.getItem('cart');
    if (arr) {
        cart = JSON.parse(arr);

        document.getElementById("cartFill").innerHTML = '';

        for (var i = 0; i < cart.length; i++) {
            document.getElementById("cartFill").innerHTML += `${cart[i][0]} X ${cart[i][1]} ${cart[i][2]} ${cart[i][3]} ---- ${cart[i][4]}<br />`;
        }   
    }
}