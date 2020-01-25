import React, { Fragment } from 'react';
// import api from '../../utils/API';
// import store from '../../store';

const SettingsItemCheckbox = ({ name, dispatch }) => {

  const onCheckboxChange = (event) => {
    console.log(event.target.value);
  }

  return(
    <Fragment>
      <label>{name}</label>
      <input
        type='checkbox'
        onChange={(event) => onCheckboxChange(event)}
      />
    </Fragment>
  );
};

export default SettingsItemCheckbox;