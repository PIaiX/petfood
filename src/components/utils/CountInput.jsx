import React from 'react';
import { HiPlus, HiMinus } from "react-icons/hi";

const CountInput = (props) => {
  return (
    <div className={(props.dis) ? "countInput disabled "+props.className : "countInput "+props.className}>
      <button type='button'>
        <HiMinus/>
      </button>
      <input type="number" defaultValue={1}/>
      <button type='button'>
        <HiPlus/>
      </button>
    </div>
  );
};

export default CountInput;