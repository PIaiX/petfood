import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

// swiper
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCardMini from '../components/ProductCardMini';

const OrderAccepted = () => {
  return (
    <main className='inner'>
      <section className='mb-6'>
        <Container>
          <Row className='align-items-center'>
            <Col xs={12} lg={5}>
              <h1>Заказ № 4567 принят</h1>
              <p>Если у вас остались вопросы вы можете связаться с нашим менеджером</p>
              <div className="d-flex mt-4">
                <button type='button' className='btn-1'>Связаться</button>
                <Link to='/catalog' className='btn-10 ms-3'>Продолжить покупки</Link>
              </div>
            </Col>
            <Col xs={12} lg={7}>
              <img src="imgs/discount.jpg" alt="Скидки" className='img-accepted mt-4 mt-lg-0' />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='sec-6 mb-6'>
        <Container>
          <h5>Обратите внимание</h5>
        </Container>
        <Container className='position-relative'>
          <Swiper
            className='product-slider'
            modules={[Navigation, FreeMode]}
            spaceBetween={20}
            slidesPerView={'auto'}
            speed={750}
            navigation
            freeMode={true}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 10,
                freeMode: false,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
    </main>
  );
};

export default OrderAccepted;