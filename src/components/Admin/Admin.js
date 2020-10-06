import React, { useContext, useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { UserContext } from '../../App';
import Data from './Data';
import LeftMenu from './LeftMenu';
import './Admin.css';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#F5F6FA",
      color: 'grey',
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: 'white',
      },
    },
  }))(TableRow);
  
  
const Admin = () => {
    const [user]=useContext(UserContext)
    const [allUserEvents, setAllUserEvents] = useState([])
    
    
    useEffect(()=>{
        
            fetch('https://still-brook-08941.herokuapp.com/allRegisteredEvents')
            .then(res=>res.json())
            .then(result=>setAllUserEvents(result))
       
    },[])

    const deleteEvent=(id)=>{
      fetch('https://still-brook-08941.herokuapp.com/deleteEvent',{
          method:'DELETE',
          headers:{
              'Content-Type':'application/json',
              id:id
          }
      })
      .then(res=>res.json())
      .then(result=>{
          const existedEvents = allUserEvents.filter(data=>data._id !== id)
          if(result){
              setAllUserEvents(existedEvents)
          }
      })

  }
   
    return (
        <Grid container item xs={12}>
            <Grid item md={2} >
                <LeftMenu></LeftMenu>
            </Grid>

            {
                user.clicked === 'allVolunteers' &&
                <Grid item md={9}  className='rightGrid'>
                <h3 id='admin-header'>Volunteer register list</h3>
                <TableContainer component={Paper} className='paper'>
                <Table aria-label="customized table" >
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">Name</StyledTableCell>
                        <StyledTableCell align="left">Email ID</StyledTableCell>
                        <StyledTableCell align="left">Registration Date</StyledTableCell>
                        <StyledTableCell align="left">Volunteer list</StyledTableCell>
                        <StyledTableCell align="left">Action</StyledTableCell>
                        
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {allUserEvents.map((event)=>{
                        return(
                            <StyledTableRow key={event._id}>
                        <StyledTableCell component="th" scope="row">
                            {event.name}
                        </StyledTableCell>
                        <StyledTableCell align="left">{event.email}</StyledTableCell>
                        <StyledTableCell align="left">{event.date}</StyledTableCell>
                        <StyledTableCell align="left">{event.eventName}</StyledTableCell>
                        <StyledTableCell align="left">
                            <DeleteForeverIcon 
                            onClick={()=>deleteEvent(event._id)} justify='center' style={{cursor:'pointer', color:'#f35d5d'}}>
                            </DeleteForeverIcon>
                        </StyledTableCell>
                        </StyledTableRow>
                        )
                        })
                    }
                    </TableBody>
                </Table>
                </TableContainer>
            </Grid>
            }
            {
                user.clicked === 'pushNewEvent' &&
                <Data></Data>
            }
        </Grid>
    );
};

export default Admin;