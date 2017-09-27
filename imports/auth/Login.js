import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: ''
        }
    }
    onSubmit() {
        const email = this.refs.email.value.trim();
        const password = this.refs.password.value.trim();

        if (email && password) {
            Meteor.loginWithPassword(email, password, (err) => {
                if (err) {
                    this.setState({
                        error: err.message
                    })
                } else {
                    this.setState({
                        error: ''
                    })
                }
            })
        }
    }
    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <h3>Login</h3>
                    {this.state.error ? <p>{this.state.error}</p> : undefined}
                    <input ref='email' type='email' placeholder='Email'/>
                    <input ref='password' type="password" placeholder='Password'/>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}