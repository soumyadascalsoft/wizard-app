

import React from 'react'
import "../styles/name.css";

const Name = ({formData, setFormData}) => {
    function isEmpty(value){
      if(value===''){
        return true
      } else{
        return false
      }
    }
    function handleChange(event){  
        return setFormData({...formData, name: event.target.value, isNameNull: isEmpty(event.target.value)})
    }
  return (
    <form className='name-container'>
        <div>
        <input type='text' placeholder='Enter Name' value={formData.name} onChange={handleChange} />
        </div>
        
    </form>
  )
}

export default Name