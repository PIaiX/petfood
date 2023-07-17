import React from 'react';

const BackArrow = (props) => {
  return (
    <svg title={props.title} className={props.className} width="1em" height="1em" viewBox="0 0 26 26" fill="none" strokeWidth="1.25" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.8576 7.42857L9.28613 13L14.8576 18.5714" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.0001 25.0714C19.667 25.0714 25.0716 19.6669 25.0716 13C25.0716 6.33313 19.667 0.928572 13.0001 0.928572C6.33327 0.928572 0.928711 6.33313 0.928711 13C0.928711 19.6669 6.33327 25.0714 13.0001 25.0714Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default BackArrow;