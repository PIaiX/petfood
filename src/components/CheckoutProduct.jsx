import React, { memo } from 'react';
import { customPrice, getImageURL } from "../helpers/all";

const CheckoutProduct = memo(({ data }) => {
  const price = data?.cart?.data?.modifiers?.price
    ? data.cart.data.modifiers.price
    : data.price;

  return (
    <div className='checkoutProduct'>
      <img src={getImageURL({ path: data.medias })} alt={data.title}/>
      <div className='flex-1'>
        <h6 className='fs-10'>{data.title}</h6>
        <div className='d-flex justify-content-end align-items-center'>
          <p className='fw-5'>{customPrice(price)}</p>
          <p className='checkoutProduct-count'>х{data?.cart?.count ?? 1}</p>
        </div>
      </div>
    </div>
  );
});

export default CheckoutProduct;