import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import StoriesSection from '../components/StoriesSection';
import Offer from '../components/Offer';
import AppStore from '../assets/imgs/appstore.svg';
import GooglePlay from '../assets/imgs/googleplay.svg';
import Cover from '../assets/imgs/articles-cover.jpg';
import Dog from '../assets/imgs/dog.jpg';
import Phone from '../assets/imgs/phone.png';
import Objects from '../assets/imgs/objects.png';
import CategoryCard from '../components/CategoryCard';
import Eyes from '../assets/imgs/eyes.svg';
import Paw from '../components/svgs/Paw';
import ArticleCard from '../components/ArticleCard';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Home = () => {
  return (
    <main>
      <section className='sec-1 mb-6'>
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

      <section className='sec-2 mb-6'>
        <div className='container-md position-relative'>
          <StoriesSection/>
        </div>
      </section>

      <section className='sec-3 mb-6'>
        <Container>
          <h3>Каталог товаров</h3>
          <ul className='list-unstyled justify-content-center row row-cols-3 row-cols-xl-4 gx-4 gy-5'>
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

      <section className='sec-4 mb-6'>
        <img src={Objects} alt="Objects" className='objects' />
        <Container>
          <Row>
            <Col md={8} xl={10}>
              <div className="box">
                <h2>Получите скидку 15%</h2>
                <p className="fs-12 fw-5 mb-5">Скачивайте наше приложение <br/>и&nbsp;получайте&nbsp;скидку на&nbsp;первый заказ</p>
                <ul className="list-unstyled d-flex">
                  <li>
                    <a href="/">
                      <img src={GooglePlay} alt="GooglePlay" />
                      <span>Скачать в Google Play</span>
                    </a>
                  </li>
                  <li className="ms-4 ms-xl-5">
                    <a href="/">
                      <img src={AppStore} alt="AppStore" />
                      <span>Скачать в App Store</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <img src={Phone} alt="Phone" className='phone' />
        </Container>
      </section>

      {/* <section className='sec-5 d-none d-md-block mb-5'>
        <Container>

        </Container>
      </section> */}

      <section className='sec-6 mb-6'>
        <Container>
          <Row className='gx-4 gy-5'>
            <Col md={8} xl={6}>
              <img src={Cover} alt="Cover" className='img-1'/>
            </Col>
            <Col md={4} xl={3}>
              <ArticleCard/>
            </Col>
            <Col md={4} xl={3}><ArticleCard /></Col>
            <Col md={4} xl={3}><ArticleCard /></Col>
            <Col md={4} xl={3}><ArticleCard /></Col>
            <Col md={4} xl={3}><ArticleCard /></Col>
            <Col md={4} xl={3}>
              <img src={Dog} alt="Dog"  className='img'/>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Home;