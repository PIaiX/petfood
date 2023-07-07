import React from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronLeft, HiChevronRight, HiOutlineArrowPath } from "react-icons/hi2";
import {Link} from 'react-router-dom';
import useIsMobile from '../hooks/isMobile';

const NavPagination = () => {
  const mobileLG = useIsMobile('991px');

  return (
    <div className='pagination'>
      {
        (mobileLG)
        ? <button type='button' className='fs-12 fw-5 d-flex align-items-center'>
          <span className='me-2'>Загрузить ещё</span>
          <HiOutlineArrowPath className='fs-15'/>
        </button>
        : <>
          <ul>
            <li>
              <button type='button'>
                <HiChevronDoubleLeft/>
              </button>
            </li>
            <li>
              <button type='button'>
                <HiChevronLeft/>
              </button>
            </li>
            <li><Link to="/" className='active'>1</Link></li>
            <li><Link to="/">2</Link></li>
            <li><Link to="/">3</Link></li>
            <li>...</li>
            <li><Link to="/">9</Link></li>
            <li>
              <button type='button'>
                <HiChevronRight/>
              </button>
            </li>
            <li>
              <button type='button'>
                <HiChevronDoubleRight/>
              </button>
            </li>
          </ul>
          <div className="d-flex align-items-center ms-4 ms-xl-5">
            <span className='d-none d-sm-inline me-3'>Перейти на&nbsp;страницу</span>
            <select name="" id="" defaultValue={'1'}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="1">8</option>
              <option value="1">9</option>
            </select>
          </div>
        </>
      }
      
    </div>
  );
};

export default NavPagination;