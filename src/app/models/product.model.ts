export class Product {
    title: string;
    price: number;
    imgUrl: string;
    marketUrl: string;
    sellerID: number;

    constructor(title: string, price: number, imageUrl: string, marketUrl: string, sellerID: any) {
        this.title = title;
        this.price = price;
        this.imgUrl = imageUrl;
        this.marketUrl = marketUrl;
        this.sellerID = sellerID;
    }
}