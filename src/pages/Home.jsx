import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import StoriesSection from '../components/StoriesSection';
import Offer from '../components/Offer';
import AppStore from '../assets/imgs/appstore-black.svg';
import GooglePlay from '../assets/imgs/googleplay-black.svg';
import Phone from '../assets/imgs/phone.png';
import CategoryCard from '../components/CategoryCard';
import Eyes from '../assets/imgs/eyes.svg';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Paw from '../components/svgs/Paw';

const Home = () => {
  return (
    <main>
      <section className='sec-1 mb-5'>
        <Swiper
          className='main-slider'
          modules={[Pagination, Navigation]}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src="imgs/slider-main/slide-4.jpg" alt='slide'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="imgs/slider-main/slide-4.jpg" alt='slide'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="imgs/slider-main/slide-4.jpg" alt='slide'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="imgs/slider-main/slide-4.jpg" alt='slide'/>
          </SwiperSlide>
        </Swiper>
        <Container>
          <Row className='h-100'>
            <Col md={7} className='d-flex flex-column justify-content-between align-items-start'>
              <div>
                <h2>Бесплатная доставка при первом заказе</h2>
                <p className='fs-11'>Оформляйте заказ на сумму от 1 000 ₽ и мы доставим его совершенно&nbsp;бесплатно</p>
                <button className='btn-20 mt-5'>
                  <span>Заказать</span>
                  <Paw className="fs-09 ms-1"/>
                </button>
              </div>
              <ul className='tags'>
                <li><div>вкусно</div></li>
                <li><img src={Eyes} alt="Eyes" /></li>
                <li><div>натурально</div></li>
                <li><div>питательно</div></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='sec-2 mb-5'>
        <div className='container-md px-0 px-md-4'>
          <StoriesSection/>
        </div>
      </section>

      <section className='sec-3 mb-6'>
        <Container>
          <h3>Каталог товаров</h3>
          <ul className='list-unstyled row row-cols-4 gx-4 gy-5'>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
          </ul>
          <button type='button' className='btn-2 mx-auto mt-5'>
            <span>показать все</span>
            <Paw className="ms-1"/>
          </button>
        </Container>
      </section>

      <Container className='overflow-hidden'>
        <section className='sec-4 mb-5'>
          <h3>Заказывать стало <br className='d-lg-none'/>ещё&nbsp;удобнее!</h3>
          <div className="d-flex align-items-center mb-3 mb-lg-4">
            <button type='button' className='btn-2 fs-20 py-2 px-3 px-lg-4 me-2 me-md-3'>
              <span className='d-lg-none'>—</span>
              <span className='d-none d-lg-inline'>скидка</span>
              <span> 15%</span>
            </button>
            <p className='fs-16'>на&nbsp;первый заказ <br/>через&nbsp;приложение</p>
          </div>
          <ul className='logotips mb-3 mb-lg-5'>
            <li>
              <a href="/">
                <img src={AppStore} alt="App Store" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={GooglePlay} alt="Google Play" />
              </a>
            </li>
          </ul>
          <p>Акция действует при заказе на сумму от 1 000 ₽</p>
          <img src={Phone} alt="Phone" className='phone' />
        </section>
      </Container>

      <section className='sec-5 d-none d-md-block mb-5'>
        <Container>

        </Container>
      </section>

      <section className='sec-6 mb-5'>
        <Container>
          <Swiper
            className='sw-offers'
            spaceBetween={5}
            slidesPerView={'auto'}
            speed={750}
            breakpoints={{
              576: {
                slidesPerView: 'auto',
                spaceBetween: 7,
              },
              768: {
                slidesPerView: 'auto',
                spaceBetween: 10,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
          >
            <SwiperSlide>
              <Offer blackText={false} img={"imgs/offers/offer1.jpg"} title={'Весна пришла'} subtitle={'А с ней новые вкусы роллов!'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Offer blackText={false} img={"imgs/offers/offer2.jpg"} title={'Пицца «Гаваи»'} subtitle={'Улётный микс из курицы и ананаса'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Offer blackText={true} img={"imgs/offers/offer3.jpg"} title={'Свежих ягод много бывает'} subtitle={'Попробуйте наш фирменный тарт — мы добавили в него ещё больше клубники!'}/>
            </SwiperSlide>
          </Swiper>
          <Link to='/promo' className='btn-30 mt-4 mx-auto'>смотреть все акции</Link>
        </Container>
      </section>
    </main>
  );
};

export default Home;