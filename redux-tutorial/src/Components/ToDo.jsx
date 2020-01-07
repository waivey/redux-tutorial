import React from 'react';
import { toggleToDo } from '../redux/actions';
import { connect } from 'react-redux';

const ToDo = ({ todo, toggleToDo}) => (
    <li onClick={() => toggleToDo(todo.id)}>
       
        {todo.content}
    </li>
)

export default connect(null, { toggleToDo})(ToDo)