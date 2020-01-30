import React, { useState } from 'react';
import SettingsSection from './SettingsSection.js';
import { Settings } from '../../utils/Settings.js';
import '../../stylesheets/Settings.css';
import store from '../../store.js';
import { setCurrentSettings } from '../../actions/authActions.js';

const SettingsView = () => {

  const [configuration, setConfiguration] = useState({});

  const sections = [
    {
      title: 'Fake News Detector',
      items: [
        Settings.VERIFIED_SOURCES,
        Settings.HIGH_QUALITY_ARTICLES,
        Settings.CLICKBAIT_TITLES,
        Settings.DOMAIN_NAME_CHECK
      ]
    },
    {
      title: 'Search Preferences',
      items: [
        Settings.DEFAULT_LANGUAGE,
        Settings.DEFAULT_COUNTRY,
        Settings.DEFAULT_PAGESIZE
      ]
    },
    {
      title: 'App Settings',
      items: [
        Settings.ENABLE_DARK_MODE,
      ]
    }
  ];

  // EventListener for all SettingsItem<T>
  // Receives SettingsItem configuration: key, value
  // Add received configuration to local configuration (state)
  const onItemValueChange = (key, value) => {
    const conf = configuration;
    conf[key] = value;
    saveSettings();
  };

  // Dispatch settings configuration in store
  const saveSettings = () => {
    const fakeNewsSettings = {
      verifiedSources: configuration.verifiedSources,
      highQuality: configuration.highQuality,
      clickbaitTitles: configuration.clickbaitTitles,
      domainNameCheck: configuration.domainNameCheck
    };
    const searchSettings = {
      language: configuration.language,
      country: configuration.country,
      pageSize: configuration.pageSize
    };
    const appSettings = {
      appearance: configuration.appearance
    };
    const settings = {
      fakeNews: fakeNewsSettings,
      search: searchSettings,
      app: appSettings
    };
    store.dispatch(setCurrentSettings(settings));
  };

  return(
    <div className='settings-view'>
      <form>
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
      </form>
    </div>
  );

};

export default SettingsView;