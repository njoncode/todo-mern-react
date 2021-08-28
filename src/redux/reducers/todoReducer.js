import todoConstants from '../constants/todoConstant';

export const initialState = {
    todo: [],
    toggleSubmit: false
};

export const todoReducer = (state = initialState, action) => {
   
    console.log('reducer state: ', state)

    switch(action.type) {
        case todoConstants.GET_TODOS:
            return {
                ...state,
                todo: action.payload
            }
        case todoConstants.ADD_TODO:
            return {
                ...state,
                todo: [...state.todo, action.payload],   
            }
        case todoConstants.EDIT_TODO:
            return {
             ...state,
             todo: state.todo.map(todo => todo._id === action.payload._id ? action.payload : todo)
            }    
        case todoConstants.TOGGLE_SUBMIT:
            return {
                ...state,
                toggleSubmit: !state.toggleSubmit
            }
        default:
            return state;
    }
}