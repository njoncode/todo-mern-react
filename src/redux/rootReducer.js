import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import {todoReducer} from './reducers/todoReducer';
import {inputReducer} from './reducers/inputReducer';
import {signUpReducer} from './reducers/signUpReducer';
import {signInReducer} from '../redux/reducers/signInReducer';

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['cart']
// }

const rootReducer = combineReducers({
    todo: todoReducer,
    input: inputReducer,
    signUp: signUpReducer,
    signIn: signInReducer
});

export default rootReducer;