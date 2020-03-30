import React, { Fragment } from 'react';

const ListApplicants = (props) => {
    console.log("groovy", props)
    const listApplicants = props.data.length > 0? (props.data.map((d,i) => {
        console.log('checking new ', d)

        return ( 
            <tr kay={i}>
                <td>{d.fullName}</td>
                <td>{d.email}</td>
                <td>{d.phoneNumber}</td>
                <td>{d.sex}</td>
                <td>{d.address}</td>
                <td>{d.dateOfBirth}</td>
            </tr>
        )
    })
        
    ) : (
    <p> No Tables to display</p>
    )

    return(
        <Fragment>
            <table style={tableStyle} className={'table table-hover'}>
                <thead>
                    <tr>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Sex</th>
                        <th>Address</th>
                        <th>Date Of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {listApplicants}
                </tbody>
            </table>
        </Fragment>
    )
    
}  
const tableStyle = {
    border: 'solid 1px black'
}
export default ListApplicants;                                                                                                                                                                                                                                     