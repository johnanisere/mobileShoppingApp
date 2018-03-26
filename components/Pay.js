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
import CartItem from './CartItem'
import ColorCard from './ColorCard'

class Pay extends Component{
    constructor(props){
        super(props)
        this.state={
            accept:false
        }
        this.pay=this.pay.bind(this)
    }
    pay(){
        if(this.state.accept){
            console.log(parseInt(this.props.screenProps.cart.total,10))
            lib.checkBalance(parseInt(this.props.screenProps.cart.total,10))
            //this.props.navigation.navigate('')
        }else{
            alert('You must accept our terms and conditions to proceed')
        }
    }


    render(){
        return(
            <View style={{flex:1,padding:10,backgroundColor:'white'}}>
                <View style={{flex:1.5,position:'relative'}}>
                    <Card style={{margin:0,height:'90%',width:'85%'}}/>
                    <ColorCard/>
                </View>
                <View style={{flex:1,justifyContent:'space-between',alignItems:'center',padding:20}}>
                    <Text style={{color:'rgba(0,0,0,.2)'}}>-OR-</Text>
                    <Button     text="Add A New Card"
                                textColor={[{color:'#000'}]}
                                event={()=>this.props.navigation.navigate('CardDetails')}
                                button={[{backgroundColor:'#F2F2F2',width:135,height:27,borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center',margin:0,shadowColor:'#000000',shadowRadius: 5,
                                shadowOpacity: .5,shadowOffset: {
                                    width: 0,
                                    height: 1
                                }}]}/>
                    <View style={{flexDirection:'row',marginBottom:10}}>
                        <CheckBox
                                    style={{borderColor:'#C4D1DC',flex: 1}}
                                    onClick={()=>this.setState({accept:!this.state.accept})}
                                    isChecked={this.state.accept}
                                    rightText='I accept the Terms and Conditions and have read the Privacy Policy'
                                    checkBoxColor='#74D12D'
                                    rightTextStyle={{color:'#E0E0E0',fontSize:8}}/>
                    </View>
                    
                    <Button text="Pay"
                                textColor={[{color:'#fff'}]}
                                event={this.pay}
                                button={[{backgroundColor:'#5CBC5C',width:80,height:35,borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center',margin:0,shadowColor:'#000000',shadowRadius: 5,
                                shadowOpacity: .5,shadowOffset: {
                                    width: 0,
                                    height: 1
                                }}]}/>
                </View>
            </View>
        )
    }
}

export default Pay

Pay.propTypes={
    screenProps:propTypes.object.isRequired
}