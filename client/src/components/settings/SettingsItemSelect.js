import React, { Fragment, useState, useEffect } from 'react';
import { languages, country, appearance } from '../../data/options.js';

const SettingsItemSelect = ({ item, onChange }) => {

  // Component State
  const [selected, setSelected] = useState(item.defaultValue());

  // EventListener for the select
  // Callback from SettingsView -> onItemValueChange
  const onSelectChange = (event) => {
    setSelected(event.target.value);
  };

  // Call onChange after setting the state completed
  useEffect(() => {
    onChange(item.key, selected);
  }, [selected]);

  // Create the options HTML element
  // Loop through all options from getOptions()
  // Return the HTML options
  const createOptions = (options) => {
    return Object.keys(options).map((item, index) => { //TODO: use values() instead of keys()
      return(
        <option key={index}>{item}</option>
      );
    })
  };

  return(
    <Fragment>
      <label>{item.name}</label>
      <select
        onChange={(event) => onSelectChange(event)}
        checked={selected}
        defaultValue={item.defaultValue()}
      >
        {
          createOptions(item.options)
        }
      </select>
    </Fragment>
  );

};

export default SettingsItemSelect;