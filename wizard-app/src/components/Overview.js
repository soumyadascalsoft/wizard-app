import React from 'react'
import "../styles/overview.css"

const Overview = (props) => {
  return (
    <div className='overview-display-container'>
        <p className='text-area'>Name: {props.name}</p>
        <p className='text-area'>IP Adress: {props.ipAddress}</p>
    </div>
  )
}

export default Overview