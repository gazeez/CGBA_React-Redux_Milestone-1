import * as React from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react';
import {  ADD_TASK, REMOVE_TASK } from './actions/index'
import { RootState } from './store';
import './App.css';

export interface IAppProps {
}

export class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        <Grid centered>
          <Grid.Row>
            <h2>Chatbot </h2
          </Grid.Row>
          <Grid.Row>
            <input  type="text"
                    placeholder="Add task" />
          </Grid.Row>
          <Grid.Row>
            <input  type="datetime-local"/>
          </Grid.Row>
          <Grid.Row><button>Add Message</button>
          </Grid.Row>
          <Grid.Row><button>Clear Message</button>
          </Grid.Row>
        </Grid>
        
      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    text : state.text
  }
} 

export default connect (
  mapStateToProps,
  {ADD_MESSAGE, REMOVE_MESSAGE}
)(App);