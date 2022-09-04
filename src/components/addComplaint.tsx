import * as React from 'react';
import { Component } from 'react';
import axios from 'axios'
interface AddComplaintProps {

}

interface AddComplaintState {

}

class AddComplaint extends React.Component<AddComplaintProps, AddComplaintState> {
    state = {status:"pending",}
    handleClick = (e: React.MouseEvent<HTMLElement>) => {
        axios
            .post("http://localhost:5000/dataset/addcomplaint", this.state)
            .then((res) => console.log(res.data));
        
    }
    render() {
        return (
            <div className='add-complaint'>
                <input placeholder='Name' onChange={event => this.setState({ name: event.target.value })}></input>
                <input placeholder='rollno' onChange={event => this.setState({ rollno: event.target.value })}></input>
                <input placeholder='desp' onChange={event => this.setState({ desp: event.target.value })}></input>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}

export default AddComplaint;