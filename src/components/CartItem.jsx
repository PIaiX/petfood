import React from 'react';
import BtnFav from './utils/BtnFav';
import { IoCaretDownOutline } from "react-icons/io5";
import CountInput from './utils/CountInput';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const CartItem = () => {
  return (
    <div className='cart-item'>
      <div className="left">
        <input type="checkbox" className='me-1 me-sm-3'/>
        <img src="imgs/img3.png" alt="Пепперони" />
        <div className='text'>
          <h5>Пепперони <span className="tag">Подарок</span></h5>
          <OverlayTrigger
            placement={'bottom'}
            overlay={
              <Tooltip>
                Состав: Говядина и субпродукты (почки, печень, трахея, семенники и т.п.), субпродукты бараньи, рубец неочищенный, морская сельдь, тыква, кабачок…
              </Tooltip>
            }
          >
            <p className='consist'>Состав: Говядина и субпродукты (почки, печень, трахея, семенники и т.п.), субпродукты бараньи, рубец неочищенный, морская сельдь, тыква, кабачок…</p>
          </OverlayTrigger>
          <button type='button' className='d-flex align-items-center'>
            <span>Показать ещё</span>
            <IoCaretDownOutline className='fs-08 ms-2'/>
          </button>
        </div>
      </div>
      <div className="right">
        <div className='fw-5'>640 ₽</div>
        <CountInput className="my-2" dis={false}/>
        <BtnFav checked={false}/>
      </div>
    </div>
  );
};

export default CartItem;