import React, { Component } from 'react';
import store from '../../store';
import { setUser } from '../../actions';
import api from '../../utils/API'
import { setNewUserData } from '../../actions/index'
import EditUserData from './EditUserData'
import EditUserPassword from './EditUserPassword'
import OtherSettings from './OtherSettings'

import '../../stylesheets/Settings.css'

export default class Settings extends Component {
    handleChangeUserData = () => {
        if(document.getElementById('changeUserData').dataset.active === "false") {
            document.getElementById('changeUserData').dataset.active = "true";
            document.getElementById('changeUserPassword').dataset.active = "false";
            document.getElementById('otherSettings').dataset.active = "false";
            this.forceUpdate();
        }
    }

    handleChangeUserPassword = () => {
        if(document.getElementById('changeUserPassword').dataset.active === "false") {
            document.getElementById('changeUserData').dataset.active = "false";
            document.getElementById('changeUserPassword').dataset.active = "true";
            document.getElementById('otherSettings').dataset.active = "false";
            this.forceUpdate();
        }
    }

    handleOtherSettings = () => {
        if(document.getElementById('otherSettings').dataset.active === "false") {
            document.getElementById('changeUserData').dataset.active = "false";
            document.getElementById('changeUserPassword').dataset.active = "false";
            document.getElementById('otherSettings').dataset.active = "true";
            this.forceUpdate();
        }
    }

    componentDidMount = () => {
        document.getElementById('changeUserData').click();
    }

    render(){
        var returnComponent = null;
        if(document.getElementById('changeUserData') !== null && document.getElementById('changeUserPassword') !== null && document.getElementById('otherSettings') !== null) {
            if(document.getElementById('changeUserData').dataset.active === "true") {
                returnComponent = <EditUserData/>;
            }
            if(document.getElementById('changeUserPassword').dataset.active === "true") {
                returnComponent = <EditUserPassword/>;
            }
            if(document.getElementById('otherSettings').dataset.active === "true") {
                returnComponent = <OtherSettings/>;
            }
        }

        return(
            <div style={{'margin': '2%'}}>
                <button data-active="false" id='changeUserData' onClick={() => {this.handleChangeUserData()}}>Profil bearbeiten</button>
                <button data-active="false" id='changeUserPassword' onClick={() => {this.handleChangeUserPassword()}}>Passwort bearbeiten</button>
                <button data-active="false" id='otherSettings' onClick={() => {this.handleOtherSettings()}}>weitere Einstellungen</button>
                { returnComponent }
            </div>
        )
    }
}

    /*
    changeName(name){
        store.dispatch( setUser({
            name: name
        }))

        // store.dispatch(
        //     {
        //         type: "SET_USER",
        //         user: {name: name}
        //     }
        // )
    }
    */

    /*
        <h1>Hello {user.name}</h1>
        <button onClick={() => this.changeName("Steve")}>Change name</button>
    */
    