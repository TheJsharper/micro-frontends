import { resource } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductsService } from 'projects/products/src/app/services';

export const routes: Routes = [
    {
        path: 'products',
        loadComponent: () => import('@products').then(m => m.AppComponent),
        providers: [
             { provide: 'products', useClass: ProductsService, deps: [resource] },  ]
    },
    {
        path: 'carts',
        loadComponent: () => import('@carts').then(m => m.AppComponent)
    },
    {
        path: 'orders',
        loadComponent: () => import('@orders').then(m => m.AppComponent)
    },
];
