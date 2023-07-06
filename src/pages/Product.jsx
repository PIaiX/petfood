import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../components/ProductCard';
import SelectImitation from '../components/utils/SelectImitation';
import Ingredient from '../components/utils/Ingredient';
// swiper
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// icons & images
import CartIcon from '../components/svgs/CartIcon';
import Corner from '../components/svgs/Corner';
import { HiPlus } from "react-icons/hi2";
import NavBreadcrumbs from '../components/utils/NavBreadcrumbs';
import CountInput from '../components/utils/CountInput';

const Product = () => {
  const [featuresShow, setFeaturesShow] = useState(false);
  return (
    <main className='inner'>
      <Container>
        <NavBreadcrumbs/>

        <form className='productPage mb-3 mb-sm-4 mb-md-5'>
          <Row className='gx-4 gx-xxl-5'>
            <Col xs={12} lg={4}>
              <img src="imgs/img3.png" alt="Четыре сыра" className='productPage-img'/>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <h1 className='inner mb-3'>Микс-обед «Для настоящих хищников»</h1>

              <p className='dark-gray fs-08'>Состав: Говядина и субпродукты (почки, печень, трахея, семенники и т.п.), субпродукты бараньи, рубец неочищенный, морская сельдь, морковь, тыква, кабачок, перец, свёкла, ягоды, водоросли</p>

              <div className="d-flex flex-row flex-lg-column flex-xl-row align-items-center align-items-lg-start align-items-xl-center mt-4">
                <p className='me-5'>Порция</p>
                <ul className='inputGroup fs-09 flex-1'>
                  <li>
                    <label>
                      <input type="radio" name='param1'/>
                      <div className='text'>250 гр</div>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" defaultChecked={true} name='param1'/>
                      <div className='text'>500 гр</div>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" name='param1'/>
                      <div className='text'>1 кг</div>
                    </label>
                  </li>
                </ul>
              </div>

              <Row xs={1} xl={2} className='gx-2 gy-3 mt-3 mt-lg-4 fs-09'>
                <Col>
                  <SelectImitation 
                    placeholder={'Вес питомца'}
                    optionsArr={[
                      {
                        value: 1,
                        label: '2 кг',
                        defaultChecked: false,
                      },
                      {
                        value: 2,
                        label: '3 кг',
                        defaultChecked: false,
                      },
                      {
                        value: 3,
                        label: '4 кг',
                        defaultChecked: false,
                      },
                    ]}
                  />
                </Col>
                <Col>
                  <SelectImitation 
                    placeholder={'Возраст питомца'}
                    optionsArr={[
                      {
                        value: 1,
                        label: 'до 1 года',
                        defaultChecked: false,
                      },
                      {
                        value: 2,
                        label: 'от 1 до 7 лет',
                        defaultChecked: false,
                      },
                      {
                        value: 3,
                        label: 'старше 7 лет',
                        defaultChecked: false,
                      },
                    ]}
                  />
                </Col>
              </Row>
              <SelectImitation 
                boxClass={'fs-09 mt-3'}
                placeholder={'Если есть большой или третий селект'}
                optionsArr={[
                  {
                    value: 1,
                    label: '1',
                    defaultChecked: false,
                  },
                  {
                    value: 2,
                    label: '2',
                    defaultChecked: false,
                  },
                  {
                    value: 3,
                    label: '3',
                    defaultChecked: false,
                  },
                ]}
              />

              <div className='productPage-price'>
                <div className='order-1 me-3 me-md-0'>
                  <div className='fs-12 fw-5'>650 ₽</div>
                  <div className='gray fs-09 text-decoration-line-through'> 650 </div>
                </div>
                <button type='button' className='order-3 order-xl-2 btn-2 fs-12 py-1 px-2 ms-3 ms-md-0 ms-xl-2'>
                  <span className='fw-4 me-1'>В корзину</span>
                  <CartIcon className="d-none d-sm-block fs-11"/>
                </button>
                <CountInput dis={false} className={'order-2 order-xl-3'}/>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className='mt-3mt-sm-4 mt-md-0'>
              <div className="productPage-edit mt-4 mt-md-0 mb-3">
                <div className="top">
                  <button type='button' className='active'>
                    <HiPlus/>
                    <span>Добавить</span>
                    <Corner className="corner-right" />
                  </button>
                </div>
                <div className="box">
                  <ul>
                    <li><Ingredient/></li>
                    <li><Ingredient/></li>
                    <li><Ingredient/></li>
                    <li><Ingredient/></li>
                    <li><Ingredient/></li>
                    <li><Ingredient/></li>
                    <li><Ingredient/></li>
                    <li><Ingredient/></li>
                    <li><Ingredient/></li>
                    <li><Ingredient/></li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </form>

        <section className='mb-6'>
          <ul className="tabs">
            <li>
              <button 
                type='button'
                onClick={()=>setFeaturesShow(false)}
                className={(featuresShow)?'':'active'}
              >Описание</button>
            </li>
            <li>
              <button 
                type='button'
                onClick={()=>setFeaturesShow(true)}
                className={(featuresShow)?'active':''}
              >Характеристики
              </button>
            </li>
          </ul>
          {
            (featuresShow)
            ? <ul className='features px-2 py-3 p-sm-4'>
              <li>
                <div>Для кого</div>
                <div>Собакам</div>
              </li>
              <li>
                <div>Тип</div>
                <div>Натуральный корм</div>
              </li>
              <li>
                <div>Особые потребности</div>
                <div>Аллергия</div>
              </li>
              <li>
                <div>Упаковка</div>
                <div>Порционные котейнеры</div>
              </li>
            </ul>
            : <div className="p-2 p-sm-4">
              <p>Микс будет приготовлен из свежих сырых продуктов и заморожен после вашего заказа. Каждая порция пронумерована и подписана. Точный состав и вес порции указан на упаковке.</p>
              <p>Микс«Для настоящих хищников» подойдёт хозяину, который хочет, чтобы его собака питалась сырым мясом и овощами.</p>
              <p>Утром и вечером даётся одинаковая еда. Если вы кормите питомца один раз день — размораживайте по 2 порции сразу или скажите нам — мы соберём одну большую порцию на день. В неделю собака получает 7 разных вариантов натуральной пищи, из которых:
              <br/>5 мясных дней. Минимум в один из них мы добавляем неочищенный рубец
              <br/>1 день — мясо птицы и субпродукты птицы (курица или индейка)
              <br/>1 рыбный день — порция полностью из рыбы или с её добавлением.</p>
            </div>
          }
        </section>

        <section className='d-none d-md-block mb-5'>
          <h2>Товары из этой категории</h2>
          <Swiper
            className=""
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={2}
            navigation
            breakpoints={{
              576: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
          </Swiper>
        </section>
      </Container>
    </main>
  );
};

export default Product;