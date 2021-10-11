import { render } from '@testing-library/react'; 
import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Grid, Paper, TextField } from '@mui/material';
import "../styles.scss";
import { connect } from 'react-redux';
import actionCreators  from '../actions/actionCreators';
import postUsers from "../server/newUserRegPost"
class Registration extends React.Component{
    constructor(props){
        super(props);
      this.state={
          userdetails:{
   
             firstName:" ",
             lastName:" ",
             userName:"",
             email:" ",
             password:" ",
             skills:" ",
          }
      }
    }


    handleSubmit = (e)=>{
     e.preventDefault();
     this.props.dispatch(actionCreators.userRegistration(this.state.userdetails))
     postUsers(this.state.userdetails);
    }
      render(){
          return(
            <div className="login-root-class">
            <Grid container className="grid-root" spacing={3}>
               <Grid item xs={3}></Grid>
               <Grid className="login-component" item xs={6}>
                 <Paper  elevation={3} className="paper-root-class">
                 <h1>Registration</h1>
                   <form className="login-form-root-class">
                      <TextField 
                        variant="outlined"
                        id="outlined-basic"
                        label="firstname"
                        onChange={(e)=>{
                         this.setState((prevState)=>({
                           userdetails:{
                               ...prevState.userdetails,
                               firstName:e.target.value
                           }
                         }))
                        }}
                        required
                      />
                      <TextField 
                        variant="outlined"
                        id="outlined-basic"
                        label="lastname"
                        onChange={(e)=>{
                         this.setState((prevState)=>({
                           userdetails:{
                               ...prevState.userdetails,
                               lastName:e.target.value
                           }
                         }))
                        }}
                        required
                      />
                      <TextField 
                        variant="outlined"
                        id="outlined-basic"
                        label="UserName"
                        onChange={(e)=>{
                         this.setState((prevState)=>({
                           userdetails:{
                               ...prevState.userdetails,
                               userName:e.target.value
                           }
                         }))
                        }}
                        required
                      />
                      <TextField 
                        variant="outlined"
                        id="outlined-basic"
                        label="email"
                        type="email"
                        onChange={(e)=>{
                         this.setState((prevState)=>({
                           userdetails:{
                               ...prevState.userdetails,
                               email:e.target.value
                           }
                         }))
                        }}
                        required
                      />
                       <TextField 
                        onChange={(e)=>{
                          this.setState((prevState)=>({
                              userdetails:{
                                  ...prevState.userdetails,
                                     password:e.target.value
                              }
                          }))
                        }}
                        required
                        label="password"        
                      />
                       <TextField 
                        onChange={(e)=>{
                          this.setState((prevState)=>({
                              userdetails:{
                                  ...prevState.userdetails,
                                     skills:e.target.value
                              }
                          }))
                        }}
                        required
                        label="skills"        
                      />
                   </form>
                   <div className="button-class">
                      <Button 
                        size="medium"
                        variant="outlined"
                        onClick={this.handleSubmit}
                      > Register
                      </Button>
                      <Button
                        variant="contained"
                        size="medium"
                      ><Link  style={{color:'white'}} to="/Login">Login</Link></Button>
                   </div>
                 </Paper>
               </Grid>
               <Grid item xs={3}></Grid>
           </Grid>
       </div>
          )
      }
    }

    const mapStateToProps = (userData)=>{
      console.log(userData);
    }

    /*const mapDispatchToProps=(dispatch)=>{
      userdetails:()=>{

      }
    }*/

export default  connect(mapStateToProps)(Registration);