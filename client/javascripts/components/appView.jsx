import React from 'react';
import AddTodoForm from './addTodoForm';
import TodoListContainer from '../containers/todoListContainer';
import Filters from './filters';

const AppView = React.createClass({
  render() {
    return (
      <div>
        <AddTodoForm />
        <TodoListContainer />
        <Filters />
      </div>
    );
  }
});

export default AppView;
