import React from 'react';
import logo from './logo.png';
import svg from './react.svg';
import './styles.scss';
import { BrowserRouter, Route, Routes } from 'react-router';
import HostNav from './components/Nav';

const ProductsApp = React.lazy(() => import('products/Products').then((module) => ({ default: module.App })));

const OrdersApp = React.lazy(() => import('orders/Orders').then((module) => ({ default: module.App })));

const CartsApp = React.lazy(() => import('carts/Carts').then((module) => ({ default: module.App })));

export const App = () => {
  return (
    <div className=" app-container">
      <BrowserRouter >
        <HostNav />
        <Routes>
          <Route path="/" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <ProductsApp />
            </React.Suspense>
          } />
          <Route path="about" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <OrdersApp />
            </React.Suspense>
          } />
          <Route path="contact" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <CartsApp />
            </React.Suspense>
          } />
        </Routes>
      </BrowserRouter>

    </div>
  );
}