import signUpConstants from '../constants/signUpConstant';

export const initialState = {
            user: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            isSignUpSuccess: false,
            signUpFailureMessage: ''
};

export const signUpReducer = (state = initialState, action) => {
   
    console.log('reducer state: ', state)

    switch(action.type) {
        case signUpConstants.SIGN_UP:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                },
                isSignUpSuccess: false,
                signUpFailureMessage: ''
            }
        case signUpConstants.SIGN_UP_SUCCESS:
            return {
                ...state,
                isSignUpSuccess: true,
                signUpFailureMessage: ''
            }
        case signUpConstants.SIGN_UP_FAILURE:
            return {
                ...state,
                ...action.payload,
                isSignUpSuccess: false,
                signUpFailureMessage: action.payload
            }
        default:
            return state;
    }
}


