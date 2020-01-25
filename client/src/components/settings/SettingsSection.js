import React, { Fragment } from 'react';

const SettingsSection = ({ title, items }) => {

  return(
    <fieldset>
      <legend>{title}</legend>
      {
        items.map((item, index) => {
          return(
            <div className='settings-view--item' key={index}>
              {item}
            </div>
          );
        })
      }
    </fieldset>
  );

};

export default SettingsSection;