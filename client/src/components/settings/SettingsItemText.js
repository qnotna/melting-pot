import React, { Fragment, useState } from 'react';
// import api from '../../utils/API';
// import store from '../../store';

const SettingsItemText = ({ name, type, placeholder, dispatch }) => {

  // const [value, setValue] = useState(null);

  const onTextChange = (event) => {
    // dispatch(event.target.value);
    // setValue(event.target.value);
    console.log(event.target.value);
  }

  return(
    <Fragment>
      <label>{name}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={event => onTextChange(event)}
      />
    </Fragment>
  );

};

export default SettingsItemText;