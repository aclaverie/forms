import React from 'react';
import { useState } from 'react';
import {TextField, Checkbox, RadioGroup, Radio } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



function FormApp() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        bike: false,
        car: false,
        boat: false,
        train: true,
        framework: "react",
    })


  return (
    <div className="app-box">
        <div className="app-notification">
            <h4>Notifications</h4>
        </div>
        <form>
            <fieldset className='personal'>
                <legend>Personal:</legend>
                <TextField type="text"  label="First Name" variant="outlined" name="firstName" value={formData.firstName} /><br /><br />
                <TextField type="text"  label="Last Name" variant="outlined" name="lastName" value={formData.lastName} /><br /><br />
                <TextField type="email" label="Email" variant="outlined" name="email" value={formData.email} />
                {/*Think about using a calender here*/}
            </fieldset>
            <fieldset className='transport'>
                <legend>Transport:</legend>
                <FormControl sx={{ m: 1 }}>
                    <FormGroup row>
                        <FormControlLabel 
                            control={<Checkbox type="checkbox" name="bike" value={formData.bike} />}
                            label='Bike' >
                        </FormControlLabel>
                        <FormControlLabel 
                            control={<Checkbox type="checkbox" name="car" value={formData.car} />}
                            label='Car' >
                        </FormControlLabel>
                        <FormControlLabel 
                            control={<Checkbox type="checkbox" name="boat" value={formData.boat} />}
                            label='Boat' >
                        </FormControlLabel>
                        <FormControlLabel 
                            control={<Checkbox type="checkbox" name="train" value={formData.train} />}
                            label='Train' >
                        </FormControlLabel>                    
                    </FormGroup>
                </FormControl>
            </fieldset>
            <fieldset className='framework'>
                <legend>Framework:</legend>
                <FormControl sx={{ m: 1 }}>
                    <RadioGroup row name="framework" defaultValue={formData.framework} onChange={''}>
                        <FormControlLabel control={<Radio />} value="react" label='React JS' />
                        <FormControlLabel control={<Radio />} value="vue" label='Vue' />
                        <FormControlLabel control={<Radio />} value="angular" label='Angular JS' />
                    </RadioGroup>
                </FormControl>               
            </fieldset>
            <fieldset className='comments'>
                <legend>Concerns:</legend>
                <textarea id="w3review" name="w3review" rows="4" cols="100">
                    At w3schools.com you will learn how to make a website. 
                    They offer free tutorials in all web development technologies.
                </textarea>
            </fieldset>
            <fieldset className='feedback'>
                <legend>Feedback:</legend>
                <textarea id="w3review" name="w3review" rows="4" cols="100">
                    At w3schools.com you will learn how to make a website. 
                    They offer free tutorials in all web development technologies.
                </textarea>
            </fieldset>
        </form>
    </div>
  )
}

export default FormApp;