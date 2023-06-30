import React from 'react';
import LiNotification from '../../components/LiNotification';
import AccountTitleReturn from '../../components/AccountTitleReturn';

const Notifications = () => {
  return (
    <section className='notifications'>
      <AccountTitleReturn link={'/account'} title={'Уведомления'}/>
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