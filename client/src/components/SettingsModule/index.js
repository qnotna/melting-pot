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

            document.getElementById('changeUserData').classList.add('active');
            document.getElementById('changeUserPassword').classList.remove('active');
            document.getElementById('otherSettings').classList.remove('active');
            
            this.forceUpdate();
        }
    }

    handleChangeUserPassword = () => {
        if(document.getElementById('changeUserPassword').dataset.active === "false") {
            document.getElementById('changeUserData').dataset.active = "false";
            document.getElementById('changeUserPassword').dataset.active = "true";
            document.getElementById('otherSettings').dataset.active = "false";

            document.getElementById('changeUserData').classList.remove('active');
            document.getElementById('changeUserPassword').classList.add('active');
            document.getElementById('otherSettings').classList.remove('active');

            this.forceUpdate();
        }
    }

    handleOtherSettings = () => {
        if(document.getElementById('otherSettings').dataset.active === "false") {
            document.getElementById('changeUserData').dataset.active = "false";
            document.getElementById('changeUserPassword').dataset.active = "false";
            document.getElementById('otherSettings').dataset.active = "true";

            document.getElementById('changeUserData').classList.remove('active');
            document.getElementById('changeUserPassword').classList.remove('active');
            document.getElementById('otherSettings').classList.add('active');

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
                <div style={{'display':'block'}}>
                    <button className='settingNavButton' style={{'width':'30%', 'marginRight': '5%'}} data-active="false" id='changeUserData' onClick={() => {this.handleChangeUserData()}}>Profil bearbeiten</button>
                    <button className='settingNavButton' style={{'width':'30%', 'marginRight': '5%'}} data-active="false" id='changeUserPassword' onClick={() => {this.handleChangeUserPassword()}}>Passwort bearbeiten</button>
                    <button className='settingNavButton' style={{'width':'30%'}} data-active="false" id='otherSettings' onClick={() => {this.handleOtherSettings()}}>weitere Einstellungen</button>
                </div>
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
    