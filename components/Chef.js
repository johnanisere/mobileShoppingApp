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

export default class Chef extends Component{
    constructor(props){
        super(props)
        this.state={
            loading:false
          }
    }
    render(){
        return(
            <TouchableOpacity style={{alignSelf:'center',justifyContent:'center',alignItems:'center', backgroundColor:'transparent',position:'relative',width:60,height:60,marginLeft:5,marginRight:5}}
                              onPress={this.props.event}>
                <View style={[{width:60,height:60,padding:2,backgroundColor:'white',borderRadius:40,borderWidth:2,justifyContent:'center',alignItems:'center'},(this.props.active===this.props.chefUid)?{borderColor:'rgba(156,28,38,1)'}:{borderColor:'#F69322'}]}>
                    <Img source={{uri:this.props.image}}
                            style={{width:50,height:50,borderRadius:25}}
                            onLoadStart={(e) => this.setState({loading: true})}
                            onLoad={(e) => this.setState({loading: false})}/>
                </View>
                    {
                        (this.state.loading)?
                        <View style={{position:'absolute',top:-10,left:0,right:0,bottom:0}}>
                        <SpinnerIndicator
                                customStylesChild={[{
                                    width:50,
                                    height:50,
                                    zIndex:1,
                                    alignItems:'center',
                                    justifyContent:'center',
                                    margin:0
                                },]}
                                customStyles={  
                                    [
                                        styles.loading__a,
                                        {   width:50,
                                            height:50,
                                            //padding:0,
                                            flex:1,
                                            position:'absolute',
                                            alignItems:'center',
                                            justifyContent:'center',
                                            backgroundColor:'transparent',
                                            zIndex:1
                                        }]
                                }   />
                                </View>:
                        null
                    }
                    <Text style={{width:50,marginTop:5}} numberOfLines={1} >{this.props.chefName}</Text>
            </TouchableOpacity>
        )
    }
}

Chef.propTypes={
    active:propTypes.string.isRequired,
    image:propTypes.string.isRequired,
    event:propTypes.func.isRequired,
    chefUid:propTypes.string.isRequired,
    chefName:propTypes.string.isRequired
}