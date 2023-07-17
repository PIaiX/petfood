import React from 'react';
import Replacement from '../assets/imgs/replacement.jpg'
import Container from 'react-bootstrap/Container';

// swiper
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCardMini from '../components/ProductCardMini';

const SingleArticle = () => {
  return (
    <main className='inner'>
      <Container>
        <section className='article-single mb-6'>
          <h1>Заголовок новости</h1>
          <img src={Replacement} alt="Заголовок новости" />
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
          <p>Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
          <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
          <p>Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
          <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
        </section>
      </Container>

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

export default SingleArticle;