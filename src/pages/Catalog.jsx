import React from 'react';
import Container from 'react-bootstrap/Container';
import CategoryCard from '../components/CategoryCard';
import Paw from '../components/svgs/Paw';

const Catalog = () => {
  return (
    <main className='inner'>
      <section className='sec-3 mb-3 mb-lg-5'>
        <Container>
          <h3>Каталог товаров</h3>
          <ul className='list-unstyled justify-content-center row row-cols-2 row-cols-md-3 row-cols-xl-4 gx-3 gx-sm-4 gy-4 gy-sm-5'>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
          </ul>
          <button type='button' className='btn-2 mx-auto mt-3 mt-sm-5'>
            <span>показать все</span>
            <Paw className="ms-1"/>
          </button>
        </Container>
      </section>
    </main>
  );
};

export default Catalog;