import React, {useState} from 'react';
import HeartIcon from '../svgs/HeartIcon';

const BtnFav = (props) => {
  const [isFav, setIsFav] = useState(props.checked);

  return (
    <button 
      type='button' 
      onClick={()=>setIsFav(!isFav)} 
      className={(isFav) ? 'btn-fav active' : 'btn-fav'}
    >
      <HeartIcon/>
    </button>
  );
};

export default BtnFav;