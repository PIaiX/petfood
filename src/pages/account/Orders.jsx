import React from 'react';
import OrderCard from '../../components/OrderCard';
import useIsMobile from '../../hooks/isMobile';
import NavPaginationMini from '../../components/NavPaginationMini';
import ReturnLink from '../../components/utils/ReturnLink';

const Orders = () => {
  const isMobileLG = useIsMobile('991px');

  return (
    <section className='sec-orders'>
      {
        (isMobileLG)
        ? <div className="d-flex align-items-center mb-4">
          <ReturnLink link="/account" className="mb-0"/>
          <h3 className='ms-3 mb-0'>Заказы</h3>
        </div>
        : <div className="order-card top">
          <div className='order-card-num'>№</div>
          <div className='order-card-time'>Время заказа</div>
          <div className='order-card-status'>Статус</div>
          <div className='order-card-delivery'>Способ доставки</div>
          <div className='order-card-price'>Стоимость</div>
          <div className='order-card-btn'></div>
        </div>
      }
      
      <ul className='row row-cols-1 row-cols-sm-2 row-cols-lg-1 gy-3 gx-2 g-md-4 g-lg-0'>
        <li><OrderCard/></li>
        <li><OrderCard/></li>
        <li><OrderCard/></li>
        <li><OrderCard/></li>
      </ul>
      
      <NavPaginationMini/>
    </section>
  );
};

export default Orders;