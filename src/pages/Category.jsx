import React, { useCallback, useLayoutEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavBreadcrumbs from '../components/utils/NavBreadcrumbs';
import ProductCard from '../components/ProductCard';
import NavPagination from '../components/NavPagination';
import SelectImitation from '../components/utils/SelectImitation';
import IconGrid from '../components/svgs/IconGrid';
import IconRows from '../components/svgs/IconRows';
import Filter from '../components/Filter';
import IconFilter from '../components/svgs/IconFilter'
import { TfiArrowCircleLeft } from "react-icons/tfi";

import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useParams } from "react-router-dom";
import { getCategory } from "../services/category";
import Loader from "../components/utils/Loader";

const Category = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { categoryId } = useParams();
  const [category, setCategory] = useState({
    loading: true,
    item: {},
  });

  const onLoad = useCallback(() => {
    getCategory(categoryId)
      .then((res) => setCategory({ loading: false, item: res }))
      .catch(() => setCategory((data) => ({ ...data, loading: false })));
  }, [categoryId]);

  useLayoutEffect(() => {
    onLoad();
  }, [categoryId]);

  if (category?.loading) {
    return <Loader full />;
  }

  return (
    <main className='inner'>
      <section className='sec-6 mb-3 mb-lg-5'>
        <Container>
          <NavBreadcrumbs/>
          <h1 className='inner'>Сухой корм</h1>
          <Row className='gx-5'>
            <Col lg={3}>
              <Offcanvas className="offcanvas-filter" show={show} onHide={handleClose} responsive="lg">
                <Offcanvas.Body>
                  <div className="mb-4 d-flex d-lg-none justify-content-between align-items-center">
                    <button type='button' className='d-flex align-items-center' onClick={handleClose}>
                      <TfiArrowCircleLeft className='fs-13 me-2'/>
                      <h4>Фильтры</h4>
                    </button>
                    <button type='reset' className='main-color'>очистить</button>
                  </div>
                  <Filter/>
                </Offcanvas.Body>
              </Offcanvas>
            </Col>
            <Col lg={9}>
              <div className='d-md-flex justify-content-between align-items-center mb-4'>
                <Swiper
                  modules={[FreeMode]}
                  className='params-slider'
                  spaceBetween={10}
                  slidesPerView={'auto'}
                >
                  <SwiperSlide>Подкатегория</SwiperSlide>
                  <SwiperSlide>Подкатегория</SwiperSlide>
                  <SwiperSlide>Подкатегория</SwiperSlide>
                </Swiper>
                <div className="d-flex align-items-center justify-content-between">
                  <SelectImitation
                    boxClass={'flex-1'}
                    optionsArr={[
                      {
                        value: 1,
                        label: 'Рекомендуемые',
                        defaultChecked: true,
                      },
                      {
                        value: 2,
                        label: 'Сначала дешевые',
                        defaultChecked: false,
                      },
                      {
                        value: 3,
                        label: 'Сначала дорогие',
                        defaultChecked: false,
                      },
                    ]}
                  />

                  <button type='button' className='w-fit d-flex d-lg-none input p-2 ms-3 ms-sm-4' onClick={handleShow}>
                    <IconFilter className="dark-gray fs-15"/>
                  </button>

                  <div className='toggle-view d-flex d-md-none ms-3 ms-sm-4'>
                    <button type='button' className='active'>
                      <IconGrid/>
                    </button>
                    <button type='button'>
                      <IconRows/>
                    </button>
                  </div>
                </div>
              </div>

              <Row xs={2} sm={3} xl={4} className='gx-3 gx-sm-4 gy-4 gy-sm-5'>
                {category.item.products.map((e) => (
                  <Col>
                    <ProductCard data={e}/>
                  </Col>
                ))}
              </Row>

              <img src="/imgs/about-bonus-program.jpg" alt="bonus-program" className='img-fluid rounded-4 my-5'/>

              <Row xs={2} sm={3} xl={4} className='gx-3 gx-sm-4 gy-4 gy-sm-5'>
                {category.item.products.map((e) => (
                  <Col>
                    <ProductCard data={e}/>
                  </Col>
                ))}
              </Row>

              <NavPagination/>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Category;