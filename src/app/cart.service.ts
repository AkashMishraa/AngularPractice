import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class CartService {

  items = [];

  addToCart(products){
    this.items.push(products)
  }
  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
  constructor() { }

}