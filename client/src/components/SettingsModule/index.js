import React, { Component } from 'react';
import store from '../../store';
import { setUser } from '../../actions'

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
    render(){
        const { user } = store.getState()
        return(
            <div>
                <h1>Hello {user.name}</h1>
                <button onClick={() => this.changeName("Steve")}>Change name</button>
            </div>
        )
    }
}
