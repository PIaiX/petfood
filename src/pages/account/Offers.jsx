import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../../components/ProductCard';
import ReturnLink from '../../components/utils/ReturnLink';
import useIsMobile from '../../hooks/isMobile';

const Offers = () => {
  const isMobileLG = useIsMobile('991px');

  return (
    <section>
      {
        (isMobileLG) && 
        <div className="d-flex align-items-center mb-4">
          <ReturnLink link="/account" className="mb-0"/>
          <h3 className='ms-3 mb-0'>Акции и промокоды</h3>
        </div>
      }
      <h5 className='fw-6'>Персональные акции</h5>
      <div className="box p-3 p-sm-4 mb-5">
        <Row xs={2} md={3} xl={4} className='g-4'>
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
      </div>
      <h5 className='fw-6'>Общие акции</h5>
      <div className="box p-3 p-sm-4">
        <Row xs={2} md={3} xl={4} className='g-4'>
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
      </div>
    </section>
  );
};

export default Offers;