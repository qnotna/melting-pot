import React, { Fragment, useState, useEffect } from 'react';
import { languages, country, sortOptions } from '../../data/options.js';

const SettingsItemSelect = ({ item, onChange }) => {

  // Component State
  const [selected, setSelected] = useState(item.defaultValue);

  // EventListener for the select
  // Callback from SettingsView -> onItemValueChange
  const onSelectChange = (event) => {
    setSelected(event.target.value);
  };

  // Call onChange after setting the state completed
  useEffect(() => {
    onChange(item.key, selected);
  }, [selected]);

  // Select the correct options from data/options.js
  // Return the options object
  const getOptions = (selectFrom) => {
    switch (selectFrom) {
      case 'language': return languages;
      case 'country':  return country;
      case 'sortBy':   return sortOptions;
    }
  };

  // Create the options HTML element
  // Loop through all options from getOptions()
  // Return the HTML options
  const createOptions= (selectFrom) => {
    const options = getOptions(selectFrom);
    return Object.keys(options).map((item, index) => {
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
        defaultValue={item.defaultValue}
      >
        {
          createOptions(item.selectFrom)
        }
      </select>
    </Fragment>
  );

};

export default SettingsItemSelect;