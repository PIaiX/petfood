import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CheckoutProduct from '../components/CheckoutProduct';
import {Link} from 'react-router-dom';
import ReturnLink from '../components/utils/ReturnLink';

const Checkout = () => {
  const [isDelivery, setIsDelivery] = useState(false);

  return (
    <main className='inner'>
      <Container>
        <div className="d-flex align-items-center mb-4 mb-xl-5">
          <ReturnLink link="/cart" className="mb-0"/>
          <h1 className='text-start ms-4 mb-0'>Оформление заказа</h1>
        </div>
        <form className='cart mb-6'>
          <Row className='g-4 g-xxl-5'>
            <Col xs={12} md={6} lg={7} xl={8}>
              <Row xs={1} xl={3} className='align-items-end g-3 mb-4 mb-xl-5'>
                <Col>
                  <div className="input-labeled">
                    <span>Получатель</span>
                    <input type="text" placeholder='Имя' />
                  </div>
                </Col>
                <Col>
                  <div className="input-labeled">
                    <span>Номер телефона</span>
                    <input type="tel" placeholder='+7- ___-___-__-__' />
                  </div>
                </Col>
                <Col>
                  <p className="fs-09 fw-5">Способ получения</p>
                  <ul className='inputGroup fs-09'>
                    <li>
                      <label>
                        <input type="radio" name='param1' onClick={()=>setIsDelivery(true)}/>
                        <div className='text'>Доставка</div>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="radio" defaultChecked={true} name='param1' onClick={()=>setIsDelivery(false)}/>
                        <div className='text'>Самовывоз</div>
                      </label>
                    </li>
                  </ul>
                </Col>
              </Row>
              {
                (isDelivery)
                ? <Row xs={1} xl={2} className='g-3 mb-5'>
                    <Col>
                      <div className="input-labeled">
                        <span>Улица</span>
                        <input type="text" placeholder='Улица' />
                      </div>
                    </Col>
                    <Col>
                      <Row xs={3} className='gx-2 gx-sm-3'>
                        <Col>
                          <div className="input-labeled">
                            <span>Дом</span>
                            <input type="text" placeholder='0' />
                          </div>
                        </Col>
                        <Col>
                          <div className="input-labeled">
                            <span>Корпус</span>
                            <input type="text" placeholder='0' />
                          </div>
                        </Col>
                        <Col>
                          <div className="input-labeled">
                            <span>Подъезд</span>
                            <input type="text" placeholder='0' />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row xs={3} className='gx-2 gx-sm-3'>
                        <Col>
                          <div className="input-labeled">
                            <span>Этаж</span>
                            <input type="text" placeholder='0' />
                          </div>
                        </Col>
                        <Col>
                          <div className="input-labeled">
                            <span>Квартира</span>
                            <input type="text" placeholder='0' />
                          </div>
                        </Col>
                        <Col>
                          <div className="input-labeled">
                            <span>Домофон</span>
                            <input type="text" placeholder='0' />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                : <Row xs={1} xl={2} className='g-4 g-xxl-5 mb-5'>
                  <Col>
                    <label className='mb-4'>
                      <input type="radio" name='address' defaultChecked={true}/>
                      <span>улица А. Губкина, д. 17</span>
                    </label>
                    <p className="fs-09 color-2 mb-2">Режим работы</p>
                    <p className="fs-09">
                      С 10:00 до 16:00 понедельник-пятница.
                      <br/>Суббота,воскресенье-выходные
                    </p>
                  </Col>
                  <Col>
                    <label className='mb-4'>
                      <input type="radio" name='address'/>
                      <span>Проспект Победы 156/26</span>
                    </label>
                    <p className="fs-09 color-2 mb-2">Режим работы</p>
                    <p className="fs-09">
                      С 10:00 до 16:00 понедельник-пятница.
                      <br/>Суббота,воскресенье-выходные
                    </p>
                  </Col>
                </Row>
              }
              
              <div className="box-gray">
                <h5>Ваш заказ</h5>
                <ul className='list-unstyled'>
                  <li className='mb-3'><CheckoutProduct/></li>
                  <li className='mb-3'><CheckoutProduct/></li>
                  <li className='mb-3'><CheckoutProduct/></li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6} lg={5} xl={4}>
              <div className="cart-box">
                <div className='mb-2'>Комментарий к заказу</div>
                <textarea rows="3" defaultValue={'Перезвоните пожалуйста, уточню детали'} className='mb-4'></textarea>

                <div className="d-flex justify-content-between my-2">
                  <span>Стоимость товаров</span>
                  <span>20 960 ₽</span>
                </div>
                <div className="d-flex justify-content-between my-2">
                  <span>Доставка</span>
                  <span className='main-color fw-5'>бесплатно</span>
                </div>
                <hr className='my-3'/>
                <div className="fs-11 fw-5 d-flex justify-content-between mb-4">
                  <span>Итоговая сумма</span>
                  <span>20 960 ₽</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className='bg-lightgreen green p-2 fs-09 fw-5 rounded-3'>Доступно 354 бонуса</div>
                  <label>
                    <span className='me-1'>Списать</span>
                    <input type="checkbox" role="switch"/>
                  </label>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <input type="text" placeholder='0' defaultValue={300} className='w-100p py-2 px-3'/>
                  <button type='button' className='btn-10 fs-09 ms-2'>списать все бонусы</button>
                </div>

                <div className="priceFixed">
                  <div className='d-md-none'>
                    <div className="fs-12">20 960 ₽</div>
                    <div className='fs-09 dark-gray'>● 5 товаров</div>
                  </div>
                  <Link to='accepted' className='btn-2 mt-md-3 w-100 flex-1 ms-2 ms-sm-4 ms-md-0'>
                    <span className='fw-4'>Заказать</span>
                  </Link>
                </div>
                
                <div className='fw-5 fs-09 w-100 rounded-3 color-1-light-bg main-color p-2 mt-3'>34 бонуса будут начислены за этот заказ</div>
              </div>
            </Col>
          </Row>
        </form>
        {/* <form className='cart'>
          <Row className='g-4 g-xxl-5'>
            <Col xs={12} md={6} xl={8}>
              <Row xs={1} xl={2} className='g-4 g-xxl-5'>
                <Col>
                  <div className='mb-2'>Получатель</div>
                  <input type="text" placeholder='Введите имя' className='mb-4'/>

                  <div className='mb-2'>Номер телефона</div>
                  <input type="tel" placeholder='+7–___–___–__–__' className='mb-4'/>

                  <div className="d-flex align-items-center justify-content-between my-4 my-xl-5">
                    <p>Количество персон</p>
                    <CountInput dis={false} />
                  </div>
                  
                  <div className="d-flex align-items-center justify-content-between">
                    <div className='btn-green w-auto fw-6 rounded-3'>Доступно 344 бонуса</div>
                    <label>
                      <span className='me-1 me-sm-3'>Списать</span>
                      <input type="checkbox" role="switch" />
                    </label>
                  </div>
                </Col>
                <Col>
                  <div className='mb-2'>Улица</div>
                  <input type="text" placeholder='Улица' className='mb-4'/>
                  <Row xs={3} className='gx-2 gx-sm-4'>
                    <Col>
                      <div className='mb-2'>Дом</div>
                      <input type="text" className='mb-4'/>
                    </Col>
                    <Col>
                      <div className='mb-2'>Корпус</div>
                      <input type="text" className='mb-4'/>
                    </Col>
                    <Col>
                      <div className='mb-2'>Подъезд</div>
                      <input type="text" className='mb-4'/>
                    </Col>
                    <Col>
                      <div className='mb-2'>Этаж</div>
                      <input type="text" className='mb-4'/>
                    </Col>
                    <Col>
                      <div className='mb-2'>Квартира</div>
                      <input type="text" className='mb-4'/>
                    </Col>
                    <Col>
                      <div className='mb-2'>Домофон</div>
                      <input type="text" className='mb-4'/>
                    </Col>
                  </Row>
                  <div className="d-flex">
                    <input type="text" placeholder='Количество бонусов для списания'/>
                    <button type='button' className='btn-10 ms-2 ms-sm-4'>Все</button>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6} xl={4}>
              <div className="cart-box mb-4">
                <h6>Ваш заказ</h6>
                <ul className='list-unstyled'>
                  <li className='mb-3'><CheckoutProduct/></li>
                  <li className='mb-3'><CheckoutProduct/></li>
                  <li className='mb-3'><CheckoutProduct/></li>
                </ul>
              </div>

              <div className="d-flex justify-content-between my-2">
                <span>Стоимость товаров</span>
                <span>1 880 ₽</span>
              </div>
              <div className="d-flex justify-content-between my-2">
                <span>Доставка</span>
                <span className='main-color'>бесплатно</span>
              </div>
              <hr className='my-3'/>
              <div className="d-flex justify-content-between mb-4">
                <span className='fw-6 fs-11'>Итоговая сумма</span>
                <span className='fw-6'>1 880 ₽</span>
              </div>

              <div className='btn-6 fw-6 w-100 rounded-3 mt-3'>34 бонуса будут начислены за этот заказ</div>
              <button type='submit' className='btn-3 mt-3 w-100'>
                <span className='fw-4'>Заказать</span>
              </button>
            </Col>
          </Row>
        </form> */}
      </Container>
    </main>
  );
};

export default Checkout;