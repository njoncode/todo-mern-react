import signInConstants from '../constants/signInConstant';

export const initialState = {
            email: '',
            password: '',
            isSignInSuccess: false,
            signInFailureMessage: ''
};

export const signInReducer = (state = initialState, action) => {
   
    console.log('reducer state: ', state)

    switch(action.type) {
        case signInConstants.SIGN_IN:
            return {
                ...state,
                ...action.payload,
                isSignInSuccess: false,
                signInFailureMessage: ''
            }
        case signInConstants.SIGN_IN_SUCCESS:
            return {
                ...state,
                isSignInSuccess: true,
                signInFailureMessage: ''
            }
        case signInConstants.SIGN_IN_FAILURE:
            return {
                ...state,
                ...action.payload,
                isSignInSuccess: false,
                signInFailureMessage: action.payload
            }
        default:
            return state;
    }
}


