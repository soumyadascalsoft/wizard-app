

import React from 'react';
import {isIPAddress} from 'ip-address-validator'

import "../styles/ip.css";


const Ip = ({formData, setFormData}) => {
    function handleChange(event){
        setFormData({...formData, ipAddress: event.target.value, isIPadress: isIPAddress(event.target.value)})
        
    }
  return (
    <div className='IP-address-container'>
        <input type='text' placeholder='Enter IP address' value={formData.ipAddress} onChange={handleChange}/>
    </div>
  )
}

export default Ip