import React from 'react';
import { View,Text,TouchableOpacity,TextInput,Alert } from 'react-native';
import styles,{colors} from '../styles/style'
import Inputs from './Inputs'
import BoldText from './BoldText'
import Img from './Images'
import propTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from './Button'
import SpinnerIndicator from './SpinnerIndicator'
import lib from '../lib/lib'



export default class MoreItemInfo extends React.Component {
  constructor(props){
    super(props)
    this.state={
      quantity:1,
      chefinstruction:'',
      cart:this.props.screenProps.store.cart.cart,
      cartInfo:{
        cart:{},
        total:0.00
      },
      loading:false
    }
    this.add=this.add.bind(this)
    this.subtract=this.subtract.bind(this)
    this.addToCart=this.addToCart.bind(this)
    console.log(this.props)
  }
  add(){
    this.setState((prevState)=>({quantity:prevState.quantity+1}))
  }

  subtract(){
    if(this.state.quantity>1)
    this.setState((prevState)=>({quantity:prevState.quantity-1}))
  }

	async addToCart(e){
    e.stopPropagation()
    e.preventDefault()
    if(Object.keys(this.state.cart).length){
        var _=Object.keys(this.state.cart)[0]
        if(this.props.screenProps.store.chef.yourChef.uid!==this.state.cart[`${_}`].chef){
          //Alert.alert('Sorry! You can only shop from one chef at a time')
          Alert.alert(
            'Whoops!',
            'You can only shop from one chef at a time.Click Yes to clear cart and continue shopping with new chef Or click No to keep items in cart',
            [
              {text: 'Yes', onPress: () => {lib.clear_Cart(),alert('cart cleared!')}, style: 'destructive'},
              {text: 'No', onPress: () => console.log('Cancel Pressed')}
            ]
          )
              
              this.props.navigation.goBack()
            //return{}
        }
    }
    const params = this.props.navigation.state.params

    var name=params.foodName,
        price=parseInt(params.foodPrice,10),
        quantity=parseInt(this.state.quantity,10),
        totalCost=price*quantity
        desc=params.desc,
        hour=params.hour,
        min=params.min,
        chef=this.props.screenProps.chef.yourChef.uid,
        chefinstruction=this.state.chefinstruction

			if(this.state.cart.hasOwnProperty(name)){
				let newQuantity = this.state.cart[name].quantity+quantity,
				    newTotalcost = price*newQuantity,
				    cartUpdate = {}
				cartUpdate[name] = {
					'price':price,
					'quantity':newQuantity,
          'totalCost':newTotalcost,
          'chefinstruction':chefinstruction,
          'desc':desc,
          'hour':hour,
          'min':min,
          'chef':chef
        }
        
				await this.setState({
          cartInfo:{
            ...this.state.cartInfo,
          cart:{
            ...this.state.cart,
            ...this.state.cartInfo.cart,
            ...cartUpdate
          }}})
          
				let total=Object.keys(this.state.cartInfo.cart).map(
          (val,key)=>this.state.cartInfo.cart[val].totalCost).reduce(
            (sum,value)=>sum+value,0.00).toFixed(2)

				await this.setState({
          cartInfo:{
            ...this.state.cartInfo,
            total
          }
        })

				lib.updateCart({
          cart:this.state.cartInfo.cart,
          total:this.state.cartInfo.total
        })
			}

			if(!this.state.cart.hasOwnProperty(name)){
        let newCart={}
        
				newCart[name]={
					'price':price,
					'quantity':quantity,
          'totalCost':totalCost,
          'chefinstruction':chefinstruction,
          'desc':desc,
          'hour':hour,
          'min':min,
          'chef':chef
          }
          
				await this.setState({
          cartInfo:{
            ...this.state.cartInfo,
          cart:{
            ...this.state.cart,
            ...this.state.cartInfo.cart,
            ...newCart
          }}})

				let total= await Object.keys(this.state.cartInfo.cart).map(
          (val,key)=>this.state.cartInfo.cart[val].totalCost).reduce(
            (sum,value)=>sum+value,0).toFixed(2)

				await this.setState({
          cartInfo:{
            ...this.state.cartInfo,
            total
          }
        })

        lib.updateCart({
          cart:this.state.cartInfo.cart,
          total:this.state.cartInfo.total
        })
      }
      this.props.navigation.goBack()
      //console.log(this.state)
			
	}
  render() {
    const{  imgsrc,
            foodPrice,
            cuisine,
            foodName,
            evnt  } =this.props.navigation.state.params
    return (
      <View style={[styles.containerk,{flex:1}]}>
            <View style={styles.containerl}>
              <TouchableOpacity style={{marginLeft:-5}}
                onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" size={20} color="#900" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="keyboard-arrow-down" size={25} color="#fff" />
              </TouchableOpacity>
              <Icon name="arrow-back" size={0} color="#fff" />
            </View>
            <View style={[styles.all_width,styles.all_height]}>
              <View style={[styles.flexc,styles.positiona]}> 
                <Img    source={{uri:imgsrc}} 
                        style={[styles.all_width,styles.all_height]}
                        onLoadStart={(e) => this.setState({loading: true})}
                        onLoad={(e) => this.setState({loading: false})}/>
                {
                    (this.state.loading)?
                    <SpinnerIndicator
                        customStyles={ [styles.all_width,styles.all_height,styles.positionb] } 
                        customStylesChild={[styles.all_width,styles.all_height,styles.radiusa]}/>:
                    null
                }
              </View>
              <View style={[styles.flexc,styles.topa]}>
                <View style={[styles.flexc,styles.flexd]}>
                  <View  style={[styles.topb]}>
                    <BoldText deco={[styles.texte,{fontSize:14}]} text={foodName} />
                    <BoldText deco={[styles.textf,{fontSize:14}]} text={'\u2022'+ cuisine} />
                  </View>
                  <View >
                    <BoldText text="Special Instructions"
                              deco={[styles.textg,{fontSize:14}]}/>
                    <TextInput  style={[styles.textInputa,{fontSize:14}]} 
                                value={this.state.chefinstruction} 
                                onChangeText={(chefinstruction)=>this.setState({chefinstruction})}
                                placeholder="Add note (extra sauce, no onion etc.)"/>
                  </View>
                </View>
                <View style={styles.containerm}>
                  <View  style={styles.containern}>
                    <TouchableOpacity onPress={this.add}>
                      <Icon name="add" size={12} color="#900"  />
                    </TouchableOpacity>
                    <Text style={styles.textd}>{this.state.quantity}</Text>
                    <TouchableOpacity onPress={this.subtract}>
                      <Icon name="remove" size={12} color="#900"/>
                    </TouchableOpacity>
                  </View>
                  <Button
                      button={[styles.button,styles.button__Wideb,styles.button_short,styles.button__a]}
                      event={this.addToCart}
                      textColor={[styles.textColorb]}
                      text={`Add ${this.state.quantity} to cart ${'₦'+foodPrice*this.state.quantity}`}/>
                </View>
              </View>
            </View>
          </View>
    );
  }
}

MoreItemInfo.propTypes={
  navigation:propTypes.object.isRequired
}