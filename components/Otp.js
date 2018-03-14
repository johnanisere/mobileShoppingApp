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

 const Otp=(props)=>(
        <ScrollView style={{flex:1}}>
                {
                        (props.response.response!=='')?
                        <Text style={{textAlign:'center'}}>{props.response.response.data.status}</Text>:
                        <Text style={{textAlign:'center'}}>{props.text}</Text>
                }
                <TextInput
                        value={props.textValue}
                        style={{borderWidth:2,borderColor:'#C4D1DC',paddingLeft:10,alignSelf:'center',margin:20,borderRadius:5,height:30,width:100}}
                        onChangeText={props.textEvent}
                />
        {
                (props.activity.send)?
                <Button text="Processing"
                            textColor={[{color:colors.b}]}
                            event={()=>console('processing')}
                            button={[{backgroundColor:'#5CBC5C',alignSelf:'center',width:150,borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center',padding:0,margin:0,shadowColor:'#000000',shadowRadius: 5,
                            shadowOpacity: .1,shadowOffset: {
                                    width: 0,
                                    height: 1
                            }},styles.button_short]}/>:
                <Button     text="Send"
                            textColor={[{color:colors.b}]}
                            event={props.buttonEvent}
                            button={[{backgroundColor:'#5CBC5C',alignSelf:'center',borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center',padding:0,margin:0,shadowColor:'#000000',shadowRadius: 5,
                            shadowOpacity: .1,shadowOffset: {
                                    width: 0,
                                    height: 1
                            }},styles.button__Wided,styles.button_short]}/>
        }
        </ScrollView>

)

Otp.propTypes={
    text:propTypes.string.isRequired,
    textEvent:propTypes.func.isRequired,
    buttonEvent:propTypes.func.isRequired,
    textValue:propTypes.string.isRequired,
    activity:propTypes.object.isRequired,
    response:propTypes.object.isRequired
}

export default Otp