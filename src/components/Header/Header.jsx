import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes, carefully prepared to please every palate and craving, ensuring a delightful dining experience for all. </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
