import React, { Fragment, useRef } from 'react';
import SettingsSection from './SettingsSection.js';
import { Settings } from '../../utils/Settings.js';

const SettingsView = () => {

  const sections = [
    {
      title: 'User Settings',
      items: [
        Settings.USERNAME,
        Settings.PASSWORD,
        Settings.EMAIL_ADRESS
      ]
    },
    {
      title: 'App Settings',
      items: [
        Settings.DEFAULT_LANGUAGE,
        Settings.DEFAULT_COUNTRY,
        Settings.ENABLE_DARK_MODE,
        Settings.LOAD_ARTICLES_WITHOUT_IMAGES,
        Settings.REDIRECT_TO_ORIGINAL_SAUCE
      ]
    }
  ];

  const onSaveSettings = (event) => {
    event.preventDefault();
    for (let section of sections) {
      for (let item of section.items) {
        item.props.dispatch('hello');
      }
    }
    // sections[0].items[0].props.dispatch();
  };

  return(
    <div className='settings-view'>
      <form onSubmit={event => onSaveSettings(event)}>
        <div className='settings-view--section'>
          {
            sections.map((section, index) => {
              return <SettingsSection
                key={index}
                title={section.title}
                items={section.items}
                />
            })
          }
        </div>
        <input
          type='submit'
          value='Save Settings'
          className='settings-view--save-button'
          />
      </form>
    </div>
  );

};

export default SettingsView;