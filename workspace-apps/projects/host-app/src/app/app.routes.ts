import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'products',
        loadComponent: () => import('@products').then(m => m.AppComponent)
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
