import React, { memo, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';
import useIsMobile from '../hooks/isMobile';
import Logo from '../assets/imgs/logo.svg';
import MenuPhone from './svgs/MenuPhone';
import MenuDelivery from './svgs/MenuDelivery';
import MenuVacancies from './svgs/MenuVacancies';
import MenuDocs from './svgs/MenuDocs';
import YooApp from './svgs/YooApp';
import Paw from './svgs/Paw';
import SearchForm from './forms/SearchForm';
import CartIcon from './svgs/CartIcon';
import HeartIcon from './svgs/HeartIcon';
import { IoCloseOutline, IoChevronDownOutline } from "react-icons/io5";
import { PiPhoneLight } from "react-icons/pi";
import Dots from './svgs/Dots';
import Replacement from '../assets/imgs/replacement.jpg';

import { useDispatch, useSelector } from "react-redux";
import { getCount, getImageURL } from "../helpers/all";
import { useGetBannersQuery } from "../services/home";
import ScrollToTop from "./ScrollToTop";
import { editDeliveryCheckout } from "../store/reducers/checkoutSlice";


const Header = memo(() => {
  const isMobileMD = useIsMobile('767px');
  const [showMenu, setShowMenu] = useState(false);

  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.items);
  const favorite = useSelector((state) => state.favorite.items);
  const affiliate = useSelector((state) => state.affiliate.items);
  const options = useSelector((state) => state.settings.options);
  const delivery = useSelector((state) => state.checkout.delivery);
  const banners = useGetBannersQuery();
  const dispatch = useDispatch();
  const count = getCount(cart);
  const mainAffiliate =
    affiliate?.length > 0 ? affiliate.find((e) => e.main) : false;

  return (
    <>
      <header>
        <Container className='h-100'>
          <nav className='h-100'>
            <Link to='/'>
              <img src={Logo} alt={options?.title ?? "YOOAPP"} className='logo'/>
            </Link>
            {
              (isMobileMD) 
              ? <button type='button' onClick={()=>setShowMenu(!showMenu)} className='btn-menu'>
                {
                  (showMenu)
                  ? <IoCloseOutline/>
                  : <Dots/>
                }
              </button>
              : <>
                <Link to='/catalog' className='btn-1'>Каталог</Link>
                <ul className='text-menu'>
                  <li>
                    <Link to='/'>О нас</Link>
                  </li>
                  <li className='ms-2 ms-lg-3'>
                    <Link to='/promo'>Акции</Link>
                  </li>
                  <li className='ms-2 ms-lg-3'>
                    <Dropdown>
                      <Dropdown.Toggle as="a">
                        <IoChevronDownOutline className='fs-12'/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <Link to='/'>Видео</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to='/articles'>Новости</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to='/delivery'>Оплата и доставка</Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
                <SearchForm/>

                
                {mainAffiliate && mainAffiliate?.phone[0] && (
                  <a href={"tel:" + mainAffiliate.phone[0]} className='phone'>
                    <span className='d-none d-lg-block'>{mainAffiliate.phone[0]}</span>
                    <PiPhoneLight className='d-lg-none'/>
                  </a>
                )}

                <div className="d-flex align-items-center">
                  <ul className='icons-menu'>
                    <li>
                      <Link to="/cart" className='position-relative'>
                        <CartIcon/>
                        {count > 0 && (
                          <span className="badge">
                            {count}
                          </span>
                        )}
                      </Link>
                    </li>
                    {isAuth && (
                      <li>
                        <Link to="/account/favorites" className="position-relative">
                          <HeartIcon />
                          {favorite?.length > 0 && (
                            <span className="badge">
                              {favorite?.length}
                            </span>
                          )}
                        </Link>
                      </li>
                    )}
                  </ul>
                  <Link to={
                    isAuth
                      ? user?.status === 0
                        ? "/activate"
                        : "/account"
                      : "/login"
                  } className='btn-1 ms-3'>
                    <span>Войти</span>
                    <Paw className="white fs-09 ms-1"/>
                  </Link>
                </div>
              </>
            }
          </nav>
        </Container>
      </header>

      <Offcanvas className="offcanvas-menu" show={showMenu} onHide={()=>setShowMenu(false)} placement={'end'}>
        <Offcanvas.Body>
          <Container className='h-100 px-0' onClick={()=>setShowMenu(false)}>
            <Link to="/promo">
              {banners?.data?.items?.length > 0 && (
                <img
                  src={getImageURL({
                    path: banners.data.items[0].medias,
                    type: "banner",
                    size: "full",
                  })}
                  alt="promo"
                  className="menu-offer"
                />
              )}
            </Link>
            <div className='px-4'>
              <nav>
                <ul>
                  <li>
                    <Link to='/contacts'>
                      <MenuPhone/>
                      <span>Контакты</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/delivery'>
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
                    <Link to='/policy'>
                      <MenuDocs/>
                      <span>Политика конфиденциальности</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <a href="https://yooapp.ru/">
                <p className="gray text-center mt-4 mt-md-5">Разработано на платформе</p>
                <p className='text-center mt-2'><YooApp/></p>
              </a>
            </div>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
});

export default Header;