import React, { Component } from 'react';
import store from '../../store';
import { setUser } from '../../actions';
import api from '../../utils/API'
import { setNewUserData } from '../../actions/index'

export default class EditUserPassword extends Component {
    changeUserPassword = () => {
        console.log('change Passwort')
    }

    render(){
        return(
            <div>
                <h1>Passwort ändern</h1>
                <br/>
                <form>
                    <div style={{"display":"block"}}>
                        Altes Passwort: <input type="text" id="oldPassword"></input>
                    </div>
                    <br/>
                    <div style={{"display":"block"}}>
                        Neues Passwort: <input type="text" id="newPassword"></input>
                    </div>
                </form>
                <button onClick={() => this.changeUserPassword()}>Save</button>
            </div>
        )
    }
}