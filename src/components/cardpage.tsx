import * as React from 'react';
import { Component } from 'react';
import Card from './card'
import './cardpage.css'

interface compaint {
    _id:string,
    name: string,
    rollno: string,
    desp: string,
    status: string
}
interface CardPageProps {
    complaints: compaint[]
}
interface CardPageState {

}

class CardPage extends React.Component<CardPageProps, CardPageState> {
    constructor(props:CardPageProps){
        super(props)
    }
    render() {
        return (
            <div className='CardPage-App'>
                <a className='header'>Complaints</a>
                <div className='cards-container'>
                    {this.props.complaints.map((card) => <Card _id={card._id} name={card.name} rollno={card.rollno} desp={card.desp} status={card.status}></Card>)}
                </div>
            </div>
        );
    }
}

export default CardPage;