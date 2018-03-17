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
import ChefAndMenu from './ChefAndMenu'

class ShopContainer extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    
    
render(){
    return(
        <View   style={{
                flex:1,
                justifyContent:'space-between', 
                position:'relative',
                padding:20,
                paddingTop:20,
                paddingBottom:5
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
            < View  style={{
                    flex:1,
                    justifyContent:'space-between'
                    }}>
                <View   style={{
                        flexDirection:'row',
                        justifyContent:'space-between'
                        }}>
                    <Icon   name="menu" 
                            size={30} 
                            color={colors.c} 
                            onPress={()=>console.log('Great!!')}/>
                    <Icon   name="menu" 
                            size={24} 
                            color={'transparent'}/>

                </View>
                <View   style={{
                        backgroundColor:'white',
                        marginLeft:20,
                        marginRight:20,
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        height:45,
                        paddingRight:10,
                        borderRadius:5,
                        borderWidth:1,
                        borderColor:'rgba(0,0,0,.2)'
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
                           (this.props.address.Located)? this.props.address.Location : '...Locating you'
                        }

                    </Text>
                </View>
            </View>
            <View   style={{
                    flex:5 ,
                    paddingTop:10,
                    paddingBottom:10
                    }}>
                    {   (this.props.chef.fetched)?
                        <ChefAndMenu/>:
                       (this.props.chef.fetched_chefsInYourArea)? 
                       <Animatable.View animation="fadeInRightBig" >       
                            <CuisineItems
                                chefAndCuisine={this.props.chef.chefAndCuisine}/>
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
            <View style={{flex:2,justifyContent:'flex-start'}}>
                <MenuNavigation
                    style={[{width:'100%'}]}
                    KitchenDetails={true}
                    cuisinePress={()=>console.log('you pressed cuisine')}
                    checkoutPress={()=>console.log('you pressed checkout')}
                    menuPress={()=>console.log('you pressed menu')}
                    />
                    
            </View>
        </View>
    )
}
    
}

export default connect(mapStateToProps)(ShopContainer)
//export default ShopContainer