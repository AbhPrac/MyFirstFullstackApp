import { render } from '@testing-library/react'; 
import React from 'react';
import { Button, Grid, Paper, TextField } from '@mui/material';
import "../styles.scss";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import actionCreators  from "../actions/actionCreators"
import {getUser,getErrors,getUsersPending} from  '../reducer/reducer'
import fetchProducts from "../server/fetchUserInfo"


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

    componentDidMount(){

      this.props.dispatch(fetchProducts());
      console.log("this one is called");
    }
    handleSubmit=(e)=>{
      this.props.dispatch(actionCreators.userLogin(this.state.userdetails));
    }
      render(){
        console.log(this.props);
          return(
            <div className="login-root-class">
                 <Grid container className="grid-root" spacing={3}>
                    <Grid item xs={3}></Grid>
                    <Grid className="login-component" item xs={6}>
                      <Paper  elevation={3} className="paper-root-class">
                      <h1>Login</h1>
                        <form className="login-form-root-class">
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
                             onClick={this.handleSubmit}
                           >Login</Button>
                           <Button 
                             size="medium"
                             variant="outlined"
                           > <Link to="/Registration">Register</Link>
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

  const mapStateToProps=(userdata)=>{
    return {
     error : getErrors(userdata),
     userinfo:getUser(userdata),
     statusGettingData:getUsersPending(userdata)
    }
  }
export default connect(mapStateToProps)(Login);