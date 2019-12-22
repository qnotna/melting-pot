import React from 'react';

const Source = ({ name, date }) => {

  return(
    <div className='preview-information-publisher'>
      <img className='icon' src='https://www.bevlabvet.com/images/circle-dark.png' alt='Publisher logo' />
      <p className='preview-information-publisher-name'>{name}</p>
      <p className='preview-information-publisher-date'>{date}</p>
    </div>
  );
  
};

export default Source;