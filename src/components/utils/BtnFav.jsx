import React, {useState} from 'react';
import { HiOutlineHeart } from "react-icons/hi2";

const BtnFav = (props) => {
  const [isFav, setIsFav] = useState(props.checked);

  return (
    <button 
      type='button' 
      onClick={()=>setIsFav(!isFav)} 
      className={(isFav) ? 'btn-fav active' : 'btn-fav'}
    >
      <HiOutlineHeart/>
    </button>
  );
};

export default BtnFav;