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
import ChefAndMenu from './navigator/ChefAndMenu'
import ProceedToCheckOut from './ProceedToCheckOut'
import Header from './Header'
import Chef from './Chef'
import Chefo from './navigator/MenuList'
import CheckOut from './navigator/Checkout'

class ShopContainer extends Component {
    constructor(props){
        super(props)
        //console.log(props)
        this.state = {
            cartActivity:false,
            menuActivity:false
        }
    }
    
    
render(){
    return(
        <View   style={{
                flex:1,
                justifyContent:'space-between', 
                position:'relative',
                padding:20,
                paddingTop:20,
                paddingBottom:5,
                paddingLeft:10,
                paddingRight:10
                }}>
            <View   style={{
                    position:'absolute',
                    top:0,
                    bottom:-25,
                    left:0,
                    right:0
                    }}>
                <Map/>
            </View>
            < Animatable.View  style={{
                    flex:.8,
                    justifyContent:'space-between'
                    }}
                    animation='fadeInDown'>
                <Header address = {this.props.screenProps.address}
                        cartActivityEvnt = {()=>this.setState({cartActivity:!this.state.cartActivity})}
                        menuActivityEvnt = {()=>this.setState({menuActivity:!this.state.menuActivity})} />
                
            </Animatable.View>
            <View   style={{
                    flex:7,
                    paddingBottom:10,
                    backgroundColor:'transparent',
                    shadowColor:'#000000',
                    shadowOpacity: .5,
                    shadowOffset: {
                            width: 0,
                            height: 1
                        }}}>
                    {   /*(this.props.screenProps.chef.fetched)?
                        <Animatable.View animation="fadeInRightBig" style={{flex:1}}> 
                            <MenuList chef={this.props.screenProps.chef}/>
                        </Animatable.View>:
                        (this.props.screenProps.chef.currentCuisine)?
                        <Animatable.View animation="fadeInRightBig" style={{flex:1}}> 
                            <Chef   chef={this.props.screenProps.chef.chefAndCuisine}
                                    currentCuisine={this.props.screenProps.chef.currentCuisine}/>
                        </Animatable.View>:*/
                        (this.state.cartActivity)?
                        <CheckOut   store={this.props.screenProps}/>:
                        (this.props.screenProps.chef.currentCuisine)?
                        //<ProceedToCheckOut/>:
                        //<Pay/>:
                        <Animatable.View animation="fadeInRightBig" style={{flex:1}}> 
                            <ChefAndMenu    chef={this.props.screenProps.chef}
                                            currentCuisine={this.props.screenProps.chef.currentCuisine}
                                            store={this.props.screenProps}/>
                        </Animatable.View>:
                       (this.props.screenProps.chef.fetched_chefsInYourArea)? 
                       <Animatable.View animation="fadeInRightBig" >       
                            <CuisineItems
                                chefAndCuisine={this.props.screenProps.chef.chefAndCuisine}/>
                        </Animatable.View>:

                        <Animatable.View animation="zoomIn" style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'rgba(255,255,255,0)'}} >
                            <SpinnerIndicator
                                customStyles={[{ 
                                    flex:1,
                                    alignSelf:'stretch',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    backgroundColor:'rgba(255,255,255,0)',
                                    position:'absolute',
                                    right:0,
                                    top:0,
                                    left:0,
                                    bottom:0,
                                    borderRadius:10,
                                // width:90,
                                //  height:119
                                }]}
                                customStylesChild={{
                                    
                                }} 
                            />
                       </Animatable.View >
                    }
            </View>
            <Animatable.View style={{
                flex:2.8,
                justifyContent:'flex-start',
                backgroundColor:'transparent',
                shadowColor:'#000000',
                shadowOpacity: .5,
                shadowOffset: {
                        width: 0,
                        height: 1
                    }}} animation='fadeInUpBig'>
                <MenuNavigation
                    style={[{width:'100%'}]}
                    KitchenDetails={false}
                    cuisinePress={()=>console.log('you pressed cuisine')}
                    checkoutPress={()=>console.log('you pressed checkout')}
                    menuPress={()=>console.log('you pressed menu')}
                    />
                    
            </Animatable.View>
        </View>
    )
}
    
}

//export default connect(mapStateToProps)(ShopContainer)
export default ShopContainer