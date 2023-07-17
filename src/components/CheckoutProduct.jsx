import React from 'react';

const CheckoutProduct = () => {
  return (
    <div className='checkoutProduct'>
      <img src="imgs/img3.png" alt="Микс-обед «Для настоящих хищников»"/>
      <div className='flex-1'>
        <h6 className='fs-10'>Микс-обед «Для настоящих хищников»</h6>
        <div className='d-flex justify-content-end align-items-center'>
          <p className='fw-5'>1 540 ₽</p>
          <p className='checkoutProduct-count'>х1</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;