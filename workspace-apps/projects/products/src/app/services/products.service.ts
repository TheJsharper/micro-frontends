import { computed, Injectable, resource, Signal, signal, WritableSignal } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}

export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface Rating {
  rate: number;
  count: number;
}


@Injectable()
export class ProductsService {

  private baseUrl = 'https://fakestoreapi.com/products';

  private _productsCarts: WritableSignal<Product[]>;

  private _orders: WritableSignal<Product[]>;
  
  private _productsCopy?: Signal<Product[] | undefined>;
  
  private _ordersCopry: WritableSignal<Product[]>;

  private _productsCartsCopy: WritableSignal<Product[]>;

  get orders(): WritableSignal<Product[]> {
    return this._orders;
  }

  get productsCarts(): WritableSignal<Product[]> {
    return this._productsCarts;
  }

  constructor() {
    this._productsCarts = signal([]);
    this._orders = signal([]);
    this._ordersCopry = signal([]);
    this._productsCartsCopy = signal([]);

  }


  userResource = resource<Array<Product>, unknown>({
    loader: async () => {
      const response = await fetch(`${this.baseUrl}`);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      this._productsCopy = signal(data);
      return data;
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
    this._productsCartsCopy.set(this._productsCarts());
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
    this._productsCartsCopy.set(this._productsCarts());
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
    this._ordersCopry.set(this._orders());
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
    this._ordersCopry.set(this._orders());
  }

  searchProducts(term: string, url: string): void {
    if (this._productsCopy !== undefined) {
      let list = this._productsCopy();
      this.userResource.set(list);
    }
    this._productsCarts.set(this._productsCartsCopy());
    this._orders.set(this._ordersCopry());
    if (url.includes('products')) {
      this.userResource.update((products) => {
        return products?.filter((product) =>
          product.title.toLowerCase().includes(term.toLowerCase())
        );
      })
    } else if (url.includes('orders')) {
      this._orders.update((products) => {
        return products?.filter((product) =>
          product.title.toLowerCase().includes(term.toLowerCase())
        );
      })
    } else if (url.includes('cart')) {
      this._productsCarts.update((products) => {
        return products?.filter((product) =>
          product.title.toLowerCase().includes(term.toLowerCase())
        );
      })
    }
  }
}


