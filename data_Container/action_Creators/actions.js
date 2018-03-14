import axios from 'axios'
import ajx from '../../lib/resources'
//import request from 'request'


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
//login
export const identify_user=(email,password)=>({
	type:'IDENTIFYING_USER',
	payload:axios.post(ajx.loginendpoint,{email,password})
})
//addcard
export const addcard=(response)=>({
	type:'ADD_CARD',
	payload:response
})
//get user card details
export const updating_user_info=(uid)=>({
	type:'UPDATING_USER_INFORMATION',
	payload:axios.get(ajx.carddtlsendpoint+uid)
})
//forgot password
export const forgot_password = (email) => {
	try {
		const result = axios.post(ajx.forgot_password,
			{
				email, link: ajx.link
			})
			console.info(result);
		return {
			type: "FORGOT_PASSWORD",
			payload: result
		}
	} catch(e) {
		console.log(e, error.response);
	}
}
//forgot Password
// export const forgot_password=(email)=>({
// 	type:"FORGOT_PASSWORD",
// 	payload:axios({ 
// 		method: 'POST',
// 		url: ajx.forgot_password,
// 		headers: { 'Content-Type': 'application/json' },
// 		body:JSON.stringify(
// 			 { email,
// 				link:ajx.link }
// 			 )
// 	}) 
// })
//Reauthenticate Card
export const time_to_reauthenticate=(_)=>({
	type:'TIME_TO_REAUTHENTICATE',
	payload:_
})

export const reauthenticate=(_)=>({
	type:'REAUTHENTICATE_CARD',
	payload:_
})

export const clear_card_error=()=>({
	type:'CLEAR_CARD_ERROR'
})