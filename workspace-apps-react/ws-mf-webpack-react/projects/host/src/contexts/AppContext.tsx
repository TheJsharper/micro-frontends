import React, { useState } from 'react';
import { AppProviderProps } from './models';
import { AppContext } from '../hooks/app-context';
/*
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
  */

// Define the shape of the context data


// Create the context with a default value


// Create a provider component

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
