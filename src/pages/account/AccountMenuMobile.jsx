import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiOutlineShoppingBag, HiOutlineMapPin, HiOutlineStar, HiOutlineCreditCard, HiOutlineBellAlert, HiOutlineBolt, HiOutlineLifebuoy } from "react-icons/hi2";
import SettingsIcon from '../../components/svgs/SettingsIcon';
import IconDog from '../../components/svgs/IconDog';

const AccountMenu = (props) => {
  return (
    <div className='account-menu'>
      <div className="account-top-user box mb-4">
        <div className='p-3 d-flex align-items-center justify-content-between'>
          <div>
            <div className='fs-13 d-flex align-items-center'>
              <span className="fw-5">Элли</span>
              <span className='color-2 fs-08 mx-2'>●</span>
              <a href="tel:+79198563658">+7 919 856-36-58</a>
            </div>
            <div className='fs-13 mt-1 dark-gray'>
              <a href="mailto:GreatOZ@mail.com">GreatOZ@mail.com</a>
            </div>
          </div>
          <Link to='/account/settings' className='dark-gray ms-4'>
            <SettingsIcon/>
          </Link>
        </div>
        <hr />
        <div className='p-3 d-flex align-items-center justify-content-start'>
          <div className="pet-icon">
            <IconDog/>
          </div>
          <div className='fs-13 ms-3'>
            <h5 className='fs-10 fw-5 mb-1'>Тотошка</h5>
            <div>
              <span>5 лет</span>
              <span className='fs-08 color-2 mx-2'>●</span>
              <span>15 кг</span>
            </div>
          </div>
        </div>
      </div>
      <ul className='list-unstyled row row-cols-3 gx-2 gx-sm-3 gx-md-4 mb-3'>
        <li>
          <div className="box main-color text-center p-2 p-sm-3 h-100">
            <div className='fs-18 mb-sm-1'>1002</div>
            <div className='fw-6'>Бонуса</div>
          </div>
        </li>
        <li>
          <NavLink to="orders" className="box-blue d-flex flex-column align-items-center justify-content-center p-2 p-sm-3 h-100">
            <HiOutlineShoppingBag className='main-color fs-18 mb-1 mb-sm-2'/>
            <div className='main-color fw-6'>Заказы</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="addresses" className="box-blue d-flex flex-column align-items-center justify-content-center p-2 p-sm-3 h-100">
            <HiOutlineMapPin className='main-color fs-18 mb-1 mb-sm-2'/>
            <div className='main-color fw-6'>Адреса</div>
          </NavLink>
        </li>
      </ul>
      <div className="gradient-block mb-3"></div>
      <nav className='mb-3'>
        <ul>
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
          <li>
            <NavLink to="bonus">
              <HiOutlineStar/>
              <div>Бонусная программа</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="payment">
              <HiOutlineCreditCard/>
              <div>Способы оплаты</div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Link to="support" className='btn-22 fs-12 w-100 rounded-3'>
        <HiOutlineLifebuoy className='fs-15 me-2'/>
        <div>Тех. подержка</div>
      </Link>
    </div>
  );
};

export default AccountMenu;