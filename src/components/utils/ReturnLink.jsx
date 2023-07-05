import React from 'react';
import {Link} from 'react-router-dom';
import { TfiArrowCircleLeft } from "react-icons/tfi";

const ReturnLink = () => {
  return (
    <Link to="/" className='return'>
      <TfiArrowCircleLeft/>
      <span>назад</span>
    </Link>
  );
};

export default ReturnLink;