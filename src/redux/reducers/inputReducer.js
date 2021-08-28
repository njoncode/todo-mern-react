import inputConstants from '../constants/inputConstant';

export const initialState = {
    input: '',
};

export const inputReducer = (state = initialState, action) => {
   
    console.log('reducer state: ', state)

    switch(action.type) {
        case inputConstants.GET_INPUT:
            return {
                ...state,
               input: action.payload
            }
        default:
            return state;
    }
}