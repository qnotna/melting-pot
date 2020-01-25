import React, { Fragment } from 'react';
import api from '../../utils/API';
import store from '../../store';
import { setNewUserData } from '../../actions/index'

const SettingsItem = ({ item }) => {

  return(
    <Fragment>
      <p>{item.name}</p>
      {item.control}
    </Fragment>
  );

};

export default SettingsItem;