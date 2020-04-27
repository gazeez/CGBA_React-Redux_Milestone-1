import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AddReducer } from './ChatRedux/ChatReducers'

const store = createStore(AddReducer);

ReactDOM.render(
  <Provider store= { store }>
    <Chat />
  </Provider>,
  document.getElementById('root')
);