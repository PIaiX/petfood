import React, { memo, useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2";
import { customPrice, getImageURL } from "../helpers/all";

const OrderItem = memo(({ data }) => {
  const [showExtra, setShowExtra] = useState(false);
  const price = data?.data?.modifiers?.price
    ? data.data.modifiers.price
    : data.price;

  return (
    <div className='order-item'>
      <img src={getImageURL({ path: data.medias })} alt={data.title} />
      <div className='text'>
        <h5 className='mb-1'>{data.title}</h5>
        <p className='fs-08 dark-gray'>{data.description}</p>
      </div>
      <div className="show" onClick={()=>setShowExtra(!showExtra)}>
        <button type='button' className='d-flex align-items-center'>
          <span>Показать ещё</span>
          {
            (showExtra)
            ? <HiOutlineChevronUp className='ms-2'/>
            : <HiOutlineChevronDown className='ms-2'/>
          }
        </button>
      </div>
      <div className='quantity'>
        <div className="input w-50p py-1 px-2 rounded-4 text-center ms-auto">x{data.count}</div>
      </div>
      <div className='price text-end'>{customPrice(price)}</div>
      {
        (showExtra) &&
        <div className="extra">
          <ul className="cart-item-ingredients">
            {data.cart.data.additions.map((e) => (
              <li>
                {e.title} +{customPrice(e.price)}
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
});

export default OrderItem;