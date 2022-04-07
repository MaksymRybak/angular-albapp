export class Product {

  constructor(
    public nameProduct: string, 
    public code: string,
    public data: string = '',
    public sendNotification: string = '',
    public rating: number = 0) { }

}
