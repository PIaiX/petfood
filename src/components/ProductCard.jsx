import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { HiOutlineShoppingBag, HiOutlineHeart } from "react-icons/hi2";
import Fish from '../assets/imgs/fish.png';
import Halal from '../assets/imgs/halal.png';
// import Chicken from '../assets/imgs/chicken.png';
// import Meat from '../assets/imgs/meat.png';
// import Spicy from '../assets/imgs/pepper.png';
// import Vegetarian from '../assets/imgs/vegetarian.png';
import useIsMobile from '../hooks/isMobile';

const ProductCard = () => {
  const [isFav, setIsFav] = useState(false);
  const isMobileMD = useIsMobile('767px');

  return (
    <div className="product">
      <div className="product-img">
        <Link to='/catalog/product'>
          <img src="imgs/img3.png" alt="Сухой корм для собак Grandorf Lamb&Turkey Adult Med&Maxi с ягнёнком и индейкой"/>
        </Link>
        <button 
          type='button' 
          onClick={()=>setIsFav(!isFav)} 
          className={(isFav) ? 'btn-fav active' : 'btn-fav'}
        >
          <HiOutlineHeart/>
        </button>
      </div>
      
      <h6>Сухой корм для собак Grandorf Lamb&Turkey Adult Med&Maxi с ягнёнком и индейкой</h6>
      
      <div className='w-xs-100 d-flex justify-content-between align-items-center'>
        <div>
          <div className='fs-11 fw-5'>650 ₽</div>
          <div className='gray fs-09 text-decoration-line-through'> 650 </div>
        </div>
        <button type='button' className='btn-1'>добавить</button>
      </div>
    </div>
  );
};

export default ProductCard;