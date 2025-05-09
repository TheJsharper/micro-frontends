import React from 'react';
import './styles.scss';
import logo from './logo.png';
import svg from './react.svg';
import * as bootstrap from 'bootstrap'

const ProductsApp = React.lazy(() => import('products/Products').then((module) => ({ default: module.App })));

const OrdersApp = React.lazy(() => import('orders/Orders').then((module) => ({ default: module.App })));

const CartsApp = React.lazy(() => import('carts/Carts').then((module) => ({ default: module.App })));

export const App = () => {
  return (
    <div className='app-container'>
      <div>
        <h1>React Host App  </h1>
        <img src={logo} alt="Placeholder" width="50" height="50" />
        <img src={svg} alt="Placeholder" width="50" height="50" />
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

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" ></textarea>
        </div>

      </div>
    </div>
  );
}