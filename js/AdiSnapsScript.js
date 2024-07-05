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

    get getID() { return this.id; }

    set setName(val) { this.productName = val; }

    get getName() { return this.productName; }

    set setPicture(val) {
        if (/^pic\/Shop\/[a-zA-z]{1,}.png$/.test(val)) {
            this.picture = val;
        } else {
            prompt("Error: Invalid Picture Src");
        }
    }

    get getPicture() { return this.picture; }

    set setBrand(val) {
        if (/^[a-z]/i.test(val)) {
            this.brand = val;
        } else {
            prompt("Error: Invalid Brand");
        }
    }

    get getBrand() { return this.brand; }

    set setType(val) {
        if (/^[a-z]/i.test(val)) {
            this.type = val;
        } else {
            prompt("Error: Invalid Type");
        }
    }

    get getType() { return this.type; }

    set setPrice(val) {
        if (!isNaN(val)) {
            this.price = val * 1;
        } else {
            prompt("Error: Invalid Price");
        }
    }

    get getPrice() { return this.price; }

    set setQuantity(val) {
        if (!isNaN(val)) {
            this.quantity = val * 1;
        } else {
            prompt("Error: Invalid Quantity");
        } 
    }

    get getQuantity() { return this.quantity; }

    set setOther(val) {
        if (/^[a-z,]/i.test(val)) {
            this.other = val;
        } else {
            prompt("Error: Invalid Other");
        }
    }

    get getOther() { return this.other; }
     
    set setTotal(val) {
        if (!isNaN(val)) {
            this.total = val * 1;
        } else {
            prompt("Error: Invalid Total");
        } 
    }

    get getTotal() { return this.total; }
 
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


class User {
    constructor(firstName, lastName, email, reason, area, more) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.reason = reason;
        this.area = area;
        this.more = more;
        this.error = "";
        this.passed = true;

    }

    set setFirstName(value) {
        if (/^[a-zA-Zא-ת]{2,}$/i.test(value)) {
            this.firstName = value;
        } else {
            this.passed = false;
            this.error += "You entered an invalid first name!\n";
        }
    }

    get getFirstName() { return this.firstName; }

    set setLastName(value) {
        if (/^[a-zA-Zא-ת]{2,}$/i.test(value)) {
            this.lastName = value;
        } else {
            this.passed = false;
            this.error += "You entered an invalid last name!\n";
        }
    }

    get getLastName() { return this.lastName; }

    set setEmail(value) {
        if (/^[a-zA-Z\d!#$%&'*+-/=?^_{|}~`.]+@[a-zA-Z.\d-]+.[a-zA-Z]{2,} {0,}$/i.test(value)) {
            this.email = value;
        } else {
            this.passed = false;
            this.error += "Please enter a correct email address!\n";
        }
    }

    get getEmail() { return this.email; }

    set setReason(value) {
        for (var i = 0; i < value.length; i++) {
            if (value[i].checked) {
                this.reason = value[i].checked.value;
                return;
            }
        }

        this.passed = false;
        this.error += "Please state the reason for contacting me!\n";
    }

    get getReason() { return this.reason; }

    set setArea(value) {
        if (/^[a-zA-Z]+$/.test(value)) {
            this.area = value;
        } else {
            this.passed = false;
            this.error += "Please choose or enter an area!\n";
        }
    }

    set setMore(value) { this.more = value; }

    get getMore() { return this.more; }

    toString() {
        return `
            Name: ${this.firstName} ${this.lastName}
            Email: ${this.email}
            Reason: ${this.reason}
            Area: ${this.area}
            More: ${this.more}
        `;
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
    [19, "GFX 50S mark II", "/pic/Shop/Fuji/Cam/gfx50s-II.png", "Fujifilm", "Camera", 15979, "51.4MP, Mirrorless, Fujifilm G Mount"],
    [20, "GFX 100", "/pic/Shop/Fuji/Cam/gfx100.png", "Fujifilm", "Camera", 39699, "102MP, Mirrorless, Fujifilm G Mount, Medium Format"],
    [21, "FE 70-200mm f/2.8 GM OSS II", "/pic/Shop/Sony/Lens/70-200.png", "Sony", "Lens", 10699, "For Sony E Mount, 77mm Filter Size, f/2.8 Telephoto"],
    [22, "FE 50mm f/1.2 GM", "/pic/Shop/Sony/Lens/50.png", "Sony", "Lens", 7739, "For Sony E Mount, 72mm Filter Size, f/1.2 Normal"],
    [23, "FE 16-35mm f/2.8 GM II", "/pic/Shop/Sony/Lens/16-35.png", "Sony", "Lens", 9879, "For Sony E Mount, 82mm Filter Size, f/2.8 Wide"],
    [24, "FE 24-70mm f/2.8 GM II", "/pic/Shop/Sony/Lens/24-70.png", "Sony", "Lens", 8249, "For Sony E Mount, 82mm Filter Size, f/2.8 Wide"],
    [25, "FE 100-400mm f/4.5-5.6 GM OSS", "/pic/Shop/Sony/Lens/100-400.png", "Sony", "Lens", 8999, "For Sony E Mount, 77mm Filter Size, f/4.5-5.6 Telephoto"],
    [26, "FE 200-600mm f/5.6-6.3 G OSS", "/pic/Shop/Sony/Lens/200-600.png", "Sony", "Lens", 6979, "For Sony E Mount, 95mm Filter Size, f/5.6-6.3 Telephoto"],
    [27, "RF 85mm f/1.2L USM DS", "/pic/Shop/Canon/Lens/85.png", "Canon", "Lens", 12479, "For Canon RF Mount, 82mm Filter Size, f/1.2 Normal"],
    [28, "RF 28-70mm f/2L USM", "/pic/Shop/Canon/Lens/28-70.png", "Canon", "Lens", 11579, "For Canon RF Mount, 95mm Filter Size, f/2 Telephoto"],
    [29, "RF 70-200mm f/2.8 IS RF USM", "/pic/Shop/Canon/Lens/70-200.png", "Canon", "Lens", 11479, "For Canon RF Mount, 77mm Filter Size, f/2.8 Telephoto"],
    [30, "RF 100-500mm f/4.5-7.1L IS USM", "/pic/Shop/Canon/Lens/100-500.png", "Canon", "Lens", 11679, "For Canon RF Mount, 77mm Filter Size, f/4.5-7.1 Telephoto"],
    [31, "RF 15-35mm f/2.8 IS RF USM", "/pic/Shop/Canon/Lens/15-35.png", "Canon", "Lens", 9699, "For Canon RF Mount, 82mm Filter Size, f/2.8 Wide"],
    [32, "RF 135mm f/1.8 USM", "/pic/Shop/Canon/Lens/135.png", "Canon", "Lens", 9499, "For Canon RF Mount, 82mm Filter Size, f/1.8 Medium Telephoto"],
    [33, "XF 150-600mm f/5.6-8 R LM", "/pic/Shop/Fuji/Lens/150-600.png", "Fujifilm", "Lens", 8199, "For Fujifilm X Mount, 82mm Filter Size, f/5.6-8 Super Telephoto"],
    [34, "XF 56mm f/1.2 R WR", "/pic/Shop/Fuji/Lens/56.png", "Fujifilm", "Lens", 3969, "For Fujifilm X Mount, 67mm Filter Size, f/1.2 Normal"],
    [35, "XF 18mm f/1.4 R LM WR", "/pic/Shop/Fuji/Lens/18.png", "Fujifilm", "Lens", 3899, "For Fujifilm X Mount, 62mm Filter Size, f/1.4 Normal"],
    [36, "XF lens XF 80mm f/2.8 R LM OIS WR MACRO", "/pic/Shop/Fuji/Lens/80.png", "Fujifilm", "Lens", 4550, "For Fujifilm X Mount, 62mm Filter Size, f/2.8 Telephoto"],
    [37, "G lens GF 32-64mm f/4 WR", "/pic/Shop/Fuji/Lens/32-64.png", "Fujifilm", "Lens", 9099, "For Fujifilm G Mount, 77mm Filter Size, f/4 Normal"],
    [38, "G lens GF 120mm f/4 Macro OIS", "/pic/Shop/Fuji/Lens/120.png", "Fujifilm", "Lens", 10699, "For Fujifilm G Mount, 72mm Filter Size, f/4 Medium Telephoto Macro"],
    
];
var toggleNav = true;
var toggleCart = true;
var cart = [];


function isOk(form) {
    var u = new User();

    u.setFirstName = form.firstName.value;
    u.setLastName = form.lastName.value;
    u.setEmail = form.email.value;
    u.setReason = form.reason;
    u.setArea = form.area.value;
    u.setMore = form.freeText.value;

    if (!u.passed) {
        alert(u.error);
    }

    return u.passed;
}


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

        case "lens-sony":
            document.getElementById("placeholder").innerHTML = `
                <img src="/pic/Shop/Sony/Lens/70-200.png" />
                <img src="/pic/Shop/Sony/Lens/50.png" />
                <button class="top" id="show21">SHOW PRODUCT</button>
                <button class="top" id="show22">SHOW PRODUCT</button>
                <img src="/pic/Shop/Sony/Lens/16-35.png" />
                <img src="/pic/Shop/Sony/Lens/24-70.png" />
                <button class="top" id="show23";">SHOW PRODUCT</button>
                <button class="top" id="show24";">SHOW PRODUCT</button>
                <img src="/pic/Shop/Sony/Lens/100-400.png" />
                <img src="/pic/Shop/Sony/Lens/200-600.png" />
                <button class="top" id="show25";">SHOW PRODUCT</button>
                <button class="top" id="show26";">SHOW PRODUCT</button>
            `;
        
            for (let i = 21; i <= 26; i++) {
                document.getElementById("show" + i).addEventListener("click", () => {
                    displayProduct(i);
                });
            }
        
            break;
            
            case "lens-canon":
                document.getElementById("placeholder").innerHTML = `
                    <img src="/pic/Shop/Canon/Lens/85.png" />
                    <img src="/pic/Shop/Canon/Lens/28-70.png" />
                    <button class="top" id="show27">SHOW PRODUCT</button>
                    <button class="top" id="show28">SHOW PRODUCT</button>
                    <img src="/pic/Shop/Canon/Lens/70-200.png" />
                    <img src="/pic/Shop/Canon/Lens/100-500.png" />
                    <button class="top" id="show29";">SHOW PRODUCT</button>
                    <button class="top" id="show30";">SHOW PRODUCT</button>
                    <img src="/pic/Shop/Canon/Lens/15-35.png" />
                    <img src="/pic/Shop/Canon/Lens/135.png" />
                    <button class="top" id="show31";">SHOW PRODUCT</button>
                    <button class="top" id="show32";">SHOW PRODUCT</button>
                `;
            
                for (let i = 27; i <= 32; i++) {
                    document.getElementById("show" + i).addEventListener("click", () => {
                        displayProduct(i);
                    });
                }
            
                break;

            case "lens-fuji":
                document.getElementById("placeholder").innerHTML = `
                    <img src="/pic/Shop/Fuji/Lens/150-600.png" />
                    <img src="/pic/Shop/Fuji/Lens/56.png" />
                    <button class="top" id="show33">SHOW PRODUCT</button>
                    <button class="top" id="show34">SHOW PRODUCT</button>
                    <img src="/pic/Shop/Fuji/Lens/18.png" />
                    <img src="/pic/Shop/Fuji/Lens/80.png" />
                    <button class="top" id="show35";">SHOW PRODUCT</button>
                    <button class="top" id="show36";">SHOW PRODUCT</button>
                    <img src="/pic/Shop/Fuji/Lens/32-64.png" />
                    <img src="/pic/Shop/Fuji/Lens/120.png" />
                    <button class="top" id="show37";">SHOW PRODUCT</button>
                    <button class="top" id="show38";">SHOW PRODUCT</button>
                `;
            
                for (let i = 33; i <= 38; i++) {
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
    if (/^211862511$/.test(form.password.value) && /^adistrasser$/.test(form.username.value)) {
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