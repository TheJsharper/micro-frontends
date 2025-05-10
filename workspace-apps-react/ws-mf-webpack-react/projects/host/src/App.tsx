import React from 'react';
import { BrowserRouter, Navigate, redirect, Route, Routes } from 'react-router';
import HostNav from './components/Nav';
import './styles.scss';

const ProductsApp = React.lazy(() => import('products/Products').then((module) => ({ default: module.App })));

const OrdersApp = React.lazy(() => import('orders/Orders').then((module) => ({ default: module.App })));

const CartsApp = React.lazy(() => import('carts/Carts').then((module) => ({ default: module.App })));

export const App = () => {
  return (
    <div className=" app-container">
      <BrowserRouter >
        <HostNav />
        <div className='container-fluid'>
          <Routes >
            <Route path="/" element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <ProductsApp />
              </React.Suspense>
            } />
            <Route path="orders" element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <OrdersApp />
              </React.Suspense>
            } />
            <Route path="carts" element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <CartsApp />
              </React.Suspense>
            } />
            <Route path="*" element={ <Navigate replace to="/" /> } />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}