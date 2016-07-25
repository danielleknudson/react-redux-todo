import _ from 'lodash';
import React, { PropTypes } from 'react';
import Todo from './todo';

const TodoList = React.createClass({
  propTypes: {
    onClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired
  },

  render() {
    const { todos, onClick } = this.props;
    console.log(this.props);
    return (
      <div>
        <ul>
          {
            _.map(todos, (todo) => {
              console.log('in TodoList', todo);
              return (
                <Todo key={todo.id}
                    {...todo}
                    onClick={() => { onClick(todo.id); }} />
              );
            })
          }
        </ul>
      </div>
    );
  }
});

export default TodoList;
