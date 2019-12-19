import React from 'react';

const ActionButton = ({ text, type, selected }) => {

  return(
    <button type='submit' class={`action_button-${type}`}>
      <img
        className='icon'
        src='https://www.bevlabvet.com/images/circle-dark.png'
        alt='Category'
      />
      {text}
    </button>
  );

};

export default ActionButton;