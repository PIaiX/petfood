import React from 'react';
import {Link} from 'react-router-dom';
import BackArrow from '../svgs/BackArrow';

const ReturnLink = (props) => {
  return (
    <Link to={(props.link) ? props.link : '/'} className={'return '+props.className}>
      <BackArrow title="назад"/>
    </Link>
  );
};

export default ReturnLink;