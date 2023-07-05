import React from 'react';
import {Link} from 'react-router-dom';
import Replacement from '../assets/imgs/replacement.jpg';

const ProductCardMini = () => {
  return (
    <figure className="product-card-mini">
      <Link to='/catalog/category/product'>
        <img src={Replacement} alt="Ролл «Филадельфия»" />
      </Link>
      <figcaption>
        <h5><Link to='/catalog/category/product'>Ролл «Филадельфия»</Link></h5>
        <div className="d-flex justify-content-between align-items-center">
          <p className='fw-5'>340 ₽</p>
          <button type='button' className='btn-11'>В корзину</button>
        </div>
      </figcaption>
    </figure>
  );
};

export default ProductCardMini;