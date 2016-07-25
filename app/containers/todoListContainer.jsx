import _ from 'lodash';
import { connect } from 'react-redux';
import TodoList from '../components/todoList';

const getFilteredTodos = (todos, filter) => {

};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    todos: state.todos
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(toggleTodo(id))
    }
  };
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
