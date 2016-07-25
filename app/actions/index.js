export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CHANGE_TODO_FILTER = 'CHANGE_TODO_FILTER';
export const SHOW_ALL_TODOS = 'SHOW_ALL_TODOS';
export const SHOW_COMPLETED_TODOS = 'SHOW_COMPLETED_TODOS';
export const SHOW_ACTIVE_TODOS = 'SHOW_ACTIVE_TODOS';

// Define action creators
let todoCount = 0;

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    todo: {
      id: todoCount++,
      text: text,
      completed: false
    }
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id: id
  };
};

export const updateTodoFilter = (filter) => {
  return {
    type: CHANGE_TODO_FILTER,
    filter: filter
  };
};
