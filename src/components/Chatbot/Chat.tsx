import * as React from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react';
import {  ADD_MESSAGE } from 'src\store\ChatbotStore\ChatActions';
import { RootState } from 'src\store\ChatStore';
import './App.css';

export interface IAppProps {
}

export class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        <Grid centered>
          <Grid.Row>
            <h2>Chatbot </h2>
          </Grid.Row>
          <Grid.Row>
            <input  type="text"
                    placeholder="Add Text" />
          </Grid.Row>
          <Grid.Row><button>Send Message</button>
          </Grid.Row>
        </Grid>
        
      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    steps : state.steps
  }
} 

export default connect (
  mapStateToProps,
  { ADD_MESSAGE }
)(App);