import React from 'react';
import Container from 'react-bootstrap/Container';
import OfferProduct from '../components/OfferProduct';
import Replacement from '../assets/imgs/replacement.jpg';
import useIsMobile from '../hooks/isMobile';
import ReturnLink from '../components/utils/ReturnLink';

const OfferPage = () => {
  const isMobileMD = useIsMobile('767px');
  
  return (
    <main className='inner'>
      <section className='sec-8 mb-5'>
        <Container>
          {
            (isMobileMD) &&
            <ReturnLink/>
          }
          <h1 className='inner'>Название акции</h1>
          <img src={Replacement} alt="Акция «Счастливые часы»" className='offer-page-img'/>
          <div className="d-flex flex-column">
            <div className="box mb-5">
              <p>Специальная цена на определённые позиции из ассортимента японской кухни</p>
              <p>Акция действует на заказы оформленные на доставку, в зале и на самовывоз в период с понедельника по четверг, с 13:00 до 15:00.</p>
              <p>Не суммируется с другими акциями.Не действует в выходные, праздничные и предпраздничные дни.</p>
            </div>
            <h5 className='main-color'>Товары, участвующие в акции</h5>
            <ul className='list-unstyled offer-products-list'>
              <li><OfferProduct/></li>
              <li><OfferProduct/></li>
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default OfferPage;