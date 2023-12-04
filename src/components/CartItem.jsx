import React, { memo, useState } from 'react';
import BtnFav from './utils/BtnFav';
import { IoCaretDownOutline } from "react-icons/io5";
import CountInput from './utils/CountInput';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Collapse from "react-bootstrap/Collapse";
import { customPrice, getImageURL } from "../helpers/all";
import { useSelector } from "react-redux";

const CartItem = memo(({ data }) => {
  const [open, setOpen] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const price = data?.cart?.data?.modifiers?.price
    ? data.cart.data.modifiers.price
    : data.price;

  return (
    <div className='cart-item'>
      <div className="left">
        <input type="checkbox" className='me-1 me-sm-3'/>
        <img src={getImageURL({ path: data.medias })} alt={data.title} />
        <div className='text'>
          <h5>
            {data.title} 
            {/* <span className="tag">Подарок</span> */}
          </h5>
          {data?.description && (
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>{data.description}</Tooltip>}
            >
              <p className="consist">{data.description}</p>
            </OverlayTrigger>
          )}

          {data?.cart?.data?.additions?.length > 0 && (
            <>
              <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className="d-flex align-items-center"
              >
                <span>Показать ещё</span>
                <IoCaretDownOutline className="fs-08 ms-2" />
              </button>
              <Collapse in={open}>
                <ul className="cart-item-ingredients">
                  {data.cart.data.additions.map((e) => (
                    <li>
                      {e.title} +{customPrice(e.price)}
                    </li>
                  ))}
                </ul>
              </Collapse>
            </>
          )}
        </div>
      </div>
      <div className="right">
        <div className='fw-5'>{customPrice(price)}</div>
        <CountInput className="my-2" dis={false}/>
        {isAuth && <BtnFav checked={false} />}
      </div>
    </div>
  );
});

export default CartItem;