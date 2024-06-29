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
                    <div class="fill" id="cartFill">
                            
                    </div>
                    <div id="cartBottom" class="bottom-cart">
                        <button id="clearCart" onclick="cleanCart()" class="top">CLEAR</button>
                        <a href="/html/Bought.html" class="top">CHECKOUT</a>
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
        document.getElementById("cartBottom").style.visibility = "hidden";
        displayCart();
    }
}

const warehouse = [
    [1, "ZV-1 mark II", "/pic/Shop/Sony/Cam/zv-1-II.png", "Sony", "Camera", 3969, "18-50mm Fixed Lens, 3840 x 2160 Video Resolution, 20.1MP, Mirrorless"],
    [2, "A6400", "/pic/Shop/Sony/Cam/a6400.png", "Sony", "Camera", 3149, "Mirrorless, For Sony E Mount"],
    [3, "A6600", "/pic/Shop/Sony/Cam/a6600.png", "Sony", "Camera", 5679, "Mirrorless, For Sony E Mount"],
    [4, "A6700", "/pic/Shop/Sony/Cam/a6700.png", "Sony", "Camera", 6220, "Mirrorless, For Sony E Mount"],
    [5, "A7 mark III", "/pic/Shop/Sony/Cam/a7-III.png", "Sony", "Camera", 5899, "Full Frame, Mirrorless"],
    [6, "A7 mark IV", "/pic/Shop/Sony/Cam/a7-IV.png", "Sony", "Camera", 8899, "Full Frame, Mirrorless, 33MP"],
    [7, "A7c mark II", "/pic/Shop/Sony/Cam/a7c-II.png", "Sony", "Camera", 9079, "Mirrorless For Cinema, 3840 x 2160 Video Resolution, 33MP"],
    [8, "A1", "/pic/Shop/Sony/Cam/a1.png", "Sony", "Camera", 24549, "UHD 4K Video Resolution, Full Frame, 50.1MP, Mirrorless"],
    [9, "EOS R7", "/pic/Shop/Canon/Cam/eos-r7.png", "Canon", "Camera", 5479, "32.5MP, Mirrorless"],
    [10, "EOS R", "/pic/Shop/Canon/Cam/eos-r.png", "Canon", "Camera", 6849, "30.3MP, Mirrorless, Full Frame"],
    [11, "EOS R6 mark II", "/pic/Shop/Canon/Cam/eos-r6-II.png", "Canon", "Camera", 9549, "24.2MP, Mirrorless, 40 FPS"],
    [12, "EOS R5", "/pic/Shop/Canon/Cam/eos-r5.png", "Canon", "Camera", 11999, "45MP, Mirrorless"],
    [13, "EOS R5C", "/pic/Shop/Canon/Cam/eos-r5c.png", "Canon", "Camera", 18299, "45MP, Mirrorless, For Cinema"],
    [14, "EOS R3", "/pic/Shop/Canon/Cam/eos-r3.png", "Canon", "Camera", 21549, "24.1MP, Mirrorless, Has Battery Grip"],
    [15, "X100VI", "/pic/Shop/Fuji/Cam/x100-VI.png", "Fujifilm", "Camera", 6999, "40.2MP, Mirrorless, Can Emulate Film"],
    [16, "XT30 mark II", "/pic/Shop/Fuji/Cam/xt30-II.png", "Fujifilm", "Camera", 3449, "26.1MP, Mirrorless, Can Emulate Film"],
    [17, "X Pro 3", "/pic/Shop/Fuji/Cam/x-pro-3.png", "Fujifilm", "Camera", 6859, "26.1MP, Mirrorless, Can Emulate Film"],
    [18, "XT5", "/pic/Shop/Fuji/Cam/xt5.png", "Fujifilm", "Camera", 6979, "40.2MP, Mirrorless"],
    [19, "GFX 50S mark II", "/pic/Shop/Fuji/Cam/gfx50s-II.png", "Fujifilm", "Camera", 15979, "51.4MP, Mirrorless, Fujifilm G Bayonet"],
    [20, "GFX 100", "/pic/Shop/Fuji/Cam/gfx100.png", "Fujifilm", "Camera", 39699, "102MP, Mirrorless, Fujifilm G Bayonet, Medium Format"],
    
];
var toggleNav = true;
var toggleCart = true;
var cart = [];


function filterShop(form) {
    switch (form.filter.value) {
        case "cam-sony": 
            document.getElementById("placeholder").innerHTML = `
                <img src="/pic/Shop/Sony/Cam/zv-1-II.png" />
                <img src="/pic/Shop/Sony/Cam/a6400.png" />
                <button class="top" id="show1">SHOW PRODUCT</button>
                <button class="top" id="show2">SHOW PRODUCT</button>
                <img src="/pic/Shop/Sony/Cam/a6600.png" />
                <img src="/pic/Shop/Sony/Cam/a6700.png" />
                <button class="top" id="show3";">SHOW PRODUCT</button>
                <button class="top" id="show4";">SHOW PRODUCT</button>
                <img src="/pic/Shop/Sony/Cam/a7-III.png" />
                <img src="/pic/Shop/Sony/Cam/a7-IV.png" />
                <button class="top" id="show5";">SHOW PRODUCT</button>
                <button class="top" id="show6";">SHOW PRODUCT</button>
                <img src="/pic/Shop/Sony/Cam/a7c-II.png" />
                <img src="/pic/Shop/Sony/Cam/a1.png" />
                <button class="top" id="show7";">SHOW PRODUCT</button>
                <button class="top" id="show8";">SHOW PRODUCT</button>
            `;

            for (let i = 1; i <= 8; i++) {
                document.getElementById("show" + i).addEventListener("click", () => {
                    displayProduct(i);
                });
            }

            break;
        
        case "cam-canon":
            document.getElementById("placeholder").innerHTML = `
                <img src="/pic/Shop/Canon/Cam/eos-r7.png" />
                <img src="/pic/Shop/Canon/Cam/eos-r.png" />
                <button class="top" id="show9">SHOW PRODUCT</button>
                <button class="top" id="show10">SHOW PRODUCT</button>
                <img src="/pic/Shop/Canon/Cam/eos-r6-II.png" />
                <img src="/pic/Shop/Canon/Cam/eos-r5.png" />
                <button class="top" id="show11";">SHOW PRODUCT</button>
                <button class="top" id="show12";">SHOW PRODUCT</button>
                <img src="/pic/Shop/Canon/Cam/eos-r5c.png" />
                <img src="/pic/Shop/Canon/Cam/eos-r3.png" />
                <button class="top" id="show13";">SHOW PRODUCT</button>
                <button class="top" id="show14";">SHOW PRODUCT</button>
            `;

            for (let i = 9; i <= 14; i++) {
                document.getElementById("show" + i).addEventListener("click", () => {
                    displayProduct(i);
                });
            }

            break;

        case "cam-fuji":
            document.getElementById("placeholder").innerHTML = `
                <img src="/pic/Shop/Fuji/Cam/x100-VI.png" />
                <img src="/pic/Shop/Fuji/Cam/xt30-II.png" />
                <button class="top" id="show15">SHOW PRODUCT</button>
                <button class="top" id="show16">SHOW PRODUCT</button>
                <img src="/pic/Shop/Fuji/Cam/x-pro-3.png" />
                <img src="/pic/Shop/Fuji/Cam/xt5.png" />
                <button class="top" id="show17";">SHOW PRODUCT</button>
                <button class="top" id="show18";">SHOW PRODUCT</button>
                <img src="/pic/Shop/Fuji/Cam/gfx50s-II.png" />
                <img src="/pic/Shop/Fuji/Cam/gfx100.png" />
                <button class="top" id="show19";">SHOW PRODUCT</button>
                <button class="top" id="show20";">SHOW PRODUCT</button>
            `;
    
            for (let i = 15; i <= 20; i++) {
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
        document.getElementById("cart").style.flex = "0 0 418px";
        setTimeout(() => { document.getElementById("cartBottom").style.visibility = "visible"; }, 2000);
        
        return false;
    } else {
        document.getElementById("cart").style.flex = "0 0 0px";
        setTimeout(() => { document.getElementById("cartBottom").style.visibility = "hidden"; }, 2000);
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
            document.getElementById("cartFill").innerHTML += `${cart[i][0]} X ${cart[i][1]} ${cart[i][2]} ${cart[i][3]} ---- ${cart[i][4]}₪<br />`;
        }   
    }
}

function cleanCart() {
    const arr = sessionStorage.getItem('cart');
    const clean = [];
    if (arr) {
        sessionStorage.setItem('cart', JSON.stringify(clean));
    }
    displayCart();
}