import React, { Fragment, useState, useEffect } from 'react';
// import api from '../../utils/API';
// import store from '../../store';

const SettingsItemCheckbox = ({ item, onChange }) => {

  // Component State
  // TODO: set default value
  const [checked, setChecked] = useState(false);

  // EventListener for the checkbox
  // Callback from SettingsView -> onItemValueChange
  const onCheckboxChange = (event) => {
    setChecked(event.target.checked);
  }

  // Call onChange after setting the state completed
  useEffect(() => {
    onChange(item.name, checked);
  }, [checked]);

  return(
    <Fragment>
      <label>{item.name}</label>
      <input
        type='checkbox'
        onChange={(event) => onCheckboxChange(event)}
      />
    </Fragment>
  );
};

export default SettingsItemCheckbox;