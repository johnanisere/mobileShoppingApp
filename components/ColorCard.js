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

const ColorCard=()=>(
    <View style={{position:'absolute',padding:15,height:'90%',width:'85%',zIndex:-1,backgroundColor:'#73D14F',borderRadius:10,right:0,top:20}}>
        <View style={{flex:1,backgroundColor:'#FFEEBB'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'stretch',flex:1}}>
                <View style={{width:50,backgroundColor:'#73D14F',borderBottomRightRadius:35,paddingRight:10,paddingBottom:10}}>
                    <View style={{backgroundColor:'#859A55',flex:1,borderBottomRightRadius:30,borderTopRightRadius:5,borderBottomLeftRadius:5}}></View>
                </View>
                <View style={{width:50,backgroundColor:'#73D14F',borderBottomLeftRadius:35,paddingLeft:10,paddingBottom:10}}>
                    <View style={{backgroundColor:'#859A55',flex:1,borderBottomLeftRadius:30,borderTopLeftRadius:5,borderBottomRightRadius:5}}></View>
                </View>
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:'15%',paddingRight:'15%'}}>
                <View style={{width:30,height:30,backgroundColor:'#73D14F',borderRadius:30}}></View>
                <View style={{width:30,height:30,backgroundColor:'#73D14F',borderRadius:30}}></View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'stretch',flex:1}}>
                <View style={{width:50,backgroundColor:'#73D14F',borderTopRightRadius:35,paddingRight:10,paddingTop:10}}>
                    <View style={{backgroundColor:'#859A55',flex:1,borderTopRightRadius:30,borderTopLeftRadius:5,borderBottomRightRadius:5}}></View>
                </View>
                <View style={{width:50,backgroundColor:'#73D14F',borderTopLeftRadius:35,paddingLeft:10,paddingTop:10}}>
                    <View style={{backgroundColor:'#859A55',flex:1,borderTopLeftRadius:30,borderTopRightRadius:5,borderBottomRightRadius:5}}></View>
                </View>
            </View>
        </View>
    </View>
)

export default ColorCard