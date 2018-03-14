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

const commonContainer =(props)=>(
    <View style={{borderWidth:1,borderColor:'red',}}>
        <View style={{display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
            <Icon name="keyboard-arrow-down" size={25} color="#fff" />
            <Icon name="keyboard-arrow-down" size={25} color="#900" />
            <Icon name="keyboard-arrow-down" size={25} color="#fff" />
        </View>
        <View>
            {props.inner}
        </View>
    </View>
)

export default commonContainer

commonContainer.propTypes={
    inner:propTypes.object.isRequired
}