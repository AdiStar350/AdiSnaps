enum CameraBrands {
    Canon,
    Nikon,
    Sony,
    Panasonic,
    Olympus,
    Fujifilm,
    Pentax,
    Leica
}

enum LensBrands {
    Canon,
    Nikon,
    Sony,
    Panasonic,
    Olympus,
    Fujifilm,
    Sigma,
    Tamron,
    Samyang,
    Zeiss
}

class Product {
    protected id: number;
    protected price: number;
    protected quantity: number;
    protected total: number;

    constructor(id: number, price: number, quantity: number) {
        this.id = id;
        this.price = price;
        this.quantity = quantity;
        this.total = 0;
    }

    public set setID(val: number) { this.id = val; }

    public get getID(): number { return this.id; }

    public set setPrice(val: number) { val > 0 ? this.price = val : console.log("Error: Invalid Price"); }

    public get getPrice(): number { return this.price; }

    public set setQuantity(val: number) { val > 0 ? this.quantity = val : console.log("Error: Invalid Quantity"); }

    public get getQuantity(): number { return this.quantity; }
     
    public set setTotal(val: number) { this.total = val; }

    public get getTotal(): number { return this.total; }

    public calcTotal(): number { return this.quantity * this.price; }
 
    public toString(): string {
        return `
            ID: ${this.id}
            Price: ${this.price}₪
            Quantity: ${this.quantity}
            Total: ${this.total}₪
        `;
    }
}

class Camera extends Product {
    private resolution: string;
    private brand: CameraBrands;
    private sensor: string;

    constructor(id: number, price: number, quantity: number, resolution: string, brand: CameraBrands, sensor: string) {
        super(id, price, quantity);
        this.resolution = resolution;
        this.brand = brand;
        this.sensor = sensor;
    }

    public set setResolution(val: string) { this.resolution = val; }

    public get getResolution(): string { return this.resolution; }

    public set setBrand(val: CameraBrands) { this.brand = val; }

    public get getBrand(): CameraBrands { return this.brand; }

    public toString(): string {
        return `
            ${super.toString()}
            Resolution: ${this.resolution}
            Brand: ${this.brand}
            Sensor: ${this.sensor}
        `;  
    }
}

class Lens extends Product {
    private focalLength: string;
    private aperture: string;
    private brand: LensBrands;

    constructor(id: number, price: number, quantity: number, focalLength: string, aperture: string, brand: LensBrands) {
        super(id, price, quantity);
        this.focalLength = focalLength;
        this.aperture = aperture;
        this.brand = brand;
    }

    public set setFocalLength(val: string) { this.focalLength = val; }

    public get getFocalLength(): string { return this.focalLength; }

    public set setAperture(val: string) { this.aperture = val; }

    public get getAperture(): string { return this.aperture; }

    public set setBrand(val: LensBrands) { this.brand = val; }

    public get getBrand(): LensBrands { return this.brand; }

    public toString(): string {
        return `
            ${super.toString()}
            Focal Length: ${this.focalLength}
            Aperture: ${this.aperture}
            Brand: ${this.brand}
        `;
    }
}


let cam1 = new Camera(1, 1000, 2, "24MP", CameraBrands.Canon, "Full-Frame");
let cam2 = new Camera(5, 6000, 1, "31MP", CameraBrands.Fujifilm, "Crop-Sensor");

cam1.setTotal = cam1.calcTotal();
cam2.setTotal = cam2.calcTotal();

console.log("--------------------------------------");
console.log(cam1.toString());
console.log("--------------------------------------");
console.log(cam2.toString());


let lens1 = new Lens(2, 500, 3, "50mm", "f/1.8", LensBrands.Nikon);
let lens2 = new Lens(3, 1500, 1, "85mm", "f/1.4", LensBrands.Sony);

lens1.setTotal = lens1.calcTotal();
lens2.setTotal = lens2.calcTotal();

console.log("--------------------------------------");
console.log(lens1.toString());
console.log("--------------------------------------");
console.log(lens2.toString());