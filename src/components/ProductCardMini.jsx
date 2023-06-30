import React from 'react';
import {Link} from 'react-router-dom';
import useIsMobile from '../hooks/isMobile';

const ProductCardMini = () => {
  const isMobileLG = useIsMobile('991px');

  return (
    <figure className="product-card-mini">
      <Link to='/menu/product'><img src="imgs/img3.png" alt="Ролл «Филадельфия»" /></Link>
      <figcaption>
        <div>
          <h6><Link to='/menu/product'>Ролл «Филадельфия»</Link></h6>
          {
            (!isMobileLG) &&
            <p className='gray'>240 г</p>
          }
          
        </div>
        <div className="d-flex justify-content-between align-items-center">
          {
            (isMobileLG)
            ? <p className='gray'>240 г</p>
            : <p className='fw-6'>340 ₽</p>
          }
          
          <button type='button' className='btn-3'>
            {
              (isMobileLG)
              ? '340 ₽'
              : 'В корзину'
            }
            </button>
        </div>
      </figcaption>
    </figure>
  );
};

export default ProductCardMini;