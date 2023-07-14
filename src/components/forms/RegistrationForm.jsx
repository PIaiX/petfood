import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Paw from '../svgs/Paw';
import {Link} from 'react-router-dom';
import InputPassword from '../utils/InputPassword';

const RegistrationForm = () => {
  return (
    <form action="" className='registration-form'>
      <h3 className='main-color text-start fw-6'>Привет, друг!</h3>
      <p className='fs-11 mb-5'>Введи данные, чтобы зарегистрироваться</p>
      
      <Row className='gx-3 mb-4'>
        <Col xs={12} lg={7}>
          <div className="input-labeled">
            <span>Имя</span>
            <input type="text" placeholder='Имя'/>
          </div>
        </Col>
      </Row>

      <Row className='align-items-end gx-0 gx-lg-3 mb-4'>
        <Col xs={8} lg={7}>
          <div className="input-labeled">
            <span>Email</span>
            <input type="email" placeholder='Email'/>
          </div>
        </Col>
        <Col xs={4}>
          <button type='button' className='btn-1 w-100 rounded-3'>
            <span className='me-1'>Подтвердить</span>
            <Paw/>
          </button>
        </Col>
      </Row>

      <Row className='gx-3 mb-4'>
        <Col xs={12} lg={7}>
          <div className="input-labeled mb-4">
            <span>Пароль</span>
            <InputPassword/>
          </div>
          <div className="input-labeled">
            <span>Подтверждение пароля</span>
            <InputPassword/>
          </div>
        </Col>
      </Row>

      <p className="main-color fs-08">Нажимая на кнопку «Зарегистрироваться», вы принимаете условия <Link to="/" className='text-decoration-underline'>Пользовательского соглашения</Link> и соглашаетесь с <Link className='text-decoration-underline' to="/">Политикой конфиденциальности</Link></p>
      <button type='submit' disabled className='btn-1 w-md-100 mt-4'>Зарегистрироваться</button>
    </form>
  );
};

export default RegistrationForm;