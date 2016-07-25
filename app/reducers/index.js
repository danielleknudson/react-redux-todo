import _ from 'lodash';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SHOW_ALL_TODOS,
  CHANGE_TODO_FILTER
} from '../actions';

export const todos = (state = [], action) => {
  switch (action.type) {
  case ADD_TODO:
    return [
      ...state,
      action.todo
    ];
  case TOGGLE_TODO:
    return _.map(state, (todo) => {
      if (todo.id === action.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  default:
    return state;
  }
};

export const filter = (state = SHOW_ALL_TODOS, action) => {
  switch(action.type) {
  case CHANGE_TODO_FILTER:
    return state = action.filter;
  default:
    return state;
  }
};
