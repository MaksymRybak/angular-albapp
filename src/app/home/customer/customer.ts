export class Customer {

  constructor(
    public firstName: string, 
    public lastName: string,
    public email: string = '',
    public sendNotification: string = '',
    public rating: number = 0) { }

}
