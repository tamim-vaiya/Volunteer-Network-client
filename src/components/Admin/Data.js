import { Grid } from '@material-ui/core';
import React from 'react';
import upload from '../../logos/cloud-upload-outline 1.png';
import './Data.css';

const Data = () => {
  return (
    <div>
      <Grid  item xs={9} >
            <h3 style={{marginLeft:'20px', color:'#0C0C0C'}}>Add Event</h3>
            <Grid  justify='space-around' container item md={12} spacing='7'   
                className='addNewEventBox'>
                <Grid item md={6} >
                    <div>
                        <b>Event title</b><br/>
                        <input placeholder='Enter title' className='event-input' id='title' type="text"/>
                    </div>
                    <div>
                        <b>Description</b><br/>
                        <textarea className='event-textarea' placeholder='Enter description' name="description" id="description" 
                        cols="40" rows="7"></textarea>
                    </div>
                </Grid>
                <Grid item md={6} >
                    <div>
                        <b>Event date</b><br/>
                        <input placeholder='Event date' className='event-input' id='date' type="calendar"/>
                    </div>
                    <div>
                        <b>Banner</b><br/>
                            <div className='file-upload' style={{background:`url(${upload}) no-repeat`, backgroundSize:'30px 30px'}}>
                                <input type="file"/>
                                <b style={{color:'#0084FF', margin:'0'}}>Upload image</b>
                            </div>
                    
                       
                    </div>
                </Grid>
            </Grid>
            <button style={{float:'right', height:'40px',marginTop:'40px', padding:'10px 40px', borderRadius:'5px'}} 
                className='blue-button'>
                    <b>Submit</b>
            </button>
        </Grid>
    </div>
  );
};

export default Data;
