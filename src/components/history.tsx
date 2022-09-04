import React, { Component } from 'react'
import './history.css'
interface compaint {
    _id: string,
    name: string,
    rollno: string,
    desp: string,
    status: string
}
interface HistoryProps {
    complaints: compaint[];
}

interface HistoryState {
    approval:boolean

}

class History extends React.Component<HistoryProps, HistoryState> {
    constructor(props: HistoryProps) {
        super(props)
    }
    render() {
        return (
            <div className='hist-page'>
                <div className="container">
                    <a className="sub-title">Complaint History</a>
                    <div className="table-container">
                        <table className="sub-table">
                            <tr>
                                <td className="table-head">Name</td>
                                <td className="table-head">Roll.NO</td>
                                <td className="table-head">descp</td>
                                <td className="table-head">status</td>
                            </tr>
                            {this.props.complaints.map((row) => (
                                <tr className="table-row">
                                    <td className="cols" style={{ width: "25%", border: "10%" }}>
                                        {row.name}
                                    </td>
                                    <td className="cols" style={{ width: "15%" }}>
                                        {row.rollno}
                                    </td>
                                    <td className="cols" style={{ width: "45%" }}>
                                        {row.desp}
                                    </td>
                                    <td className="cols" style={{ width: "25%" }}>
                                        {row.status}
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default History;