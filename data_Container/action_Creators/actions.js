import axios from 'axios'
import ajx from '../../lib/resources'


//signup
export const signup=(data)=>({
	type:'SIGN_UP',
	payload:axios({
		method:'post',
		url:ajx.signupendpoint,
		data
	}
	)
})