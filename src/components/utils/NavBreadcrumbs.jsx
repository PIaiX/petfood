import React from 'react';
import {Link, useNavigate } from 'react-router-dom';
import Paw from '../svgs/Paw';
import BackArrow from '../svgs/BackArrow';

const NavBreadcrumbs = ({ breadcrumbs = false, className = "" }) => {
  const navigate = useNavigate();
  return (
    breadcrumbs &&
    breadcrumbs?.length > 0 && (
      <nav className={"breadcrumbs " + className}>
        <button onClick={() => navigate(-1)} className='return mb-0'>
          <BackArrow/>
        </button>
        <ul>
          <li>
            <Link to="/">
              <Paw/>
              <span>Главная</span>
            </Link>
          </li>
          {breadcrumbs.map((e) => (
            <li>
              <Link to={e.link}>
                <Paw/>
                <span>{e.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  );
};

export default NavBreadcrumbs;