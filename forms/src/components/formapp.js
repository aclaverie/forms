import React from 'react';
import { useState } from 'react';
import {Input, Checkbox, RadioGroup, Radio } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



function FormApp() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        
        framework: "react",
        concerns: "",
        feedback: "",
    });
    const [transport, setTransport] = useState([
        'walk : false',
        'bike : false',
        'car: false',
        'boat: false',
        'train: false',
    ]);

    function handleCheck(event) {
        setTransport(prevTransport => {
            const index = prevTransport.indexOf(event.target.value);
            console.log(index);
            return [...prevTransport]
        })
    }

    function handledChange(event){
        setFormData(prevFormData => {
            // let man = [prevFormData];
            // switch ([event.target.name]) {
            //     case 'walk':
            //         console.log(event.target.checked)
            //         man.walk = event.target.checked;
            //         break;
            //     case 'bike':
            //         man.bike = event.target.checked;
            //         break; 
            //     case 'car':
            //         man.car = event.target.checked;
            //         break; 
            //     case 'boat':
            //         man.boat = event.target.checked;
            //         break; 
            //     case 'train':
            //         man.train = event.target.checked;
            //         break;
            // }
            // prevFormData = man;
            return{
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    console.log(formData.walk);
    // const transport = [];
    // transport['walk'] = formData.walk;
    // transport['bike'] = formData.bike;
    // transport['car'] = formData.car;
    // transport['boat'] = formData.boat;
    // transport['train'] = formData.train;

    // let tran = "";
    // console.log(transport.walk)
    // const mark = transport.forEach((value)=>{  
    //     console.log("LOL"+value)                           
        // switch (value) {
        //     case 'true':
        //         console.log(key);
        //         tran = key;
        //         break;                            
        //     default:
        //         tran = 'no transport';
        //         break;
        // }
        // return tran;
    // })
    // console.log(tran);
    const filledForm =
            <h6>
                <p>Name: {formData.firstName +" "+ formData.lastName}</p>
                <p>Email: {formData.email}</p>
                <p>Walk: {formData.walk} Bike: {formData.bike} Car: {formData.car} Boat: {formData.boat} Train: {formData.train}</p>
                <p></p>{
                  +" "+
                     +" "+
                   +" "+
                   +" "+
                   +" "+
                   +" "+
                   +" "+
                formData.framework +" "+
                formData.concerns  +" "+
                formData.feedback
                }
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
                            control={<Checkbox onChange={handleCheck} name="walk" defaultValue={transport.walk}    />}
                            label='Walk' />
                            <FormControlLabel
                            control={<Checkbox onChange={handleCheck} name="bike" defaultValue={transport.bike}    />}
                            label='Bike' />
                            <FormControlLabel
                            control={<Checkbox onChange={handleCheck} name="car" defaultValue={transport.car}     />}
                            label='Car' />
                            <FormControlLabel
                            control={<Checkbox onChange={handleCheck} name="boat" defaultValue={transport.boat}    />}
                            label='Boat' />
                            <FormControlLabel
                            control={<Checkbox onChange={handleCheck} name="train" defaultValue={transport.train}   />}
                            label='Train' />
                        </FormGroup>
                    </FormControl>
                </fieldset>
                <fieldset className='framework'>
                    <legend>Framework:</legend>
                    <FormControl sx={{ m: 1 }}>
                        {/* <RadioGroup row name='framework' defaultValue={formData.framework} onChange={handledChange} >
                            <FormControlLabel control={<Radio defaultValue='react'   />}  label='React JS'   />
                            <FormControlLabel control={<Radio defaultValue='vue'     />}  label='Vue'        />
                            <FormControlLabel control={<Radio defaultValue='angular' />}  label='Angular JS' />
                        </RadioGroup> */}
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