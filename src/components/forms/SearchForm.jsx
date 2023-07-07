import React from 'react';
import { PiMagnifyingGlassThin } from "react-icons/pi";
import {Link} from 'react-router-dom';

const SearchForm = () => {
  return (
    <div className='mobile-search'>
      <form className='form-search d-none d-xl-flex'>
        <input type="search" placeholder='Найти'/>
        {/* <button type='submit'>
          <PiMagnifyingGlassThin className="fs-12"/>
        </button> */}
        <Link to='/search'>
          <PiMagnifyingGlassThin className="fs-12"/>
        </Link>
      </form>
      {/* <button type='button' className='mobile-search-btn d-xl-none'>
        <PiMagnifyingGlassThin/>
      </button> */}
      <Link to='/search' className='mobile-search-btn d-xl-none'>
        <PiMagnifyingGlassThin/>
      </Link>
    </div>
  );
};

export default SearchForm;