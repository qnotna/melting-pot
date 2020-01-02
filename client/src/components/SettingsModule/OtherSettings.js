import React, { Component } from 'react';
import store from '../../store';
import { setUser } from '../../actions';
import api from '../../utils/API'
import { setNewUserData } from '../../actions/index'

import { setDarkMode } from '../../actions/index'

export default class otherSettings extends Component {
    handleDarkMode = () => {
        store.dispatch(setDarkMode(document.getElementById('darkMode').checked));
    }

    componentDidMount = () => {
        document.getElementById("darkMode").checked = store.getState().darkMode;
    }

    render(){
        return(
            <div>
                <form>
                    <div style={{'display':'block', 'marginTop':'20px', 'marginBottom': '8px'}}>
                        Dark Mode <input onClick={() => this.handleDarkMode()} type="checkbox" id="darkMode"/>
                    </div>
                    <div style={{'display':'block'}}>
                        Language of Articles: English
                        Country of Articles: America
                    </div>
                </form>
            </div>
        )
    }
}