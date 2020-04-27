import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class Signup extends Component {
    state = {
        email: '',
        password:'',
        age: 'null',
        value: 'string'

    }
//capturing already typed in email or password - 
// this is to update the states of the value of whatever the element is being changed
    
    handleChange = (e: any) => {
        if ( e.target !== null)
        this.setState({
            [e.target.id]: e.target.value 
        })     
        return true 
    }

    render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          <Form.Select
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
          />
        </Form.Group>
        <Form.Group inline>
          <p>Enter your age:</p>
          <input type='text'name='age' onChange={this.handleChange}
      />

        </Form.Group>
        <Form.TextArea label='Interests' placeholder='Tell us your interests...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Sign Up</Form.Button>
      </Form>
    )
  }
}

export default Signup



//export interface User {
    
    // id: number,
	// name: string,
	// photo: string,
	// username: string,
	// password: string,
	// email: string,
	// address: {
	// 	street: string,
	// 	suite: string,
	// 	city: string,
	// 	zipcode: string,
	// 	geo: {lat: number, lng: number}
	// },
	// phone: string,
	// website: string,
	// company: {
	// 	name: string,
	// 	catchPhrase: string,
	// 	bs: string
	// },
	// age: number,
	// gender: string,
	// interests: string
//}
