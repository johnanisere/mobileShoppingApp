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

class ShopContainer extends Component {
    constructor(props){
        super(props)
    }
render(){
    return(
        <View style={{flex:1}}>
            <View style={{position:'absolute',top:0,bottom:0,left:0,right:0}}>
                <Map/>
            </View>
        </View>
    )
}
    
}

export default ShopContainer