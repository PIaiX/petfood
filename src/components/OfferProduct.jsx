import React from 'react';
import {Link} from 'react-router-dom';
import { IoChevronDownOutline } from "react-icons/io5";
import useIsMobile from '../hooks/isMobile';

const OfferProduct = () => {
  const isMobileLG = useIsMobile('991px');
  const isMobileSM = useIsMobile('575px');

  return (
    <div className="offer-product">
      <Link to='/catalog/category/product' className="offer-product-img">
        <img src="imgs/img3.png" alt="Микс-обед «Для настоящих хищников»" />
      </Link>
      <div className="offer-product-about">
        <h5 className='mb-2'><Link to='/catalog/category/product'>Микс-обед «Для настоящих хищников»</Link></h5>
        {
          (!isMobileSM) &&
          <p>Состав: Говядина и субпродукты (почки, печень, трахея, семенники и т.п.), субпродукты бараньи, рубец неочищенный, морская сельдь, тыква, кабачо</p>
        }
        {
          (!isMobileLG) &&
          <>
            <button type='button' className='d-flex align-items-center'>
              <span>Показать ещё</span>
              <IoChevronDownOutline className='fs-08 ms-2'/>
            </button>
          </>
        }
      </div>
      <div className="offer-product-price">
        <div className='d-flex flex-column flex-lg-row-reverse justify-content-end align-items-lg-center mb-lg-2'>
          <div className='fw-5 ms-lg-3'>650 ₽</div>
          <div className='gray fs-09 text-decoration-line-through'>650</div>
        </div>
        <button type='button' className='btn-1'>В корзину</button>
        <button type='button' className='d-none d-lg-flex fs-09 mt-2'>в избранное</button>
      </div>
    </div>
  );
};

export default OfferProduct;