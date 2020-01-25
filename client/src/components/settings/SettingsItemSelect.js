import React, { Fragment } from 'react';
// import api from '../../utils/API';
// import store from '../../store';

const SettingsItemSelect = ({ name, options, dispatch }) => {

  const onSelectChange = (event) => {
    console.log(event.target.value);
  };

  return(
    <Fragment>
      <label>{name}</label>
      <select
        onChange={(event) => onSelectChange(event)}
      />
    </Fragment>
  );

};

export default SettingsItemSelect;