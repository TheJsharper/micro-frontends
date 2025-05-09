import React from 'react';
import { Link } from 'react-router-dom';

const HostNav: React.FC = () => {
  return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link  className='nav-link' to="/">Products</Link>
        </li>
        <li className="nav-item">
          <Link  className='nav-link' to="/orders">Orders</Link>
        </li>
        <li className='nav-item'>
          <Link  className='nav-link' to="/carts">Carts</Link>
        </li>
      </ul>
  );
};

export default HostNav;