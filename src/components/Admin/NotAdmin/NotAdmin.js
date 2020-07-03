import React, { Component } from 'react'


class NotAdmin extends Component {

    returnButton = () => {
        this.props.history.push('/home');
    }

 render() {
    return (
        <section>
            <h1>Error 403</h1>
            <button onClick={this.returnButton}>Take Me Back To Teas</button>
        </section>
    )    
 }
}

// this allows us to use <App /> in index.js
export default NotAdmin;