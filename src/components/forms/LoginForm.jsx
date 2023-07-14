import React from 'react';
import {Link} from 'react-router-dom';
import InputPassword from '../utils/InputPassword';
import Paw from '../svgs/Paw';
import Dogs from '../../assets/imgs/dogs.jpg';

const LoginForm = () => {
  return (
    <form action="" className='login-form'>
      <h3 className='main-color text-start fw-6'>С возвращением!</h3>
      <p className='fs-11 mb-4 mb-lg-5'>Мы скучали по тебе :)</p>
      <img src={Dogs} alt="dogs" className='d-block d-lg-none w-100 rounded-4 mb-4'/>
      <div className="input-labeled mb-4">
        <span>Email</span>
        <input type="email" placeholder='Email'/>
      </div>
      <div className="input-labeled">
        <span>Пароль</span>
        <InputPassword/>
      </div>
      {/* <button type='submit' className='btn-1 mt-4 mx-auto'>Войти</button> */}
      <Link to='/account' className='btn-1 w-md-100 mt-4'>
        <span className='me-2'>Войти</span>
        <Paw/>
      </Link>
    </form>
  );
};

export default LoginForm;