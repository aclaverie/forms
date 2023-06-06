import React from 'react';
import { useState } from 'react';
import {Input, Checkbox, RadioGroup, Radio } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



function FormApp() {
    const [formData, setFormData] = useState({
        firstName   : "",
        lastName    : "",
        email       : "",
        walk        : false,
        bike        : false,
        car         : false,
        boat        : false,
        train       : false,
        framework   : "react",
        concerns    : "",
        feedback    : "",
    });
    const [transport, setTransport] = useState([]);

    function handleCheck(e) {
        console.log([e.target.name]+": "+e.target.value)
        // setTransport(prevTransport => {
        //     const index = prevTransport.indexOf(event.target.value);
        //     console.log(index);
        //     return [...prevTransport]
        // })
    }

    function handledChange(e){
        console.log([e.target.name]+": "+e.target.value)
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }
    
   
    const filledForm =
            <h6>
                <p>Name: {formData.firstName +" "+ formData.lastName}</p>
                <p>Email: {formData.email}</p>
                <p>Walk: {formData.walk} Bike: {formData.bike} Car: {formData.car} Boat: {formData.boat} Train: {formData.train}</p>
                <p>Framework: {formData.framework}</p>
                <p>Concerns: {formData.concerns}</p>
                <p>Feedback: {formData.feedback}</p>
            </h6>
                
    return (
        <div className="app-box">
            <div className="app-notification">
                {filledForm}
            </div>
            <form>
                <fieldset className='personal'>
                    <legend>Personal:</legend>
                    <Input onChange={handledChange} placeholder="First Name" variant="outlined" name="firstName" defaultValue={formData.firstName} />
                    <Input onChange={handledChange} placeholder="Last Name" variant="outlined" name="lastName" defaultValue={formData.lastName} />
                    <Input onChange={handledChange} placeholder="Email" variant="outlined" name="email" defaultValue={formData.email} />
                    {/*Think about using a calender here*/}
                </fieldset>
                <fieldset className='transport'>
                    <legend>Transport:</legend>
                    <FormControl sx={{ m: 1 }}>
                        <FormGroup row>
                            <FormControlLabel
                            control={<Checkbox />}
                            onChange={handledChange}
                            value={transport.walk}  
                            label='Walk'
                            name='walk' />
                            <FormControlLabel
                            control={<Checkbox />}
                            onChange={handledChange}
                            value={transport.bike}
                            label='Bike'
                            name="bike" />
                            <FormControlLabel
                            control={<Checkbox />}
                            value={transport.car}
                            onChange={handledChange}
                            label='Car' 
                            name="car" />
                            <FormControlLabel
                            control={<Checkbox />}
                            onChange={handledChange}  
                            value={transport.boat}    
                            label='Boat'
                            name="boat" />
                            <FormControlLabel
                            control={<Checkbox />}
                            onChange={handledChange}  
                            value={transport.train}   
                            label='Train' 
                            name="train" />
                        </FormGroup>
                    </FormControl>
                </fieldset>
                <fieldset className='framework'>
                    <legend>Framework:</legend>
                    <FormControl sx={{ m: 1 }}>
                        <RadioGroup row name='framework' value={formData.framework} onChange={handledChange} >
                            <FormControlLabel control={<Radio />} value='react'   label='React JS'   />
                            <FormControlLabel control={<Radio />} value='vue'     label='Vue'        />
                            <FormControlLabel control={<Radio />} value='angular' label='Angular JS' />
                        </RadioGroup>
                    </FormControl>               
                </fieldset>
                <fieldset className='concerns'>
                    <legend>Concerns:</legend>
                    {/* <FormControl sx={{ m: 1 }}> */}
                        <TextareaAutosize
                        onChange={handledChange}
                        placeholder="Share your concerns"
                        minRows={"4"} cols="100" 
                        defaultValue={formData.concerns} 
                        name="concerns"  />                        
                    {/* </FormControl>      */}
                </fieldset>
                <fieldset className='feedback'>
                    <legend>Feedback:</legend>
                    <FormControl sx={{ m: 1 }}>
                        <TextareaAutosize
                        onChange={handledChange}
                        placeholder="Tell us what you think of the process"  
                        minRows={"4"} cols="100" 
                        defaultValue={formData.feedback}
                        name="feedback"  />                        
                    </FormControl>
                </fieldset>
            </form>
        </div>
    )
}


export default FormApp;