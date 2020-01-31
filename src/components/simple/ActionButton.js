import React from 'react';

const ActionButton = ({ text, type, selected }) => {

  //TODO: Hier muss ein onClick event handler sein das je nach type den item + vollen (geparsten) content speichert oder das item spiechert!

  return(
    <button type='submit' className={`action-button_${type}`}>
    <span className='material-icons'>
    {
      type === 'add' ? 'star' : 'bookmark'
    }
  </span>
    <p>
      {
        type === 'add' ? 'Add to Favorites' : 'Save for Later'
      }
    </p>
    </button>
  );

};

export default ActionButton;