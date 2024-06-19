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
        this.id = val;
    }

    set setName(val) {
        this.productName = val;
    }

    set setPicture(val) {
        this.picture = val;
    }

    set setBrand(val) {
        this.brand = val;
    }

    set setType(val) {
        this.type = val;
    }

    set setPrice(val) {
        this.price = val;
    }

    set setQuantity(val) {
        this.quantity = val;
    }

    set setOther(val) {
        this.other = val;
    }

    set setTotal(val) {
        this.total = val;
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
            <div class="shop">
            <img id="image" src="" />
            <br /><br />
            <div id="cam-name"></div>
            <br /><br />
            <div id="cam-description"></div>
            <br /><br />
            <div id="cam-price"></div>
            <br /><br />
            <div class="quantity">
                <button id="incrementButton" class="top"> + </button>
                <div id="quan"></div>
                <button id="decrementButton" class="top"> - </button>
            </div>
            Total:
            <div id="total"></div>
            <br /><br />
            <button id="addToCart" class="top">ADD TO CART</button>
        </div>
        `;
    }


    updateDisplay(t, q) {
        document.getElementById("image").src = this.picture;
        document.getElementById("cam-name").innerHTML = this.brand + ' ' + this.productName;
        document.getElementById("cam-description").innerHTML = this.type + ' ' + this.other;
        document.getElementById("cam-price").innerHTML = this.price + '₪';
        document.getElementById("quan").innerHTML = q;
        document.getElementById("total").innerHTML = t + '₪';

        if (this.quantity == 0) {
            document.getElementById("addToCart").style.visibility = "hidden";
        } else {
            document.getElementById("addToCart").style.visibility = "visible";
        }
    }


    increment(val) {
        val < 10 ? val++ : alert("Cant go any higher!");
        return val;
    }


    decrement(val) {
        val > 0 ? val-- : alert("Cant go any lower!");
        return val;
    }


    init() {
        document.getElementById("addToCart").onclick = () => {
            
        };

        document.getElementById("incrementButton").onclick = () => {
            this.setQuantity = this.increment(this.quantity);
            this.setTotal = this.quantity * this.price;
            this.updateDisplay(this.total ,this.quantity);
        };
        
        document.getElementById("decrementButton").onclick = () => {
            this.setQuantity = this.decrement(this.quantity);
            this.setTotal = this.quantity * this.price;
            this.updateDisplay(this.total ,this.quantity);
        };
        
        this.updateDisplay(this.total ,this.quantity);
    }
}

var warehouse = [
    [1, "ZV-1 mark II", "/pic/Shop/Sony/Cam/zv-1-II.jpeg", "Sony", "Camera", 3969, "18-50mm Fixed Lens, 3840 x 2160 Video Resolution, 20.1MP, Mirrorless"],
    [2, "A6400", "/pic/Shop/Sony/Cam/a6400.jpeg", "Sony", "Camera", 3149, "Mirrorless, For Sony E Mount"],
    [3, "A6600", "/pic/Shop/Sony/Cam/a6600.jpeg", "Sony", "Camera", 5679, "Mirrorless, For Sony E Mount"],
    [4, "A6700", "/pic/Shop/Sony/Cam/a6700.jpeg", "Sony", "Camera", 6220, "Mirrorless, For Sony E Mount"],
    [5, "A7 mark III", "/pic/Shop/Sony/Cam/a7-III.jpeg", "Sony", "Camera", 5899, "Full Frame, Mirrorless"],
    [6, "A7 mark IV", "/pic/Shop/Sony/Cam/a7-IV.jpeg", "Sony", "Camera", 8899, "Full Frame, Mirrorless, 33MP"],
    [7, "A7c mark II", "/pic/Shop/Sony/Cam/a7c-II.jpeg", "Sony", "Camera", 9079, "Mirrorless For Cinema, 3840 x 2160 Video Resolution, 33MP"],
    [8, "A1", "/pic/Shop/Sony/Cam/a1.jpeg", "Sony", "Camera", 24549, "UHD 4K Video Resolution, Full Frame, 50.1MP, Mirrorless"],
];
var cart = new Array();
var toggleNav = true;
var toggleCart = true;


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

            for(let i = 1; i <= 8; i++) {
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
        document.getElementById("cartButton").style.visibility = "visible";
        return false;
    } else {
        document.getElementById("nav").style.flex = "0 0 0px";
        document.getElementById("pan1").style.transformOrigin = "center";
        document.getElementById("pan1").style.transform = "translate(0px, 0px) rotatez(0deg)";
        document.getElementById("pan2").style.visibility = "visible";
        document.getElementById("pan2").style.transform = "rotatez(-180deg)";
        document.getElementById("pan3").style.transformOrigin = "center";
        document.getElementById("pan3").style.transform = "translate(0px, 0px) rotatez(0deg)";
        document.getElementById("cartButton").style.visibility = "hidden";
        return true;
    }
}


function cartBar(toggleCart) {
    if (toggleCart) {
        document.getElementById("cart").style.flex = "1 1 150px";
        return false;
    } else {
        document.getElementById("cart").style.flex = "0 0 0px";
        return true;
    }
}


function lock() {
    document.getElementById("container").style.filter = "blur(20px)";
    document.getElementById("waker").style.visibility = "visible";
    document.getElementById("cartButton").style.visibility = "hidden";
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
            alert("Product found!");
            var product = new Product(warehouse[i][0], warehouse[i][1], warehouse[i][2], warehouse[i][3], warehouse[i][4], warehouse[i][5], warehouse[i][6]);
            break;
        }
    }

    document.write(product.toString());
    product.init();
}

