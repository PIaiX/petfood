import React from 'react';
import { HiOutlineTrash } from "react-icons/hi2";

const BankCard = () => {
  return (
    <div className="bankcard">
      <div className="d-flex justify-content-between align-items-center">
        <img src="imgs/tinkoff.jpg" alt="tinkoff" className='bankcard-logo'/>
        <button type='button' className='d-flex'>
          <HiOutlineTrash/>
        </button>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <img src="imgs/visa.jpg" alt="visa" className='bankcard-type'/>
        <div className='bankcard-num'>
          <span className='d-none d-sm-inline'>**** **** ****</span> 
          <span className='d-sm-none'>* * * </span> 
          <span>6789</span>
        </div>
      </div>
    </div>
  );
};

export default BankCard;