import { render } from '@testing-library/react';
import React from 'react'
import '../styles.scss'

class LandingPage extends React.Component{
  constructor(props){
    super(props);
  }

render() {
    return(
        <div>
         <h1>Hello world</h1>
        </div>
    )
};
}

export default LandingPage;