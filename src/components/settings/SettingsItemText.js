import React, { Fragment, useState, useEffect } from 'react';

const SettingsItemText = ({ item, onChange }) => {

  // Component State
  const [value, setValue] = useState(item.defaultValue());

  // EventListener for the text input
  // Callback from SettingsView -> onItemValueChange
  const onTextChange = (event) => {
    setValue(event.target.value);
  }

  // Call onChange after setting the state completed
  useEffect(() => {
    onChange(item.key, value);
  }, [value]);

  return(
    <Fragment>
      <label>{item.name}</label>
      <input
        required
        type={item.inputType}
        placeholder={item.placeholder}
        defaultValue={item.defaultValue()}
        value={item.value}
        onChange={(event) => onTextChange(event)}
      />
    </Fragment>
  );

};

export default SettingsItemText;