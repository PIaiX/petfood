import React from 'react';
import { PiMagnifyingGlassThin } from "react-icons/pi";

const SearchForm = () => {
  return (
    <div className='mobile-search'>
      <form className='form-search d-none d-xl-flex'>
        <input type="search" placeholder='Найти'/>
        <button type='submit'>
          <PiMagnifyingGlassThin className="fs-12"/>
        </button>
      </form>
      <button type='button' className='mobile-search-btn'>
        <PiMagnifyingGlassThin/>
      </button>
    </div>
  );
};

export default SearchForm;