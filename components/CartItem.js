import React,{Component} from 'react';
import { View,Text,TouchableOpacity,Animated,Image,Easing,ScrollView,TextInput } from 'react-native';
import styles,{colors} from '../styles/style'
import Inputs from './Inputs'
import propTypes from 'prop-types'
import Button from './Button'
import storage from '../data_Container/store'
import Img from './Images'
import lib from '../lib/lib'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CommonContainer from './CommonContainer'
import rsc from '../lib/resources'
import Card from './Card'
import CheckBox from 'react-native-check-box'
import CardDetails from './CardDetails'
import Map from './Map'
import MenuNavigation from './MenuNavigations'
import MenuIconButton from './MenuIconButton'
import Dimensions from 'Dimensions'
import {connect} from 'react-redux'
import {mapStateToProps} from '../lib/resources'
import SpinnerIndicator from './SpinnerIndicator'
import * as Animatable from 'react-native-animatable'
import  CuisineItems from './CuisineItems'

class CartItem extends Component{
    constructor(props){
        super(props)
        this.state={
            quantity:this.props.quantity||1
        }
        this.add=this.add.bind(this)
        this.subtract=this.subtract.bind(this)
        this.quantityUpdate=this.quantityUpdate.bind(this)
    }
    add(){
        this.setState({quantity:this.state.quantity+1},()=>this.quantityUpdate(this.state.quantity,this.props.foodname))
        
      }
    
    subtract(){
    if(this.state.quantity>1)
    this.setState({quantity:this.state.quantity-1},()=>this.quantityUpdate(this.state.quantity,this.props.foodname))

    
    }

    deleteDiv=(e)=>{
		lib.deleteCart(e.currentTarget.dataset.key)
	}

	quantityUpdate=(value,key)=> {
		lib.quantityUpdate(value,key)
    }
  
	timewillpass=(e)=>{
		return lib.timewillpass().timewillpass
	}

    render(){
        return(
            <View style={[{height:Dimensions.get('window').height/10,borderBottomWidth:.5,borderBottomColor:'rgba(0,0,0,.1)',justifyContent:'center'},{...this.props.style}]}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'#900'}}>{this.props.foodname}</Text>
                    <Text style={{color:'#900'}}>₦{this.props.price}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{color:'rgba(0,0,0,.1)'}}>{this.props.cuisine}</Text>
                    <View  style={styles.containern}>
                        <TouchableOpacity onPress={this.add}>
                            <Icon name="add" size={12} color="#900"  />
                        </TouchableOpacity>
                        <Text style={styles.textd} >{this.state.quantity}</Text>
                        <TouchableOpacity onPress={this.subtract}>
                            <Icon name="remove" size={12} color="#900"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default CartItem

CartItem.propTypes={
    foodname:propTypes.string.isRequired,
    price:propTypes.number.isRequired,
    cuisine:propTypes.string.isRequired,
    quantity:propTypes.number.isRequired
}

