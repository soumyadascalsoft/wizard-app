import React, { useState } from 'react'
import Ip from './Ip';
import Name from './Name';
import Overview from './Overview';

const Steper = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        ipAddress: ""
    })
    const FromTitles = ["Name", "IP Address", "Overview"];

    const FormDisplay = () =>{
        if(page===0){
            return <Name formData={formData} setFormData={setFormData} />
        }
        else if(page===1){
            return <Ip formData={formData} setFormData={setFormData} />
        } 
        else {
            return <Overview />
        }
    }

    function handlePrev(){
        return setPage(page-1)
    }
    function handleNext(){
            if(page === FromTitles.length - 1 ){
                alert("Submitted!")
                console.log(formData)
            }
            else{
                setPage(page+1)
            }
        
    }

  return (
    <div className='steper-container'>
        <div className='progress-bar'></div>
        <div className='from-cointainer'>
            <div className='header'>
                <h1>{FromTitles[page]}</h1>
            </div>
            <div className='body'>
                {FormDisplay()}
            </div>
            <div className='footer'>
                <button disabled = {page === 0} onClick={()=>handlePrev()}>PREV</button>
                <button onClick={()=>handleNext()}>
                    {page=== FromTitles.length-1 ? "SUBMIT" : "NEXT"}
                </button>
            </div>

        </div>

    </div>
  )
}

export default Steper