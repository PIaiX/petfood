import React from 'react';
import NavPaginationMini from '../../components/NavPaginationMini';
import LiBonus from '../../components/LiBonus';
import ReturnLink from '../../components/utils/ReturnLink';

const Bonuses = () => {
  
  return (
    <section className='bonus-program'>
      <div className='d-flex align-items-center mb-4'>
        <ReturnLink link={'/account'} className="mb-0 d-lg-none me-3"/>
        <h4>История начисления и списания бонусов</h4>
      </div>
      <div className="box">
        <ul>
          <LiBonus gift={false} income={150} spending={90}/>
          <LiBonus gift={true} income={500}/>
          <LiBonus gift={false} income={150} spending={90}/>
          <LiBonus gift={true} income={500}/>
        </ul>
        <NavPaginationMini/>
      </div>
    </section>
  );
};

export default Bonuses;