import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectImitation from '../components/utils/SelectImitation';
import IconGrid from '../components/svgs/IconGrid';
import IconRows from '../components/svgs/IconRows';
import ProductCard from '../components/ProductCard';
import NavPagination from '../components/NavPagination';

const SearchResults = () => {
  return (
    <main className="inner">
      <Container>
        <section className='mb-5'>
          <h1 className="inner">Результаты поиска по запросу: Наименование запроса</h1>
          <div className='d-md-flex justify-content-end align-items-center mb-4'>
            <div className="d-flex align-items-center justify-content-between">
              <SelectImitation
                boxClass={''}
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

              <div className='toggle-view ms-4'>
                <button type='button' className='active'>
                  <IconGrid/>
                </button>
                <button type='button'>
                  <IconRows/>
                </button>
              </div>
            </div>
          </div>

          <Row xs={2} sm={3} md={3} lg={4} xl={5} className='gx-3 gx-md-5 gy-4 gy-sm-5'>
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
        </section>
      </Container>
    </main>
  );
};

export default SearchResults;