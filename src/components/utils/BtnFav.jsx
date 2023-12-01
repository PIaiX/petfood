import React, { memo } from 'react';
import HeartIcon from '../svgs/HeartIcon';
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../services/favorite";

const BtnFav =  memo(({ product }) => {
  const isFavoriteData = useSelector((state) => state.favorite.items);
  const dispatch = useDispatch();

  const isFavorite =
    isFavoriteData?.length > 0 &&
    !!isFavoriteData.find((e) => product.id === e.id);

  return (
    <button 
      type='button' 
      onClick={() => dispatch(toggleFavorite(product))} 
      className={(isFavorite) ? 'btn-fav active' : 'btn-fav'}
    >
      <HeartIcon/>
    </button>
  );
});

export default BtnFav;