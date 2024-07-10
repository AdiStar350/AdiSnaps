class Product {
    protected id: number;
    protected productName: string;
    protected picture: string;
    protected brand: string;
    protected type: string;
    protected price: number;
    protected quantity: number;
    protected other: string;
    protected total: number;


    constructor(id: number, productName: string, picture: string, brand: string, type: string, price: number, other: string) {
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

    public set setID(val: number) { this.id = val; }

    public get getID(): number { return this.id; }

    public set setName(val: string) { this.productName = val; }

    public get getName(): string { return this.productName; }

    public set setPicture(val: string) {
        if (/^pic\/Shop\/[a-zA-z]{1,}.png$/.test(val)) {
            this.picture = val;
        } else {
            prompt("Error: Invalid Picture Src");
        }
    }

    public get getPicture(): string { return this.picture; }

    public set setBrand(val: string) {
        if (/^[a-z]/i.test(val)) {
            this.brand = val;
        } else {
            prompt("Error: Invalid Brand");
        }
    }

    public get getBrand(): string { return this.brand; }

    public set setType(val: string) {
        if (/^[a-z]/i.test(val)) {
            this.type = val;
        } else {
            prompt("Error: Invalid Type");
        }
    }

    public get getType(): string { return this.type; }

    public set setPrice(val: number) { this.price = val; }

    public get getPrice(): number { return this.price; }

    public set setQuantity(val: number) { this.quantity = val; }

    public get getQuantity(): number { return this.quantity; }

    public set setOther(val: string) {
        if (/^[a-z,]/i.test(val)) {
            this.other = val;
        } else {
            prompt("Error: Invalid Other");
        }
    }

    public get getOther(): string { return this.other; }
     
    public set setTotal(val: number) { this.total = val; }

    public get getTotal(): number { return this.total; }
 
    public toString(): string {
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

    private increment(val: number): number {
        val < 10 ? val++ : alert("Cant go any higher!");
        return val;
    }

    private decrement(val: number): number {
        val > 0 ? val-- : alert("Cant go any lower!");
        return val;
    }

    private updateDisplay(): void {
        const quantityElement = document.getElementById("quan");
        const totalElement = document.getElementById("total");
        const addToCartButton = document.getElementById("addToCart");
        
        if (quantityElement) {
          quantityElement.innerText = this.quantity.toString();
        }

        if (totalElement) {
          totalElement.innerText = `${this.total}₪`;
        }

        if (addToCartButton) {
          addToCartButton.style.visibility = this.quantity === 0 ? "hidden" : "visible";
        }
    }

    private init(): void {
        const addToCartButton = document.getElementById("addToCart");
        const cartBottomElement = document.getElementById("cartBottom");
        const incrementButton = document.getElementById("incrementButton");
        const decrementButton = document.getElementById("decrementButton");

        if (addToCartButton && cartBottomElement) {
            addToCartButton.onclick = () => {
                var item: any[] = [this.quantity, this.brand, this.productName, this.type, this.total, this.id, this.price];

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
                cartBottomElement.style.visibility = "visible";
            };
        }

        if (incrementButton) {
            incrementButton.onclick = () => {
                this.setQuantity = this.increment(this.quantity);
                this.setTotal = this.quantity * this.price;
                this.updateDisplay();
            };
        }
        
        if (decrementButton) {
            decrementButton.onclick = () => {
                this.setQuantity = this.decrement(this.quantity);
                this.setTotal = this.quantity * this.price;
                this.updateDisplay();
            };
        }

        if (addToCartButton && cartBottomElement) {
            addToCartButton.style.visibility = this.quantity == 0 ? "hidden" : "visible";
            cartBottomElement.style.visibility = "hidden";
            displayCart();
        }
    }
}

var cart: any[] = [];

function displayCart() {
    const arr: string | null = sessionStorage.getItem('cart');
    const cartFillElement = document.getElementById("cartFill");

    if (arr && cartFillElement) {
        cart = JSON.parse(arr);

        cartFillElement.innerHTML = '';

        for (var i = 0; i < cart.length; i++) {
            cartFillElement.innerHTML += `${cart[i][0]} X ${cart[i][1]} ${cart[i][2]} ${cart[i][3]} ---- ${cart[i][4]}₪<br />`;
        }   
    }
}