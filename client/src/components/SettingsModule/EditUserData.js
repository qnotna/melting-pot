import React, { Component } from 'react';
import store from '../../store';
import { setUser } from '../../actions';
import api from '../../utils/API'
import { setNewUserData } from '../../actions/index'

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
            this.setState({message: 'Das Update war erfolgreich.'});
            setTimeout(() => {
                this.setState({message: ''})
            }, 5000);
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
                        E-Mail: <input type="text" id="email" defaultValue={store.getState().user.email}></input>
                    </div>
                    <br/>
                    <p>{this.state.message}</p>
                    <br/>
                </form>
                <button className='saveButton'onClick={() => this.changeUserValues()}>Save</button>
            </div>
        )
    }
}
