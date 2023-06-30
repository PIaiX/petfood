import React from 'react';
import {Link} from 'react-router-dom';
import { HiOutlineArrowLeftCircle } from "react-icons/hi2";

const NavTop = (props) => {
  return (
    <nav className='navTop'>
      {
        (props.toBack) &&
        <Link to="/" className='navTop-back'>
          <HiOutlineArrowLeftCircle/>
          <span>Назад</span>
        </Link>
      }
      {
        (props.breadcrumbs) &&
        <ul className='navTop-breadcrumbs'>
          <li><Link to='/'>Главная</Link></li>
          <li><Link to='/menu'>Меню</Link></li>
          <li><Link to='/menu'>Пиццы</Link></li>
          <li><Link to='/menu/product'>Четыре сыра</Link></li>
        </ul>
      }
    </nav>
  );
};

export default NavTop;