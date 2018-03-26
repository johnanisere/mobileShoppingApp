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
import ProceedToCheckOut from './ProceedToCheckOut'

const Header=({address,cartActivityEvnt,menuActivityEvnt})=>(
    <View   style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:5,
        paddingRight:5
        }}>
    <TouchableOpacity
                    onPress={menuActivityEvnt}>
        <Icon   name="menu" 
                size={30} 
                color={colors.c} 
                onPress={menuActivityEvnt}
                />
    </TouchableOpacity>

    {/*<Icon   name="menu" 
            size={24} 
    color={'transparent'}/>*/}
    <View   style={{
        backgroundColor:'transparent',
        marginLeft:20,
        marginRight:20,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        height:45,
        flex:1,
        paddingRight:10,
        borderRadius:5,
        borderWidth:1,
        borderColor:'transparent'
        }}>
        <View   style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
                }}>
            <Icon   name="location-on" 
                    size={26} 
                    color={colors.a} 
                    onPress={()=>console.log('Great!!')}/>
        </View>
        <Text   style={{
                flex:6,
                fontSize:18,
                color:colors.a,
                //whiteSpace:'nowrap',
            // overflow:'hidden',
                //textOverflow:'ellipsis'
                }}
                numberOfLines={1}>
            {
            (address.Located)? address.Location : '...Locating you'
            }

        </Text>
    </View>
    <TouchableOpacity onPress={cartActivityEvnt}>
        <Icon   name="shopping-basket" 
                size={30} 
                color={colors.c} 
                onPress={cartActivityEvnt}/>
    </TouchableOpacity>

</View>
)

export default Header

Header.propTypes={
    address:propTypes.object.isRequired,
    cartActivityEvnt:propTypes.func.isRequired,
    menuActivityEvnt:propTypes.func.isRequired
}