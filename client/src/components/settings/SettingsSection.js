import React from 'react';
import SettingsItemText from './SettingsItemText.js';
import SettingsItemSelect from './SettingsItemSelect.js';
import SettingsItemCheckbox from './SettingsItemCheckbox.js';
import { Type } from '../../utils/Settings.js';
import store from '../../store.js';

const SettingsSection = ({ title, items, onChange }) => {

  // Create the settings item from settings type
  // Possible types:
  // Type.TEXT, Type.SELECT, Type.CHECKBOX
  const createItem = (item) => {
    switch (item.type) {
      case Type.TEXT:
      return <SettingsItemText
        item={item}
        onChange={onChange}
      />
      case Type.SELECT:
      return <SettingsItemSelect
        item={item}
        onChange={onChange}
      />
      case Type.CHECKBOX:
      return <SettingsItemCheckbox
        item={item}
        onChange={onChange}
      />
      default:
        break;
    }
  };

  return(
    <fieldset className='settings-view_section'>
      <legend>{title}</legend>
      {
        // Loop over all items and add a SettingsItem<T> element
        items.map((item, index) => {
          return(
            <div className='settings-view_item' key={index}>
              {
                createItem(item)
              }
            </div>
          );
        })
      }
    </fieldset>
  );

};

export default SettingsSection;