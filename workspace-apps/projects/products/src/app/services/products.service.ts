import { Injectable, resource, signal, WritableSignal } from '@angular/core';

export interface Product {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    Category;
  image:       string;
  rating:      Rating;
}

export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface Rating {
  rate:  number;
  count: number;
}


@Injectable()
export class ProductsService {

  baseUrl = 'https://fakestoreapi.com/products';

  private _productsCarts: WritableSignal<Product[]>; //= signal([]);

  get productsCarts(): WritableSignal<Product[]> {
    return this._productsCarts;
  }

  constructor() {
     this._productsCarts = signal([]);
   }


  userResource = resource<Array<Product>, unknown>({
    loader: async () => {
      const response = await fetch(`${this.baseUrl}`);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return await response.json();
    }
  });
  reloadUsers() {
    this.userResource.reload();
  }

  addToCart(product: Product) {
    this._productsCarts.update((carts) => {
      const existingProduct = carts.find((item) => item.id === product.id);
      if (existingProduct) {
        // If the product already exists in the cart, remove it
        console.log('the product already exists in the cart', product);
        return carts //.filter((item) => item.id !== product.id);
      } else {    
        // If the product doesn't exist in the cart, add it
        console.log('Product added to cart:', product);
        return [...carts, product];
      }
    });
  }
}


