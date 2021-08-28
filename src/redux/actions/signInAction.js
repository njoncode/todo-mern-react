import signInConstants from '../constants/signInConstant';


export const signInAction = (payload) => {
    return {
        type: signInConstants.SIGN_IN,
        payload
    }
}

export const signInSuccessAction = () => {
    return {
        type: signInConstants.SIGN_IN_SUCCESS,
    }
}

export const signInFailureAction = (payload) => {
    return {
        type: signInConstants.SIGN_IN_FAILURE,
        payload
    }
}




