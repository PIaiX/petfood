import React from 'react';
import {Link} from 'react-router-dom';
import Replacement from '../assets/imgs/replacement.jpg'

const Offer = (props) => {
  return (
    <figure className='offer'>
      <img src={Replacement} alt={props.title} />
      <figcaption>
        <Link to='/promo/1' className='btn-20'>Подробнее</Link>
      </figcaption>
    </figure>
  );
};

export default Offer;