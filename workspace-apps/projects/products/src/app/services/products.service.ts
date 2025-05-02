import { Injectable, resource, ResourceLoaderParams } from '@angular/core';

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


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = 'https://fakestoreapi.com/products';
  constructor() { }


  userResource = resource({
    loader: async (params:ResourceLoaderParams<Array<Product>>) => {
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
}


