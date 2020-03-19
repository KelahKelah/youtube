import React, { useState, useEffect } from 'react';
import Layout from '../../component/layout/layout';
import Axios from 'axios';
import ListApplicants from '../../component/listApplicants/listApplicants';

const Subcription = (props) => {
    const [viewMode, setViewMode] = useState('day')
    const [applicants, setApplicants] = useState([]);
    const [errorMessage, setErrorMessage] = useState({ success:{ message: '', type: false}, error : { message: '', type: false } });

useEffect(()=>{
    setViewMode(props.mode)
},[props.mode])

useEffect(() => {
    
    Axios.get('http://learnable.genesystechhub.com/get/allApplicants')
    .then(res => {
        if(res.status === 200) {
            setErrorMessage({success:{message: '', type: true}})
            setApplicants([...res.data.applicants])
        } else {
            setErrorMessage({error:{message: '' , type : false}})
        }           
        
    })  
},[])
    // .catch(function (error) {
    //     console.log(error);
    // })
        return(
            <div style={{background:viewMode==="night"?"black": "white"}}>
                <ListApplicants data={applicants} />
                {/* {console.log(applicants)} */}
            </div>            
        )
}
export default Layout(Subcription);




