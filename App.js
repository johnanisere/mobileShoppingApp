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
import store from './data_Container/store'
import lib from './lib/lib'
import Root from './components/Navigation'
import SignIn from './components/SignIn'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      displayInputLabel:false,
      email:'',
      password:'',
      repeatPassword:'',
      firstName:'',
      lastName:'',
      mobile:'',
      page:false
    }
    this.NavigatePage=this.NavigatePage.bind(this)
    this.onSignUp=this.onSignUp.bind(this)
  }
NavigatePage(){
  this.setState((prevState)=>({page:!prevState.page}))
}
onSignUp(){
  let signUpDetails={
    email:this.state.email,
    firstName:this.state.firstName,
    lastName:this.state.lastName,
    password:this.state.password,
    mobile:this.state.mobile,
    isCustomer:true,
    isChef:false
  }
  console.log(signUpDetails)
  lib.signup(signUpDetails)
}

  
  render() {
    return (
      //<Root store={store}/>
      <SignIn />
    );
  }
}
