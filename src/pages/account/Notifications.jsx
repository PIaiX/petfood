import React from 'react';
import LiNotification from '../../components/LiNotification';
import ReturnLink from '../../components/utils/ReturnLink';

const Notifications = () => {
  return (
    <section className='notifications'>
      <div className='d-flex align-items-center mb-4'>
        <ReturnLink link={'/account'} className="mb-0 d-lg-none me-3"/>
        <h4>Уведомления</h4>
      </div>
      <ul className='notifications-list'>
        <LiNotification/>
        <LiNotification/>
        <LiNotification/>
        <LiNotification/>
      </ul>
    </section>
  );
};

export default Notifications;