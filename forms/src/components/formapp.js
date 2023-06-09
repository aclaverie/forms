import React from 'react';
import { useState } from 'react';
import {Input, Checkbox, RadioGroup, Radio, Button } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


function FormApp() {
    const [formData, setFormData] = useState({
        firstName   : "",
        lastName    : "",
        email       : "",
        walk        : true,
        bike        : false,
        car         : false,
        boat        : false,
        train       : false,
        framework   : "",
        concerns    : "",
        feedback    : "",
    });
    
    function handledChange(e){
        const {name, value, type, checked} = e.target;
        // console.log(name+": "+((type === "checkbox") ? checked : value))
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        });
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        //You can always pass the formData Object to an API connected to a database 
        //or seralize to a text file and save.
    }
       
    const filledForm =
            <h3>
                <p align="left">Name: {formData.firstName +" "+ formData.lastName}<br />
                Email: {formData.email}<br />
                Walk: {(formData.walk)?"Yes":"No"}<br />
                Bike: {formData.bike?"Yes":"No"} <br />
                Car: {formData.car?"Yes":"No"} <br />
                Boat: {formData.boat?"Yes":"No"} <br />
                Train: {formData.train?"Yes":"No"}<br />
                Framework: {formData.framework}<br />
                Concerns: {formData.concerns}<br />
                Feedback: {formData.feedback}<br />
                </p>
            </h3>
                
    return (
        <div className="app-box">
            <div className="app-notification">
                {filledForm}
            </div>
            <form >
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
                            checked={formData.walk}  
                            label='Walk'
                            name="walk"
                            id="walk" />
                            <FormControlLabel
                            control={<Checkbox />}
                            onChange={handledChange}
                            checked={formData.bike}
                            label='Bike'
                            name="bike" />
                            <FormControlLabel
                            control={<Checkbox />}
                            checked={formData.car}
                            onChange={handledChange}
                            label='Car' 
                            name="car" />
                            <FormControlLabel
                            control={<Checkbox />}
                            onChange={handledChange}  
                            checked={formData.boat}    
                            label='Boat'
                            name="boat" />
                            <FormControlLabel
                            control={<Checkbox />}
                            onChange={handledChange}  
                            checked={formData.train}   
                            label='Train' 
                            name="train" />
                        </FormGroup>
                    </FormControl>
                </fieldset>
                <fieldset className='framework'>
                    <legend>Framework:</legend>
                    <FormControl sx={{ m: 1 }}>
                        <RadioGroup row  >
                            <FormControlLabel control={<Radio />} name='framework' value='react'   checked={formData.framework === "react"} onChange={handledChange} label='React JS'   />
                            <FormControlLabel control={<Radio />} name='framework' value='vue'     checked={formData.framework === "vue"} onChange={handledChange} label='Vue'        />
                            <FormControlLabel control={<Radio />} name='framework' value='angular' checked={formData.framework === "angular"} onChange={handledChange} label='Angular JS' />
                        </RadioGroup>
                    </FormControl>               
                </fieldset>
                <fieldset className='concerns'>
                    <legend>Concerns:</legend>
                    <FormControl sx={{ m: 1, minWidth: 250 }} variant="standard">
                        <InputLabel id="concerns-label">Concerns</InputLabel>
                        <Select 
                            labelId='concerns-label'
                            id='concerns'
                            value={formData.concerns}
                            onChange={handledChange}
                            name="concerns"
                        >
                            <MenuItem  value='funding'    >Funding</MenuItem>
                            <MenuItem  value='delivery'  >Delivery</MenuItem>
                            <MenuItem  value='anxiety'    >Anxiety</MenuItem>
                            <MenuItem  value='skill'      >Skill</MenuItem>
                        </Select>
                    </FormControl>                    
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
                <Button variant="outlined" onClick={handleSubmit}> Submit </Button>
            </form>
           
        </div>
    )
}


export default FormApp;