import React, { Component } from 'react';
import store from '../../store';
import { setUser } from '../../actions';
import api from '../../utils/API'
import { setNewUserData } from '../../actions/index'

export default class Settings extends Component {
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

    changeUserValues = () => {
        // Was fehlt: Überprüfen ob sich der Ursprungwert vom neuen Wert unterscheidet
        var newUserData = {};
        newUserData.name = document.getElementById("name").value;
        newUserData.email = document.getElementById("email").value;
        newUserData.password = document.getElementById("password").value;

        api.updateUserData((res) => {
            store.dispatch(setNewUserData(res.newUserData))
            }, newUserData)
    }

    /*
        <h1>Hello {user.name}</h1>
        <button onClick={() => this.changeName("Steve")}>Change name</button>
    */

    render(){
        const { user } = store.getState()
        return(
            <div>
                <h1>Hello {store.getState().user.name}</h1>
                <br></br>
                <form>
                    <div style={{"display":"block"}}>
                        Username: <input type="text" id="name"></input>
                    </div>
                    <div style={{"display":"block"}}>
                    E-Mail: <input type="text" id="email"></input>
                    </div>
                    <div style={{"display":"block"}}>
                    Passwort: <input type="text" id="password"></input>
                    </div>
                </form>
                <button onClick={() => this.changeUserValues()}>Save</button>
            </div>
        )
    }
}
