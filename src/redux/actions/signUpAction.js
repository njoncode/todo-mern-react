import signUpConstants from '../constants/signUpConstant';


export const signUpAction = (payload) => {
    return {
        type: signUpConstants.SIGN_UP,
        payload
    }
}

export const signUpSuccessAction = () => {
    return {
        type: signUpConstants.SIGN_UP_SUCCESS,
    }
}

export const signUpFailureAction = (payload) => {
    return {
        type: signUpConstants.SIGN_UP_FAILURE,
        payload
    }
}




