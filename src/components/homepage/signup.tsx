import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class FormExampleSubcomponentControl extends Component {
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
          <label>Size</label>
          <p>Enter your age:</p>
          <input type='text'name='age' onChange={this.handleChange}
      />

        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default FormExampleSubcomponentControl