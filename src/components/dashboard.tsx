import * as React from 'react';
import { Component } from 'react';
import "./dashboard.css"
interface complaint {
    _id:string,
    name: string,
    rollno: string,
    desp: string,
    status: string
}
interface DashboardProps {
    complaints: complaint[]
}

interface DashboardState {

}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
    constructor(props: DashboardProps) {
        super(props)
    }
    render() {
        return (
            <div className='dashboard-box'>
                <p className="dashboard-head">Heading</p>
                <div className='complaint-box'>
                    <div className='complaint-strip'>
                        {this.props.complaints.map((complaint) =>
                            <div className='comp-detail'>
                                <p className='name'>{complaint.name}</p>
                                <p className='rollno'>{complaint.rollno}</p>
                                <p className='desp'>{complaint.desp}</p>
                                <p className='status'>{complaint.status}</p>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;