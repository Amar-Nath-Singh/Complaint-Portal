import React, { Component } from 'react'
import axios, { AxiosRequestConfig } from 'axios'
import './card.css'
import {Link} from 'react-router-dom'
interface CardProps {
    _id: string,
    name: string,
    rollno: string,
    desp: string,
    status: string
}

interface CardState {

}

class Card extends React.Component<CardProps, CardState> {
    constructor(props: CardProps) {
        super(props)
    }
    render() {
        return (
            <div className='Card-container'>
                <div className='Card-Box'>
                    <button className='delete-button' onClick={(e) => axios
                        .delete("http://localhost:5000/dataset/delete/"+ this.props._id)
                        .then((response) => <Link to={{pathname:"/complaint"}}></Link>)
                        .catch((error) => {
                            console.log(error);
                        }) 
                        
                        }>
                        <img
                            src="https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-red-cross-with-the-outline-coming-out-png-image_1761934.jpg"
                            alt="" style={{ width: "100%", height: "100%" }}></img>
                    </button>
                    <a className='person'>{this.props.name}</a>
                    <div className='desp-box'>
                        <p className='desp'>{this.props.desp}</p>
                    </div>
                    <a className='status'>{this.props.status}</a>
                </div>
            </div>
        );
    }
}

export default Card;