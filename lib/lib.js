import {signup} from '../data_Container/action_Creators/actions'
import storage from '../data_Container/store'

export default{
    signup(_){
		storage.dispatch(signup(_))
		.then((res)=>console.log(res))
		.catch((e)=>console.log('Sorry! There was a problem',e))
    }
}