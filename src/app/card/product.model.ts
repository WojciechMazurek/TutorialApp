export class ProductModel {
    price: number;
    imgDescription: string;
    description: string;
    img: string;

    constructor(price: number, imgDescription: string, description: string, img: string){
        this.description =description;
        this.img =img;
        this.imgDescription = imgDescription;
        this.price = price;
    }
}