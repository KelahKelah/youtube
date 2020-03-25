import React, { useState, useEffect } from 'react';
import Layout from '../../component/layout/layout';
import Axios from 'axios';
import ListApplicants from '../../component/listApplicants/listApplicants';

const Subcription = (props) => {
    const [viewMode, setViewMode] = useState('day');
    const [applicants, setApplicants] = useState([]);
    const [message, setMessage] = useState({message: ''})
    const [isLoading, setIsLoading] = useState('false');
    const [errorMessage, setErrorMessage] = useState({ success:{ message: '', type: false}, error : { message: '', type: false } });

useEffect(()=>{
    setViewMode(props.mode)
},[props.mode])

useEffect(() => {
    // setIsLoading('true')
    
    Axios.get('http://learnable.genesystechhub.com/get/allApplicants')
    .then(res => {
        console.log('my Res', res)
        if(res.status === 200) {
            // setIsLoading(false)
            // setMessage({message: '' })
            setApplicants([...res.data.applicants])
        } else {
            setErrorMessage({error:{message: '' , type : false}})
        }           
        
    })  
    .catch(function (error) {
            console.log(error);
                })
},[])
    
        return(
            <div style={{background:viewMode==="night"?"black": "white"}}>
                <ListApplicants data={applicants} />
                {/* {console.log(applicants)} */}
            </div>            
        )
}
export default Layout(Subcription);




