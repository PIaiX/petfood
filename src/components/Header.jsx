import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import useIsMobile from '../hooks/isMobile';

import { HiOutlineArrowLeftCircle } from "react-icons/hi2";
import Logo from '../assets/imgs/logo.svg';
import MenuIcon from './svgs/MenuIcon';
import MenuPhone from './svgs/MenuPhone';
import MenuDelivery from './svgs/MenuDelivery';
import MenuVacancies from './svgs/MenuVacancies';
import MenuDocs from './svgs/MenuDocs';
import { IoCloseOutline, IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import YooApp from './svgs/YooApp';
import Paw from './svgs/Paw';
import SearchForm from './forms/SearchForm';
import CartIcon from './svgs/CartIcon';
import HeartIcon from './svgs/HeartIcon';

const Header = () => {
  const isMobileLG = useIsMobile('991px');
  const [showMenu, setShowMenu] = useState(false);
  const [isContacts, setIsContacts] = useState(false);

  return (
    <>
      <header>
        <Container className='h-100'>
          <nav className='h-100'>
            <Link to='/'><img src={Logo} alt="yoo.app" className='logo'/></Link>
            {
              (!isMobileLG) && 
              <>
                <Link to='/menu' className='btn-1'>Каталог</Link>
                <ul className='text-menu'>
                  <li>
                    <Link to='/'>О нас</Link>
                  </li>
                  <li className='ms-4'>
                    <Link to='/'>Видео</Link>
                  </li>
                </ul>
                <a href="tel:+7987987-78-78" className='phone'>+7 987 987-78-78</a>
              </>
            }

            <SearchForm/>

            <ul className='icons-menu'>
              <li>
                <Link to="/cart" className='position-relative'>
                  <CartIcon/>
                  <span className="badge">2</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <HeartIcon/>
                </Link>
              </li>
            </ul>
            <Link to="/login" className='btn-1'>
              <span>Войти</span>
              <Paw className="white fs-09 ms-1"/>
            </Link>
            <button type='button' onClick={()=>setShowMenu(!showMenu)} className='btn-menu d-none'>
              {
                (showMenu)
                ? <IoCloseOutline/>
                : <MenuIcon/>
              }
            </button>
          </nav>
        </Container>
      </header>

      <Offcanvas className="offcanvas-menu" show={showMenu} onHide={()=>setShowMenu(false)} placement={'end'}>
        <Offcanvas.Body>
          <Container className='h-100'>
            {
              (isContacts)
              ? <div className='h-100 d-flex flex-column justify-content-between'>
                <div>
                  <div className="d-flex mb-4">
                    <button type='button' onClick={()=>setIsContacts(false)} className='main-color-60 fs-12 d-flex align-items-center'>
                      <HiOutlineArrowLeftCircle className='fs-14'/>
                      <span className='ms-1'>Назад</span>
                    </button>
                    <h5 className='flex-1 text-center fs-12 fw-6 mb-0 me-5'>Контакты</h5>
                  </div>
                  <h5 className='fs-12 fw-6 mb-4'>ООО “Вкусные решения”, г. Казань</h5>
                  <div className="box fs-12">
                    <ul className='list-unstyled'>
                      <li className='mb-4'>
                        <h6 className='mb-2'>Авиастроительный</h6>
                        <address className='mb-2'><span className='main-color'>•</span> ул. Белинского, 1</address>
                        <p className='main-color mt-2'>Доставка и самовывоз</p>
                        <p>08:00 — 00:00</p>
                        <p className='main-color mt-2'>Ресторан</p>
                        <p>08:00 — 00:00</p>
                      </li>
                    </ul>
                    <button type='button' className='btn-green rounded w-100'>Посмотреть на карте</button>
                  </div>
                </div>

                <div>
                  <button type='button' className='fs-12 btn-6 w-100 rounded justify-content-start mt-3'>
                    <IoCall className='fs-15 me-2'/>
                    <span>Позвонить</span>
                  </button>
                  <button type='button' className='fs-12 btn-3 w-100 rounded justify-content-start mt-2'>
                    <IoLogoWhatsapp className='fs-15 me-2'/>
                    <span>Написать в WhatsApp</span>
                  </button>
                </div>
              </div>
              : <>
              <img src="imgs/slider-main/slide-1.jpg" alt="Большие пиццы" className='menu-offer'/>
              <nav>
                <ul>
                  <li>
                    <button type='button' onClick={()=>setIsContacts(true)}>
                      <MenuPhone/>
                      <span>Контакты</span>
                    </button>
                  </li>
                  <li>
                    <Link to='/'>
                      <MenuDelivery/>
                      <span>Оплата и доставка</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <MenuVacancies/>
                      <span>Вакансии</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <MenuDocs/>
                      <span>Политика конфиденциальности</span>
                    </Link>
                  </li>
                </ul>
              </nav>

              <p className="gray text-center mt-4 mt-md-5">Разработано на платформе</p>
              <p className='text-center mt-2'><YooApp/></p>
              </>
            }
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;