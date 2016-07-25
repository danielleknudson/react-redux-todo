import React, { PropTypes } from 'react';

const Todo = React.createClass({
  propTypes: {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  },

  render() {
    const { text, completed, onClick } = this.props;
    console.log('in Todo render(), ', this.props);
    return (
      <li className={completed ? 'completed' : ''}
          onClick={onClick}>{text}</li>
    );
  }
});

export default Todo;
