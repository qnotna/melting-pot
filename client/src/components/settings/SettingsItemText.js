import React, { Fragment, useState, useEffect } from 'react';
import store from '../../store';

const SettingsItemText = ({ item, onChange }) => {

  // Component State
  // TODO: set default value
  const [value, setValue] = useState('');

  // EventListener for the text input
  // Callback from SettingsView -> onItemValueChange
  const onTextChange = (event) => {
    setValue(event.target.value);
  }

  // Call onChange after setting the state completed
  useEffect(() => {
    onChange(item.name, value);
  }, [value]);

  return(
    <Fragment>
      <label>{item.name}</label>
      <input
        required
        type={item.inputType}
        placeholder={item.placeholder}
        value={item.value}
        onChange={(event) => onTextChange(event)}
      />
    </Fragment>
  );

};

export default SettingsItemText;