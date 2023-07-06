import React from 'react';
import {Link} from 'react-router-dom';

const LoginForm = () => {
  return (
    <form action="" className='login-form'>
      <h3 className='main-color text-start fw-6'>С возвращением!</h3>
      <p className='fs-11 mb-5'>Мы скучали по тебе :)</p>


      <div className="input-labeled">
        <span>Email</span>
        <input type="email" placeholder='Email'/>
      </div>
      {/* <button type='submit' className='btn-1 rounded-3 mt-4 mx-auto'>Войти</button> */}
      <Link to='/account' className='btn-1 w-md-100 rounded-3 mt-4'>Войти</Link>
    </form>
  );
};

export default LoginForm;