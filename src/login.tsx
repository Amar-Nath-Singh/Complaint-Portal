import axios, { AxiosResponse } from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import App from './App'
interface complaint {
    _id: string,
    name: string,
    rollno: string,
    desp: string,
    status: string
}
type complaints = complaint[]
interface LoginProps {

}
interface LoginState {
    username: String;
    password: String;
}


class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props)
        this.state = { username: "", password: "" }
    }
    get_detail() {
        axios
            .get<complaints>("http://localhost:5000/user/" + this.state.username + "/" + this.state.password)
            .then((response: any) => {
                if (!(response.data==null)) {
                    
                }
            })
            .catch((error: any) => {
                console.log(error);
            });
        

    }
    render() {
        return (
            <div className='Login-page'>
                <input className='username' placeholder='username' onChange={event => this.setState({ username: event.target.value })}></input>
                <input type="password" className='password' placeholder='password' onChange={event => this.setState({ password: event.target.value })}></input>
                <button onClick={(e) => this.get_detail()}> Submit </button>
            </div>);
    }
}

export default Login;