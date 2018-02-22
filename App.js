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
import propTypes from 'prop-types'



export default class App extends React.Component {
  constructor(props){
    this.state={
      quantity:1
    }
  }
  add(){
    this.setState((prevState,props)=>({quantity:prevState.quantity+1}))
  }

  subtract(){
    if(this.state.quantity>1)
    this.setState((prevState,props)=>({quantity:prevState.quantity-1}))
  }
  render() {
    return (
      <View style={[styles.container,{backgroundColor:colors.a}]}>
        {/*<View style={[styles.containerk]}>
            <View style={styles.containerl}>
              <TouchableOpacity>
                <Icon name="arrow-back" size={20} color="#900" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="keyboard-arrow-down" size={25} color="#900" />
              </TouchableOpacity>
              <Icon name="arrow-back" size={0} color="#fff" />
            </View>
            <View style={[styles.all_width,styles.all_height]}>
              <View style={[styles.flexc]}> 
                <Img source={{uri:this.props.imgsrc}} style={[styles.all_width,styles.all_height]}/>
              </View>
              <View style={[styles.flexc,styles.topa]}>
                <View style={[styles.flexc,styles.flexd]}>
                  <View  style={[styles.topb]}>
                    <BoldText deco={[styles.texte]} text={this.props.foodName} />
                    <BoldText deco={[styles.textf]} text={'\u2022'+this.props.cuisine} />
                  </View>
                  <View >
                    <BoldText text="Special Instructions"
                              deco={[styles.textg]}/>
                    <TextInput style={[styles.textInputa]} placeholder="Add note (extra sauce, no onion etc.)"/>
                  </View>
                </View>
                <View style={styles.containerm}>
                  <View  style={styles.containern}>
                    <TouchableOpacity>
                      <Icon name="add" size={12} color="#900" />
                    </TouchableOpacity>
                    <Text style={styles.textd}>1</Text>
                    <TouchableOpacity>
                      <Icon name="remove" size={12} color="#900" />
                    </TouchableOpacity>
                  </View>
                  <Button
                      button={[styles.button,styles.button__Wideb,styles.button_short,styles.button__a]}
                      event={this.props.evnt}
                      textColor={[styles.textColorb]}
                      text={`Add ${1} to cart ${this.props.foodPrice}`}/>
                </View>
              </View>
            </View>
          </View>*/}
      </View>
    );
  }
}

MenuItem.propTypes={
  imgsrc:propTypes.string.isRequired,
  foodPrice:propTypes.number.isRequired,
  cuisine:propTypes.string.isRequired,
  foodName:propTypes.string.isRequired,
  foodImg:propTypes.string.isRequired,
  evnt:propTypes.func.isRequired
}