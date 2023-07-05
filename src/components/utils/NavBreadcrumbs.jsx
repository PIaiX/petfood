import React from 'react';
import {Link} from 'react-router-dom';
import Paw from '../svgs/Paw';
import { TfiArrowCircleLeft } from "react-icons/tfi";

const NavBreadcrumbs = () => {
  return (
    <nav className="breadcrumbs">
      <Link to="/" className='return'>
        <TfiArrowCircleLeft/>
      </Link>
      <ul>
        <li>
          <Link to="/">
            <Paw/>
            <span>Главная</span>
          </Link>
        </li>
        <li>
          <Link to="/catalog">
            <Paw/>
            <span>Каталог</span>
          </Link>
        </li>
        <li>
          <Link to="/catalog/category">
            <Paw/>
            <span>Сухой корм</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBreadcrumbs;