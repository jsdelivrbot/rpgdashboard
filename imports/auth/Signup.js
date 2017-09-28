import React, {Component} from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Link} from 'react-router';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: ''
        }
    }
    onSubmit(e) {
        e.preventDefault();
        const email = this.refs.email.value.trim();
        const password= this.refs.password.value.trim();

        if (password.length < 8) {
            return this.setState({
                error: 'Password must be greater than 8 characters'
            })
        }

        Accounts.createUser({
            email,
            password
        }, (err) => {
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
    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit.bind(this)} noValidate>
                    <h3>Signup</h3>
                    {this.state.error ? <p>{this.state.error}</p> : undefined}
                    <input ref='email' type='email' placeholder='Email'/>
                    <input ref='password' type="password" placeholder='Password'/>
                    <button>Signup</button>
                </form>
                <Link to='/login'>Already have an account?</Link>
            </div>
        )
    }
}