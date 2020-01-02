import React, { Component } from 'react';
import store from '../../store';
import { setUser } from '../../actions';
import api from '../../utils/API'
import { setNewUserData } from '../../actions/index'

import '../../stylesheets/Settings.css'

export default class EditUserPassword extends Component {
    changeUserPassword = () => {
        console.log('change Passwort')
    }

    render(){
        return(
            <div>
                <h1>change Password</h1>
                <br/>
                <form>
                    <div style={{"display":"block"}}>
                        Old Password: <input type="text" id="oldPassword"></input>
                    </div>
                    <br/>
                    <div style={{"display":"block"}}>
                        New Password: <input type="text" id="newPassword"></input>
                    </div>
                </form>
                <button className='saveButton' onClick={() => this.changeUserPassword()}>Save</button>
            </div>
        )
    }
}