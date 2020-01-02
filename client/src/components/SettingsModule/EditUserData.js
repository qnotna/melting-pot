import React, { Component } from 'react';
import store from '../../store';
import { setUser } from '../../actions';
import api from '../../utils/API'
import { setNewUserData } from '../../actions/index'

export default class EditUserData extends Component {
    changeUserValues = () => {
        // Was fehlt überprüfen ob email und username schon vorhanden sind in der Datenban
        var submitedName = document.getElementById("name").value;
        var submitedEmail = document.getElementById("email").value;
        var submitedPassword = document.getElementById("password").value;

        // Was fehlt: Überprüfen ob sich der Ursprungwert vom neuen Wert unterscheidet
        var newUserData = {};
        if(store.getState().name !== submitedName && '' !== submitedName) {
            newUserData.name = submitedName;
        }
        if(store.getState().email !== submitedEmail && '' !== submitedEmail) {
            newUserData.email = submitedEmail;
        }
        if(store.getState().password !== submitedName && '' !== submitedName) {
            newUserData.password = submitedPassword;
        }

        api.updateUserData((res) => {
            store.dispatch(setNewUserData(res.newUserData))
            }, newUserData)
    }

    render(){
        return(
            <div>
                <h1>Hello {store.getState().user.name}</h1>
                <br/>
                <form>
                    <div style={{"display":"block"}}>
                        Username: <input type="text" id="name" defaultValue={store.getState().user.name}></input>
                    </div>
                    <br/>
                    <div style={{"display":"block"}}>
                        E-Mail: <input type="text" id="email"></input>
                    </div>
                    <br/>
                    <div style={{"display":"block"}}>
                        Passwort: <input type="text" id="password"></input>
                    </div>
                </form>
                <button onClick={() => this.changeUserValues()}>Save</button>
            </div>
        )
    }
}
