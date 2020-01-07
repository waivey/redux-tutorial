import React from 'react';
import ToDo from './ToDo';
import { connect } from 'react-redux';
import { getToDosByVisibilityFilter } from '../redux/selectors'

const ToDoLister = ({ todos }) => (
    <ul>
        {todos && todos.length ? todos.map(todo => {return <ToDo key={`todo-${todo.id}`} todo={todo} />}) : 'No tasks, yay!'}
    </ul>
)

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getToDosByVisibilityFilter(state, visibilityFilter);
    return { todos };
}

export default connect(mapStateToProps)(ToDoLister);