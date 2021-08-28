import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { HiPencilAlt } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";
import '../styles/todos.css';
import {getTodos, deleteTodo, editTodo} from '../utils/api';
import { makeSelectTodo } from '../redux/selectors/todoSelector';
import { getTodosAction, addTodoRequestAction, toggleSubmitAction } from '../redux/actions/todoAction';
import { getInputAction }   from '../redux/actions/inputAction';
import TodoInput from './TodoInput';
import {makeSelectInput} from '../redux/selectors/inputSelector';
import Header from './Header';

const Todos = ({ todos, getTodosDispatch, toggleSubmitDispatch, input, getInputDispatch }) => {

    const token = `Bearer ${localStorage.getItem('token')}`

    const [selectedTodo, setSelectedTodo] = React.useState();

    const handleDeleteTodo = (id) => {
        deleteTodo(id, token)
            .then(res => {
                const filteredTodos = todos.filter(todo => todo._id !== id)
                getTodosDispatch(filteredTodos)
            })
            .catch(err => console.log(err))
    }

    React.useEffect(() => {
        getTodos(token)
            .then(res => {
                getTodosDispatch(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    
    const handleEdit = (todo) => {
        toggleSubmitDispatch();
        getInputDispatch(todo.todo)
        setSelectedTodo(todo);
    }

        return (
            <div className='user-page'>
                <Header token={token}/>
                <div className='todo-caption'>
                <HiPencilAlt 
                    style={{ fontSize: '80px', color: "white" }}
                />

                    <p className='todo-heading'>TODO LIST</p>
                </div>
                <TodoInput selectedTodo={selectedTodo} token={token}/>
                <Router>
                    <table>
                        <thead>
                            <tr>
                                <th>Todos</th>
                                <th>Created At</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                          {todos ? todos.map(todo => (
                            <tr key={todo._id}>
                                <td>{todo.todo}</td>
                                <td>{todo.createdAt}</td>
                                <td>
                                <button onClick={() => handleEdit(todo)}>Edit ✎</button>
                                <button onClick={() => handleDeleteTodo(todo._id)}>Delete <FaTrashAlt /></button>    
                                </td>
                            </tr>
                        )) : null}
                        </tbody>
                    </table>
                 </Router>
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
    todos: makeSelectTodo,
    input: makeSelectInput
})

const mapDispatchToProps = dispatch => ({
    getTodosDispatch: (data) => dispatch(getTodosAction(data)),
    toggleSubmitDispatch: () => dispatch(toggleSubmitAction()),
    getInputDispatch: (data) => dispatch(getInputAction(data)),
  })

export default connect(mapStateToProps, mapDispatchToProps)(Todos);


