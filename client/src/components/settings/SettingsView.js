import React, { Fragment, useState } from 'react';
import SettingsSection from './SettingsSection.js';
import { Settings } from '../../utils/Settings.js';

const SettingsView = () => {

  const [configuration, setConfiguration] = useState({});

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
        Settings.DEFAULT_SORTING,
        Settings.ENABLE_DARK_MODE,
        Settings.LOAD_ARTICLES_WITHOUT_IMAGES,
        Settings.REDIRECT_TO_ORIGINAL_SAUCE
      ]
    }
  ];

  // EventListener for all SettingsItem<T>
  // Receives SettingsItem configuration: key, value
  // Add received configuration to local configuration (state)
  const onItemValueChange = (key, value) => {
    const conf = configuration;
    conf[key.toLowerCase().replace(' ', '-')] = value;
    setConfiguration(conf);
  };

  // EventListener for the Save Settings button
  // Dispatch settings configuration in store
  const onSaveSettings = (event) => {
    event.preventDefault();
    console.log(configuration);
  };

  return(
    <div className='settings-view'>
      <form onSubmit={event => onSaveSettings(event)}>
        <div className='settings-view--section'>
          {
            // Loop over all sections and add a SettingsSection element
            sections.map((section, index) => {
              return <SettingsSection
                key={index}
                title={section.title}
                items={section.items}
                onChange={onItemValueChange}
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