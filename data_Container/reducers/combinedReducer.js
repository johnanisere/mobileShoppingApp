import {combineReducers} from 'redux'
import user from './indentifyUserReducer'
import signUp from './signUpReducer' 

export default combineReducers({
    user:user,
    signup:signUp
		});