import React from 'react';
import { View,Text,TouchableOpacity,Animated,Image,Easing } from 'react-native';
import styles,{colors} from '../styles/style'
import Inputs from './Inputs'
import MenuIconButton from './MenuIconButton'
import rsc from '../lib/resources'
import Img from './Images'
import SpinnerIndicator from './SpinnerIndicator'
import propTypes from 'prop-types'

export default class MenuItemsSwipped extends React.Component {
  constructor(props){
    super(props)
    this.state={
      loading:false
    }
  }
  render() {
    return (
      <View style={[styles.container,{backgroundColor:'white'}]}>
        <View style={styles.containerh}>
          <Img source={{uri:this.props.foodImg}}
              style={[styles.imagea,{margin:20}]}
              onLoadStart={(e) => this.setState({loading: true})}
              onLoad={(e) => this.setState({loading: false})}
              />
          {
            (this.state.loading)?
            <View style={styles.containeri}>
              <SpinnerIndicator />
            </View>:
            null
          }
          <View style={styles.containerj}>
            <Text style={[{color:'white',fontSize:22}]} >{this.props.foodName}</Text>
            <Text style={[{color:'white',fontSize:18}]} >₦{this.props.foodPrice}</Text>
            <Text style={[{color:'white',fontSize:22}]} >1 item added to cart</Text>
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