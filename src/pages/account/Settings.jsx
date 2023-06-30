import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useIsMobile from '../../hooks/isMobile'
import NavBreadcrumbs from '../../components/utils/NavBreadcrumbs';
import AccountTitleReturn from '../../components/AccountTitleReturn';

const Settings = () => {
  const isMobileLG = useIsMobile('991px');
  const isMobileSM = useIsMobile('575px');

  return (
    <main className='account mb-2 mb-sm-3 mb-md-0'>
      <Container className='pt-4 pt-lg-0'>
        {
          (isMobileLG)
          ? <AccountTitleReturn link={'/account'} title={'Внесите изменения'} />
          : <>
            <h1 className='mb-2'>Личный кабинет</h1>
            <NavBreadcrumbs/>  
          </>
        }
        
        <Row className="gx-3 gx-xl-4">
          <Col lg={8}>
            <Row className="g-3 g-xl-4">
              <Col xs={12} sm={6} md={4}>
                <div className="box w-100 d-flex align-items-center p-3 h-100">
                  <div className="icon">
                    <span>A</span>
                  </div>
                  <div>
                    <h6>Алексей</h6>
                    <button className='main-color'>Изменить</button>
                  </div>
                </div>
              </Col>
              {
                (!isMobileSM) &&
                <Col xs={12} sm={6} md={3}>
                  <div className="box p-3 w-100 h-100 d-flex flex-column justify-content-between text-center">
                    <p className='fs-09 fw-6'>Вы можете потратить</p>
                    <p className='main-color'>
                      <span className='fs-18'>102</span>&nbsp;<span className='fw-6 fs-11'>бонуса</span>
                    </p>
                  </div>
                </Col>
              }
              <Col xs={12} md={5}>
                <label className='mb-3'>
                  <span className='me-1 me-sm-3'>Включить пуш-уведомления</span>
                  <input type="checkbox" role="switch" />
                </label>
                <label>
                  <span className='me-1 me-sm-3'>Подписаться на рассылку</span>
                  <input type="checkbox" role="switch" />
                </label>
              </Col>
              <Col xs={12}>
                <div className="box p-3 p-sm-4">
                  <form action="">
                    <h6 className='mb-3'>Внесите изменения</h6>
                    <Row className='fs-11 g-4'>
                      <Col md={4}>
                        <p className='mb-1'>Имя</p>
                        <input type="text" placeholder='Имя' defaultValue={'Алексей'}/>
                      </Col>
                      <Col md={4}>
                        <p className='mb-1'>Фамилия</p>
                        <input type="text" placeholder='Фамилия' defaultValue={'Кошечкин'}/>
                      </Col>
                      <Col md={4}>
                        <p className='mb-1'>Дата рождения</p>
                        <input type="date"/>
                      </Col>
                      <Col md={6}>
                        <p className='mb-1'>Номер</p>
                        <input type="tel" placeholder='+7' defaultValue={'+7 919 856-36-58'}/>
                      </Col>
                      <Col md={6}>
                        <p className='mb-1'>Электронный адрес</p>
                        <input type="email" placeholder='mail@mail.ru' defaultValue={'kot_lesha@mail.com'}/>
                      </Col>
                    </Row>
                    <button type='submit' className='btn-green mt-4'>Сохранить изменения</button>
                  </form>
                </div>
              </Col>
            </Row>
          </Col>
          {
            (!isMobileLG) &&
            <Col lg={4}>
              <div className="gradient-block"></div>
            </Col>
          }
        </Row>
      </Container>
    </main>
  );
};

export default Settings;