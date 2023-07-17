import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offer from '../components/Offer';
import ArticleCardMidi from '../components/ArticleCardMidi';
import useIsMobile from '../hooks/isMobile';

const AllArticles = () => {
  const mobileMD = useIsMobile('767px');

  return (
    <main className='inner'>
      <section className='mb-2 mb-sm-3 mb-md-4 mb-lg-5'>
        <Container>
          <h1>Новости и статьи</h1>
          <Row className='gx-lg-5 flex-md-row-reverse'>
            {
              (!mobileMD) &&
              <Col md={4}>
                <Offer blackText={false} img={"imgs/offers/offer1.jpg"} title={'Весна пришла'} subtitle={'А с ней новые вкусы роллов!'}/>
              </Col>
            }
            <Col xs={12} md={8}>
              <ul className='list-unstyled'>
                <li><ArticleCardMidi/></li>
                <li><ArticleCardMidi/></li>
                <li><ArticleCardMidi/></li>
                <li><ArticleCardMidi/></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default AllArticles;