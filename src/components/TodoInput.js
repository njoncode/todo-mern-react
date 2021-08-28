import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { addTodo, editTodo, getTodos } from '../utils/api';
import { addTodoAction, toggleSubmitAction, editTodoAction, getTodosAction } from '../redux/actions/todoAction';
import { getInputAction }   from '../redux/actions/inputAction';
import { makeSelectTodo, makeSelectToggleSubmit } from '../redux/selectors/todoSelector';
import {makeSelectInput} from '../redux/selectors/inputSelector';
import '../styles/todoInput.css';

const TodoInput = ({ addTodoDispatch, getTodosDispatch, editTodoDispatch, isToggleSubmit, toggleSubmitDispatch, input, getInputDispatch, selectedTodo, token }) => {
    
    const handleOnChange = (e) => {
        getInputDispatch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({todo: input}, token)
            .then(res => {
                addTodoDispatch(res.data);
                getTodos(token);
            })
            .catch(err => console.error('Error Caught: ', err))
    }

    const handleEditTodo = (e) => {
        e.preventDefault();
        editTodo(selectedTodo._id, input, token)
            .then(res => {
                editTodoDispatch(res)
                toggleSubmitDispatch();
            })
            .catch(err => console.log('Error Caught: ', err))
        getTodos(token)
            .then(res => {
                getTodosDispatch(res.data)
                getInputDispatch('')
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={!isToggleSubmit ? handleSubmit : handleEditTodo}>
            <input className='todo-input'
                type='text'
                placeholder='Type your todo here'
                value={input}
                onChange={handleOnChange}
            />
            { !isToggleSubmit
                ? <button className='btn-add-edit'>Add Todo</button>
                : <button className='btn-add-edit' onClick={handleEditTodo}>Edit Todo</button>                    
            }
        </form>
    )
}


const mapStateToProps = createStructuredSelector({
    todos: makeSelectTodo,
    isToggleSubmit: makeSelectToggleSubmit,
    input: makeSelectInput
})

const mapDispatchToProps = dispatch => ({
    getInputDispatch: (data) => dispatch(getInputAction(data)),
    getTodosDispatch: (data) => dispatch(getTodosAction(data)),
    addTodoDispatch: (data) => dispatch(addTodoAction(data)),
    toggleSubmitDispatch: (data) => dispatch(toggleSubmitAction(data)),
    editTodoDispatch: (data) => dispatch(editTodoAction(data)),
  })

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
