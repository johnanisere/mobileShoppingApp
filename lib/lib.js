import {
					signup,
					identify_user,
					updating_user_info,
					forgot_password,
					addcard,
					time_to_reauthenticate,
					reauthenticate,
					clear_card_error,
					fetch_address,
					fetch_chef,
					chef_Cuisine,
					get_chef
				} from '../data_Container/action_Creators/actions'
import storage from '../data_Container/store'
import ajx from './resources'
import axios from 'axios'
import request from 'superagent'

export default{

    signup(_){
		storage.dispatch(signup(_))
		.then((res)=>console.log(res))
		.catch((e)=>console.log('Sorry! There was a problem',e))
		},

		signin(email,password){
				storage.dispatch(identify_user(email,password))
		.then(()=>storage.dispatch(updating_user_info(storage.getState().user.user.uid)))
		//.then(()=>{this.toggleSignin()})
		.catch((e)=>{
				//(storage.getState().user.error.response.data.msg==="Paystack token does not exists")?
				//this.toggleSignin():
			//	null
			console.log(e)
		})
		},

	forgotPassword(email){
			storage.dispatch(forgot_password(email))
			.catch(e=>console.log(e))
		},


	async reauth(auth,email){
		 return request.post(ajx.reauth)
				.set('Content-Type', 'application/json')
				.set('accept', 'application/json')
				.set('Authorization',ajx.paystack.Authorization)
				.send({"email":email,"amount": "100","authorization_code": auth })
	},

	addcard (cardNumber,ccv,expirationMonth,expirationYear) {
		//var uid=storage.getState().user.user.uid;
		//var token=storage.getState().user.user.token;
		
		let uid = 'customuuid:1502711268596john'
		let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjowLCJkIjp7InVpZCI6ImN1c3RvbXV1aWQ6MTUwMjcxMTI2ODU5NmpvaG4ifSwiaWF0IjoxNTIwODcyNDg3Njk1LCJleHAiOjE1MjA5NTg4ODd9.x6Y_9L6oPio3kfgsbZgSDdh5-lD624sykYn1fNMqWFE'
		//var email=storage.getState().user.user.email;
		let email = 'johnanisere@gmail.com'
		var url = ajx.addcard + uid;
		const result= axios({
			method:'Post',
			url: url,
			headers:{token,uid},
			data:JSON.parse( 
				JSON.stringify(
				{  	email,
					cardNumber,
					ccv,
					expirationMonth,
					expirationYear  }))
		});
		storage.dispatch(addcard(result))
		.then((res)=>{return{auth:res.value.data.data.authorization_code,email:res.value.data.data.customer.email}})
		.then((val)=>{
			storage.dispatch(time_to_reauthenticate(this.reauth(val.auth,val.email)))
			//.then(res=>console.log(res.body))
			//.catch((e)=>console.log(e.response.body))
		})
		.catch((e)=>console.info(e))
	},
	sendOtp(otp){
		if(storage.getState().user.reauthentication.response===''){
			var {reference} = storage.getState().user.time_to_reauthenticate
		}else{
			var {reference} = storage.getState().user.reauthentication.response.data
			storage.dispatch(clear_card_error())
		}
		storage.dispatch(reauthenticate(
				 request.post(ajx.paystackOtp)
						.set('Content-Type', 'application/json')
						.set('accept', 'application/json')
						.set('Authorization',ajx.paystack.Authorization)
						.send({"otp":otp,"reference": reference })
		))
		.catch((e)=>{
			alert(e.response.body.data.message)
			storage.dispatch(clear_card_error())
		})

	},
	broadcastLocation(add,latLng){
		storage.dispatch(fetch_address(add,latLng))
		let {lat,lng}=storage.getState().address
		this.chefResult({lat,lng})
	},
	chefCuisines(chefs){
        var cuisines=Array.from(new Set(chefs.map((chef)=>chef.cuisine))) 
        var chefAndCuisine={},chefPerCuisine=[]
        cuisines.forEach((cui)=>{
          chefs.forEach((chef)=>{
          if(chef.cuisine===cui){
              chefPerCuisine.push(chef)
            }
        })
        chefAndCuisine[`${cui}`]=chefPerCuisine
        chefPerCuisine=[]
      }
      )
        storage.dispatch(chef_Cuisine(chefAndCuisine))
	},
	updatechefbycuisine(_){
        storage.dispatch(get_chef(this.chefcloseby(_)))
    },
	chefResult(val){
        let _
        if(typeof val ==='string'){
            _=val
        }else{
            _=val.lat+"/"+val.lng
        }
        return(
		storage.dispatch(fetch_chef(_))
		.then((res)=>console.log(res))
        .then(()=>(typeof val !=='string')?
                this.chefCuisines(storage.getState().chef.chefsInYourArea):
                this.updatechefbycuisine(storage.getState().chef.chefsInYourArea))
        .catch((e)=>console.log('Sorry! There was a problem',e))
        )
	},
	//get chef data
	chefcloseby(result){
        var yourChef,cuisine
        if(typeof result ==='string'){
            
            yourChef=storage.getState().chef.chefAndCuisine[`${result}`][0]
            cuisine=result

            /*.filter((chef)=>chef.role==="Super Chef")*/
        }else{
            yourChef=result
            cuisine=result.cuisine
        }
        if(yourChef){
            /*var categ=Array.from(new Set(result.filter(
                (chef)=>chef.role==="Super Chef")[0].menu.map(
                    (menu)=>menu.category)))*/      
            var categorizedMenu={},categ
            if(Array.isArray(yourChef.menu)){
                    categ=Array.from(new Set(yourChef.menu.map((menu)=>
                                menu.category)))
                }else{
                    let _=Object.keys(yourChef.menu)
                    let to=_.map((o)=>yourChef.menu[`${o}`])
                    yourChef={...yourChef,
                              menu:to}
                    categ=Array.from(new Set(yourChef.menu.map((menu)=>
                              menu.category)))
                }

            //var menuP=yourChef.menu.filter(items=>categ.indexOf(items.category)>-1).filter(item=>item.visibility===true)
            for(var i=0;i<categ.length;i++){
                var menuPerCategory=[];
                yourChef.menu.map(
                    (items)=>{
                    if(items.category===categ[i]){
                    if(items.visibility){
                        menuPerCategory.push(items);
                    }
                    //menuPerCategory.push(items);
                    }})
                if(menuPerCategory.length>0){
                    categorizedMenu[`${categ[i]}`]=menuPerCategory;
                }
            }
            return{
                    menu:categorizedMenu,
                    yourChef:yourChef,
                    categ:Object.keys(categorizedMenu),
                    cuisine:cuisine
                }
        }else{
            return{
                menu:[],
                yourChef:{},
                categ:[],
                cuisine:null
            }
        }
    },
	
}