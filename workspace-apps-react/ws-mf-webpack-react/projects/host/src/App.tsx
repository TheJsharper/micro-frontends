import React from 'react';
import './styles.css';
import logo from './logo.png';
import svg from './react.svg';

const ProductsApp = React.lazy(() => import('products/Products').then((module) => ({ default: module.App })));

const OrdersApp = React.lazy(() => import('orders/Orders').then((module) => ({ default: module.App })));

const CartsApp = React.lazy(() => import('carts/Carts').then((module) => ({ default: module.App })));

export const App = () => {
  return (
    <div className='app-container'>
      <div>
        <h1>React Host App  </h1>
        <img src={logo} alt="Placeholder"  width="50" height="50"/>
        <img src={svg} alt="Placeholder"  width="50" height="50"/>
        <p>Welcome to the React template!</p>
        <React.Suspense fallback={<div>Loading...</div>}>
          <ProductsApp />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <OrdersApp />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <CartsApp />
        </React.Suspense>
      </div>
    </div>
  );
}