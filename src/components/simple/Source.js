import React from 'react';

const Source = ({ name, date }) => {

  return(
    <div className='article_preview_information_publisher'>
      <img className='icon' src='https://www.bevlabvet.com/images/circle-dark.png' alt='Publisher logo' />
      <p className='article_preview_information_publisher-name'>{name}</p>
      <p className='article_preview_information_publisher-date'>{date}</p>
    </div>
  );

};

export default Source;