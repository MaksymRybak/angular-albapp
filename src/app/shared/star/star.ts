export class StarEvent {
  private starCount: number;
  private message!: string;

  constructor(count: number, msg: string) {
    this.starCount = count;
    this.message = msg;
  }

  getMessage(): string {
    return this.message;
  }
}
