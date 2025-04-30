import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'carts',
        loadComponent: () => import('./carts/carts.component').then(m => m.CartsComponent)
    },
    {
        path: 'orders',
        loadComponent: () => import('./orders/orders.component').then(m => m.OrdersComponent)
    },
    {
        path: 'products',
        loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent)
    }
];
