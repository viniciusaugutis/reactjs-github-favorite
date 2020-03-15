import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TodoList = ({ todos, addTodo }) => {
  return (
    <>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <button onClick={() => addTodo('Ir trabalhar')}>Adicionar</button>
    </>
  );
};

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    })
  ).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch({ type: 'ADD_TODO', payload: { text } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
