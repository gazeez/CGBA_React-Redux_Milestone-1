import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, } from 'semantic-ui-react';


class Login extends Component {
    state = {
        email: '',
        password: ''

    }

    //capturing already typed in email or password - 
    // this is to update the states of the value of whatever the element is being changed

    handleChange = (e: any) => {
        if (e.target !== null)
            this.setState({
                [e.target.id]: e.target.value
            })
        return true
    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() { 
        //return (Login)

            return (

            //  using Grid for grouping of content into rows and column

            <Grid centered columns={2}>
                <Grid.Column>
                    <Header as="h2" textAlign="center">
                        Login
                    </Header>
                    <Segment>
                    <Form size="large" onSubmit={this.handleSubmit} className="white">
                        <Form.Input
                            fluid
                            icon="user"
                            iconPosition="left"
                            placeholder="Email address"
                            type="email" id="email" onChange={this.handleChange}
                        />
                        <Form.Input
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            type="password"
                            id="password"
                            onChange={this.handleChange}
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
    }
}
export default Login
