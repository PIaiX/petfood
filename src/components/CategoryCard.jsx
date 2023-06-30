import React from 'react';
import {Link} from 'react-router-dom';
import Replacement from '../assets/imgs/replacement.jpg'

const CategoryCard = () => {
  return (
    <figure className='category-card'>
      <img src={Replacement} alt="Натуральный корм" />
      <figcaption>
        <h4><Link to='/menu' className="stretched-link">Натуральный корм</Link></h4>
      </figcaption>
    </figure>
  );
};

export default CategoryCard;