import React from 'react';
import { HiChevronLeft, HiChevronRight, HiOutlineArrowPath } from "react-icons/hi2";
import useIsMobile from '../hooks/isMobile';

const NavPaginationMini = () => {
  const mobileLG = useIsMobile('991px');

  return (
    <div className='pagination mini'>
      {
        (mobileLG)
        ? <button type='button' className='fs-12 fw-5 d-flex align-items-center'>
          <span className='me-2'>Загрузить ещё</span>
          <HiOutlineArrowPath className='fs-15'/>
        </button>
        : <>
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
          <span className='mx-4'>6–10 из 11</span>
          <button type='button' className='p-2'>
            <HiChevronLeft/>
          </button>
          <button type='button' className='p-2 ms-2'>
            <HiChevronRight/>
          </button>
        </>
      }
      
    </div>
  );
};

export default NavPaginationMini;