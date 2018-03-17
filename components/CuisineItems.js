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

export default class CuisineItems extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <ScrollView style={{
                borderRadius:10,
                backgroundColor:'white'
                }}>
                <View style={{
                    flex:1,
                    backgroundColor:'white',
                    flexDirection:'row',
                    flexWrap:'wrap',
                    padding:20,
                    minHeight: Dimensions.get('window').height*(2.6/8)
                    }}>
                    
                    {
                        Object.keys(this.props.chefAndCuisine).map((val,i)=>
                            <View style={{
                                width:'50%',
                                justifyContent:'center',
                                alignItems:'center'}}
                                key={i}>
                                <MenuIconButton 
                                        text={val}
                                        style={styles.flexa}
                                        dimension={{width:40,height:40}}
                                        radius={{padding:35,borderRadius:175}}
                                        source={rsc.potUri}
                                        deco={{fontSize:16,marginTop:10}}
                                        onPress={()=>lib.updatechefbycuisine(val)}
                                        />
                            </View>
                        )
                    }
                </View>
            </ScrollView>
        )
    }
}

CuisineItems.propTypes={
    chefAndCuisine:propTypes.object.isRequired
}