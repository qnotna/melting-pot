import React from 'react';

const UnreadBadge = ({ text }) => {

  return(
    <p className='unread-badge'>
      {text ? text : 'NEW'}
    </p>
  );

};

export default UnreadBadge;