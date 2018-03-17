import React from 'react';
import { View,Text,TouchableOpacity,Animated,Image,Easing } from 'react-native';
import styles,{colors} from '../styles/style'
import Inputs from './Inputs'
import MenuIconButton from './MenuIconButton'
import rsc from '../lib/resources'
import Img from './Images'
import SpinnerIndicator from './SpinnerIndicator'
import propTypes from 'prop-types'
import Dimensions from 'Dimensions'

export default class MenuItemsSwipped extends React.Component {
  constructor(props){
    super(props)
    this.state={
      loading:false
    }
  }
  render() {
    return (
      <View style={[styles.container,{backgroundColor:'white',height:Dimensions.get('window').height* 5/8*1/4-10}]}>
        <View style={[styles.containerh,{flex:1}]}>
          <View style={[styles.containerj,{flex:1}]}>
            <Text style={[{color:'white',fontSize:16,fontWeight:'600'}]} >{this.props.foodName}</Text>
            <Text style={[{color:'white',fontSize:14}]} >₦{this.props.foodPrice}</Text>
            <Text style={[{color:'white',fontSize:16,fontWeight:'600'}]} >1 item added to cart</Text>
          </View>
        </View>
      </View>
    );
  }
}

MenuItemsSwipped.propTypes={
  foodName:propTypes.string.isRequired,
  foodPrice:propTypes.number.isRequired,
  foodImg:propTypes.string.isRequired
}