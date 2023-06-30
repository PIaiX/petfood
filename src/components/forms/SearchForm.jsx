import React from 'react';
import { PiMagnifyingGlassThin } from "react-icons/pi";

const SearchForm = () => {
  return (
    <form className='form-search'>
      <input type="search" placeholder='Найти'/>
      <button type='submit'>
        <PiMagnifyingGlassThin className="fs-12"/>
      </button>
    </form>
  );
};

export default SearchForm;