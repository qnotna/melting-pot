import React, { Fragment, useState, useEffect } from 'react';
// import api from '../../utils/API';
// import store from '../../store';

const SettingsItemCheckbox = ({ item, onChange }) => {

  // Component State
  const [checked, setChecked] = useState(item.defaultValue);

  // EventListener for the checkbox
  // Callback from SettingsView -> onItemValueChange
  const onCheckboxChange = (event) => {
    setChecked(event.target.checked);
  }

  // Call onChange after setting the state completed
  useEffect(() => {
    onChange(item.key, checked);
  }, [checked]);

  return(
    <Fragment>
      <label>{item.name}</label>
      <input
        type='checkbox'
        defaultChecked={item.defaultValue}
        onChange={(event) => onCheckboxChange(event)}
      />
    </Fragment>
  );
};

export default SettingsItemCheckbox;