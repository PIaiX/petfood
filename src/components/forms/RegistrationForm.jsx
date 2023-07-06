import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Paw from '../svgs/Paw';

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

      <p className="main-color fs-09">Нажимая на кнопку «Зарегистрироваться», вы принимаете условия Пользовательского соглашения и соглашаетесь с Политикой конфиденциальности</p>
      <button type='submit' disabled className='btn-1 w-md-100 rounded-3 mt-4'>Зарегистрироваться</button>
    </form>
  );
};

export default RegistrationForm;