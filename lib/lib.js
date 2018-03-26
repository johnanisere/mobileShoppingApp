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
			get_chef,
			select_cuisine,
			update_cart,
			delete_cart,
			transaction,
			delivery_info,
			order,
			cleartransaction
								} from '../data_Container/action_Creators/actions'
import storage from '../data_Container/store'
import ajx from './resources'
import axios from 'axios'
import request from 'superagent'
import africaistalking from 'africaistalking'

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
		var uid=storage.getState().user.user.uid;
		var token=storage.getState().user.user.token;
		
		//let uid = 'customuuid:1502711268596john'
		//let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjowLCJkIjp7InVpZCI6ImN1c3RvbXV1aWQ6MTUwMjcxMTI2ODU5NmpvaG4ifSwiaWF0IjoxNTIwODcyNDg3Njk1LCJleHAiOjE1MjA5NTg4ODd9.x6Y_9L6oPio3kfgsbZgSDdh5-lD624sykYn1fNMqWFE'
		var email=storage.getState().user.user.email;
		//let email = 'johnanisere@gmail.com'
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
		.then((res)=>{console.log(res);return{auth:res.value.data.data.authorization_code,email:res.value.data.data.customer.email}})
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
	cuisinechoice(_){
		storage.dispatch(select_cuisine(this.chefcloseby(_)))
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
	format(_){
		let str = _.toLowerCase()
		return str.charAt(0).toUpperCase() + str.slice(1);
	},
	clear_receipt(){

	},
	updateCart(cart){
        if(!Object.keys(storage.getState().cart.cart).length){
          //  storage.dispatch(clear_receipt())
        }
		storage.dispatch(update_cart(cart))
	},
	clear_Cart(){
        storage.dispatch(delete_cart())
	},
	quantityUpdate(Quantity,key){
		if(Quantity===""){
			Quantity=0
		}
		console.log(Quantity,key)
        var price=parseInt(storage.getState().cart.cart[key].price,10),
        totalCost=price*parseInt(Quantity,10),
        newCart=storage.getState().cart.cart,cart={}
		newCart[key].quantity=parseInt(Quantity,10)
		newCart[key].totalCost=parseInt(totalCost,10)
		var total=Object.keys(newCart).map(
            (key,i)=>newCart[key].totalCost).reduce(
                (sum,value)=>sum+value,0).toFixed(2)
		cart.cart=newCart
		cart.total=total
		this.updateCart(cart)
    },
	deleteCart(food){
		var newCart=storage.getState().cart.cart
		delete newCart[food]
		var cart={}
		cart.cart=newCart
		var total=Object.keys(newCart).map(
            (key,i)=>newCart[key].totalCost).reduce(
                (sum,value)=>sum+value,0).toFixed(2)
        cart.total=total
        this.updateCart(cart)
	},
	checkBalance(amount){
        axios.get(ajx.carddtlsendpoint+storage.getState().user.user.uid)
        .then(res=>{
			//console.log(res)
            let cardAuthCode = res.data.data.cardAuthCode,
                email = storage.getState().user.user.email

               /* let options={
                    method:'POST',
                    url:ajx.checkBalance,
                    headers: ajx.paystack,
                    body:{
                        "authorization_code":cardAuthCode,
                        email,
                        amount
                    },
                    json:true
                }*/
				//requestPromise(options)
				request.post(ajx.checkBalance)
						.set('Content-Type', 'application/json')
						.set('accept', 'application/json')
						.set('Authorization',ajx.paystack.Authorization)
						.send({
							"authorization_code":cardAuthCode,
							"email":email,
							"amount":amount
						})
                .then((res)=>{
                    (res.body.message === "Authorization is valid for this amount" )?
					this.processtransact():
                    alert(res.message)
                })
                /*.catch(e=>{
					storage.dispatch(transaction_error(e.error.message))
					alert
				})*/
				.catch((e)=>{
					console.log(e.response)
					alert(e.response.body.message)
					//storage.dispatch(clear_card_error())
				})
        })
	},
	async processtransact(){
        var chefUid = storage.getState().chef.yourChef.uid,
			customerUid = storage.getState().user.user.uid,
			customerName = storage.getState().user.user.first_name + " " + storage.getState().user.user.last_name,
			customerEmail = storage.getState().user.user.email,
			customerImage = storage.getState().user.user.profile_photo,
			coupon_used = false,
			chefName = storage.getState().chef.yourChef.first_name + " " + storage.getState().chef.yourChef.last_name,
			chefEmail = storage.getState().chef.yourChef.email,
			customerAddress = storage.getState().address.Location,
			chefImage = storage.getState().chef.yourChef.profile_photo,
			customerPhoneNumber = storage.getState().user.user.mobile,
			payment_option = "card",
			items=Object.keys(storage.getState().cart.cart);
			var coupon=(coupon_used)? 500:0;
        
        Object.keys(storage.getState().cart.cart).forEach((menu,key)=>{
        var quantity = storage.getState().cart.cart[`${items[key]}`].quantity,
            originalAmt=storage.getState().cart.cart[`${items[key]}`].totalCost,
            item=items[key],
            charge_customer=true,
            change_amount=originalAmt-coupon,
            description=storage.getState().cart.cart[`${items[key]}`].desc,
            additionalInfo=storage.getState().cart.cart[`${items[key]}`].chefinstruction,
            transaction = [  {  
                                chefUid,
                                customerUid,
                                originalAmt,
                                item,
                                customerAddress,
                                description,
                                quantity,
                                customerName,
                                customerEmail,
                                customerImage,
                                chefName,
                                chefEmail,
                                chefImage,
                                customerPhoneNumber,
                                payment_option,
                                coupon_used,
                                additionalInfo,
                                charge_customer,
                                change_amount
                                                        }  ]
                this.newtransact(transaction)
        	})
        var adlo=storage.getState().address,
        deliveryCharge=[{       chefUid,
                                customerUid,
                                originalAmt:storage.getState().chef.yourChef.delivery_charge,
                                item:"Delivery fee",
                                customerAddress:{lat:adlo.lat,
                                                 lng:adlo.lng,
                                                 address:adlo.Location},
                                description:"",
                                quantity:1,
                                customerName,
                                customerEmail,
                                customerImage,
                                chefName,
                                chefEmail,
                                chefImage,
                                customerPhoneNumber,
                                payment_option,
                                coupon_used,
                                additionalInfo:{
                                                 DeliveryNote:adlo.deliverynote
                                                },
                                charge_customer:true,
                                change_amount:storage.getState().chef.yourChef.delivery_charge       }]
        this.newtransact(deliveryCharge)
        this.placeorder()
	},
	newtransact(_v){
        let _b=storage.getState().user.transaction
        _b.push(_v)
        storage.dispatch(transaction(_b))
	},
	savedeliveryinfo(_){
        storage.dispatch(delivery_info(_))
	},
	placeorder() {
        let token=storage.getState().user.user.token,
        chefUid=storage.getState().chef.yourChef.uid,
        transactions=storage.getState().user.transaction,
        chefName = storage.getState().chef.yourChef.first_name + " " + storage.getState().chef.yourChef.last_name,
        chefPhoneNumber = storage.getState().chef.yourChef.phone_number,
        p=transactions.map( (transaction)=>
                            {return   axios({ 
                                                method: 'post',
                                                url:ajx.placeorderendpoint,
                                                headers: {token, chefUid },
                                                data: {transaction} 
																			})
										/*request.post(ajx.placeorderendpoint)
											.set('Content-Type', 'application/json')
											.set('accept', 'application/json')
											.set('Authorization',ajx.paystack.Authorization)
											.set('token',token)
											.set('chefUid',chefUid)
											.send({transaction})*/
                                                                                }  )
        storage.dispatch(order(p))
        .then((res)=>{
            this.sendMessage(chefName,chefPhoneNumber)
			storage.dispatch(cleartransaction())
		})
        .catch((err)=>{
					console.log("please try again",err)    
					alert("please try again",err.message)
				})
	  },
	  sendMessage(name,number){
        const message=`Hello ${name},You have a new order. Please visit https://chef.mybukka.com to accept order(s)` ,
        to="234"+number.substring(1,11),
        from='Bukka',
        apikey=ajx.apikey,
        username=ajx.username
		to.trim()
		
		africaistalking(username, message, to, apikey,from)
        	.catch((err)=>console.log(err))
           
    },
}