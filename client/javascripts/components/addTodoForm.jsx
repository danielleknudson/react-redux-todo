import React from 'react';
// import reactCSS from 'reactcss';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodoForm = React.createClass({
  render() {
    let inputElement;
    let text;

    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.onFormSubmit(text);
        }}>
        <input ref={(input) => { inputElement = input; }}
               onChange={() => { text = inputElement.value.trim(); }}
               type="text" />
        <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFormSubmit: (text) => {
      dispatch(addTodo(text));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddTodoForm);
