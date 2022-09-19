import React, { useEffect, useState } from 'react'
import Ip from './Ip';
import Name from './Name';
import Overview from './Overview';
import "../styles/steper.css";
import SteperControl from './SteperControl';
import axios from 'axios';

const Steper = () => {
    /* progress bar */
    const [width,setWidth] = useState(0)
    const [active, setActive] = useState(1)
    const [circle, setCircle] = useState(3);
    const step = []
    for(let i=0;i<circle;i++){
        step.push(<SteperControl className={i<active?"circle-active":"circle"} key={i}>{i+1}</SteperControl>)
    }
    useEffect(()=>{
        setWidth(100/(circle+1)*active)
    },[circle,active])
    
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        isNameNull: true,
        ipAddress: "",
        isIPadress: false

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
            return <Overview name = {formData.name} ipAddress = {formData.ipAddress}/>
        }
    }

    function handlePrev(){
         setPage(page-1)
         /* console.log(formData) */
         setActive(active-1)

    }
    function handleNext(){
            if(page === FromTitles.length - 1 ){
                alert("Submitted!")
                /* console.log(formData.name)
                console.log(formData.ipAddress) */
                
                axios.post("http://localhost:5050/data",{
                    name: formData.name,
                    ipAddress: formData.ipAddress

                })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                  /* axios({
                    method: 'post',
                    url: 'http://localhost:5050/data',
                    data: {
                        name: formData.name,
                        ipAddress: formData.ipAddress
                    } 
                  }); */

            }
            else if((formData.isNameNull==false && page == 0) || (formData.isIPadress==true && page == 1)){
                setPage(page+1)
                /* console.log(formData) */
                setActive(active+1)
            }
        
    }

  return (
    <div className='steper-container'>
        <div className='progress-bar'>
            <div className='progress' style={{width: width+"%"}}></div>
            {step}
        </div>
        <div className='form-container'>
            <div className='header'>
                <h1>{FromTitles[page]}</h1>
            </div>
            <div className='body'>
                {FormDisplay()}
            </div>
            <div className='footer'>
                <button className='btn' disabled = {page === 0} onClick={()=>handlePrev()}>PREV</button>
                <button className='btn' onClick={()=>handleNext()}>
                    {page=== FromTitles.length-1 ? "SUBMIT" : "NEXT"}
                </button>
            </div>

        </div>

    </div>
  )
}

export default Steper