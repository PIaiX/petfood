import React, { useLayoutEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../components/ProductCard';
import SelectImitation from '../components/utils/SelectImitation';
import Ingredient from '../components/utils/Ingredient';
// swiper
import { Navigation, Thumbs, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// icons & images
import CartIcon from '../components/svgs/CartIcon';
import Corner from '../components/svgs/Corner';
import { HiPlus } from "react-icons/hi2";
import NavBreadcrumbs from '../components/utils/NavBreadcrumbs';
import CountInput from '../components/utils/CountInput';
import { Link, useParams } from "react-router-dom";
import ButtonCart from "../components/ButtonCart";
import Empty from "../components/Empty";
import EmptyCatalog from "../components/empty/catalog";
import Meta from "../components/Meta";
import Loader from "../components/utils/Loader";
import { customPrice, customWeight, getImageURL } from "../helpers/all";
import { getProduct, getProducts } from "../services/product";

const Product = () => {
  const [featuresShow, setFeaturesShow] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { productId } = useParams();

  const [product, setProduct] = useState({
    loading: true,
    item: {},
  });
  const [recommends, setRecommends] = useState({
    loading: true,
    data: [],
  });

  var [data, setData] = useState({
    cart: {
      data: {
        modifiers: {},
        additions: [],
        wishes: [],
      },
    },
  });

  useLayoutEffect(() => {
    getProduct(productId)
      .then((res) => {
        setProduct({ loading: false, item: res });
        data.cart.data.modifiers =
          res?.modifiers?.length > 0
            ? res.modifiers.find((e) => e.main)
            : false;
        setData(data);
        getProducts({ productId: res.id, categoryId: res.categoryId })
          .then((res) => setRecommends({ loading: false, data: res }))
          .catch(() => setRecommends((data) => ({ ...data, loading: false })));
      })
      .catch(() => setProduct((data) => ({ ...data, loading: false })));
  }, [productId]);

  if (product?.loading) {
    return <Loader full />;
  }

  if (!product?.item?.id) {
    return (
      <Empty
        text="Такого товара нет"
        desc="Возможно вы перепутали ссылку"
        image={() => <EmptyCatalog />}
        button={
          <Link className="btn-primary" to="/">
            Перейти в меню
          </Link>
        }
      />
    );
  }

  const price = data?.cart?.data?.modifiers?.price
    ? data.cart.data.modifiers.price
    : product?.item?.modifiers?.length > 0 &&
      Array.isArray(product.item.modifiers)
    ? Math.min(...product.item.modifiers.map((item) => item.price))
    : product?.item?.modifiers?.price ?? product?.item?.price ?? 0;

  const discount = data?.cart?.data?.modifiers?.discount
    ? data.cart.data.modifiers.discount
    : product?.item?.modifiers?.length > 0 &&
      Array.isArray(product.item.modifiers)
    ? Math.min(...product.item.modifiers.map((item) => item.discount))
    : product?.item?.modifiers?.discount ?? product?.item?.discount ?? 0;

  return (
    <main className='inner'>
      <Meta title={product?.item?.title ?? "Товар"} />
      <Container>
        <NavBreadcrumbs breadcrumbs={[
          {
            title: product?.item?.category?.title ?? "Нет категории",
            link: product?.item?.category?.id
              ? "/category/" + product.item.category.id
              : "/menu",
          },
          {
            title: product?.item?.title ?? "Не названия",
          },
        ]}/>

        <form className='productPage mb-3 mb-sm-4 mb-md-5'>
          <Row className='gx-4 gx-xxl-5'>
            <Col xs={12} lg={4}>
              {/* <img 
              src={getImageURL({ path: product.item.medias, size: "full" })} 
              alt={product.item.title}
              className='productPage-img'/> */}
              <div className="productPage-photo">
                <Swiper
                  className="thumbSlider"
                  modules={[Thumbs, FreeMode]}
                  watchSlidesProgress
                  onSwiper={setThumbsSwiper}
                  direction="vertical"
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={'auto'}
                  freeMode={true}
                >
                  <SwiperSlide>
                    <img 
                      src={getImageURL({ path: product.item.medias, size: "full" })} 
                      alt={product.item.title}
                    />
                  </SwiperSlide>
                </Swiper>
                <Swiper 
                  className="mainSlider"
                  modules={[Thumbs]} 
                  loop={true}
                  spaceBetween={20}
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                >
                  <SwiperSlide>
                    <img 
                      src={getImageURL({ path: product.item.medias, size: "full" })} 
                      alt={product.item.title}
                    />
                  </SwiperSlide>
                </Swiper>
                {/* <BtnFav/> */}
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <h1 className='inner mb-3'>{product.item.title}</h1>

              {product.item.description && (
                <p className='dark-gray fs-08'>Состав: {product.item.description}</p>
              )}
              {product?.item?.modifiers?.length > 0 && (
                <div className="d-flex flex-row flex-lg-column flex-xl-row align-items-center align-items-lg-start align-items-xl-center mt-4">
                  <p className='me-5'>Порция</p>
                  <ul className="inputGroup fs-09 flex-1">
                    {product.item.modifiers
                      .slice()
                      .sort((a, b) => a.price - b.price)
                      .map((e, index) => (
                        <li>
                          <label>
                            <input
                              type="radio"
                              name="modifiers"
                              defaultChecked={index === 0}
                              onChange={() => {
                                let newData = { ...data };

                                newData.cart.data.modifiers = e;

                                setData(newData);
                              }}
                            />
                            <div className="text">{e.title}</div>
                          </label>
                        </li>
                      ))}
                  </ul>
                </div>
              )}

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
                  <div className='fs-12 fw-5'>{customPrice(price)}</div>
                  {discount > 0 && (
                    <div className="gray fs-09 text-decoration-line-through">
                      {customPrice(discount)}
                    </div>
                  )}
                </div>
                <ButtonCart
                  full
                  product={product.item}
                  data={data}
                  className="order-3 order-xl-2 btn-2 fs-12 py-1 px-2 ms-3 ms-md-0 ms-xl-2"
                >
                  <span className="fw-4">В корзину</span>
                  <CartIcon className="d-none d-sm-block fs-11"/>
                </ButtonCart>
                <CountInput dis={false} className={'order-2 order-xl-3'}/>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className='mt-3mt-sm-4 mt-md-0'>
              {product?.item?.additions?.length > 0 && (
                <div className="productPage-edit mt-4 mt-md-0 mb-3">
                  <div className="top">
                    <button type='button' className='active'>
                      <HiPlus/>
                      <span>Добавить</span>
                      <Corner className="corner-right" />
                    </button>
                  </div>
                  {
                    isRemove ? (
                    <div className="box">
                    </div>
                    ) : (
                    <div className="box">
                      <ul>
                        {product.item.additions.map((e) => {
                          const isAddition = () =>
                            !!data?.cart?.data?.additions.find(
                              (addition) => addition.id === e.addition.id
                            );
                          const onPressAddition = () => {
                            if (isAddition()) {
                              let newAdditions =
                                data.cart.data.additions.filter(
                                  (addition) => addition.id != e.addition.id
                                );
                              let newData = { ...data };
                              newData.cart.data.additions = newAdditions;
                              setData(newData);
                            } else {
                              let newData = { ...data };
                              newData.cart.data.additions.push(e.addition);
                              setData(newData);
                            }
                          };
                          return (
                            <li>
                              <Ingredient
                                data={e}
                                active={isAddition()}
                                onChange={onPressAddition}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </div>)
                  }
                </div>
              )}
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

        {recommends?.data?.length > 0 && (
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
              {recommends.data.map((e) => (
                <SwiperSlide>
                  <ProductCard data={e} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        )}
      </Container>
    </main>
  );
};

export default Product;