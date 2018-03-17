import {combineReducers} from 'redux'
import user from './indentifyUserReducer'
import signUp from './signUpReducer' 
import getAddress from './getAddressReducer'
import getChefs from './getChefReducer'

export default combineReducers({
    address:getAddress,
    user:user,
    signup:signUp,
    chef:getChefs
		});