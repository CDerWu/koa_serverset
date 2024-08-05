import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, deleted, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: deleted ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  deleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo