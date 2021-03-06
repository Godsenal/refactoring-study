type TItem = {
  price: number;
};

class Order {
  _quantity: number;
  _item: TItem;
  constructor(quantity: number, item: TItem) {
    this._quantity = quantity;
    this._item = item;
  }

  get basePrice() {
    return this._quantity * this._item.price;
  }

  get price() {
    return this.basePrice * this.discountFactor;
  }

  get discountFactor() {
    let discountFactor = 0.98;

    if (this.basePrice > 1000) {
      discountFactor -= 0.03;
    }
    return discountFactor;
  }
}
