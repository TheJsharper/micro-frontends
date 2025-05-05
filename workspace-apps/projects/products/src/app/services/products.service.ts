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

  private _productsCarts: WritableSignal<Product[]>;

  private _orders: WritableSignal<Product[]> = signal([]);
  
  
  get orders(): WritableSignal<Product[]> {
    return this._orders;
  }

  get productsCarts(): WritableSignal<Product[]> {
    return this._productsCarts;
  }

  constructor() {
     this._productsCarts = signal([]);
    this._orders = signal([]);
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
        console.log('the product already exists in the cart', product);
        return carts
      } else {    
        console.log('Product added to cart:', product);
        return [...carts, product];
      }
    });
  }



  removeFromCart(item: Product): void {
    this._productsCarts.update((carts) => {
      const existingProduct = carts.find((product) => product.id === item.id);
      if (existingProduct) {
        console.log('the product already exists in the cart', item);
        return carts.filter((product) => product.id !== item.id);
      } else {
        console.log('Product added to cart:', item);
        return [...carts];
      }
    });
  }
  removeFromOrders(item: Product): void {
    this._orders.update((orders) => {
      const existingProduct = orders.find((product) => product.id === item.id);
      if (existingProduct) {
        console.log('the product already exists in the orders', item);
        return orders.filter((product) => product.id !== item.id);
      } else {
        console.log('Product added to orders:', item);
        return [...orders];
      }
    });
  }

  addToOrders(product: Product) {
    this._orders.update((orders) => {
      const existingProduct = orders.find((item) => item.id === product.id);
      if (existingProduct) {
        console.log('the product already exists in the orders', product);
        return orders
      } else {    
        console.log('Product added to orders:', product);
        return [...orders, product];
      }
    });
  }
  
  searchProducts(term: string, url:string): void {
    console.log(`Searching products with term: ${term} ==>x> ${url}`);
    if(url.includes('products')) {
      this.userResource.update((products) => {
        return products?.filter((product) =>
          product.title.toLowerCase().includes(term.toLowerCase())
        );
      })
    }
  }
}


