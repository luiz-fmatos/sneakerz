export class Sneaker {
  public name: string;
  public image: string;
  public description: string;
  public price: number;

  constructor(name: string, image: string, description: string, price: number) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
  }
}

export class Card {
  public name: string;
  public image: string;
  public description: string;

  constructor(name: string, image: string, description: string) {
    this.name = name;
    this.image = image;
    this.description = description;
  }
}
