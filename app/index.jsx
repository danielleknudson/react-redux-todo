import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { todos, filter } from './reducers';
import { SHOW_ALL_TODOS } from './actions';
import AppView from './components/appView';

let initialState = {
  todos: [],
  filter: SHOW_ALL_TODOS
};

const rootReducer = combineReducers({
  filter,
  todos
});

let store = createStore(rootReducer);

// initialize app
render(
  <Provider store={store}>
    <AppView />
  </Provider>,
  document.getElementById('react-app')
)
