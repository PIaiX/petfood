import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import useIsMobile from '../hooks/isMobile';
import ReturnLink from '../components/utils/ReturnLink';
import Phone from '../components/svgs/Phone';
import WhatsApp from '../components/svgs/WhatsApp';

const Contacts = () => {
  const isMobileMD = useIsMobile('767px');

  return (
    <main className='inner'>
      <section className="sec-7 mb-3 mb-lg-5">
        <Container>
          {
            (isMobileMD) &&
            <ReturnLink/>
          }
          <Row className='gx-4 gxlg-5'>
            <Col xs={12} md={4}>
              {
                (isMobileMD)
                ? <h1 className='inner'>ООО&nbsp;«Мясо в&nbsp;миску», г.&nbsp;Казань</h1>
                : <>
                <h1 className='inner'>Контакты </h1>
                <h5 className='fs-11 mb-3'>ООО «Мясо в миску», г. Казань</h5>
                <p className='mb-3'>
                  <a href="tel:+79879877878" className='d-xl-flex'>
                    <div>
                    <HiOutlineDevicePhoneMobile className='fs-15 main-color'/>
                    <span className='fs-11 ms-2 main-color'>Горячая линия</span>
                    </div>
                    <div className='fs-11 ms-2'>+7 987 987-78-78</div>
                  </a>
                </p>
                <button type='button' className='btn-2'>Заказать звонок</button>
                </>
              }
              
              <div className="box mt-4">
                <h5>Советский район</h5>
                <ul>
                  <li>
                    <address>А. Губкина, 17 </address>
                    <p className='main-color'>Доставка и самовывоз</p>
                    <p>9:00-21:00 без выходных</p>
                    {
                      (isMobileMD) &&
                      <button type='button' className='btn-lightgreen w-100 rounded-2 mt-2'>Посмотреть на карте</button>
                    }
                  </li>
                  <li> 
                    <address>Пр. Победы 156/26</address>
                    <p className='main-color'>Доставка и самовывоз</p>
                    <p>10:00-16:00 понедельник-пятница. <br/>Суббота,воскресенье выходные</p>
                    {
                      (isMobileMD) &&
                      <button type='button' className='btn-lightgreen w-100 rounded-2 mt-2'>Посмотреть на карте</button>
                    }
                  </li>
                </ul>
              </div>
            </Col>
            {
              (isMobileMD)
              ? <Col xs={12}>
                <a href='tel:+79879877878' className='justify-content-start btn-11 rounded-2 w-100 fs-12 mt-4'>
                  <Phone className="fs-15"/>
                  <span className='ms-2'>Позвонить</span>
                </a>
                <a href='/' className='justify-content-start btn-black rounded-2 w-100 fs-12 mt-2'>
                  <WhatsApp className="fs-15"/>
                  <span className='ms-2'>Написать в WhatsApp</span>
                </a>
              </Col>
              : <Col md={8}>
                <div className="map">
                  <img src="imgs/map.jpg" alt="map" />
                </div>
              </Col>
            }
          </Row>
        </Container>
      </section>
      
    </main>
  );
};

export default Contacts;