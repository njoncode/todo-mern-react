import axios from 'axios';

export const getTodos = (token) => {
    return axios.get('/api/todos', {headers: {
        Authorization: token
        }
    })
        .then(res => res)
}

export const addTodo = (todo, token) => {
    return axios.post('/api/todo', todo, {headers: {
        Authorization: token
    }
})
    .then(res => res)
}

export const editTodo = (id, todo, token) => {
    return axios.put(`/api/todo/${id}`, {todo}, {headers: {
        Authorization: token
    }
})
        .then(res => res)
}
   
export const deleteTodo = (id, token) => {
    return axios.delete(`/api/todo/${id}`, {headers: {
        Authorization: token
    }
})
        .then(res => res)
}

export const signUp = (user) => {
    return axios.post('/api/signup', user)
        .then(res => res)
}

export const signIn = (user) => {
    return axios.post('/api/signin', user)
        .then(res => res)
}


