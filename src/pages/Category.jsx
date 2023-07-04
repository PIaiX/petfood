import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBreadcrumbs from '../components/utils/NavBreadcrumbs';
import ProductCard from '../components/ProductCard';
import NavPagination from '../components/utils/NavPagination';

const Category = () => {
  return (
    <main>
      <section className='sec-6 py-4 py-sm-5 mb-3 mb-lg-5'>
        <Container>
          <NavBreadcrumbs/>
          <h1 className='inner'>Сухой корм</h1>
          <Row>
            <Col lg={3}>
              <form action="" className='filter'>
                <fieldset>
                  <legend>Цена, ₽</legend>
                </fieldset>
                <fieldset>
                  <legend>Вес питомца, кг</legend>
                </fieldset>
                <fieldset>
                  <legend>Возраст</legend>
                </fieldset>
                <fieldset>
                  <legend>Характеристика</legend>
                </fieldset>
                <fieldset>
                  <legend>Параметр 3</legend>
                </fieldset>
              </form>
            </Col>
            <Col lg={9}>
              <div className='d-flex justify-content-between align-items-center mb-4'>
                <ul className='filter-params'>
                  <li>Сухой</li>
                  <li>Микс-обед</li>
                  <li>Premium</li>
                </ul>
              </div>

              <Row lg={4} className='gx-4 gy-5'>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
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