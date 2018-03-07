import React from 'react';
import { View,Text,TouchableOpacity,TextInput } from 'react-native';
import styles,{colors} from '../styles/style'
import Inputs from './Inputs'
import BoldText from './BoldText'
import Img from './Images'
import propTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from './Button'
import SpinnerIndicator from './SpinnerIndicator'



export default class MoreItemInfo extends React.Component {
  constructor(props){
    super(props)
    this.state={
      quantity:1,
      loading:false
    }
    this.add=this.add.bind(this)
    this.subtract=this.subtract.bind(this)
  }
  add(){
    this.setState((prevState)=>({quantity:prevState.quantity+1}))
  }

  subtract(){
    if(this.state.quantity>1)
    this.setState((prevState)=>({quantity:prevState.quantity-1}))
  }
  render() {
    return (
      <View style={[styles.containerk]}>
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
              <View style={[styles.flexc,styles.positiona]}> 
                <Img    source={{uri:this.props.imgsrc}} 
                        style={[styles.all_width,styles.all_height]}
                        onLoadStart={(e) => this.setState({loading: true})}
                        onLoad={(e) => this.setState({loading: false})}/>
                {
                    (this.state.loading)?
                    <SpinnerIndicator
                        customStyles={ [styles.all_width,styles.all_height,styles.positionb] } 
                        customStylesChild={[styles.all_width,styles.all_height,styles.radiusa]}/>:
                    null
                }
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
                    <TouchableOpacity onPress={this.add}>
                      <Icon name="add" size={12} color="#900"  />
                    </TouchableOpacity>
                    <Text style={styles.textd}>{this.state.quantity}</Text>
                    <TouchableOpacity onPress={this.subtract}>
                      <Icon name="remove" size={12} color="#900"/>
                    </TouchableOpacity>
                  </View>
                  <Button
                      button={[styles.button,styles.button__Wideb,styles.button_short,styles.button__a]}
                      event={this.props.evnt}
                      textColor={[styles.textColorb]}
                      text={`Add ${this.state.quantity} to cart ${this.props.foodPrice}`}/>
                </View>
              </View>
            </View>
          </View>
    );
  }
}

MoreItemInfo.propTypes={
  imgsrc:propTypes.string.isRequired,
  foodPrice:propTypes.number.isRequired,
  cuisine:propTypes.string.isRequired,
  foodName:propTypes.string.isRequired,
  evnt:propTypes.func.isRequired
}