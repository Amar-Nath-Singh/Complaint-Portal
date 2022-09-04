import axios from 'axios';
import React, { Component } from 'react'
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
interface creds {
    username: string;
    password: string;
    name: string;
    rollno: string;
}
interface LoginState {
    database: creds[];
    username: string;
    password: string;
    name: string;
    rollno: string;
}


class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props)
        this.state = { database: [], username: "", password: "", name: "", rollno: "" }
    }
    componentDidMount(): void {
        axios
            .get<complaints>("http://localhost:5000/user/")
            .then((response: any) => {
                this.setState({ database: response.data })
            })
            .catch((error: any) => {
                console.log(error);
            });

    }
    get_detail() {
        const deal: creds = this.check_data()
        console.log(deal)
        this.setState({ name: deal.name, rollno: deal.rollno })
        console.log(this.state)

    }
    check_data() {
        console.log(this.state.database)
        this.state.database.find((element) => {
            
            console.log(element)
            if (true) {
                return element
            }
        })
        return {
            username: this.state.username,
            password: this.state.password,
            name: "",
            rollno: ""
        }
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