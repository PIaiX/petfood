import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Gifts from '../components/utils/Gifts';
import { HiOutlineTrash, HiXMark } from "react-icons/hi2";
import CartItem from '../components/CartItem';
import NavBreadcrumbs from '../components/utils/NavBreadcrumbs';

const Cart = () => {
  return (
    <main className='inner'>
      <Container>
        <section className='mb-6'>
          <NavBreadcrumbs/>
          <form className='cart'>
            <h1 className='text-center text-lg-start'>Вы добавили 3 товара</h1>
            <Row className='g-4 g-xxl-5'>
              <Col xs={12} lg={8}>
                <div className="cart-filter">
                  <label>
                    <input type="checkbox"/>
                    <div className='flex-1 d-flex align-items-cente fs-11 ms-2'>
                      <div className='me-1'>Все</div>
                      <div className='d-none d-sm-inline'>товары</div>
                    </div>
                  </label>
                  <button type='button' className='d-flex align-items-center dark-gray ms-auto'>
                    <HiOutlineTrash className='fs-15 me-1 me-sm-2'/>
                    <span className='d-md-none'>Удалить</span>
                    <span className='d-none d-md-inline fs-11 ms-1'>Удалить выбранные</span>
                  </button>
                  <button type='button' className='btn-9 py-1 ms-4 ms-sm-5'>Очистить</button>
                </div>

                <ul className='list-unstyled'>
                  <li><CartItem/></li>
                  <li><CartItem/></li>
                  <li><CartItem/></li>
                  <li><CartItem/></li>
                </ul>
              </Col>
              <Col xs={12} lg={4}>
                <div class="cart-box">
                  <div className='main-color fs-11 mb-1'>Комментарий</div>
                  <textarea rows="3" defaultValue={'Уберите, пожалуйста, лук'} className='mb-4'></textarea>

                  <div className='fs-11 mb-1'>Промокод</div>
                  <fieldset className='promoCode mb-5'>
                    <input type="text" />
                    <button type='button' className='btn-1'>Применить</button>
                    <button type='button' className='clear'>
                      <HiXMark/>
                    </button>
                  </fieldset>

                  <div className="d-flex justify-content-between my-2">
                    <span>Стоимость товаров</span>
                    <span>1 880 ₽</span>
                  </div>
                  <div className="d-flex justify-content-between my-2">
                    <span>Доставка</span>
                    <span className='main-color'>бесплатно</span>
                  </div>
                  <Gifts/>
                  <hr className='my-3'/>
                  <div className="d-flex justify-content-between mb-5">
                    <span className='fw-6 fs-11'>Итоговая сумма</span>
                    <span className='fw-6'>1 880 ₽</span>
                  </div>

                  <Link to='/checkout' className='btn-2 mt-3 w-100'>
                    <span className='fw-4'>Перейти к оформлению</span>
                  </Link>
                  <div className='fw-5 fs-09 w-100 rounded-3 color-1-light-bg main-color p-2 mt-3'>34 бонуса будут начислены за этот заказ</div>
                </div>
              </Col>
            </Row>
          </form>
        </section>
      </Container>
    </main>
  );
};

export default Cart;