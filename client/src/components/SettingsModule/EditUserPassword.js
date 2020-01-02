import React, { Component } from 'react';
import store from '../../store';
import { setUser } from '../../actions';
import api from '../../utils/API'
import { setNewUserData } from '../../actions/index'

import '../../stylesheets/Settings.css'

export default class EditUserPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    changeUserPassword = () => {
        this.setState({message: 'Das Passwort wurde aktualisiert.'});
        setTimeout(() => {
                this.setState({message: ''})
        }, 5000);
    }

    render(){
        return(
            <div>
                <form>
                    <div style={{'display':'block', 'marginTop':'20px'}}>
                        Old Password: <input type='password' id='oldPassword'></input>
                    </div>
                    <br/>
                    <div style={{'display':'block', 'marginBottom':'8px'}}>
                        New Password: <input type='password' id='newPassword'></input>
                    </div>
                </form>
                <button style={{'marginBottom':'8px'}} className='saveButton' onClick={() => this.changeUserPassword()}>Save</button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}