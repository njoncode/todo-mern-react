import todoConstants from '../constants/todoConstant';


export const getTodosAction = (payload) => {
    return {
        type: todoConstants.GET_TODOS,
        payload
    }
}

export const getTodoAction = (payload) => {
    return {
        type: todoConstants.GET_TODO,
        payload
    }
}


export const addTodoAction = (payload) => {
    return {
        type: todoConstants.ADD_TODO,
        payload
    }
}

export const editTodoAction = (payload) => {
    return {
        type: todoConstants.EDIT_TODO,
        payload
    }
}

export const toggleSubmitAction = () => {
    return {
        type: todoConstants.TOGGLE_SUBMIT
    }
}