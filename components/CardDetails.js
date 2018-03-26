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
import * as Animatable from 'react-native-animatable'
import CardInputCollection from './CardInputCollection'
import Otp from './Otp'

class CardDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            cardNumber:'',
            expires:'',
            CVC:'',
            approve:false,
            otp:''
        }
        this.onExpire=this.onExpire.bind(this)
        this.onSave=this.onSave.bind(this)
        console.log(this.props)
    }
    onExpire(expires){
        if(this.state.expires.length<2){
            if(expires.length===2){
                let ex=expires.toString()+"/"
                this.setState({"expires":ex})
            }else{
                this.setState({expires})
            }
        }else if (this.state.expires.length>=2){
                this.setState({expires})
        }
    }
    onSave(){
        const {
                cardNumber,
                expires,
                CVC,
                approve
                            } = this.state
       if(cardNumber===''){
           alert('Please provide a valid card number')
       }else if(expires===''){
           alert('Please provide a valid expiry date')
       }else if(CVC===''){
           alert('Please provide a valid CVV')
       }else if(!approve){
           alert('Please accept terms and conditions before proceeding')
       }else{
           let  YY=expires.split("/")[0],
                MM=expires.split("/")[1]

           lib.addcard(cardNumber,CVC,YY,MM)
       }
    }

    render(){
        const { time_to_reauthenticate,reauthentication,fetching_addcard}=this.props.screenProps.user
        return(
            <View style={{alignSelf:'stretch',flex:1,padding:20,paddingTop:0,paddingBottom:0}}>
                <Animatable.View    animation="fadeInDownBig"
                                    style={{flex:1,display:'flex',marginBottom:30}}>
                    <Card 
                        cardNumber='1234-1234-1234-1234'
                        cardHolder='John Doe'
                        expires='07/20'
                        CVC='234'
                        />
                </Animatable.View>
                {
                        (time_to_reauthenticate.is_time_to_reauthenticate)?
                            <Animatable.View  animation="fadeInRightBig"
                                            style={{flex:1}}>
                                <Otp
                                    text = {time_to_reauthenticate.response}
                                    textValue = {this.state.otp}
                                    textEvent = {(otp)=>this.setState({otp})}
                                    buttonEvent = {()=>lib.sendOtp(this.state.otp)}
                                    activity={{send:reauthentication.fetching}}
                                    response={reauthentication} />
                            </Animatable.View>:
                            <Animatable.View  animation="fadeInUpBig"
                                                    style={{flex:1}}>
                                <CardInputCollection 
                                                activity={{saving:fetching_addcard,authenticating:time_to_reauthenticate.fetching}}
                                                cardValue = {this.state.cardNumber}
                                                cardEvent = {(cardNumber)=>this.setState({cardNumber})}
                                                expiresValue = {this.state.expires}
                                                expiresEvent = {this.onExpire}
                                                CVCValue = {this.state.CVC}
                                                CVCEvent = {(CVC)=>this.setState({CVC})}
                                                isCheckedValue={this.state.approve}
                                                checkBoxEvent = {()=>this.setState((prevState,props)=>({approve:!prevState.approve}))}
                                                buttonEvent = {this.onSave}/>
                                
                            </Animatable.View>
                }
            </View>
        )
    }
}

export default CardDetails