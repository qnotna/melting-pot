import React, { Component } from 'react';

class NoContent extends Component {

    render() {
        console.log(this.props.errorData)
        const errorCode = this.props.errorData.statuscode;
        const errorMsg = this.props.errorData.message;
        return (
            <div>
                <h1>{"Error " + errorCode + " " + errorMsg }</h1>
            </div>
        )
    }
}

export default NoContent;