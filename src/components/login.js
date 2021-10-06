import { render } from '@testing-library/react'; 
import React from 'react';
import { Button, Grid, Paper, TextField } from '@mui/material';
import "../styles.scss";
class Login extends React.Component{
    constructor(props){
        super(props)
      this.state={
          userdetails:{
              userName: " ",
              password:" ",
              alreadyRegistered:false,
          },
          errors:{
              emptyerr:"please enter a value",
              errvalidationmsg:"user is not registerd"
          }
        
      }
    }
      render(){
          return(
            <div className="login-root-class">
                 <Grid container className="grid-root" spacing={3}>
                    <Grid item xs={3}></Grid>
                    <Grid className="login-component" item xs={6}>
                      <Paper fullwidth elevation={3} className="paper-root-class">
                      <h1>Login</h1>
                        <form className="login-form-root-class">
                           <TextField 
                             fullwidth
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
                             fullwidth
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
                        </form>
                        <div className="button-class">
                           <Button
                             variant="contained"
                             size="medium"
                           >Login</Button>
                           <Button 
                             size="medium"
                             variant="outlined"
                           > Register
                           </Button>
                        </div>
                      </Paper>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </div>
          )
      }
    }
export default Login;