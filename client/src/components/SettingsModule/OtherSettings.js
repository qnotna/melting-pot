import React, { Component } from 'react';
import store from '../../store';
import { setUser } from '../../actions';
import api from '../../utils/API'
import { setNewUserData } from '../../actions/index'

export default class otherSettings extends Component {
    render(){
        return(
            <div>
                <form>
                    <div style={{'display':'block', 'marginTop':'20px'}}>
                        Darkmode: false
                    </div>
                    <div style={{'display':'block'}}>
                        Sprache: english
                    </div>
                </form>
            </div>
        )
    }
}