import React from 'react';

const ReadingTime = ({ time }) => {

  return(
    <div id='reading-time'>
      <img id='reading-time_icon' src='https://www.bevlabvet.com/images/circle-dark.png' alt='Reading Time' />
      <p>{time}</p>
    </div>
  );

};

export default ReadingTime;