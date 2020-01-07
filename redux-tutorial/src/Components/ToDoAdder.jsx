import React from 'react';
import { addToDo } from '../redux/actions';
import { connect } from 'react-redux';

class ToDoAdder extends React.Component {
    state = {
        input: ''
    }

    handleInput = input => {
        this.setState({ input })
    }

    handleSubmit = () => {
        addToDo(this.state.input);
        this.setState({input: ''})
    }

    render() {
        const { input } = this.state
        console.log(input)
        return(
            <form>
                <input onChange={event => this.handleInput(event.target.value)} value={input}/>
                <button className='add-todo' onClick={this.handleSubmit}>Add Task</button>
            </form>
        )
    }
}

export default connect(null, {addToDo})(ToDoAdder);