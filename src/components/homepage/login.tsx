import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
export default () => (
  <Grid centered columns={2}>
    <Grid.Column>
      <Header as="h2" textAlign="center">
        Login
      </Header>
      <Segment>
        <Form size="large">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Email address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          <Button color="blue" fluid size="large">
            Login
          </Button>
        </Form>
      </Segment>
      <Message>
        Not registered yet? <a href="#">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
);





































// import React,  {Component} from 'react'

// class SignIn extends Component {
//     state = {
//         email: '',
//         password:''

//     }
//     //capturing already typed in email or password - 
//     // this is to update the states of the value of whatever the element is being changed
    
//     handleChange = (e: any) => {
//         if ( e.target !== null)
//         this.setState({
//             [e.target.id]: e.target.value 
//         })     
//         return true 
//     }
//     handleSubmit = (e: any) => {
//         e.preventDefault();
//         console.log(this.state);        
//     }
//     render () {
//         return (
//             <div className="container">
//                 <form onSubmit={this.handleSubmit} className="white">
//                     <h5 className="grey-text text-darken-3"> Sign In</h5>
//                     <div className="input-field">
//                         <label htmlFor="email"> Email</label>
//                         <input type="email" id="email" onChange={this.handleChange}/>
//                     </div>
//                     <div className="input-field">
//                         <label htmlFor="password"> Password</label>
//                         <input type="password" id="password" onChange={this.handleChange}/>
//                     </div>
//                     <div className="input-field">
//                         <button className="btn pink lighten-1 z-depth-0"> Login</button>
//                     </div>
//                 </form>
//             </div>
            
//         )
//     }
// }

// export default SignIn