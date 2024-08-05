import { connect } from 'react-redux';
import TodoList from '@components/todo/todolist';
import { toggleTodo, VisibilityFilters } from '@actions';
const { SHOW_ALL, SHOW_ACTIVE, SHOW_DELETED } = VisibilityFilters;

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_ACTIVE:
      return todos.filter(t => !t.deleted)
    case SHOW_DELETED:
      return todos.filter(t => t.deleted)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList