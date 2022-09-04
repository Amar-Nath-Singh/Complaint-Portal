import * as React from 'react';
import { Component } from 'react';
import axios from 'axios';
import './addcomplaint.css';
interface AddComplaintProps {

}

interface AddComplaintState {

}

class AddComplaint extends React.Component<AddComplaintProps, AddComplaintState> {
    state = { status: "pending", name: "", rollno: "", desp: "" }
    visi = false
    handleClick = (e: React.MouseEvent<HTMLElement>) => {
        axios
            .post("http://localhost:5000/dataset/addcomplaint", this.state)
            .then((res) => console.log(res.data));
        this.visi = true
    }
    render() {
        return (
            <div className='add-complaint'>
                <input type="text" onClick={(e)=> {this.visi = false; this.setState({name:"",rollno:"",desp:""})}} placeholder='Name' onChange={event => this.setState({ name: event.target.value })} value={this.state.name}></input>
                <input type="text" onClick={(e)=> {this.visi = false; this.setState({name:"",rollno:"",desp:""})}} placeholder='rollno' onChange={event => this.setState({ rollno: event.target.value })} value={this.state.rollno}></input>
                <input type="text" onClick={(e)=> {this.visi = false; this.setState({name:"",rollno:"",desp:""})}}placeholder='desp' onChange={event => this.setState({ desp: event.target.value })} value={this.state.desp}></input>
                <button className="btn" onClick={this.handleClick}>Submit</button>
                <a className='Add-info' style={{ visibility: this.visi ? "visible" : "hidden" }}>
                    Data Added.
                </a>
            </div >
        );
    }
}

export default AddComplaint;