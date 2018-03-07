import React from 'react';
import { View,Text,TouchableOpacity,Animated,Image,Easing,ScrollView,TextInput } from 'react-native';
import styles,{colors} from './styles/style'
import Inputs from './components/Inputs'
import MenuIconButton from './components/MenuIconButton'
import BoldText from './components/BoldText'
import rsc from './lib/resources'
import Img from './components/Images'
import KitchenDetails from './components/KitchenDetails'
import MenuNavigation from './components/MenuNavigations'
import SpinnerIndicator from './components/SpinnerIndicator'
import MenuItem from './components/MenuItems'
import propTypes from 'prop-types'
import MenuItemsSwipped from './components/MenuItemsSwipped'
import MenuItemsUnswipped from './components/MenuItemsUnswipped'
import Swipeable from 'react-native-swipeable'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from './components/Button'
import MoreItemInfo from './components/MoreItemInfo'



export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      quantity:1
    }
  }
  
  render() {
    return (
      <View style={[styles.container,{backgroundColor:colors.a}]}>
          <View style={{flex:1,backgroundColor:'white'}}></View>
          <View style={{flex:2,backgroundColor:'blue'}}>
            <Img  
                  source={{uri:this.props.imgsrc}} 
                  style={[styles.all_width,styles.all_height]}
                  onLoadStart={(e) => this.setState({loading: true})}
                  onLoad={(e) => this.setState({loading: false})}/>
          </View>
          <View style={{flex:1,backgroundColor:'red'}}></View>
      </View>
    );
  }
}
