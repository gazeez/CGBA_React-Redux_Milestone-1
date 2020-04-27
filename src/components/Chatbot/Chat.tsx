import * as React from 'react';
import { Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react';
import { ADD_MESSAGE_LIST } from './ChatRedux/ChatTypes';

export interface IAppProps {
}

export class App extends React.Component<IAppProps> {
  public render() {
    const {feed, ADD_MESSAGE} = this.props;
    return (
      <Fragment>
        <Grid centered>
          <Grid.Row>
            <h2>Chatbot </h2>
          </Grid.Row>
          <Grid.Row>
            <input  type="text"
                    placeholder="Add Text" onKeyDown={ (e) => e.keyCode === 13 ? ADD_MESSAGE(e.target.value): null} />
          </Grid.Row>
          
        </Grid>
        
      </Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
    feed : state,
  });


export default connect (
  mapStateToProps,
  { ADD_MESSAGE_LIST }
)(App);