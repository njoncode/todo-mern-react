import inputConstants from '../constants/inputConstant';


export const getInputAction = (payload) => {
    return {
        type: inputConstants.GET_INPUT,
        payload
    }
}

