import * as React from 'react';
import { Fragment } from 'react';
// import './App.css';
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react';
import { ADD_MESSAGE_LIST } from './ChatRedux/ChatTypes';
import { ADD_MESSAGE } from './ChatRedux/ChatActions'

export interface IAppProps {
}

export class ChatBox extends React.Component<IAppProps> {

  addChat (e: any)
  {
    return e.keyCode === 13 ? ADD_MESSAGE(e.value): null; 
  }

  public render() {
      return (
      <Fragment>
        <Grid centered>
          <Grid.Row>
            <h2>Chatbot </h2>
          </Grid.Row>
          <Grid.Row>
            <input  type="text"
                    placeholder="Add Text" onKeyDown={ 
                      this.addChat
                      }/>
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
)(ChatBox);