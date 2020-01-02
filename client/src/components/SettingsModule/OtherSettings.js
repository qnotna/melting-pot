import React, { Component } from 'react';
import store from '../../store';
import { setUser } from '../../actions';
import api from '../../utils/API'
import { setNewUserData } from '../../actions/index'

export default class otherSettings extends Component {
    changeUserPassword = () => {
        console.log('change Passwort')
    }

    render(){
        return(
            <div>
                <h1>other Settings</h1>
                <br/>
                <form>
                    <div style={{"display":"block"}}>
                        Darkmode: false
                    </div>
                    <div style={{"display":"block"}}>
                        Sprache: english
                    </div>
                </form>
                <button onClick={() => this.changeUserPassword()}>Save</button>
            </div>
        )
    }
}