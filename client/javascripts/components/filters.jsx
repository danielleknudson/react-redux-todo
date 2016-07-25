import React from 'react';
import {
  SHOW_ALL_TODOS,
  SHOW_ACTIVE_TODOS,
  SHOW_COMPLETED_TODOS
} from '../actions';

const Filters = React.createClass({
  render() {
    const { onClick } = this.props;

    return (
      <ul>
        <li><a onClick={() => { onClick(SHOW_ALL_TODOS) }} >Show All</a></li>
        <li><a onClick={() => { onClick(SHOW_ACTIVE_TODOS) }}>Show Active</a></li>
        <li><a onClick={() => { onClick(SHOW_COMPLETED_TODOS) }}>Show Completed</a></li>
      </ul>
    );
  }
});

export default Filters;
