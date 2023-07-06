import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineShoppingBag, HiOutlineMapPin, HiOutlineStar, HiOutlineCreditCard, HiOutlineBellAlert, HiOutlineBolt, HiOutlineLifebuoy } from "react-icons/hi2";
import CartIcon from '../../components/svgs/CartIcon';

const AccountMenu = (props) => {
  return (
    <nav className='account-nav'>
      <ul>
        <li>
          <NavLink to="orders">
            <CartIcon/>
            <div>Заказы</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="addresses">
            <HiOutlineMapPin/>
            <div>Адреса</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="bonus">
            <HiOutlineStar/>
            <div>Бонусы</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="support">
            <HiOutlineLifebuoy/>
            <div>Тех. подержка</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="notifications">
            <HiOutlineBellAlert/>
            <div>Уведомления</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="offers">
            <HiOutlineBolt/>
            <div>Акции</div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AccountMenu;