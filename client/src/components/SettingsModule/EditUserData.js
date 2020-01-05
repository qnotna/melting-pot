import React, { Component } from 'react';
import store from '../../store';
import { setUser } from '../../actions';
import api from '../../utils/API'
import { setNewUserData } from '../../actions/index'

import '../../stylesheets/DarkMode.css';

export default class EditUserData extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    changeUserValues = () => {
        // Was fehlt überprüfen ob email und username schon vorhanden sind in der Datenban
        var submitedName = document.getElementById("name").value;
        var submitedEmail = document.getElementById("email").value;

        // Was fehlt: Überprüfen ob sich der Ursprungwert vom neuen Wert unterscheidet
        var newUserData = {};
        if(store.getState().name !== submitedName && '' !== submitedName) {
            newUserData.name = submitedName;
        }
        if(store.getState().email !== submitedEmail && '' !== submitedEmail) {
            newUserData.email = submitedEmail;
        }

        api.updateUserData((res) => {
            store.dispatch(setNewUserData(res.newUserData));
            this.setState({message: 'Das Profil wurde aktuallisiert.'});
            setTimeout(() => {
                this.setState({message: ''})
            }, 5000);
        }, newUserData)
    }

    componentDidMount = () => {
        if(store.getState().darkMode) {
            document.getElementById('name').classList.add('darkMode-input-text');
            document.getElementById('email').classList.add('darkMode-input-text');
        }
        else {
            document.getElementById('name').classList.remove('darkMode-input-text');
            document.getElementById('email').classList.remove('darkMode-input-text');
        }
    }

    render() {
        if(document.getElementById('editUserDataForm') !== null) {
            if(store.getState().darkMode) {
                document.getElementById('name').classList.add('darkMode-input-text');
                document.getElementById('email').classList.add('darkMode-input-text');
            }
            else {
                document.getElementById('name').classList.remove('darkMode-input-text');
                document.getElementById('email').classList.remove('darkMode-input-text');
            }
        }

        return(
            <div>
                <form id='editUserDataForm'>
                    <div style={{"display":"block", 'marginTop':'20px'}}>
                        Username: <input type="text" id="name" defaultValue={store.getState().user.name}></input>
                    </div>
                    <br/>
                    <div style={{"display":"block", 'marginBottom':'8px'}}>
                        E-Mail: <input type="email" id="email" defaultValue={store.getState().user.email}></input>
                    </div>
                </form>
                <button style={{'marginBottom':'8px'}} className='saveButton' onClick={() => this.changeUserValues()}>Save</button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}
