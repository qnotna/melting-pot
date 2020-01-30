import React from 'react';

const Badge = ({ text }) => {

  return(
    <p className='unread-mark'>
      {text ? text : 'NEW'}
    </p>
  );

};

export default Badge;