import React from 'react';

const ListApplicants = (props) => {
    console.log("groovy", props)
    const listApplicants = props.data.length > 0? (props.data.map((d,i) => {
        console.log('checking new ', d)

        return ( 
            <table key={i} style={tableStyle} className={'table table-hover table-bordered'}>
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
                    <tr>
                        <td>{d.fullName}</td>
                        <td>{d.email}</td>
                        <td>{d.phoneNumber}</td>
                        <td>{d.sex}</td>
                        <td>{d.address}</td>
                        <td>{d.dateOfBirth}</td>
                    </tr>
                </tbody>
            </table> 
            
        )
    })
        
    ) : (
    <p> No lists to display</p>
    )

    return(
        <div>
            {console.log('this one', listApplicants)}
            {listApplicants}
        </div>
    )
    
}  
const tableStyle = {
    border: 'solid 1px black'
}
export default ListApplicants;                                                                                                                                                                                                                                     