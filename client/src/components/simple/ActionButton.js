import React from 'react';

const ActionButton = ({ text, type, selected }) => {

  //TODO: Hier muss ein onClick event handler sein das je nach type den item + vollen (geparsten) content speichert oder das item spiechert!

  return(
    <button type='submit' className={`action_button-${type}`}>
      <img
        className='icon'
        src='https://www.bevlabvet.com/images/circle-dark.png'
        alt='Category'
      />
    {
      type === 'add' ? 'Zu Favoriten hinzufügen' : 'Für später speichern'
    }
    </button>
  );

};

export default ActionButton;