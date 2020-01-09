import React from 'react';

const ReadingTime = ({ time }) => {

  return(
    <div className='preview-information-reading-time'>
      <img className='icon' src='https://www.bevlabvet.com/images/circle-dark.png' alt='Reading Time' />
      <p>{time}</p>
    </div>
  );

};

export default ReadingTime;