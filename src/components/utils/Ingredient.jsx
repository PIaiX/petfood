import React from 'react';

const Ingredient = () => {
  return (
    <div className='ingredient'>
      <img src="imgs/ingredients/olives.jpg" alt="Оливки" className='ingredient-img'/>
      <div className='ingredient-title'>Творожный сыр</div>
      <button type='button' className='btn-11 ingredient-price'>+40&nbsp;₽</button>
    </div>
  );
};

export default Ingredient;